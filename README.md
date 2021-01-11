# DNShark
A DigitalOcean DNS Management tool with automatic Let's Encrypt certificate issuing - supporting both HTTP and DNS challenge types.

## Dev Installation
### Global `npm` Dependencies
DNShark uses two global development tools in the development environment.
Make sure to install these packages before installing DNShark.

#### Node-SASS
Node-SASS is used to compile SCSS in `views/scss` to CSS in `/views/css`.
```shell
$ npm install -g parcel-bundler
```

#### Parcel
Parcel is used to bundle assets for the Electron user interface.
```shell
$ npm install -g parcel-bundler
```

### Packaging the `electron` UI
The UI is bundled using `Parcel`.  You will need to use the `./package.sh` `BASH` script in order to view the UI.  Any changes to files in the `view/` directory will require this script to be run before they will be visible in the user interface.