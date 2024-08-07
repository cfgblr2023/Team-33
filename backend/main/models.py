from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=255)
    address = models.TextField()

class Admin(User):
    pass

class Volunteer(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    qualifications = models.TextField()
    proof = models.CharField(max_length=255)
    isVerified = models.BooleanField(default=False)
    skills = models.ManyToManyField('Skill', related_name='volunteers')

    def __str__(self):
        return self.user.name

class Student(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, primary_key=True)
    highest_qualification = models.TextField()
    proof = models.CharField(max_length=255)
    isVerified = models.BooleanField(default=False)

    def __str__(self):
        return self.user.name if self.user else ""

class Skill(models.Model):
    name = models.CharField(max_length=255)
    proof = models.CharField(max_length=255, null=True)

    def __str__(self):
        return self.name

class Event(models.Model):
    skill = models.ForeignKey(Skill, on_delete=models.CASCADE)
    online = models.BooleanField(default=True)
    date_and_time = models.DateTimeField()
    link = models.URLField(blank=True, null=True)
    location = models.CharField(max_length=255, blank=True, null=True)
    volunteers = models.ManyToManyField(Volunteer, related_name='events', blank=True)
    description = models.TextField(default="Description")

    def __str__(self):
        return f"Event {self.pk}"
