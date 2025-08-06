from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

# Création du router DRF
router = DefaultRouter()
router.register(r'tasks', TaskViewSet, basename='task')

# Inclusion des URLs générées par le router
urlpatterns = [
    path('', include(router.urls)),
]
