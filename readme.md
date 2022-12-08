# Projet Test - A

Start 2022/12/05 - End 2022/12/08

## Table of Contents
1. [General Info](#general-info)
2. [Stacks](#stacks)
3. [Rules](#rules)
4. [Installation](#installation)
5. [Pages](#pages)
6. [Use](#use)
7. [TODOS](#todos)

<br/>

### General Info
---
Node.js Typescript API MVC

<br/>

### Stacks
---
- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [csvtojson](https://www.npmjs.com/package/csvtojson)
- [jest](https://jestjs.io/)


<br/>

### Rules

- Typescript
- 1 test at least
- no type = any

<br/>

### Installation
---

Terminal commands used :

```
$ npm init // To install package.json
$ npm install typescript --save-dev   // To install TS and also node_modules
$ npm install --save-dev lite-server // To visualise
$ npx tsc --init  // To create tsconfig and compile TS
$ npx tsc -w   // TS watch mode (separate terminal window)
$ npm install nodemon --save-dev //to compile JS code when update
$ npm install csvtojson --save // To get data from csv to json files
$ npm install --save-dev jest ts-jest @types/jest  //To test
```

<br/>

### Pages
---


#### Files to update
.gitignore :
- node_modules
- data/events.csv (don't know if a private file or not))

normally in .gitignore but to show the work it's better to let it :
- SRC/


<br/>

### Use
---
- go to url : "https://localhost:8000/api/events/${lat&lon}" or "https://${port}/api/events/${lat&lon}"
- get json file with clicks and impressions

<br/>

### Todos
- [X] CSV to JSON
- [X] connect to Server
- [X] onepoint
- [X] R de CRUD
- [X] CSV to JSon OOP
- [X] 1 test at least
- [X] check errors and type all missing

##### Future Todos
- [X] update for many GPS Points of interest the function utils/FunctionForArray/chooseTheName (for now, online for 2 points of interest)
- [ ] reduce the newJson ( create a function/class ?)
- Maybe more type, better MVC 

<br/>

#### IDEA for the API
---
- [ ] cronjob to update the CSV file if generate auto and the JSon file auto
- [ ] Possibility to install \$ npm install gps-distance //To get the distance between 2 gps coordinates or multiples (maybe useful for multiples)
<br/>




