#!/usr/bin/env bash

source config.sh

kubectl delete service $service

docker build -t gcr.io/{$project}/{$image} ./app/
gcloud docker -- push gcr.io/{$project}/{$image}

kubectl run $service --image gcr.io/{$project}/{$image} --port 8080
kubectl expose deployment $service --type LoadBalancer --port 80 --target-port 8080