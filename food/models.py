from django.db import models


class Food(models.Model):
    name = models.CharField(max_length=100)
    carbohydrates = models.DecimalField(
        max_digits=5, decimal_places=2, blank=True)
    protein = models.DecimalField(max_digits=5, decimal_places=2, blank=True)
    fats = models.DecimalField(max_digits=5, decimal_places=2, blank=True)

    def __str__(self) -> str:
        return self.name
