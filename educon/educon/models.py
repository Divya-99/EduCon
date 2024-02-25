from django.db import models
 
class College(models.Model):
    college_id = models.AutoField(primary_key=True)
    college_name = models.CharField(max_length=45)
    location = models.CharField(max_length=45, null=True)
 
class Course(models.Model):
    college_id = models.ForeignKey(College, on_delete=models.CASCADE)
    course_name = models.CharField(max_length=45, null=True)
    description = models.CharField(max_length=450, null=True)
    course_id = models.AutoField(primary_key=True)
 
    class Meta:
        constraints = [
            models.UniqueConstraint(fields=['college_id', 'course_id'], name='unique_college_course')
        ]
