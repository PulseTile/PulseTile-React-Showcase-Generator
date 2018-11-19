# General infornation

Ripple Foundation has a showcase stack, built from three key components namely, PulseTile, QEWD.js and EtherCIS. Each component is developed independently and therefore has its own development and build process. This Generator takes the PulseTile component (React.js version) and gets it ready for deployment within the showcase stack environment. 

This is an exemplar code base for people to learn from and customise for their own use.

Any version of PulseTile-React project, such as this Showcase version, consists of two main parts: Core framework and Non-Core plugins, including themes (i.e. styles and images).

This generator allows us to change / add / remove select plugins and automatically create the PulseTile Showcase build without changing the PulseTile React.js core framework. 

For this automatic creation of the build, a generator based on Yeoman technology is used. 
This tool gives the possibility to create a new project from modules, that are located in the separate GitHub repositories. 

To learn more about Yeoman, please see http://yeoman.io/

# The components we have in Showcase Generator
The current version of Showcase generator includes following sub-generators:
1)  Core sub-generator;
2) Non-core plugins sub-generators:
   * for silver-plugins set;
   * for bronze plugins set;
   * for carbon plugins set;
   * for TopThreeThings plugin;
   * for Vaccinations plugin;
   * for Feeds plugin.
3) Non-core features sub-generators:
    * for User Tour feature plugin;
    * for Terms and Conditions feature plugin; 
4) Theme Showcase sub-generator;  
5) Sub-generator for configuration files updating.

You can see how it works on the scheme below:
![alt text](https://github.com/PulseTile/PulseTile-React-Showcase-Generator/blob/kuvakina-patch-1/Showcase-gen.png)

# How it works

We have separate GitHub repositories with Core (all core plugins and features), Non-Core plugins and features, and Theme that are then imported.

When the Showcase version is built, Generator makes following steps automatically:
1) Clone latest version of Core from GitHub and install all required modules and libraries:    
_$ yo showcase:core_  

2) Clone Showcase-theme from GitHub and add it into your build:  
_$ yo showcase:theme-showcase_  

3) Clone all bronze, silver and carbon plugins from GitHub and add them to Non-Core component storage:   
_$ yo showcase:plugin-top-three-things_    
_$ yo showcase:plugin-vaccinations_    
_$ yo showcase:plugin-feeds_    
_$ yo showcase:plugins-all-silver_  
_$ yo showcase:plugins-all-bronze_  
_$ yo showcase:plugins-all-carbon_   

4) Clone other features from GitHub and add it to the Non-Core component storage:   
_$ yo showcase:feature-user-tour_   
_$ yo showcase:feature-terms-and-conditions_   

5) Update the config files which unite Core with Non-Core component storage:  
_$ yo showcase:update --theme=showcase --force_  

3) Create the build:  
_$ npm run build_    

After these steps have taken place, the built PulseTile Showcase is ready for use.

**Please see more detailed command line instructions below.** 

Before installing the Generator, you will need the following:  
  * Node.js 6 or higher
  * npm 3 or higher (which comes bundled with Node)
  * Git

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
    $ yo showcase:theme-showcase
    $ yo showcase:plugin-top-three-things 
    $ yo showcase:plugin-vaccinations 
    $ yo showcase:plugin-feeds 
    $ yo showcase:plugins-all-silver
    $ yo showcase:plugins-all-bronze
    $ yo showcase:plugins-all-carbon
    $ yo showcase:feature-user-tour
    $ yo showcase:feature-terms-and-conditions
    $ yo showcase:update --theme=showcase --force
```

Attribute **--force** is used for overwriting config files by default.

Attribute **--theme=showcase** is used to choose Showcase-theme.

When you build will be created, go to project directory and create the build:
```
    $ cd PulseTile-React-Core
    $ npm run build
```

Your build will be located in two places:
- as zip-archive in **projectDirectory/build/**
- as set of files in **projectDirectory/dist/**
