#!/usr/bin/env bash

if [[ $EUID -ne 0 && "$(uname)" != "Darwin" ]]
then
   sudo exec "$0" "$@"
   exit $?
fi

exec docker run                                                      \
   -it                                                               \
   -e TERM                                                           \
   -v "$(dirname "$(realpath "$0")")/web":/usr/local/apache2/htdocs/ \
   -p 8080:8080                                                      \
   httpd:alpine "$@"
