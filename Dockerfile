FROM nginx:alpine
WORKDIR /usr/share/nginx/html/
RUN apk update && apk add npm && npm install three
COPY . .
COPY default.conf /etc/nginx/conf.d/
COPY ssl/cert.pem /etc/nginx/ssl/cert.pem
COPY ssl/key.pem /etc/nginx/ssl/key.pem
RUN sed -i -e 's/#ssl_certificate/ssl_certificate/' /etc/nginx/nginx.conf
RUN sed -i -e 's/#ssl_certificate_key/ssl_certificate_key/' /etc/nginx/nginx.conf