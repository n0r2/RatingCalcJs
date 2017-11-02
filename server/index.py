#!/usr/bin/env python
# -*- coding:utf-8 -*-

from bottle import route, run, default_app

@route('/')
def hello():
    return 'Hello World!'

if __name__ == '__main__':
    # コマンドから"python3 index.py"で起動した場合
    run(host='localhost', port=3030)
else:
    # uWSGIから起動した場合
    application = default_app()