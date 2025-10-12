from django.shortcuts import render

# Create your views here.

def homepage(request):
    return render(request, "home.html")

def encrypt(request):
    return render(request, 'encrypt.html')

def decrypt(request):
    return render(request, 'decrypt.html')