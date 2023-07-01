from django.shortcuts import render
from rest_framework import generics
from rest_framework.response import Response
from .serializers import (
    StudentRegisterSerializer,
    VolunteerRegisterSerializer,
    UnverifiedStudentSerializer,
    UnverifiedVolunteerSerializer
)
from .models import Student, Volunteer

class StudentRegisterView(generics.CreateAPIView):
    serializer_class = StudentRegisterSerializer

class VolunteerRegisterView(generics.CreateAPIView):
    serializer_class = VolunteerRegisterSerializer

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
