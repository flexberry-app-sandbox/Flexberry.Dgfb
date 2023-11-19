docker build --no-cache -f SQL\Dockerfile.PostgreSql -t dgfb-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t dgfb-java/app ../../..
