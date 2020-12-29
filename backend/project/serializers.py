from rest_framework import serializers
from project.models import Project

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = ('name', 'image' , 'description', 'link', 'gitLink', 'technology', 'pk' )
