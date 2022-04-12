from rest_framework.response import Response
from rest_framework.decorators import api_view

from .models import Food
from .serializers import FoodSerializer

@api_view(['GET'])
def getFood(request):
    food = Food.objects.all()
    serialzer = FoodSerializer(food, many=True)
    return Response(serialzer.data)