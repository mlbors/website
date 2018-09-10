#!/bin/bash
set -e
echo "machine github.com" >> ~/.netrc
echo "login matyas.bors@gmail.com" >> ~/.netrc
echo "password $GH_TOKEN" >> ~/.netrc