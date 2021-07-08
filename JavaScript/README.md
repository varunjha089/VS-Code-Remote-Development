# NodeJS

### Installation instructions

**Node.js v16.x**:

```sh
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_16.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
apt-get install -y nodejs
```

**Node.js v14.x**:

```sh
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs
```

**Node.js v12.x**:

```sh
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_12.x | bash -
apt-get install -y nodejs
```

**Node.js LTS (v14.x)**:

```sh
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_lts.x | bash -
apt-get install -y nodejs
```

**Node.js Current (v16.x)**:

```sh
# Using Ubuntu
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash -
sudo apt-get install -y nodejs

# Using Debian, as root
curl -fsSL https://deb.nodesource.com/setup_current.x | bash -
apt-get install -y nodejs
```

***Optional***: install build tools

To compile and install native addons from npm you may also need to install build tools:

```sh
# use `sudo` on Ubuntu or run this as root on debian
apt-get install -y build-essential
```
```

## Running JavaScript file using NodeJs
For example file name is HelloWorld.js

```js
node HelloWorld.js
```
