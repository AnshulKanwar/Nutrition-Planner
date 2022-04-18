from rest_framework.decorators import api_view

from .utils import getFoodsList, getFoodDetail, addFood, updateFood, deleteFood


@api_view(['GET'])
def getFoods(request):
    if request.method == 'GET':
        return getFoodsList(request)

    if request.method == 'POST':
        return addFood(request)


@api_view(['GET'])
def getFood(request, pk):
    if request.method == 'GET':
        return getFoodDetail(request, pk)

    if request.method == 'PUT':
        return updateFood(request, pk)

    if request.method == 'DELETE':
        return deleteFood(request, pk)
