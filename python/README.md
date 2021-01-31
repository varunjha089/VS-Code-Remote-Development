# Pyhton Development

Pyhon is one of the High-Level Programming Language, but also the easiest one to write `Hello, World!`. To write `Hello, World!` just type.
```py 
print("Hello, World!") 
```
It is also great at scripting and comes with some awsesome Standard Libraries.

## Invironment Setup
To create a virtual environment in Python follow following steps :-

```console
ubuntu@ip:~$ python3 -m venv env

ubuntu@ip:~$ source env/bin/activate

ubuntu@ip:~$ python3 -m pip install --upgrade pip

Collecting pip
  Downloading pip-21.0.1-py3-none-any.whl (1.5 MB)
     |████████████████████████████████| 1.5 MB 17.8 MB/s 
Installing collected packages: pip
  Attempting uninstall: pip
    Found existing installation: pip 20.0.2
    Uninstalling pip-20.0.2:
      Successfully uninstalled pip-20.0.2
Successfully installed pip-21.0.1
```
## Running a Python Programme
Make sure your virtual environment is active. If not please activate. If it's active the skip first command. Here I am assuming that your file is saved as `hello.py`.

```console
ubuntu@ip:~$ source env/bin/activate

(env) ubuntu@ip:~$ python hello.py
```

## Working with python REPL :-

```console
(env) ubuntu@ip:~$ python

Python 3.8.5 (default, Jul 28 2020, 12:59:40) 
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> print("hello, world")
hello, world
>>>
```

To exit out of repl type:
```console
>>> exit()
```

To deactivate virtual environment:-
```console
(env) ubuntu@ip:~$ deactivate
```