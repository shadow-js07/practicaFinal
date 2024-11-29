FROM nginx:alpine

COPY src/Final.html /usr/share/nginx/html

EXPOSE 80