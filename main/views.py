# views.py
# from django.contrib.auth.models import User
from rest_framework import generics
from rest_framework.response import Response
from .serializers import (
    StudentRegisterSerializer,
    VolunteerRegisterSerializer,
    UnverifiedStudentSerializer,
    UnverifiedVolunteerSerializer,
    SkillSerializer,
    EventSerializer
)
from .models import Student, Volunteer, Skill, Event, User
from rest_framework_simplejwt.tokens import RefreshToken

class StudentRegisterView(generics.CreateAPIView):
    serializer_class = StudentRegisterSerializer
    
    def post(self, request, format=None):
        user_data = self.request.data.get('user')
        user = User.objects.create(**user_data)
        # user.set_password(user_data['password'])
        user.save()
        
        refresh = RefreshToken.for_user(user)
        access_token = refresh.access_token
        
        user_serializer = self.get_serializer(request.data)
        user_data = user_serializer.data
        
        return Response({
            'access_token': str(access_token),
            'refresh_token': str(refresh),
            'user': user_data
        }, status=201)

class VolunteerRegisterView(generics.CreateAPIView):
    serializer_class = VolunteerRegisterSerializer
    
    def post(self, request, format=None):
        user_data = self.request.data.get('user')
        user = User.objects.create(**user_data)
        # user.set_password(user_data['password'])
        user.save()
        
        refresh = RefreshToken.for_user(user)
        access_token = refresh.access_token
        
        user_serializer = self.get_serializer(request.data)
        user_data = user_serializer.data
        
        return Response({
            'access_token': str(access_token),
            'refresh_token': str(refresh),
            'user': user_data
        }, status=201)

class VerifyStudentView(generics.ListAPIView):
    serializer_class = UnverifiedStudentSerializer

    def get_queryset(self):
        queryset = Student.objects.filter(isVerified=False)
        return queryset
    
    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        if username:
            try:
                student = Student.objects.get(user__username=username, isVerified=False)
                student.isVerified = True
                student.save()
                return Response({'message': 'Student verified successfully.'})
            except Student.DoesNotExist:
                return Response({'message': 'Student not found or already verified.'}, status=400)
        else:
            return Response({'message': 'Please provide a username.'}, status=400)

class VerifyVolunteerView(generics.ListAPIView):
    serializer_class = UnverifiedVolunteerSerializer

    def get_queryset(self):
        queryset = Volunteer.objects.filter(isVerified=False)
        return queryset

    def post(self, request, *args, **kwargs):
        username = request.data.get('username')
        if username:
            try:
                volunteer = Volunteer.objects.get(user__username=username, isVerified=False)
                volunteer.isVerified = True
                volunteer.save()
                return Response({'message': 'Volunteer verified successfully.'})
            except Volunteer.DoesNotExist:
                return Response({'message': 'Volunteer not found or already verified.'}, status=400)
        else:
            return Response({'message': 'Please provide a username.'}, status=400)

class SkillListView(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class EventListView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer