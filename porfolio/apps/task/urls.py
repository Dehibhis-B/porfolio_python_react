from django.urls import path, include
from rest_framework import routers
from rest_framework.documentation import include_docs_urls
from apps.task import views #task viene hacer el nombre de del app oh la carpeta

#from apps.task.views import TaskView

#versionando api
router = routers.DefaultRouter()
router.register (r'task', views.TaskView, 'task')

urlpatterns = [

    path("api/v1/", include(router.urls)),
    path('docs/' ,include_docs_urls(title='Task Api'))
]