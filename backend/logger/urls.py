from django.urls import path
from . import views

urlpatterns = [
    path('', views.logList),
    path('<int:pk>/', views.logDetail),
]
