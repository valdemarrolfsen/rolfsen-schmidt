from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from front.mail_sender import MailSender

# Create your views here.

def landing_view(request):
    return render(request, 'index.html')

@api_view(['POST'])
def send_mail_view(request):
    try:
        info = request.data.get('info')
    except KeyError:
        info = None

    if info:
        m = MailSender()
        m.send_support_mail(info)
        return Response(status=status.HTTP_200_OK)

    return Response(status=status.HTTP_400_BAD_REQUEST)

