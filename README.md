# Sample flask and React

Self study of flask and React.

## Env
Mac OS X (10.12.1)
~~~
$ python --version
Python 3.5.0
$ node -v
v6.9.1
$ npm -v
3.10.8
~~~

## Install node_modules
~~~
$ npm install
~~~

## Build js with webpack
~~~
$ webpack
  Hash: 62b7929b73c0f9697d73
  Version: webpack 1.13.3
  Time: 555ms
              Asset     Size  Chunks             Chunk Names
  ./static/built.js  3.46 kB       0  [emitted]  main
      + 1 hidden modules
~~~
or
~~~
$ npm run watch

> my-tutorial-react@ watch /Users/yorname/Workspece/TestProject/react-sample/flask-react
> webpack --watch -d

Hash: 62b7929b73c0f9697d73
Version: webpack 1.13.3
Time: 529ms
                Asset     Size  Chunks             Chunk Names
    ./static/built.js  1.61 kB       0  [emitted]  main
./static/built.js.map  1.43 kB       0  [emitted]  main
~~~

## Install Flask and run Flask app.
~~~
$ pip install Flask
$ python flask-react.py
  * Running on http://127.0.0.1:5000/ (Press CTRL+C to quit)
~~~
Reference: http://flask.pocoo.org/

### etc
Change the version of python per project
~~~
pyenv local 2.7.7
~~~