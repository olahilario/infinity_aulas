from django.db import models

# Create your models here.

class Livro(models.Model):
  titulo = models.CharField(max_length=100, default='Unknow')
  autor = models.CharField(max_length=50, default='Unknow')
  data_publicacao = models.DateField(default='2024-01-01')
  numero_paginas = models.IntegerField(default=80)



