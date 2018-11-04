#!/usr/bin/env bash

docker-compose -f develop.yml down
docker-compose -f develop.yml build
docker-compose -f develop.yml up
