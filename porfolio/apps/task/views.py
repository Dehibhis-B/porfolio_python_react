from django.shortcuts import render
from rest_framework import viewsets
from apps.task.serializers import TaskSerializer
from apps.task.models import Task
# Create your views here.

class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = Task.objects.all()

