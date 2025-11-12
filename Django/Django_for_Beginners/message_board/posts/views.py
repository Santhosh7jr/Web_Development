# from django.shortcuts import render
# from .models import Post

# def homepage(request):
#     posts = Post.objects.all()
#     return render(request, "index.html", {"posts" : posts})

from django.views.generic import ListView
from .models import Post

class PostList(ListView):
    model = Post
    template_name = "index.html"