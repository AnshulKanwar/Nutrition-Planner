from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/foods/', include('foods.urls')),
    path('api/token/', include('users.urls')),
]
