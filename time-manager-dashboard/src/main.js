import './assets/main.css' // import du fichier CSS principal pour l'application

import { createApp } from 'vue' // Cela recupère la fonction createApp depuis le package Vue, qui est utilisée pour créer une nouvelle instance de l'application Vue.
import App from './App.vue'// Cela importe le composant racine de l'application depuis le fichier App.vue
import router from './router' // Cela importe le routeur configuré depuis le fichier router/index.js, qui gère la navigation entre les différentes pages de l'application.

const app = createApp(App)

app.use(router)

app.mount('#app') // Cela monte l'application Vue sur l'élément HTML avec l'ID 'app', ce qui rend l'application visible dans le navigateur.
