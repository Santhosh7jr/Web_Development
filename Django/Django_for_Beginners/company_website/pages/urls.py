from django.urls import path
from .views import homepage, AboutPageView

urlpatterns = [
    path("", homepage, name="index"),
    path("about/", AboutPageView.as_view(), name="about"),
]
