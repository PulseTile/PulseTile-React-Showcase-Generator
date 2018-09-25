# General infornation

This generator is used for automatic creation build for Showcase-version. 

It based on **Yeoman** technology. This tool gives possibility to create new project from modules, which are located in the separate GitHub repositories. More information about Yeoman you can found here: http://yeoman.io/

If you want to install HelmPHR-version automatically, you should read **"Installing"** below.

# Content

Current version of **Helm-PHR generator** includes following sub-generators:
1) **Core** sub-generator (_yo showcase:core_);
2) Plugin **HelmPHR-theme** sub-generator (_yo showcase:plugin-showcase-theme_);


# Core

This sub-generator does the following automatically:
1) Clone PulseTile-Core version from GitHub;
2) Install all required Node-modules;
3) Create the directory for non-core plugins.
 
If any errors occur during generator work you should remove project directory and repeat generator command.


# Plugin for Showcase-theme

This sub-generator does the following automatically:
1) Clone silver Showcase-theme plugin from GitHub to **plugins/** directory in the project;
2) Relocate **styles/** directory to **src/**;
3) Import new styles in **src/config/style.js**.
 
If any errors occur during generator work you should remove project directory and repeat generator command.

# Environment

Before installing the Generator, you will need the following:
- Node.js 6 or higher
- npm 3 or higher (which comes bundled with Node)
- Git

You can check current version by:
```
    $ node --version
    $ npm --version
    $ git --version
```

# Installing

Install Yeoman tool at you local machine if it is absent there:
```
    $ npm install -g yo
    $ npm install -g generator-showcase
```

Go to the directory, where you will create your build, for example:
```
    $ cd /var/www/html/myDirectoryName/
```

Use Yeoman-generator to create your build automatically:
```
    $ yo showcase:core
    $ yo showcase:plugin-showcase-theme
```

When you build will be created, go to project directory and create the build:
```
    $ cd PulseTile-React-Core
    $ npm run build
```

Your build will be located in two places:
- as zip-archive in **projectDirectory/build/**
- as set of files in **projectDirectory/dist/**