from django.db import models
from users.models import User
from foods.models import Food

class Log(models.Model):
    date = models.DateField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    food = models.ForeignKey(Food, on_delete=models.CASCADE)
    quantity = models.PositiveSmallIntegerField(default=0)

    def __str__(self) -> str:
        return f"{self.user} on {self.date.strftime('%b %d, %Y')}"