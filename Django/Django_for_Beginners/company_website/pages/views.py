from django.shortcuts import render
from django.views.generic import TemplateView

# Create your views here.
def homepage(request):

    context = {
        "fruits" : ["apple", "mango", "banana","grapes", "orange"],
        "greeting" : "welcome to my website",
    }

    return render(request, "index.html", context)

class AboutPageView(TemplateView):
    template_name = "about.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["name"] = "guru"
        context["phoneNo"] = "555 - 234 - 876"

        return context