from rest_framework import serializers
from .models import Transaction

class TransactionSerializer(serializers.ModelSerializer):
    sender_name = serializers.ReadOnlyField(source='sender.username')

    class Meta:
        model = Transaction
        fields = ['reference', 'sender_name', 'receiver_name', 'amount', 'status', 'created_at']