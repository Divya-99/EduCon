# Generated by Django 4.2.6 on 2024-02-25 03:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('educon', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='location',
        ),
        migrations.AddField(
            model_name='college',
            name='location',
            field=models.CharField(max_length=45, null=True),
        ),
        migrations.AddField(
            model_name='course',
            name='fee',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='course',
            name='tenure',
            field=models.IntegerField(null=True),
        ),
    ]
