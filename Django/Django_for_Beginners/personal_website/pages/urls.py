from django.urls import path
from .views import homepage, about_page

urlpatterns = [
    path("",homepage),
    path("about/", about_page),
]
