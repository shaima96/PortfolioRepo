from django.shortcuts import render
from rest_framework import generics
from project.models import Project
from project.serializers import ProjectSerializer


# Create your views here.


class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
