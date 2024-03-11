from django.db import models
from django.contrib.auth.models import AbstractUser

class Item(models.Model):
    name=models.CharField(max_length=200)
    created=models.DateTimeField(auto_now_add=True)

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    def __str__(self):
        return self.username
