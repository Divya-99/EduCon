from django.shortcuts import render, redirect
from .models import Course, College

# Renders the home page
def home(request):
    return render(request, 'index.html', {})

# Renders the course searching page
def search_course(request):
    courses = Course.objects.values_list('course_name', flat=True)
    context = {'course_names': courses}
    return render(request, 'search_course.html', context)

# Renders the course listing page
def list_course(request):
    courses = College.objects.select_related('course').all()
    context = {'courses': courses}
    return render(request, 'courses.html', context)