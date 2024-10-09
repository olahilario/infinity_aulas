from django.urls import path
from . import views

urlpatterns = [
  path('', views.listar_livros),
  path('listar', views.listar_livros),
  path('cadastrar', views.cadastrar_livro),
  path('atualizar/<int:livro_id>', views.atualizar_livro),
  path('deletar/<int:livro_id>', views.remover_livro),
]