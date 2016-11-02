#!/bin/sh
npm run build
cd dist
pwd
cp -r * ../../tinyServer/public
cd ../../tinyServer
pwd
git add .
git commit -m 'auto deploy'
git push
cd -
