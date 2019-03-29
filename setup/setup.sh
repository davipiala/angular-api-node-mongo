export DATA_DIR=$(pwd)/../data
docker run -p27017:27017 -e MONGO_INITDB_ROOT_USERNAME=mongoadmin -e MONGO_INITDB_ROOT_PASSWORD=secret -v $DATA_DIR:/data/db -d mongo
