#!/bin/bash -ex

BUILD_DIR=build
GIT_USERNAME=${GIT_USERNAME:-$(git config user.name)}
GIT_EMAIL=${GIT_EMAIL:-$(git config user.email)}

rimraf $BUILD_DIR
craco $BUILD_DIR

cpx ".circleci*/config.yml" $BUILD_DIR --verbose

gh-pages -d $BUILD_DIR --dotfiles -u "$GIT_USERNAME <$GIT_EMAIL>"
