FROM ruby:3.1.2-slim AS dev

WORKDIR /app

COPY Gemfile Gemfile.lock .

RUN apt-get -y update &&\
    apt-get -y install \
    default-mysql-client \
    default-libmysqlclient-dev \
    gcc \
    libc-dev \
    make \
    ruby-dev 

RUN bundle install

COPY . .

COPY entrypoint.sh /usr/bin/

RUN chmod +x /usr/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]

User ${USER_NAME}

EXPOSE 4000
