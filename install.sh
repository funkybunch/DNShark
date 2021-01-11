#!/bin/sh bash

# Require root to install
if [[ $EUID != 0 ]]; then
    echo "Please run as root\n"
    exit
fi

unameOut="$(uname -s)"
case "${unameOut}" in
    Linux*)     machine=Linux;;
    Darwin*)    machine=Mac;;
    *)          machine="UNKNOWN:${unameOut}"
esac

# Check if dependencies are installed
if [[ "${machine}" == "Linux" ]]; then
    dpkg -s libsecret-1-dev &> /dev/null
    if [[ $? -ne 0 ]]; then
        # Dependencies not found, install dependencies
        apt-get update
        apt-get install libsecret-1-dev -y
    fi
elif [[ "${machine}" == *"UNKNOWN:"* ]]; then
    echo "Operating system not supported by this installer.\n"
    echo "Alternate install options at https://github.com/funkybunch/DnSSL"
    exit
fi

## TODO - Add executable download
## TODO - Create symlink to DnSSL executable
