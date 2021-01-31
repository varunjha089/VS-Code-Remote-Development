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

## Strings in Python

Strings in Python can be enclosed either with single quotes like `'Varun'` or double quotes, like `"Varun"`. 

To use the same type of quote within a string, that quote needs to be **escaped** with a `\` - backwards slash.

```python
>>> greeting = 'Hello, World. My name is \'Varun Kumar\''
>>> greeting
"Hello, World. My name is 'Varun Kumar'"
```

This can also be achieved with mixed quotes.

```python
>>> greeting_two = 'Hello, World. My name is "Varun Kumar"'
>>> greeting_two
'Hello, World. My name is "Varun Kumar"'
```

Long multi-line strings can be written with `"""`( triple quotes ) in python.

```python
>>> long_greetings = """
... Hello, World.
... My name is Varun Kumar.
... This is Python Programming.
... """
>>> long_greetings
'\nHello, World.\nMy name is Varun Kumar.\nThis is Python Programming.\n'
>>> print(long_greetings)

Hello, World.
My name is Varun Kumar.
This is Python Programming.

>>>
```

Python offers two methods of seeing what's inside a string -- `print()` and `repr()`. You can differentiate between the two by their purpose. 

Use `print()` when you want to display readable output to end users. Use `repr()` to display unambiguous output to developers, like for debugging purposes.

### String Formatting

#### Concatenation in strings


Strings can also be **concatenated** (added together) using the `+` operator to combine an arbitrary number of Strings. For example:

```python
>>> first_name = "Varun"
>>> last_name = "Kumar"
>>> my_name = first_name + last_name
>>> my_name
'VarunKumar'
>>> # OR
>>> my_name2 = first_name + " " + last_name
>>> my_name2
'Varun Kumar'
```
### f-strings

There are several types of string formatting in Python, but f-strings introduced in Python 3.7 are the most modern and efficient. 

f-strings start with the letter `f`. Variables and expressions can be inserted into the string by enclosing them in curly brackets.

You don't need to convert variables to strings when using f-string formatting. It happens under the hood.

```python
>>> first_name = "Varun"
>>> last_name = "Kumar"
>>> my_name_fs = f"Hello, {first_name} {last_name}"
>>> my_name_fs
'Hello, Varun Kumar'
```

#### Trimming in strings

Python strings have some very useful functions for trimming whitespace. `strip()` returns a new string after removing any leading and trailing whitespace. `rstrip()` does the same but only removes trailing whitespace, and `lstrip()` only trims leading whitespace.

```python
>>> my_string = "   Hello World!   "
>>>
>>> print(f">{my_string.strip()}<")
>Hello World!<
>>>
>>> print(f">{my_string.lstrip()}<")
>Hello World!   <
>>>
>>> print(f">{my_string.rstrip()}<")
>   Hello World!<
>>> 
```

These functions also accept an optional argument of characters to remove. Let’s remove all leading or trailing commas,
```python
>>> print(my_string.strip(","))
   Hello World!
```


#### Replacing Characters

With `replace()` function we can replace what we want to replace, and what we want to replace with.

```python
>>> my_string = "Hello, world!"
>>> print(my_string.replace("world", "Varun"))
Hello, Varun!
```

## Lists in Python

Lists are one of the most powerful data types in Python. They’re used to store related items together.

| type             	| `list`                                                                                	|
|------------------	|---------------------------------------------------------------------------------------	|
| use              	| Used for storing similar items, and in cases where items need to be added or removed. 	|
| creation         	| `[]` or `list()` for empty list, or `[1, 2, 3]` for a list with items.                            	|
| search methods   	| `my_list.index(item)` or `item in my_list`                                                                           	|
| search speed     	| Searching for an item in a large list is slow brcause each item must be checked.                               	|
| common methods   	| `>>> dir(list)` for help         	|
| order preserved? 	| Yes. Items can be accessed by index.                                                  	|
| mutable?         	| Yes                                                                                   	|
| in-place sortable?        	| Yes. `my_list.sort()` will sort the list in-place. `my_list.sort(reverse=True)` will sort the list in-place in *descending* order. `my_list.reverse()` will *reverse the items* in `my_list` in-place.           	|





Here is some example on list

```python
>>> type(list())                                          # Empty list
<class 'list'>
>>> name = ["varun", "abhinav", "suman", "rajesh"]        # List of name
>>>   len(name)                                           # length of list
4
>>> "varun" in name
True
>>> "gaurav" in name
False
>>> name.index("suman")                                   # Searching for index of "suman"
2
>>> name.index("abhinav")                                 # Searching for index of "abhinav" 
1
>>> name[3]                                               # Accessing the list object at Index number 3.
'rajesh'
>>> name[0]                                               # Accessing the list object at Index number 0.
'varun'
```

### Updating an item in a list

To update a particular item in a `list` use square-bracket notion and assign a new value. `my_list[pos] = new_value`

```python
>>> name[3] = "vishal"
>>> name
['varun', 'abhinav', 'suman', 'vishal']
```

#### Code Formatting in List

We can also *optionally* add a trailing comma after the last item. A trailing comma isn't required to create a valid list, but it does help minimize version control differences when working on a Python codebase with a team.

```python
>>> names = [
... "Varun",
... "Abhinav",
... "Suman",
... "Vishal",
... ]
```

### Sorting in List

We can `sort` a list with built-in `sorted()` function, like `sorted(my_list)`. To sort list in reverse order we can pass the second parameter to `sorted()` function, like `sorted(my_list, reverse=True)`.

```python
>>> name = ["varun", "abhinav", "suman", "rajesh"]
>>> sorted(name)
['abhinav', 'suman', 'varun', 'vishal'
>>> sorted(name, reverse=True)
['vishal', 'varun', 'suman', 'abhinav']
>>> name
['varun', 'abhinav', 'suman', 'vishal']
```
```python
>>> numbers = [5, 10, 30, 2, 36, 100]
>>> sorted(numbers)
[2, 5, 10, 30, 36, 100]
>>> sorted(numbers, reverse=True)
[100, 36, 30, 10, 5, 2]
```

#### Sorting the list in-place

You can call `my_list.sort()` on your list to sort it in increasing order, or `my_list.sort(reverse=True)` on the list to sort it backwards, in decreasing order. This operation will modify the list, and *doesn't return a value*.

```python
>>> name_copy = ['varun', 'abhinav', 'suman', 'vishal']
>>> name_copy.sort()
>>> name_copy
['abhinav', 'suman', 'varun', 'vishal']
>>> name_copy.sort(reverse=True)
>>> name_copy
['vishal', 'varun', 'suman', 'abhinav']
```
```python
>>> numbers_copy = [5, 10, 30, 2, 36, 100]
>>> numbers_copy.sort()
>>> numbers_copy
[2, 5, 10, 30, 36, 100]
>>> numbers_copy.sort(reverse=True)
>>> numbers_copy
[100, 36, 30, 10, 5, 2]
```

#### Reverse the list 

To reverse the items of a list, call `my_list.reverse()` on it.

```python
>>> numbers = [3, 36, 24, 26, 100]
>>> numbers.reverse()
>>> numbers
[100, 26, 24, 36, 3]
```

### Finding Methods on List

Just call `dir()` on `list`, to get the further help call `help()` on one of the `methods` mentioned on `list`, like `help(list.append)`.

### Adding Items

Let's start with a list of two names.

```python
>>> names = ['vishal', 'varun', 'suman', 'abhinav']
```

##### `my_list.append(item)` adds to the end of `my_list`

We can use `my_list.append(item)` to add an additional item to the end of the list.

```python
>>> names.append("tarun")
>>> names
['vishal', 'varun', 'suman', 'abhinav', 'tarun']
```

##### `my_list.insert(pos, item)` inserts an item into `my_list` at the given position

```python
>>> names.insert(0, "shivam")
>>> names
['shivam', 'vishal', 'varun', 'suman', 'abhinav', 'tarun']
```

##### `my_list.extend(other_list)` adds all the contents of `other_list` to `my_list`

```python
>>> names = ['shivam', 'vishal', 'varun', 'suman', 'abhinav', 'tarun']
>>> colors = ["Red", "Blue", "Green", "Yellow"]
>>> names
['shivam', 'vishal', 'varun', 'suman', 'abhinav', 'tarun']
>>> names.extend(colors)
>>> names
['shivam', 'vishal', 'varun', 'suman', 'abhinav', 'tarun', 'Red', 'Blue', 'Green', 'Yellow']
```

##### Use the `my_list.count(item)` method to find out how many times an item appears in a list.

```python
>>> names.count("shivam")
1
>>> names.count("Lenord")
0
```

### Updating Items

To update items in a list, use the *position* of the item you'd like to change using square bracket `[]` syntax. Like: `my_list[pos] = new_item`

For example:

```python
>>> names[9] = "Orange"
>>> names
['shivam', 'vishal', 'varun', 'suman', 'abhinav', 'tarun', 'Red', 'Blue', 'Green', 'Orange']
```

### Removing Items

There are a few ways to remove items from a list.

##### Use `my_list.remove(item)` to remove the *first* instance of the item

Be careful. `remove()` only removes the first instance of the item from the list, which isn't always what we want to do.

```python
>>> colors
['Red', 'Blue', 'Green', 'Yellow']
>>> colors.remove("Red")
>>> colors
['Blue', 'Green', 'Yellow']
```

If we try to remove the item which is not in the list, It will create a `ValueError`.

```python
>>> colors
['Blue', 'Green', 'Yellow']
>>> colors.remove("Red")
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: list.remove(x): x not in list
```

#### Use `my_list.pop()` to remove the last item, or `my_list.pop(index)` to remove the item at that index

Using `pop()` will also **return** the item that was in that position. That's useful if we want to save the item.

```python
>>> colors
['Blue', 'Green', 'Yellow']
>>> colors.pop()
'Yellow'
>>> colors.pop()
'Green'
>>> colors
['Blue']
```

### `list` cheat sheet

Adding, Removing, Changing, and Finding Items in `list` can be done as follows :- 

| action                                           	| method                                	| returns           	| possible errors                            	|
|--------------------------------------------------	|---------------------------------------	|-------------------	|--------------------------------------------	|
| check length                                     	| `len(my_list)`                        	| `int`             	|                                            	|
| **add:** to the end                              	| `my_list.append(item)`                	| -                 	|                                            	|
| **insert:** at position                          	| `my_list.insert(pos, item)`           	| -                 	|                                            	|
| **update:** at position                          	| `my_list[pos] = item`          	| -        -         	| `IndexError` if `pos` is >= `len(my_list)`                                          	|
| **extend:** add items from another list          	| `my_list.extend(other_list)`          	| -                 	|                                            	|
| is item in list?                                 	| `item in my_list`                     	| `True` or `False` 	|                                            	|
| **index** of item                                	| `my_list.index(item)`                 	| `int`             	| `ValueError` if `item` is not in `my_list` 	|
| **count** of item                                	| `my_list.count(item)`                 	| `int`             	|                                            	|
| **remove** an item                               	| `my_list.remove(item)`                	| -                 	| `ValueError` if `item` not in `my_list`    	|
| **remove** the last item, or an item at an index 	| `my_list.pop()` or `my_list.pop(pos)` 	| `item`            	| `IndexError` if `pos` >= `len(my_list)`    	|

## Common Mistakes in Strings and Lists

### `str`ings 

#### Issue: Mismatch string quotes.

```python
>>> name = "Hello'
  File "<stdin>", line 1
    name = "Hello'
                 ^
SyntaxError: EOL while scanning string literal
```

`Fix` for above issue is 

```python
>>> name = "Hello"
>>> name
'Hello'
```

#### Issue: Trying to print `str`ing and `number` using "+" symbol.

```python
>>> 4 + "Fourty Four"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'str'
```

`Fix` for above issue is 
```python
>>> str(4) + "Fourty Four"
'4Fourty Four'
```

### Type Conversion

We can change the type of variable in python programme:-

```python
>>> str(3)
'3'
>>> int('3')
3
>>> int(True)
1
>>> int(False)
0
>>> bool(1)
True
>>> bool(0)
False
```
#### Some More fun with Type Conversion in Python:

```python
>>> bool(5)
True
>>> bool(-1)
True
>>> bool("Hello")
True
>>> bool()
False
>>> bool("")
False
>>> str(True)
'True'
>>> int(True)
1
```

### `list`s

#### Issue: Missed the comma between two value

```python
>>> numbers = [5, 6 7]
  File "<stdin>", line 1
    numbers = [5, 6 7]
                    ^
SyntaxError: invalid syntax
```

#### Issue: Missed the closing brace

```console
(env) ubuntu@ip:~$ python missing_closing_brace.py 
  File "missing_closing_brace.py", line 2
    name = "varun"
    ^
SyntaxError: invalid syntax
```

### Indentation

```python
>>>     name = "varun"
  File "<stdin>", line 1
    name = "varun"
    ^
IndentationError: unexpected indent
```

`Fix` for this issue

```python
>>> name = "varun"
>>> name
'varun'
```