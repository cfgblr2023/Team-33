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
from .models import Admin
from rest_framework.views import APIView
from django.contrib.auth import authenticate


class UserLoginView(APIView):
    def post(self, request, format=None):
        email = request.data.get('email')
        password = request.data.get('password')

        if email and password:
            try:
                user = User.objects.get(email=email, password=password)
                print(user)
                refresh = RefreshToken.for_user(user)
                access_token = refresh.access_token
                return Response({
                    'access_token': str(access_token),
                    'refresh_token': str(refresh),
                }, status=200)
            except User.DoesNotExist:
                return Response({'message': 'User does not exist.'}, status=401)
        else:
            return Response({'message': 'Email and password are required.'}, status=400)
        
        
class AdminCheckView(APIView):
    def get(self, request, format=None):
        email = request.query_params.get('email', None)
        if email is not None:
            if Admin.objects.filter(email=email).exists():
                return Response({'result': 'yes'})
        return Response({'result': 'no'})

class StudentRegisterView(generics.CreateAPIView):
    serializer_class = StudentRegisterSerializer
    
    def post(self, request, format=None):
        user_data = self.request.data.get('user')
        user = User.objects.create(**user_data)
        user.save()
        
        student_data = {
        'user': user,
        'highest_qualification': request.data.get('highest_qualification'),
        'proof': request.data.get('proof'),
        }
    
        student = Student.objects.create(**student_data)
        student.save()
        
        
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
        user.save()
        
        volunteer_data = {
        'user': user,
        'qualifications': request.data.get('qualifications'),
        'proof': request.data.get('proof'),
        }
    
        volunteer = Volunteer.objects.create(**volunteer_data)
        volunteer.save()
        
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
                student = Student.objects.get(user__name=username, isVerified=False)
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
                volunteer = Volunteer.objects.get(user__name=username, isVerified=False)
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
