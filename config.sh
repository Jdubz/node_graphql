#!/usr/bin/env bash

project=surviral-game
zone=us-west1-a
cluster=surviral
service=surviral-server
image=surviral-server:v1
keyfile=auth/surviral-game.json

gcloud auth activate-service-account --key-file $keyfile
gcloud config set project $project