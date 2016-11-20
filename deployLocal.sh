#!/bin/sh
npm run build
cd dist
pwd
cp -r * ../../tinyServer/public
cd ../../tinyServer
pwd
cd -
