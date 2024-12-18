"""
URL configuration for blog project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from app.views import *
from django.conf import settings
from django.conf.urls.static import static
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)


urlpatterns = [
    path('admin/', admin.site.urls),
    #url for user
    path('register/', RegisterUser.as_view(), name='register'),
    path('login/', LoginUser.as_view(), name='login'),
    # url for category
    path('api/addlistcategory/', AddListCategory.as_view(), name='addcategory'),
    # path('api/addcategory/', AddCategory.as_view(), name='addcategory'),
    # path('api/categorylist/', CategoryList.as_view(), name='categorylist')
    path('api/category/<int:pk>/', UpdateDeleteCategory.as_view(), name='category'),
    path('api/updatecategory/<int:pk>/', UpdateDeleteCategory.as_view(), name='updatecategory'),
    path('api/deletecategory/<int:pk>/', UpdateDeleteCategory.as_view(), name='deletecategory'),
    # url for blog
    path('addblog/', AddBlog.as_view(), name='addblog'),
    path('listblog/', ListBlog.as_view(), name='listblog'),
    path('blog/<int:pk>/', RetrieveBlog.as_view(), name='blog'),
    path('updateblog/<int:pk>', UpdateBlog.as_view(), name='blog'),
    path('deleteblog/<int:pk>', DeleteBlog.as_view(), name='deleteblog'),

    #for token
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root= settings.MEDIA_ROOT)
