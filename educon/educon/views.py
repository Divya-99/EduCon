from django.shortcuts import render, redirect
from .models import Course, College

# Renders the home page
def home(request):
    return render(request, 'index.html', {})

# Renders the course searching page
def search_course(request):
    courses = list(Course.objects.values_list('course_name', flat=True))
    context = {'course_names': courses}
    return render(request, 'search_course.html', context)

# Renders the course listing page
def list_course(request):
    if request.method == 'GET':
        search_query = request.GET.get('search', '')
        courses = Course.objects.filter(course_name__icontains=search_query)
    else:
        courses = Course.objects.all()
        
    context = {'courses': courses}

    return render(request, 'courses.html', context)