# Generated by Django 4.2.2 on 2023-07-01 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("main", "0003_remove_student_address_remove_volunteer_address_and_more"),
    ]

    operations = [
        migrations.AddField(
            model_name="student",
            name="isVerified",
            field=models.BooleanField(default=False),
        ),
        migrations.AddField(
            model_name="volunteer",
            name="isVerified",
            field=models.BooleanField(default=False),
        ),
    ]
