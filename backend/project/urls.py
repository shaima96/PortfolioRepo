from django.urls import path 
from project.views import ProjectList

app_name = 'project'

urlpatterns = [
    path('' , ProjectList.as_view())
]