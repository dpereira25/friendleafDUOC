from django.urls import path
from . import views

urlpatterns = [
  path('',views.cargarInicio),
  path('hazteSocio',views.cargarFormulario),
  path('agregarProductoForm',views.agregarProducto),
  path('agregarP',views.cargarAgregarProducto),
  path('editarP/<sku>',views.cargarEditarProducto),
  path('editarP',views.editarProducto),
  path('eliminarP/<sku>',views.eliminarProducto),
  path('listarP',views.cargarListarProducto),
  path('pruebaCarrito',views.cargarCarrito),
  path('envios',views.cargarEnvios)
]