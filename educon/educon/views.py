from django.shortcuts import render, redirect
from .models import Course, College

# Renders the home page
def home(request):
    return render(request, 'home.html', {})

# Renders the course searching page
def course_search(request):
    courses = Course.objects.values_list('course_name', flat=True)
    context = {'course_names': courses}
    return render(request, 'course_search.html', context)