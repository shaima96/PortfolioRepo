from rest_framework import serializers
from project.models import Project
from project.serializers import ProjectSerializer

class ProjectSerializer(serializers.ModelSerializer):
    Project = ProjectSerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = ('name', 'image' , 'description', 'link', 'gitLink', 'technology', 'pk' )
