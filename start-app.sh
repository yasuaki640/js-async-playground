#!/bin/bash
readonly FRONTEND_SERVER_DIR_ROOT="./frontend"
readonly BACKEND_SERVER_DIR_ROOT="./backend"

config_server() {
  cd "$/1" || return 1
  yarn install
  cp .env.example .env
  cd ../
  return 0
}

handle_error() {
  echo "This script returns non-zero exit code $?"
  exit 1
}

config_server ${FRONTEND_SERVER_DIR_ROOT} || handle_error
config_server ${BACKEND_SERVER_DIR_ROOT} || handle_error

cd ${BACKEND_SERVER_DIR_ROOT} || handle_error
yarn run start

echo 'starting new-api-app'