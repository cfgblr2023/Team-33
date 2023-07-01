from rest_framework import serializers
from .models import Student, User

class UserSerializer(serializers.ModelSerializer):
    address = serializers.CharField()

    class Meta:
        model = User
        fields = ('name', 'email', 'password', 'address')

class StudentRegisterSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Student
        fields = ('user', 'highest_qualification', 'proof')

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = User.objects.create_user(**user_data)
        student = Student.objects.create(user=user, **validated_data)
        return student
