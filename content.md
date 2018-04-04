# StackSelect Quizzes

* Automate asking people for advice about what tech to use
* Fight the catch 22 problem of picking the wrong technology to learn because you don&#39;t understand its strengths and weaknesses compared to alternatives
* All quizzes result in a free, open source, and well supported technology

## JavaScript Frontend Framework

The modern JavaScript landscape has many frameworks to choose from to organize your frontend code, both from a more traditional MVC or MV\* architecture or a more modular and view focused component driven approach.

Angular

* Traditional MVC, with some component driven design
* Many services built into the framework
* Uses TypeScript primarily, so the framework has strong type checking at the cost of additional learning curve and effort
* Enterprise focused
* Batteries included

None

* If all you need is DOM modification and basic AJAX, you can use them in most modern browsers
* jQuery is an option if you need to rely on older browsers and don&#39;t want to set up build tools for polyfills
* Web Components provide some built in component architecture support, but browser support is limited with Firefox refusing to support the current version of the HTML imports spec

Polymer

* An in between of Angular&#39;s convenience and structure with the simplicity of Web Components
* Makes Web Components easier to write and reuse while polyfill to get around browser compatibility issues

React

* Component driven
* Very minimal API means that React apps tend to rely more on built in JavaScript language features, while also allowing the freedom to add in other modular frameworks like Redux or React Router
* Excellent support for server side (ReactDOMServer), test (react-test-renderer) and native (React Native) renderers
* Great for pure functional programming and immutable data structures
* JavaScript itself is used for templating within JSX, an HTML like syntax to describe React elements

Vue

* Component driven
* Almost as modular as React, while having an easier to learn and more Angular like syntax and architecture
* Also supports JSX, while having a simpler HTML templating system built in

## JavaScript State Manager

[https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367](https://medium.com/@dan_abramov/you-might-not-need-redux-be46360cf367)

MobX

* Observer pattern for React and other component based frameworks

React

* Local state per component, allowing state slices to have all their logic in one unit of code
* State that can&#39;t be serialized
* Abstract state into container components per presentational component without merging state into a single store
* State can be merged into monolithic parent components and passed down using Context without the indirection of Redux

React-Redux

* Simplified version of the Flux architecture, with excellent React bindings
* Persisting state
* Undo history
* Time travel debugging
* Monolithic serializable state
* Separate business logic from views completely
* shouldComponentUpdate methods become necessary to implement to prevent expensive rerenders but time consuming to write

Vuex

* Specifically designed for Vue

## React Styling

CSS

* Works just like it does normally with globally exposed styles, you simply add the className prop to React components to assign your styles to components

CSS Modules

* Scopes ordinary CSS files so they&#39;re only applied to the component files they&#39;re imported in
* Allows standard CSS syntax to be used with a component driven design

CSS in JS

* Allows CSS to be attached to a React component in its main JS file with dynamic templating, just like JSX

## JavaScript Build Tool

create-react-app

* Zero configuration
* The best, officially supported build tool for React projects
* Very easy to set up with many best practices and advanced developer tools enabled by default
* Very limited configurability, requires ejecting and disabling easy updates for more advanced features

Browserify

* Simplify concatenates module files together and prepares them for browser use
* More limited for configuring advanced compilation

Parcel

* ES modules
* Zero configuration
* Focused mainly toward apps

Rollup

* ES modules
* Advanced configuration
* Focused mainly toward packages

Webpack

* ES modules
* Advanced configuration support
* Focused mainly toward apps

## Shell

Bash

* The default on most modern systems
* Great script compatibility and the standard for most shell scripts

Zsh

* Mostly compatible with bash while having some advanced features for power users

Fish

* Easy to use with great defaults, but the syntax is mostly incompatible with bash

## Editor

Atom

* Easy to use
* Extensible

Emacs

* Extensible
* One of the most flexible and mature editors
* Runs in a GUI (prefered) or CLI
* Remote servers can be accessed with a local instance of Emacs using TRAMP
* Emacs can replace many programs and parts of your OS (web browsing, file browsing, IRC, terminal, etc)
* Very integrated experience, but highly customizable
* Can run as a daemon, meaning that large Emacs configs only have to load once when you login and then each editor instance opens very quickly
* It has built in videogames!
* Advanced editing keybinds that aren&#39;t modal (though Evil can be used to emulate Vim)

Vim

* Very ergonomic keybindings
* Best modal editing support built into an editor
* Runs in a CLI (prefered) or GUI
* Runs lightweight on remote servers

Visual Studio Code

* Easy to use
* Faster and lighter than Atom, while still based on web technologies (specifically Electron)
* One of the most ergonomic editors with many fantastic IDE like features built in and enabled by default, while still being as lightweight and flexible as most text editors
