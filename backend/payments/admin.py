from django.contrib import admin
from .models import Transaction
# Register your models here.

@admin.register(Transaction)
class TransactionAdmin(admin.ModelAdmin):
    list_display = ('reference', 'sender', 'receiver_name', 'amount', 'status', 'created_at')
    list_filter = ('status', 'created_at')
    readonly_fields = ('reference', 'created_at')
    search_fields = ('sender__username', 'receiver_name', 'reference')