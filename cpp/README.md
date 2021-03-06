# C++ 

## Installing the necessary Tools
[Install vcpkg on Windows, Linux, and macOS](https://docs.microsoft.com/en-us/cpp/build/install-vcpkg?view=msvc-160&tabs=linux) has a very descriptive for evely flavour of operaing system. But for linux follow the command

```console
ubuntu@ip:~$ sudo apt-get update

ubuntu@ip:~$ sudo apt-get install build-essential tar curl zip unzip

ubuntu@ip:~$ git clone https://github.com/microsoft/vcpkg

ubuntu@ip:~$ cd vcpkg

ubuntu@ip:~$ ./bootstrap-vcpkg.sh
```

## Running a c++ file using command line
If your file name is hello.cpp

```console
g++ hello.cpp && ./a.out
```
## Quick Reference

| Command | Description |
|---|---|
| **`cout`** | Stands for `console output`, it prints the string beween the quotes. |
| **`cin`** | Stands for `console input`, it takes input from the console and assign it to a variable. |
| **`endl`** | It tells `cout` to add an **end line**(carriage return) character. |
<!-- | **``** | | -->
<!-- | **``** | | -->
<!-- | **``** | | -->
<!-- | **``** | | -->
<!-- | **``** | | -->
<!-- | **``** | | -->

## File Details

| File Name | Description |
|---|---|
| [first.cpp](/cpp/first.cpp) | Just creating the first C++ file for testing. It asks for a number and then prints triangle 
| [p021.cpp](/cpp/p021.cpp) | This file is from page 21 of "Sharan Volin", "C++" book by Packt. |


### `using namespace std;`

When we don't use **`using namespace std;`**.
```cpp
#include <iostream>

int main(){
    std::cout << "Hello, World" << std::endl;
    std::cout << "I am now a C++ programmer." << std::endl;
    return 0;
}
```


#### When we use **`using namespace std;`**.
```cpp
#include <iostream>

using namespace std;

int main(){
    cout << "Hello, World" << endl;
    cout << "I am now a C++ programmer." << endl;
    return 0;
}
```

**Make sure to look at all `std` in first one.**

### Workflow while you are new

**Reference :- Sharan Volin C++ book by packt**
1. Always starts with a working C++ code example.
2. Make your code modification in small steps. Compile after each line, instead of writing code for hours and then compiling at once.
3. Don't get discouraged.