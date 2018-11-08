# Node_graphql_gke_boilerplate
server boilerplate for hosting a graphQL API on google kubernetes engine using Nodejs

## cli dependencies:
gcloud sdk  
kubectl  
docker
docker-compose

## setup
put GCP project specifics into config.sh  
create project service-account and put credentials in auth/
database credentials go in src/ormconfig.json

### development
run ./develop.sh
go to localhost:4000/graphql for graphql playground