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
from .models import Student, Volunteer, Skill, Event

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

class SkillListView(generics.ListCreateAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

    def create(self, request, *args, **kwargs):
        name = request.data.get('name')
        proof = request.data.get('proof')

        if name and proof:
            skill = Skill.objects.create(name=name, proof=proof)
            serializer = self.get_serializer(skill)
            return Response(serializer.data, status=201)
        else:
            return Response({'message': 'Please provide a name and proof for the skill.'}, status=400)


class SkillDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Skill.objects.all()
    serializer_class = SkillSerializer

class EventListView(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            volunteer_usernames = request.data.get('volunteers', [])
            event = serializer.save()
            if volunteer_usernames:
                event.volunteers.add(*volunteer_usernames)
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


class EventDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

