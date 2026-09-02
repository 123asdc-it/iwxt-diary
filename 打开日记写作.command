#!/bin/zsh
set -e

cd "$(dirname "$0")"

if curl --silent --fail --max-time 1 http://127.0.0.1:4173/writer/ >/dev/null; then
  open http://127.0.0.1:4173/writer/
  exit 0
fi

if [[ ! -d node_modules ]]; then
  echo "第一次启动，正在安装本地写作工具……"
  npm install
fi

npm run write
