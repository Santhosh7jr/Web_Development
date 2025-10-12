from django.urls import path
from .views import homepage, encrypt, decrypt

urlpatterns = [
    path("", homepage, name="home"),
    path("encrypt/", encrypt, name="encrypt"),
    path("decrypt/", decrypt, name="decrypt"),
]
