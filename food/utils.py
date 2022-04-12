from rest_framework.response import Response
from .models import Food
from .serializers import FoodSerializer


def getFoodsList(request):
    foods = Food.objects.all()
    serializer = FoodSerializer(foods, many=True)
    return Response(serializer.data)


def getFoodDetail(request, pk):
    food = Food.objects.get(id=pk)
    serializer = FoodSerializer(food)
    return Response(serializer.data)


def addFood(request):
    data = request.data
    food = Food.objects.create(
        name=data['name'],
        carbohydrates=data['carbohydrates'],
        protien=data['protien'],
        fats=data['fats']
    )
    serialzer = FoodSerializer(food)
    return Response(serialzer.data)


def updateFood(request, pk):
    data = request.data
    food = Food.objects.get(id=pk)
    serializer = FoodSerializer(food, data=data)

    if serializer.is_valid():
        serializer.save()

    return Response(serializer.data)


def deleteFood(request, pk):
    food = Food.objects.get(id=pk)
    food.delete()
    return Response('Food Item was deleted!')
