from django.conf.urls import url, include
from rest_framework.routers import DefaultRouter

from sups.viewsets import SupViewSet

router = DefaultRouter()
router.register(r'sups', SupViewSet)

urlpatterns = [
    url(r'^', include(router.urls)),
]