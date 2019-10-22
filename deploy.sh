#!/bin/sh
DST_DIR=/home/bridgeWater/srv/joybox-wx-server
SSH_HOST=bridgeWater
PROJECT='joybox-app'
BUILD_DIR='./dist/'
TIME=$(date '+%Y-%m-%d_%H%M%S')
TAR_FILE_NAME=${PROJECT}_${TIME}_dist.tar

npm run build
tar cf $TAR_FILE_NAME $BUILD_DIR
scp $TAR_FILE_NAME $SSH_HOST:$DST_DIR
rm -rf $TAR_FILE_NAME

ssh $SSH_HOST << EOF
	cd $DST_DIR
	rm -rf ./public
	tar xf $TAR_FILE_NAME
	mv $BUILD_DIR public
	mkdir -p publicBackups
	mv $TAR_FILE_NAME ./publicBackups
	exit
EOF
