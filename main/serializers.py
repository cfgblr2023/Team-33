from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Student

class UserSerializer(serializers.ModelSerializer):
    address = serializers.CharField()

    class Meta:
        model = User
        fields = ('username', 'email', 'password', 'address')

class StudentRegisterSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Student
        fields = ('user', 'highest_qualification', 'proof')

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        student = Student.objects.create(user=user, **validated_data)
        return student