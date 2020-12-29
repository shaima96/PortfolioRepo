from django.db import models

# Create your models here.


class Project(models.Model):
    name = models.CharField(max_length=250)
    image = models.CharField(max_length=500)
    description = models.CharField(max_length=500)
    link = models.CharField(max_length=500)
    gitLink = models.CharField(max_length=500)
    technology=models.CharField(max_length=500)

    def __str__(self):
        return self.name
    

