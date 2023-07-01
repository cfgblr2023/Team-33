from django.shortcuts import render
from rest_framework import generics
from .serializers import StudentRegisterSerializer

class StudentRegisterView(generics.CreateAPIView):
    serializer_class = StudentRegisterSerializer
