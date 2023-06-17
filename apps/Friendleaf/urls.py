from django.urls import path
from . import views

urlpatterns = [
  path('',views.cargarInicio),
  path('hazteSocio',views.cargarFormulario),
  path('agregarP',views.cargarAgregarProducto),
  path('editarP',views.cargarEditarProducto),
  path('listarP',views.cargarListarProducto),
  path('pruebaCarrito',views.cargarCarrito),
  path('envios',views.cargarEnvios)
]