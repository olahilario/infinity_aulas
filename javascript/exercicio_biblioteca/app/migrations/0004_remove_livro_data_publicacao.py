# Generated by Django 5.1.1 on 2024-10-03 01:46

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_livro_data_publicacao'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='livro',
            name='data_publicacao',
        ),
    ]
