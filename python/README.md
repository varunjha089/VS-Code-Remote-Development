# Pyhton Development

Pyhon is one of the High-Level Programming Language, but also the easiest one to write `Hello, World!`. To write `Hello, World!` just type.
```py 
print("Hello, World!") 
```
It is also great at scripting and comes with some awsesome Standard Libraries.

``All the commands ate for Debian based system. For another one please consider the online help.``

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
```
```python
>>> print("hello, world")
hello, world
>>>
```

To exit out of repl type:
```python
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
```
```python
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


## Installing the python library.

Installing the Requests python library :- 

```console
(env) ubuntu@ip:~$ pip install requests
Collecting requests
  Downloading requests-2.25.1-py2.py3-none-any.whl (61 kB)
     |████████████████████████████████| 61 kB 8.5 MB/s 
Collecting chardet<5,>=3.0.2
  Downloading chardet-4.0.0-py2.py3-none-any.whl (178 kB)
     |████████████████████████████████| 178 kB 22.2 MB/s 
Collecting urllib3<1.27,>=1.21.1
  Downloading urllib3-1.26.3-py2.py3-none-any.whl (137 kB)
     |████████████████████████████████| 137 kB 23.8 MB/s 
Collecting idna<3,>=2.5
  Downloading idna-2.10-py2.py3-none-any.whl (58 kB)
     |████████████████████████████████| 58 kB 6.2 MB/s 
Collecting certifi>=2017.4.17
  Downloading certifi-2020.12.5-py2.py3-none-any.whl (147 kB)
     |████████████████████████████████| 147 kB 20.5 MB/s 
Installing collected packages: urllib3, idna, chardet, certifi, requests
Successfully installed certifi-2020.12.5 chardet-4.0.0 idna-2.10 requests-2.25.1 urllib3-1.26.3

(env) ubuntu@ip:~$ 
(env) ubuntu@ip:~$ 
```

## Variables in Pyhton

```python
>>> x = 42
>>> x
42
>>> x = "Hello, World"
>>> x
'Hello, World'
>>>
```

Python is a dynamic language, so we don't have to declare the variable in python. Here the value of `x` changed from number to string. [Dynamic Types Meet Smart Conventions](https://www.youtube.com/watch?v=YklKUuDpX5c) is an awesome content to look on.

### Variable Naming

Following things must be kept in mind while naming a variable :-
- You can’t start your variable name with a digit eg., 1, 52, etc.
- Number at the end of variable is fine.
- Variable name also can't contain special characters, such as `!`,  `@`,  `#`, `$`,  `%`.
- Other names won't result in a syntax error, but can cause weird bugs that are hard to diagnose and troubleshoot. You don't want to name your variables the same as the *types* that we'll be working with. For example **don't** name your variables `int`, `list`, `dict`, `str`, etc.

