from rest_framework import serializers
from .models import User, Student, Volunteer, Event, Skill

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

class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('name', 'proof')

class EventSerializer(serializers.ModelSerializer):
    volunteers = UnverifiedVolunteerSerializer(many=True, read_only=False, required=False)

    class Meta:
        model = Event
        fields = ('id', 'skill', 'online', 'date_and_time', 'link', 'location', 'volunteers')

    def create(self, validated_data):
        volunteers_data = validated_data.pop('volunteers', [])
        event = Event.objects.create(**validated_data)
        for volunteer_data in volunteers_data:
            user_data = volunteer_data.pop('user')
            user = User.objects.create(**user_data)
            volunteer = Volunteer.objects.create(user=user, **volunteer_data)
            event.volunteers.add(volunteer)
        return event
