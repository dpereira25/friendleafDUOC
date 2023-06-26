from django.db import models

# Create your models here.
class Categoria(models.Model):
    idCategoria = models.IntegerField(primary_key=True);
    nombreCategoria = models.CharField(max_length=25);

    def __str__(self):
        txt = "{0}"
        return txt.format(self.nombreCategoria);

class Producto(models.Model):
    sku = models.CharField(primary_key=True, max_length=15);
    nombre = models.CharField(max_length=50);
    precio = models.IntegerField();
    stock = models.IntegerField();
    descripcion = models.CharField(max_length=120);
    imagenUrl = models.ImageField(upload_to='imgProductos');
    idCategoria = models.ForeignKey(Categoria, on_delete=models.CASCADE);
    
    def __str__(self):
        txt = "Producto N° {0} - Stock {1} - Precio ${2}"
        return txt.format(self.sku , self.stock , self.precio);