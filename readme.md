# Projet Test - A

## Table of Contents
1. [General Info](#general-info)
2. [Stacks](#stacks)
3. [Rules](#rules)
4. [Installation](#installation)
5. [Pages](#pages)
6. [Use](#use)
7. [TODOS](#todos)
8. [FAQs](#faqs)

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


<br/>

### Rules

- Typescript
- 1 test at least
- no type = any


<br/>

### Installation
---

Terminal commands use:

```
$ npm init // To install package.json
$ npm install typescript --save-dev   // To install TS and also node_modules
$ npm install --save-dev lite-server // To visualise
$ npx tsc --init  // To create tsconfig and compile TS
$ npx tsc -w   // TS watch mode (separate terminal window)
$ npm install nodemon --save-dev //to compile JS code when update
$ npm install csvtojson --save
```

<br/>

### Pages
---


#### Files to update
.gitignore (node_modules, data/events.csv (don't know if a private file or not))

normally in .gitignore but to show the work it's better to let it.
- SRC/


<br/>

### Use
---
- go to url : "https://localhost:8000/api/events/${location}" or "https://${port}/api/events/${location}"
- get json file with clicks and impressions

<br/>

### Todos
- [X] CSV to JSON
- [X] connect to Server
- [X] onepoint
- [X] R de CRUD
- [X] CSV to JSon OOP
- [ ] check errors and type all missing
- [ ] 1 test at least

##### Future Todos
- [ ] update correctly the function utlis/FunctionForArray/chooseTheName (with the right formula for distance)
- [ ] update correctly the function for models/dataModels/findByLocation
<br/>

#### IDEA for the API
---
- [ ] cronjob to update the CSV file if generate auto and the JSon file auto

<br/>

### FAQs
---




