from django.urls import path
from . import views
from . import chatbot

urlpatterns=[
    path('',views.getData),
    path('add/',views.addItem),
    path('chat/', chatbot.get_gemini_response),
]
