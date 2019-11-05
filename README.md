## App web para el sitio ificial de ACM UD

El cliente de este proyecto esta realizado en Angular 7

### proyecto en local

- clonar el repositorio y dentro de la carpeta ejecutar 

```javascript
npm install
```

para correr el proyecto ejecutar
```javascript
npm start
```
o
```javascript
ng serve
```
por defecto el proyecto correra en [localhost:4200](http://localhost:4200)

los lineamientos y reglas del proyecto estan en  [contribucion y lineamientos](./CONTRIBUTING.md)

---

### despliegue en gh-pages

```bash
npm install -g angular-cli-ghpages
```

```bash
npm i angular-cli-ghpages --save-dev
```

```bash
ng build --prod --base-href "https://ACMUD.github.io/App-web/"
```

```bash
npx angular-cli-ghpages --dir=dist/App-web
```