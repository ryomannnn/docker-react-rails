FROM nginx:1.23.2

RUN rm -f /etc/nginx/conf.d/*

ADD nginx.conf /etc/nginx/app.conf

CMD /usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/app.conf
