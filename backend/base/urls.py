from django.urls import path
from . import views


# set our own urls for api request to backend

urlpatterns = [
    path('', views.getRoutes, name='routes'),
    path('products/',views.getProducts,name='products'),
    path('products/<str:pk>',views.getProduct,name='product'),
]