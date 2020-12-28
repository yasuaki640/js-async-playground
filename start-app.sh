#!/bin/bash
readonly FRONTEND_SERVER_DIR_ROOT="./frontend"
readonly BACKEND_SERVER_DIR_ROOT="./backend"

function config_server() {
  cd "$1" || return 1
  yarn install
  cp .env.example .env
  
  if [ $1 = $BACKEND_SERVER_DIR_ROOT ]; then
    echo -n 'Enter your news api access key: '
    read news_api_access_key 
    sed -e "s/NEWS_API_ACCESS_KEY=/NEWS_API_ACCESS_KEY=${news_api_access_key}/" .env >> .env
  fi
  
  cd ../
  return 0
}

function handle_error() {
  echo "This script returns non-zero exit code $?"
  exit 1
}

config_server ${FRONTEND_SERVER_DIR_ROOT} || handle_error
config_server ${BACKEND_SERVER_DIR_ROOT} || handle_error

cd ${BACKEND_SERVER_DIR_ROOT} || handle_error
yarn run start
