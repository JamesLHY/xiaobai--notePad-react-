#!/usr/bin/env bash

yarn build &&
cd build &&
git init &&
ga . &&
gc . -m 'deploy' &&
git remote add origin git@github.com:JamesLHY/xiaobai-notePad-react-version-website.git &&
git push -u origin master -f
cd ..
