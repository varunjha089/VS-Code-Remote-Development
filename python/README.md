# Pyhton Development

Pyhon is one of the High-Level Programming Language, but also the easiest one to write `Hello, World!`. To write `Hello, World!` just type.
```py 
print("Hello, World!") 
```
It is also great at scripting and comes with some awsesome Standard Libraries.

**NOTE :- All the commands ate for Debian based system. For another one please consider the online help.

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

Keyboard shortcut, `CTRL + D` also works.

## Easter Egg in Python

```console
(env) ubuntu@ip:~$ python

Python 3.8.5 (default, Jul 28 2020, 12:59:40) 
[GCC 9.3.0] on linux
Type "help", "copyright", "credits" or "license" for more information.
>>> from __future__ import braces
  File "<stdin>", line 1
SyntaxError: not a chance
>>> 
>>> 
>>> 
>>> 
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

