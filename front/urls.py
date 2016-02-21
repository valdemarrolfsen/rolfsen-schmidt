from django.conf.urls import url
from rest_framework.urlpatterns import format_suffix_patterns
from rest_framework import renderers
from front import views


viewpatterns = [

    url(r'^sendemail', views.send_mail_view, name='sendemail'),

    # --------------- Landing related ----------------
    url(r'^$', views.landing_view, name='landing'),

    # --------------- RestAPI  ---------------
    #url(r'rest/myjobs', views.MyJobsView.as_view()),
    #url(r'rest/room/(?P<jobId>\d+)/(?P<applicantId>\d+)/$', views.ChatRoomView.as_view()),

]

urlpatterns = format_suffix_patterns(viewpatterns)