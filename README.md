<h1 align="center">🌟 Be the Hero 🌟</h1>

----
<br>

### `❓ What's it? ❓`

> Application created in Omnistack 2020 Event!!

> **Mental Maps about the project's structure and components created in [Draw.io](https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiunsCVoNnvAhVrF7kGHYIZBjkQFjAAegQIAxAD&url=https%3A%2F%2Fapp.diagrams.net%2F&usg=AOvVaw28S23h4_WI8toant9FYDpi).**

----
<br>

### `⚒️ Tools ⚒️`

* Visual Studio Code;
* Git;
* NodeJS;
* Yarn;
* Express, Expo, Nodemon, KnexJS, Cors, React Icons, React Router Dom, Axios, Intl, React Navigation, Celebrate, Jest, Cross-en and Supertest libraries;
* Insomnia
* React;
* Reack-Native;
* SQLite

----
<br>

### `⚙️ Run ⚙️`

> **Express (_backend project_)**

- Installing
```
npm install express
```

<br><br>

> **Nodemon (_backend project_)**

- Installing
```
npm install nodemon -D
```

<br>

- In `package.json` file, scripts section
```javascript
"scripts": {
    "start": "nodemon index.js"
 },
```

<br>

- Starting
```
npm start
```

<br><br>

> **Knex (_backend project_)**

- Installing
```
npm install knex
npm install sqlite3
```

<br>

- In `knexfile.js`
```javascript
// development environment
development: {
  client: 'sqlite3',
  connection: {
    filename: './src/database/db.sqlite'
  },
  migrations: {
    directory: './src/database/migrations'
  },
  useNullAsDefault: true,
},
```

<br>

- Starting
```
npx knex init
```

<br><br>

> **Knex Migrations (_backend project_)**

- Creating
```
npx knex migrate:make create_ong
npx knex migrate:make create_incidents
```

<br>

- Executing
```
npx knex migrate:latest
```

<br>

- Checking Executions
```
npx knex migrate:status
```

<br><br>

> **Cors (_backend project_)**

- Installing
```
npm install cors
```

<br><br>

> **Celebrate (_backend project_)**

- Installing
```
npm install celebrate
```

<br><br>

> **Jest (_backend project_)**

- Installing
```
npm install jest -D
```

<br>

- Starting
```
npx jest --init >> 'yes' for scripts >> run in node >> 'no' for coverage report >> 'yes' for mock calls
```

<br><br>

> **Cross-env (_backend project_)**

- Installing
```
npm install cross-env
```

<br><br>

> **SuperTest (_backend project_)**

- Installing
```
npm install supertest -D
```

<br><br>

> **React Icons (_frontend project_)**

- Installing
```
npm install react-icons
```

<br><br>

> **React Routter Dom (_frontend project_)**

- Installing
```
npm install react-router-dom
```

<br><br>

> **Axios (_frontend and mobile project_)**

- Installing
```
npm install axios
```

<br><br>

> **INTL (_mobile project_)**

- Installing
```
npm install intl
```

<br><br>

> **Expo (_cmd in mobile project_)**

- Installing
```
npm install -g expo-cli
```

<br>

- Starting
```
expo init mobile
blank template
expo install expo-constants
expo install expo-mail-composer
```

<br><br>

> **Yarn (_cmd in mobile project_)**

- Installing
```
npm install --global yarn
```

<br>

- Starting
```
yarn start
```

<br><br>

> **React Navigations (_cmd in mobile project_)**

- Installing
```
npm install @react-navigation/native
expo install react-native-screens react-native-safe-area-context
npm install @react-navigation/stack
```

<br>
----
<br>

### `📫 Reach Me 📫`

> **Email:** **[csfelix08@gmail.com](mailto:csfelix08@gmail.com?)**

> **Linkedin:** **[linkedin.com/in/csfelix/](https://www.linkedin.com/in/csfelix/)**

> **Instagram:** **[instagram.com/c0deplus/](https://www.instagram.com/c0deplus/)**

----

> **Portfolio:** **[CSFelix.io](https://csfelix.github.io/)**

> **Kaggle:** **[DSFelix](https://www.kaggle.com/dsfelix)**
