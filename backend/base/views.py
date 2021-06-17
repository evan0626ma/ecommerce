from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .products import products

# Create your views here.

# Add django rest framework decorator to api request 

@api_view(['GET'])
def getRoutes(request):
    routes = [
        'api/',
    ]
    return Response(routes)

#  decorator api request for products json file
@api_view(['GET'])
def getProducts(request):
    return Response(products)

# loop products by api request with id match primary key to single product
@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product =i
            break
    return Response(product)
