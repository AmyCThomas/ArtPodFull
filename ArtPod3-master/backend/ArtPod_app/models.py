from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

class Forum(models.Model):
    forum_title = models.CharField(max_length=255)
    forum_description = models.TextField(blank=True)
    value = models.CharField(max_length=255)

    def __str__(self):
        return f"Title: {self.forum_title}, Description: {self.forum_description}, Value: {self.value}"

class Post(models.Model):
    forum = models.ForeignKey(Forum, on_delete=models.CASCADE, related_name="posts")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    post_title = models.CharField(max_length=255)
    post_description = models.TextField()
    post_date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Title: {self.post_title}, Description: {self.post_description}, User: {self.user}"

class Comment(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE, related_name="comments")
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="comments")
    comment_description = models.TextField()
    comment_date_created = models.DateField(auto_now_add=True)

    def __str__(self):
        return f"Description: {self.comment_description}, User: {self.user}"