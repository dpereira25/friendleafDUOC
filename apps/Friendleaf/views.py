from django.shortcuts import render
from .models import *
# Create your views here.

def cargarInicio(request):
    return render(request,"inicio.html")

def cargarFormulario(request):
    return render(request,"hazteSocio.html")

def cargarAgregarProducto(request):
    return render(request,"agregarP.html")

def cargarEditarProducto(request):
    return render(request,"editarP.html")

def cargarListarProducto(request):
    return render(request,"listarP.html")

def cargarCarrito(request):
    productos = Producto.objects.all()
    return render(request,"pruebaCarrito.html",{"producto":productos})

def cargarEnvios(request):
    return render(request,"envios.html")