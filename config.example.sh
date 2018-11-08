#!/usr/bin/env bash

project=mygcpproject
zone=us-west1-a
cluster=mycluster
service=myserver
image=project-server:v1
keyfile=auth/myauthfile.json

gcloud auth activate-service-account --key-file $keyfile
gcloud config set project $project