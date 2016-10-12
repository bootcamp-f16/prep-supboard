from rest_framework import serializers

from .models import Sup

class SupSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sup
        fields = ('text', 'created_date', )