from django.contrib import admin
from articles.models import Article, Comment, Category

admin.site.register(Article)
admin.site.register(Comment)
admin.site.register(Category)
