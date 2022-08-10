import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createAuth0 } from '@auth0/auth0-vue'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Auth0
app.use(
  createAuth0({
    domain: "dev-f8g532lj.us.auth0.com",
    client_id: "uEHCohn5cEw6zkCONE0B1ipfzvUlcvba",
    redirect_uri: window.location.origin,
    useRefreshTokens: true,
    cacheLocation: "localstorage",
  })
)

app.mount('#app')
