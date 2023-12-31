# Generated by Django 4.2.2 on 2023-06-08 23:44

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Categoria',
            fields=[
                ('idCategoria', models.IntegerField(primary_key=True, serialize=False)),
                ('nombreCategoria', models.CharField(max_length=25)),
            ],
        ),
        migrations.CreateModel(
            name='Producto',
            fields=[
                ('sku', models.CharField(max_length=15, primary_key=True, serialize=False)),
                ('nombre', models.CharField(max_length=50)),
                ('precio', models.IntegerField()),
                ('stock', models.IntegerField()),
                ('descripcion', models.CharField(max_length=120)),
                ('imagenUrl', models.CharField(max_length=200)),
                ('idCategoria', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='Friendleaf.categoria')),
            ],
        ),
    ]
