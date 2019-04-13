<dl>
  <dt>Overview of XCL provides an introduction to development, its versions, and distinguishing features.</dt>
  <dd><span class="iconify" data-icon="mdi:cube-scan" data-width="18px" data-height="18px"></span> This documentation applies to all 2.3.x releases.</dd>
  <dd><span class="iconify" data-icon="mdi:account-multiple" data-width="18px" data-height="18px"></span> Intended Audiences :</dd>
  <dd>This information is intended for administrators and developers.</dd>
</dl>

<details>
<summary style="cursor: pointer;">Overview</summary>

- Introduction XCL
- Requirements
- Set Up Your Development Environment
- Overview of core technologies
- Git Workflow
- Versions
- Features
- What's New

</details>

-----

### Introduction XCL
-----
XOOPS Cube is a simple, secure and scalable web application platform. The modular architecture is built with PHP, SQL and a smarty powered theming system. This empowers everyone to create dynamic and content rich apps with ease - from the best looking blogs, portfolios, community forums, intranet and business websites to the much safer desktop applications on Linux, Mac or Windows.

### Requirements

Before you start building your first XCL site, you’ll need to setup a development environment and familiarize yourself with some core web technologies. Make sure that you have installed the required software tools.

#### Set Up Your Development Environment

Whether you plan to create your own personal or corporate community web site with news, forums, blog, photo album, portfolio, etc. You need a reliable Web Host running Apache, MySQL and PHP.

XOOPS Cube will run smoothly on a LAMP environment. In most cases your site will be hosted on the popular open source web platform consisting of Linux, Apache or Nginx, MySQL or Maria, and PHP7. Though XOOPS Cube can run on any other Operating System (OS) as well.

#### Overview of core technologies

Nowadays, the set up of a local development environment is a very simple task (download clik-and-run). Also, It’s not necessary to be an expert with the web core technologies — remember, it's all about content and storytelling, so don’t worry, have fun! 

These are some of the main web technologies used to build a XCL site:

* PHP stands for Hypertext Preprocessor (no, the acronym doesn't follow the name). It's an open source, server-side, scripting language used for the development of web applications. By scripting language, we mean a program that is script-based (lines of code) written for the automation of tasks.
* SQL, or Structured Query Language consists of various commands such as:
  - USE: allows you to select the particular database you will work on.
  - CREATE: allows you to create a new object in the database, such as a table.
  - INSERT: allows you to add information to the database.
  - ALTER: allows you to change the structure of an existing database.
  
These commands and the many others that exist can be combined in various ways. As the brief explanations suggest, the purpose of the language is to facilitate various operations on a database.
* MySQL is an open source relational database management system.
* HTML is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web. It stands for HyperText Markup Language.
* CSS is a language that describes the style of an HTML document. CSS describes how HTML elements should be displayed and the appearance of your web content (fonts, colors, layout, etc). It stands for Cascading Style Sheets.
* JavaScript: A programming language that helps us make the web dynamic and interactive.

Later tutorials about recent libraries and frameworks might complete the set of tools.

### Git Workflow
-----

* Branch Dev
* Branch Module
* Branch Feature

### Versions
-----

### Features
-----
Below is a list of some of XOOPS Cube Legacy features.

* Easy install procedure based on a wizard
* Modular architecture
* Module API for unlimited expandability
* Simple core to build up a custom cms
* Debug function for easy development
* Group-based permission system
* Intuitive Interface for management
* Smarty Template engine
* Caching mechanism
* Themes and Templates management
* Embedded WYSIWYG HTML Editor
* Free choice of PHP, JS, CSS frameworks
* Abundant third-party modules and extensions (preloads to customize functionality)

**What is New in XCL 2.3.0**

* XCL 2.3.0 introduces support for installer improvements, required modules and a new responsive user interface.
* Up-to-date packages including support of PHP7.
* XCL keeps the Cube Core system as small as possible while preserving backwards compatibility. 
* The WYSIWYG CKEditor and the filemanager make a robust content management with capabilities to mount remote storage. 
* X-Update is the default package manager for installing new modules, preloads and themes.
* Up-to-date versions for most packages available in the repository.
* Ability to support multiple instances of the same package.
* Support for new CSS frameworks.

**To Do**

+ Ability to run the installer from multiple media, such as USB, CDROM, etc.
+ Virtual Machines OVA, Docker and Vagrant are not  available yet for 2.3.x versions.
+ The Smarty 3 package is not installed in 2.3.0.
+ Not all SQL packages in the repo are available.
+ SOAP samples and API examples
+ Full developer-version to help create, develop, test, and package an application that runs a container.
