from rest_framework.routers import DefaultRouter
from users.views import LoginViewSet, RegisterViewSet, UsersViewSet

router = DefaultRouter(trailing_slash=False)
router.register('register', RegisterViewSet, basename='register')
router.register('login', LoginViewSet, basename='login')
router.register('users', UsersViewSet, basename='users')

urlpatterns = router.urls