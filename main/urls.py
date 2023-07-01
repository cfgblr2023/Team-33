from django.urls import path
from .views import StudentRegisterView

urlpatterns = [
    path('register/student/', StudentRegisterView.as_view(), name='student-register'),
]
