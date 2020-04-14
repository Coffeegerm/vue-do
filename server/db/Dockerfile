# TODO This should create database and expose port 5432 to the server so that it can be accessed from queries

FROM postgres
ENV POSTGRES_PASSWORD postgres
ENV POSTGRES_DB vuedo
COPY init.sql /docker-entrypoint-initdb.d/

