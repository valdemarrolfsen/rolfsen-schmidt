"""
WSGI config for rolfsenAndSchmidt project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/howto/deployment/wsgi/
"""

# Also import sys and site to help enable virtualenv
import os, sys, site

# Add the site packages, to override any system-wide packages
site.addsitedir('/home/helpinghands/webapps/korde/rolfsen-schmidt/venv/lib/python3.5/site-packages')
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "rolfsenAndSchmidt.settings")

# Activate the virtualenv
activate_this = os.path.expanduser("/home/helpinghands/webapps/korde/rolfsen-schmidt/venv/bin/activate_this.py")

exec(open("/home/helpinghands/webapps/korde/rolfsen-schmidt/venv/bin/activate_this.py").read())

# Calculate the path based on the location of the WSGI script
project = '/home/helpinghands/webapps/korde/rolfsen-schmidt/rolfsen'
workspace = os.path.dirname(project)
sys.path.append(workspace)

sys.path = ['/home/helpinghands/webapps/korde/rolfsen-schmidt', '/home/helpinghands/webapps/korde/rolfsen-schmidt/rolfsenAndSchmidt', '/home/helpinghands/webapps/korde'] + sys.path

# As is
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
