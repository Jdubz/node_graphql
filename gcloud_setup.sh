#!/usr/bin/env bash

source config.sh

gcloud config set project $project
gcloud config set compute/zone $zone

gcloud container clusters create $cluster
gcloud container clusters get-credentials $cluster