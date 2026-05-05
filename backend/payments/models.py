import uuid
from django.db import models
from django.contrib.auth.models import User

class Transaction(models.Model):
    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
        ('failed', 'Failed'),
    ]

    reference = models.CharField(
        max_length=100,
        unique=True,
        default=uuid.uuid4,
        editable=False,
    )

    sender = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_transactions')
    receiver_name = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    status = models.CharField(max_length=10, choices=STATUS_CHOICES, default='pending')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{str(self.reference)[:8]} | {self.amount} to {self.receiver_name}"
