import jwt

from django.conf import settings
from rest_framework import authentication, exceptions
from accounts.models import Writer

class JWTAuthentication(authentication.BaseAuthentication):
    authentication_header_prefix = 'Bearer'

    def authenticate(self, request):

        request.user = None

        auth_header = authentication.get_authorization_header(request).split()
        auth_header_prefix = self.authentication_header_prefix.lower()

        if not auth_header:
            return None

        if len(auth_header) != 2:
            return None

        prefix = auth_header[0].decode('utf-8')
        token = auth_header[1].decode('utf-8')

        if prefix.lower() != auth_header_prefix:
            return None

        return self._authenticate_credentials(request, token)

    def _authenticate_credentials(self, request, token):

        try:
            payload = jwt.decode(token, settings.SECRET_KEY)
        except:
            msg = 'Invalid auth'
            raise exceptions.AuthenticationFailed(msg)

        try:
            user = Writer.objects.get(pk=payload['id'])
        except Writer.DoesNotExist:
            msg = 'No user found'
            raise exceptions.AuthenticationFailed(msg)

        return (user, token)



