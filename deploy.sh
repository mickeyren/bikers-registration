#!/bin/sh
yarn build
rsync -avP --update dist/. root@159.89.201.140:/opt/bikers
