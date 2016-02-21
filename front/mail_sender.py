from django.core.mail import EmailMultiAlternatives, EmailMessage
from django.template.loader import render_to_string


class MailSender:
    # This class is for sending different types of mail.

    @staticmethod
    def send_email(subject, to_email, html_content):
        from_email = 'Jobbr <no-reply@jobbr.no>'
        msg = EmailMultiAlternatives(subject, html_content, from_email, [to_email])
        msg.content_subtype = "html"  # Main content is now text/html
        msg.send()

    @staticmethod
    def send_no_html(subject, to_email, content):
        from_email = 'Jobbr <no-reply@jobbr.no>'
        msg = EmailMessage(subject, content, from_email, [to_email])
        msg.send()

    def send_support_mail(self, info):
        subject = 'Ny kundehenvendelse'
        to_email = 'hei@korde.no'

        print(info)

        html_content = render_to_string('emails/standardMail.html', {
            'name' : info['name'],
            'email' : info['email'],
            'phone' : info['phone'],
            'desc' : info['description']
            })
        self.send_email(subject, to_email, html_content)
