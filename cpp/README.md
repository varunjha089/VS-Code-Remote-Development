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