To know more about Python naming conventions look at [PEP8](https://www.python.org/dev/peps/pep-0008/#naming-conventions) or pep8.org site under [Naming Convention](https://pep8.org/#naming-conventions).

### Some Special Types

There are some special types in python
- No-Value, `None`, or Null Value

```python
>>> x = None
>>> x
```

## Getting `help` in the REPL

There are some useful methods in Python we can use in REPL to understand Pyhton programme.
 
- `type()`, 
- `dir()`, and 
- `help()`

### `type()`

Python has a very easy way of determining the type of something: with the `type()` function.

Just pass any object into the `type()` method:

```python
>>> name = "Varun Kumar"
>>> type(name)
<class 'str'>
```

For example, make a new variable `age`, and check its `type`.

```python
>>> age = 21
>>> type(age)
<class 'int'>
```

We'll see that the type is `str`, Python's version of a string. Now that we know this object's type, we can
pass the type into other methods.

### `dir()`


```Python
>>> dir(int)
['__abs__', '__add__', '__and__', '__bool__', '__ceil__', '__class__', '__delattr__', '__dir__', '__divmod__', '__doc__', '__eq__', '__float__', '__floor__', '__floordiv__', '__format__', '__ge__', '__getattribute__', '__getnewargs__', '__gt__', '__hash__', '__index__', '__init__', '__init_subclass__', '__int__', '__invert__', '__le__', '__lshift__', '__lt__', '__mod__', '__mul__', '__ne__', '__neg__', '__new__', '__or__', '__pos__', '__pow__', '__radd__', '__rand__', '__rdivmod__', '__reduce__', '__reduce_ex__', '__repr__', '__rfloordiv__', '__rlshift__', '__rmod__', '__rmul__', '__ror__', '__round__', '__rpow__', '__rrshift__', '__rshift__', '__rsub__', '__rtruediv__', '__rxor__', '__setattr__', '__sizeof__', '__str__', '__sub__', '__subclasshook__', '__truediv__', '__trunc__', '__xor__', 'as_integer_ratio', 'bit_length', 'conjugate', 'denominator', 'from_bytes', 'imag', 'numerator', 'real', 'to_bytes']
```

`dir()` stands for directory. If we check the type of `int` (notice, no quotes here) we'll see all the methods available on intiger in Python. 

### `help()` 

The last useful method is `help()`. You can pass a type, method, or other object to `help()` to instantly see available documentation about the method, the parameters it expects, and what it returns.

Let's try this in the REPL, and look up the documentation for the `isupper` method in String. We access it with the period symbol (`.`). This is called dot-notation.

```python
>>> help(int.to_bytes)

to_bytes(self, /, length, byteorder, *, signed=False)
    Return an array of bytes representing an integer.
    
    length
      Length of bytes object to use.  An OverflowError is raised if the
      integer is not representable with the given number of bytes.
    byteorder
      The byte order used to represent the integer.  If byteorder is 'big',
      the most significant byte is at the beginning of the byte array.  If
      byteorder is 'little', the most significant byte is at the end of the
      byte array.  To request the native byte order of the host system, use
      `sys.byteorder' as the byte order value.
    signed
```

**Press `q` to exit the screen**

## Numbers

There are three different types of numbers in python: `int`, `float` and `complex`.

Integer are as follows:-

```python
>>> age = 22
>>> negative_number = -5
>>> zero = 0
```

Floats are as follows:

```python
>>> x = 36.0
>>> y = -98.26
>>> z = 0.0
```

Complex number are as follows:

```python
>>> x = 52 + 26j
>>> type(x)
<class 'complex'>
```

We can change the data types of a variable just by calling the method on it.

```python
>>> x = int('26')
>>> x
26
>>> type(x)
<class 'int'>
```

Python also have a `decimal` library, which has certain benefits over the `float` datatype. For information can be found on Python Documentation page, [Decimal Library](https://docs.python.org/3/library/decimal.html).


## Mathematical Operations

- '+' -> adds the number
- '-' -> substract the number
- '*' -> multiply the number
- '/' -> divide the number, it will return a `float` data-type
- '//' -> initger division, it will return an `int` data-type


If we add `float` and `int` the resulting type will be `float`. The division of two `int` will give `float`, unless we use the inieger division operator `//`.

Example of `Float` and `Integer` operations

```python
>>> 3.0 + 2     # Addition of float and integer
5.0
>>> 10 / 5      # Float division
2.0
>>> 10 // 5     # Integer division
2
```

Python also has several built-in methods for working with numbers, like `min()` for minimum value, `max()` for maximum value, and `round()` for rounding to the nearest integer. 

```python
>>> min( 5, 16, 98, 2)
2
>>> max( 5, 16, 98, 2)
98
>>> round(36.4)
36
```

Python also offers a [`math` module](https://docs.python.org/3/library/math.html) in the standard library for more mathematical operations.

## Boolean Types

In Python, Booleans are of type `bool`. Surprisingly, the boolean types `True` and `False` are also numbers under the hood.

* `True` is `1`.
* `False` is `0`.

For `True`

```python
>>> int(True)
1
>>> True == 1
True
```

For `False`
```python
>>> int(False)
0
>>> False == 0
True
```

That means you can do weired things, like add two Boolean numbers together.

```python
>>> True + False                      # 1 + 0
1
>>> True + True + True + True         # 1 + 1 + 1 + 1
4
```

