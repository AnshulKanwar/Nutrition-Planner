from unicodedata import name
from django.urls import path
from . import views

urlpatterns = [
    path('foods/', views.getFoods, name='foods'),
    path('foods/<int:pk>', views.getFood, name='food'),
]
