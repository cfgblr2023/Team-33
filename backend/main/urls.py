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
    AdminCheckView,
    UserLoginView
)
from datetime import timedelta
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

SIMPLE_JWT = {
    'ACCESS_TOKEN_LIFETIME': timedelta(minutes=60), 
    'REFRESH_TOKEN_LIFETIME': timedelta(days=1),  
}

urlpatterns = [
    path('register/student/', StudentRegisterView.as_view(), name='student-register'),
    path('register/volunteer/', VolunteerRegisterView.as_view(), name='volunteer-register'),
    path('verify/student/', VerifyStudentView.as_view(), name='verify-student'),
    path('verify/volunteer/', VerifyVolunteerView.as_view(), name='verify-volunteer'),
    path('skills/', SkillListView.as_view(), name='skill-list'),
    path('skills/<int:pk>/', SkillDetailView.as_view(), name='skill-detail'),
    path('events/', EventListView.as_view(), name='event-list'),
    path('events/<int:pk>/', EventDetailView.as_view(), name='event-detail'),
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('check-admin/', AdminCheckView.as_view(), name='admin-check'),
    path('login/', UserLoginView.as_view(), name='user-login'),
    
]
