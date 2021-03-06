# React TodoList with Electron and Mobx
[![Build Status](https://travis-ci.org/technoboom/electron-mobx-react-todolist.svg?branch=master)](https://travis-ci.org/technoboom/electron-mobx-react-todolist)
[![Code Climate](https://codeclimate.com/github/technoboom/electron-mobx-react-todolist/badges/gpa.svg)](https://codeclimate.com/github/technoboom/electron-mobx-react-todolist)
[![Coverage Status](https://coveralls.io/repos/github/technoboom/electron-mobx-react-todolist/badge.svg?branch=master)](https://coveralls.io/github/technoboom/electron-mobx-react-todolist?branch=master)

Cross platform TodoList App built with Electron + React + Mobx

## Main advantages:
- Cross platform (built with Electron)
- Uses React as view
- Uses Mobx for state management
- Hot page/app reload
- Dev Tools (mobx-react-devtools)
- Unit and Snapshot testing with Jest

## How to start:
Clone the project:
```
git clone https://github.com/technoboom/electron-mobx-react-todolist
```
Start the react dev server:
```
npm run start
```
Run electron application:
```
npm run electron
```

## Tests:
Type the next command and follow the instructions:
```
npm run test
```
To run all tests, type `a` and press `Enter`.
Watch Usage:
```
Watch Usage
 › Press o to only run tests related to changed files.
 › Press p to filter by a filename regex pattern.
 › Press t to filter by a test name regex pattern.
 › Press q to quit watch mode.
 › Press Enter to trigger a test run.
```
Also, you can run Jest with `--watchAll` flag to enable watch mode.

## Features:
- [x] The ability to run both browser and Electron application
versions.
- [x] The ability to add new todo.
- [ ] The ability to close/edit/remove a selected todo.
- [ ] Saving and loading data in localStorage.