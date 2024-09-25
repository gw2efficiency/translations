#!/bin/bash
set -e

jsonlint -q current/de/messages.json
jsonlint -q current/en/messages.json
jsonlint -q current/es/messages.json
jsonlint -q current/fr/messages.json
echo "JSON is valid"
