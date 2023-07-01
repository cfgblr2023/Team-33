from django.urls import path
from .views import (
    StudentRegisterView,
    VolunteerRegisterView,
    VerifyStudentView,
    VerifyVolunteerView,
    SkillListView,
    SkillDetailView,
    EventListView,
    EventDetailView,
)

urlpatterns = [
    path('register/student/', StudentRegisterView.as_view(), name='student-register'),
    path('register/volunteer/', VolunteerRegisterView.as_view(), name='volunteer-register'),
    path('verify/student/', VerifyStudentView.as_view(), name='verify-student'),
    path('verify/volunteer/', VerifyVolunteerView.as_view(), name='verify-volunteer'),
    path('skills/', SkillListView.as_view(), name='skill-list'),
    path('skills/<int:pk>/', SkillDetailView.as_view(), name='skill-detail'),
    path('events/', EventListView.as_view(), name='event-list'),
    path('events/<int:pk>/', EventDetailView.as_view(), name='event-detail'),
]
