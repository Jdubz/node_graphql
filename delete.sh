#!/usr/bin/env bash

source config.sh

gcloud container clusters get-credentials $cluster
kubectl delete service $service
gcloud container clusters delete $cluster