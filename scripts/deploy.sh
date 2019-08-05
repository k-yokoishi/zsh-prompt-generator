#!/bin/bash -ex

BUILD_DIR=build

rimraf $BUILD_DIR
craco $BUILD_DIR

cpx ".circleci*/config.yml" $BUILD_DIR --verbose

gh-pages -d $BUILD_DIR
