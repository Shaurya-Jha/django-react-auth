from django.contrib.auth import get_user_model, authenticate
from knox.models import AuthToken
from rest_framework import permissions, viewsets
from rest_framework.response import Response
from users.serializers import LoginSerializer, RegisterSerializer, UsersSerializer

User = get_user_model()


class RegisterViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.AllowAny,
    ]
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

    def create(self, request):
        if request.method == "POST":
            serializer = self.serializer_class(data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=201)
            else:
                return Response(serializer.errors, status=400)


class LoginViewSet(viewsets.ViewSet):
    permission_classes = [
        permissions.AllowAny,
    ]
    serializer_class = LoginSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data["email"]
            password = serializer.validated_data["password"]
            print('email and password: ', email, password)
            try:
                user = authenticate(email=email, password=password)
            except Exception as e:
                print('exception found when authenticating user: ', e)
            print('user found: ', user)
            if user:
                _, token = AuthToken.objects.create(user)
                print('token generated for logged in user: ', token)
                return Response(
                    {
                        "user": self.serializer_class(user).data,
                        "token": token,
                    }
                )
            else:
                return Response({"error": "Invalid credentials"}, status=401)
        else:
            return Response(serializer.errors, status=400)

class UsersViewSet(viewsets.ViewSet):
    permission_classes = (permissions.IsAuthenticated,)
    queryset = User.objects.all()
    serializer_class = UsersSerializer

    def list(self, request):
        queryset = self.queryset
        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data)