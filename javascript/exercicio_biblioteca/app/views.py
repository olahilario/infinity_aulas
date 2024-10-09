from django.shortcuts import render

import json
from django.http import JsonResponse

from django.views.decorators.csrf import csrf_exempt
from django.views.decorators.http import require_http_methods

from .models import Livro


# Create your views here.

@csrf_exempt
@require_http_methods(["GET"])
def listar_livros(request):
  livros = Livro.objects.all().values()
  return JsonResponse(list(livros), safe=False)

@csrf_exempt
@require_http_methods(["POST"])
def cadastrar_livro(request):
  try:
    data = json.loads(request.body)
    livro = Livro.objects.create(
      titulo = data.get('titulo'),
      autor = data.get('autor'),
      data_publicacao = data.get('data_publicacao'),
      numero_paginas = data.get('numero_paginas')
    )
    return JsonResponse({'id': livro.id, 'message': 'Livro adicionado com sucesso!'}, status=200)
  except:
    return JsonResponse({'error': "Falha no cadastro!"})


@csrf_exempt
@require_http_methods(["PUT"])
def atualizar_livro(request, livro_id):
  try:
    livro = Livro.objects.get(id=livro_id)
    data = json.loads(request.body)
    livro.titulo = data.get('titulo', livro.titulo)
    livro.autor = data.get('autor', livro.autor)
    livro.data_publicacao = data.get('data_publicacao', livro.data_publicacao)
    livro.numero_paginas = data.get('numero_paginas', livro.numero_paginas)

    livro.save()

    return JsonResponse({'mensagem': "Livro atualizado com sucesso!"})

  except Livro.DoesNotExist:
    return JsonResponse({'error': "Produto não encontrado"}, status=404)

@csrf_exempt
@require_http_methods(["DELETE"])
def remover_livro(request, livro_id):
  try:
    livro = Livro.objects.get(id = livro_id)

    livro.delete()

    return JsonResponse({'mensagem': 'Livro deletado com sucesso!'})

  except Livro.DoesNotExist:
    return JsonResponse({'error': 'Livro não encontrado!'}, status=404)

