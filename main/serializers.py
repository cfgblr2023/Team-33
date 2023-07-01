from rest_framework import serializers
from .models import User, Student, Volunteer

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('name', 'email', 'password', 'address')

class StudentRegisterSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Student
        fields = ('user', 'highest_qualification', 'proof', 'isVerified')

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        student = Student.objects.create(user=user, **validated_data)
        return student

class VolunteerRegisterSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Volunteer
        fields = ('user', 'qualifications', 'proof', 'isVerified')

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create(**user_data)
        volunteer = Volunteer.objects.create(user=user, **validated_data)
        return volunteer

class UnverifiedStudentSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Student
        fields = ('user', 'highest_qualification', 'proof', 'isVerified')

class UnverifiedVolunteerSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Volunteer
        fields = ('user', 'qualifications', 'proof', 'isVerified')
