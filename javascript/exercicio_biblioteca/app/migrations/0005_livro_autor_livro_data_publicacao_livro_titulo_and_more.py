# Generated by Django 5.1.1 on 2024-10-03 02:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_remove_livro_data_publicacao'),
    ]

    operations = [
        migrations.AddField(
            model_name='livro',
            name='autor',
            field=models.CharField(default='Unknow', max_length=50),
        ),
        migrations.AddField(
            model_name='livro',
            name='data_publicacao',
            field=models.DateField(default='2024-01-01'),
        ),
        migrations.AddField(
            model_name='livro',
            name='titulo',
            field=models.CharField(default='Unknow', max_length=100),
        ),
        migrations.AlterField(
            model_name='livro',
            name='numero_paginas',
            field=models.IntegerField(default=80),
        ),
    ]
