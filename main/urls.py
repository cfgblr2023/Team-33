from django.urls import path
from .views import (
    StudentRegisterView,
    VolunteerRegisterView,
    VerifyStudentView,
    VerifyVolunteerView,
)

urlpatterns = [
    path('register/student/', StudentRegisterView.as_view(), name='student-register'),
    path('register/volunteer/', VolunteerRegisterView.as_view(), name='volunteer-register'),
    path('verify/student/', VerifyStudentView.as_view(), name='verify-student'),
    path('verify/volunteer/', VerifyVolunteerView.as_view(), name='verify-volunteer'),
]
