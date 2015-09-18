from django.db import models

from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)


class MyUserManager(BaseUserManager):
    def create_user(self, email, password=None):

        if not email:
            raise ValueError('Users must have an email address')

        user = self.model(
            email=MyUserManager.normalize_email(email),
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None):

        u = self.create_user(email=email,
                        password=password,
                    )
        u.is_admin = True
        u.is_active = True
        u.save(using=self._db)
        return u



class UserProfile(AbstractBaseUser):
    email = models.EmailField(
                        verbose_name='email address',
                        max_length=255,
                        unique=True,
                    )

    objects = MyUserManager()

    USERNAME_FIELD = 'email'
