from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf.urls.static import static
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from rolfsenAndSchmidt import settings
from front import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'rolfsenAndSchmidt.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

    url(r'^admin/', include(admin.site.urls)),
    url(r'^', include('front.urls')),
)
