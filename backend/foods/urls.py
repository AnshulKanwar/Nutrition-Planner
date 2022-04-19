from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('', views.getFoods, name='foods'),
    path('<int:pk>/', views.getFood, name='food'),
]
