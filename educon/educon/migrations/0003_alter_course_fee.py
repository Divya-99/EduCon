# Generated by Django 4.2.6 on 2024-02-25 03:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('educon', '0002_remove_course_location_college_location_course_fee_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='fee',
            field=models.CharField(max_length=10, null=True),
        ),
    ]