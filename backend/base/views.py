from django.shortcuts import render
from django.http import JsonResponse
from .products import products

# Create your views here.

def getRoutes(request):
    routes=[
        'api/',
    ]
    return JsonResponse(routes, safe=False)

def getProduct(request):
    return JsonResponse(products, safe=False)
