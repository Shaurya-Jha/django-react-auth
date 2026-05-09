from django.contrib import admin
from users.models import CustomUser

class CustomUserAdmin(admin.ModelAdmin):
    pass

admin.site.register(CustomUser, CustomUserAdmin)