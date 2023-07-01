from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    address = models.TextField()

class Admin(User):
    pass

class Volunteer(User):
    qualifications = models.TextField()
    proof = models.FileField(upload_to='volunteer_proof/')
    skills = models.ManyToManyField('Skill', related_name='volunteers')

class Student(User):
    highest_qualification = models.TextField()
    proof = models.FileField(upload_to='student_proof/')

class Skill(models.Model):
    name = models.CharField(max_length=255)
    proof = models.FileField(upload_to='skill_proof/', null=True)

class Event(models.Model):
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    online = models.BooleanField(default=True)
    date_and_time = models.DateTimeField()
    link = models.URLField(blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    volunteers = models.ForeignKey(Volunteer, on_delete=models.CASCADE)