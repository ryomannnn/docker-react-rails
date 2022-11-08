#!/bin/bash
set -e

useradd -u ${USER_ID} -m ${USER_NAME} 
groupmod -g ${GROUP_ID} ${GROUP_NAME} 
export HOME=/home/${USER_NAME} 

rm -f /app/tmp/pids/server.pid

mkdir -p /app/tmp/sockets

bundle exec puma -C /app/config/puma.rb

exec "$@"


