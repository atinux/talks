---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
fonts:
  sans: DM Sans
---

<h1 flex="~ col" font-semibold>
<div>Authentication in</div>
<div flex="~ gap3" items-center><img src="/nuxt.svg" class="h-14" /></div>
</h1>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <div>Nuxt Nation</div>
  <div text-sm opacity-50>November 13, 2024</div>
</div>

---
src: '../../reuse/intro.md'
---

---
layout: center
---

# What is [Authentication]{.text-green}?

<div v-click>

Authentication is the process of **verifying a user's identity** to determine if they should have access to specific web resources.

</div>

<div v-click>

Typically through methods like username/password combinations, social logins, or security tokens.

</div>

---

# Existing [Authentication]{.text-green} Solutions

<v-clicks depth="2">

- **`useCookie()`** to store a JWT from an external API
  - Nuxt modules like Strapi or Directus use this approach
- **`@sidebase/nuxt-auth`** is a module to handle authentication supporting Auth.js and local strategies
  - OAuth (GitHub, Google...) or custom
  - Credentials (email/password)
  - Auth middleware
- **`better-auth`** is a generic authentication library compatible with Nuxt
  - Made to work with full-stack applications with a database
  - Supports OAuth, Credentials, Magic Link, and more
- **`nuxt-auth-utils`** is a Nuxt module to add authentication helpers to your Nuxt application
  - OAuth providers
  - Password encryption
  - WebAuthn / Passkeys
</v-clicks>

---

# Nuxt [Auth Utils]{.text-green}

Add Authentication to Nuxt applications with secured & sealed cookies sessions.

<v-clicks>

- <lucide-calendar-check text-blue /> Released November, 7th 2023
- <lucide-star text-yellow /> 900+ GitHub stars
- <lucide-git-pull-request text-purple /> 100+ pull requests
- <lucide-heart-handshake text-green /> 50 contributors
- <lucide-download text-red /> 32k monthly npm downloads
  <img src="/nuxt-auth-utils-downloads.png" class="mt-2 h-50 block" />

</v-clicks>

---

# Nuxt Auth Utils [Features]{.text-green}

<v-clicks>

- <lucide-rocket text-green /> Supports Hybrid Rendering (SSR, CSR, SWR & Pre-rendering)
- <lucide-lock text-green /> 20+ OAuth Providers supported
- <lucide-fingerprint text-green /> WebAuthn / Passkeys
- <lucide-text-cursor-input text-green /> Password Hashing
- <simple-icons-typescript text-green /> Fully typed
- <lucide-globe text-green /> Made to work on multiple JS runtime (Node.js, Workers, Deno, Bun, ...)
- <lucide-triangle-alert text-amber /> Works only with the Nuxt server running (does not work with `nuxt generate`)

</v-clicks>

---

# Installation

<v-click>

1. Install the module

```bash
npx nuxt module add auth-utils
```

<div class="text-xs italic">

This command will install the npm package `nuxt-auth-utils` and add the module to your `nuxt.config.ts` file.

</div>

</v-click>

<v-click>

2. Set a password for session encryption in your `.env` file:
```bash
NUXT_SESSION_PASSWORD=<a-random-string-with-at-least-32-characters>
```

</v-click>

<v-click>

<div class="mt-8"><span class="text-green">That's it!</span> You can start using the various helpers provided by the module.</div>

</v-click>

---

# Set a User Session

```ts{1-2,17|3|5-12|13-16|all}
// server/api/login.post.ts
export default defineEventHandler(async (event) => {
  const { password } = await readBody(event)

  if (password === 'admin') {
    await setUserSession(event, {
      user: {
        role: 'admin'
      }
    })
    return { success: true }
  }
  throw createError({
    statusCode: 401,
    message: 'Wrong password',
  })
})
```

---

# Vue Composable

```vue
<script setup lang="ts">
const { loggedIn, user, session, fetch, clear } = useUserSession()
</script>
```

<v-click>

```ts{1,12|2,3|4,5|6,7|8,9|10,11}
interface UserSessionComposable {
  // Computed indicating if the user is logged in.
  loggedIn: ComputedRef<boolean>
  // The user object if logged in, null otherwise.
  user: ComputedRef<User | null>
  // The session object.
  session: Ref<UserSession>
  // Fetch/Refresh the user session from the server.
  fetch: () => Promise<void>
  // Clear the user session and remove the session cookie.
  clear: () => Promise<void>
}
```

</v-click>

---

```vue{1-3,11|5-11|15-18|19-22|all}
<script setup lang="ts">
const { loggedIn, user, session, fetch: fetchUserSession, clear } = useUserSession()
const password = ref('')

async function login() {
  await $fetch('/api/login', {
    method: 'POST',
    body: { password: password.value }
  })
  await fetchUserSession()
}
</script>

<template>
  <div v-if="loggedIn">
    <h1>Hello Admin!</h1>
    <button @click="clear">Logout</button>
  </div>
  <form v-else @submit.prevent="login">
    <input type="password" v-model="password" />
    <button type="submit">Login</button>
  </div>
</template>
```

---

# Demo

<VideoDemo src="/password-demo.mp4" />

---

## Sealed Cookies Sessions (writing)

<div v-click class="bg-gray-800/80 rounded-lg py-1 mt-2 inline-block backdrop-blur-sm">

```mermaid{scale: 0.5}
sequenceDiagram
    participant Client
    participant Server
    participant setUserSession()
    
    Client->>Server: POST - /api/login
    
    Server-->>setUserSession(): Encrypt session data with NUXT_SESSION_PASSWORD
    setUserSession()-->>Server: Return encrypted data
    Server->>Client: Set encrypted cookie in response header
    
    note over Client: Cookie stored in browser (http only)
```

</div>

<img v-click src="/nuxt-session-cookie.png" class="h-47 bg-gray-800/80 rounded-lg p-2 mt-4 inline-block backdrop-blur-sm" />

---

## Sealed Cookies Sessions (reading)

<div v-click class="bg-gray-800/80 rounded-lg py-1 mt-2 inline-block backdrop-blur-sm">

```mermaid{scale: 0.5}
sequenceDiagram
    participant Client
    participant /api/_auth/session
    participant getUserSession()
    
    Client->>/api/_auth/session: useUserSession().fetch()
    
    /api/_auth/session-->> getUserSession(): Decrypt session data with NUXT_SESSION_PASSWORD
    getUserSession()-->>/api/_auth/session: Return decrypted data
    note over /api/_auth/session: Run sessionHooks.callHook('fetch')
    note over /api/_auth/session: Delete `secure` property from session data
    /api/_auth/session->>Client: Return decrypted session data
```

</div>

<img v-click src="/nuxt-session-decrypt.png" class="h-47 bg-gray-800/80 rounded-lg p-2 mt-4 inline-block backdrop-blur-sm" />

---

# Nuxt Auth Utils [Sealed Cookies]{.text-green}

<v-clicks>

- <lucide-triangle-alert text-amber /> **Maximum size of 4096 bytes**: store only what you need on server (use fetch hook to fill more data)
- <lucide-lock text-green /> **HTTP only**: cannot be read by JavaScript
- <lucide-lock text-green /> **Secure by default**: cannot be sent over HTTP
- <lucide-lock text-green /> **SameSite=Strict** by default: cannot be sent in cross-site requests
- <lucide-settings /> **Customize with `runtimeConfig.session`**
    ```ts
    export default defineNuxtConfig({
      // ...
      runtimeConfig: {
        session: {
          session: {
            maxAge: 60 * 60 * 24 * 7 // 1 week
          }
        }
      }
    })
    ```

</v-clicks>

---

# [Private]{.text-green} Session Data

Store sensitive data in the `secure` property of the session:

```ts
await setUserSession(event, {
  secure: {
    privateToken: '123'
  }
})
```

<v-click>

```ts
// server/api/user.get.ts
export default defineEventHandler(async (event) => {
  const session = await getUserSession(event)
  session.secure.privateToken // '123'
})
```

</v-click>

<v-click>

```vue
<script setup lang="ts">
const { session } = useUserSession()
session.value.secure // undefined
</script>
```

</v-click>

---

# TypeScript Support

<v-switch>

<template #1>

```ts
// auth.d.ts
declare module '#auth-utils' {
  interface User {
    role: 'admin' | 'user'
  }

  interface UserSession {
    // Add your own fields
  }

  interface SecureSessionData {
    // Add your own fields
  }
}

export {}
```

</template>

<template #2>

<img src="/nuxt-session-ts.png" class="h-47 bg-[#021628] rounded-lg p-2 mt-4 inline-block" />

</template>
</v-switch>

---

# OAuth Providers

```ts{1|3-10|all}
function defineOAuth<Provider>EventHandler(config: OAuthConfig): EventHandler

interface OAuthConfig {
  config?: TConfig
  onSuccess: (event: H3Event, { user, tokens }: OAuthResult) => Promise<void> | void
  onError?: (event: H3Event, error: H3Error) => Promise<void> | void
}
```

<v-click>

20+ OAuth providers supported.

```ts
'auth0' | 'battledotnet' | 'cognito' | 'discord' | 'dropbox' | 'facebook' | 'github' | 'gitlab' |
'google' | 'instagram' | 'keycloak' | 'linear' | 'linkedin' | 'microsoft' | 'paypal' | 'polar' |
'spotify' | 'steam' | 'tiktok' | 'twitch' | 'vk' | 'x' | 'xsuaa' | 'yandex' | 'zitadel'
```

</v-click>

---

# GitHub OAuth

<v-switch>

<template #1-5>

```bash
# .env
NUXT_OAUTH_GITHUB_CLIENT_ID=<your-client-id>
NUXT_OAUTH_GITHUB_CLIENT_SECRET=<your-client-secret>
```

</template>

<template #2>

```ts
// server/routes/auth/github.get.ts
export default defineOAuthGitHubEventHandler({
  async onSuccess(event, { user, tokens }) {
    
    



    
    
  }
})
```

</template>

<template #3>

```ts
// server/routes/auth/github.get.ts
export default defineOAuthGitHubEventHandler({
  async onSuccess(event, { user, tokens }) {
    // Store the user and the tokens in the session
    await setUserSession(event, {
      user,
      secure: { tokens }
    })
    
    
  }
})
```

</template>

<template #4>

```ts
// server/routes/auth/github.get.ts
export default defineOAuthGitHubEventHandler({
  async onSuccess(event, { user, tokens }) {
    // Store the user and the tokens in the session
    await setUserSession(event, {
      user,
      secure: { tokens }
    })
    // Redirect to the home page
    return sendRedirect(event, '/')
  }
})
```

</template>


<template #5>

```vue
<script setup lang="ts">
const { user, clear } = useUserSession()
</script>

<template>
  <div v-if="user">
    <h1>Hello {{ user.login }}!</h1>
    <button @click="clear">Logout</button>
  </div>
  <a v-else href="/auth/github">Login with GitHub</a>
</template>
```

</template>

<template #6>

<VideoDemo src="/github-oauth-demo.mp4" class="!h-[460px]" />

</template>

</v-switch>

---

# More Server Session Helpers

```ts{1-2|4-5|7-8|10-11}
// Replace a user session. Same behaviour as setUserSession, except it does not merge data with existing data
await replaceUserSession(event, data)

// Get the current user session
const session = await getUserSession(event)

// Clear the current user session
await clearUserSession(event)

// Require a user session (send back 401 if no `user` key in session)
const session = await requireUserSession(event)
```

---

# Password Hashing

Server helpers to hash and verify passwords, powered by `scrypt` and running on all JS runtimes.

```ts{1-3|4-6|all}
// Hash a password using scrypt
const hashedPassword = await hashPassword(password)

// Securely verify a password against a hash
const isValid = await verifyPassword(hashedPassword, 'user_password')
```

<v-click>

```ts
export default defineNuxtConfig({
  // ...
  auth: {
    hash: {
      scrypt: {
        keyLength: 80
      }
    }
  }
})
```

</v-click>

---

# WebAuthn / Passkeys

Server helpers to register and verify WebAuthn credentials.

<v-switch>

<template #1-3>

```bash
npx nypm i @simplewebauthn/server@11 @simplewebauthn/browser@11
```

</template>

<template #2>

```ts
export default defineNuxtConfig({
  auth: {
    webAuthn: true
  }
})
```

</template>

<template #3>

```ts
// server/api/webauthn/register.post.ts
export default defineWebAuthnRegisterEventHandler({
  // The credential creation has been successful
  async onSuccess(event, { credential, user }) {
    

    
    
    
    
    
    
    
  },
})
```

</template>

<template #4>

```ts
// server/api/webauthn/register.post.ts
export default defineWebAuthnRegisterEventHandler({
  // The credential creation has been successful
  async onSuccess(event, { credential, user }) {
    const dbUser = await useDB().upsertUserWithCredential(user, credential)

    
    
    

    
    
    
  },
})
```

</template>

<template #5>

```ts
// server/api/webauthn/register.post.ts
export default defineWebAuthnRegisterEventHandler({
  // The credential creation has been successful
  async onSuccess(event, { credential, user }) {
    const dbUser = await useDB().upsertUserWithCredential(user, credential)

    // Set the user session
    await setUserSession(event, {
      user: {
        id: dbUser.id
      },
      loggedInWith: 'credential'
    })
  },
})
```

</template>

<template #6>

```vue
<script setup lang="ts">
const { user, fetch: fetchUserSession } = useUserSession()
const { register } = useWebAuthn({
  registerEndpoint: '/api/webauthn/register', // Default
})




</script>

<template>
  




</template>
```

</template>

<template #7>

```vue
<script setup lang="ts">
const { user, fetch: fetchUserSession } = useUserSession()
const { register } = useWebAuthn({
  registerEndpoint: '/api/webauthn/register', // Default
})
const email = ref('')
function signUp() {
  register({ userName: email.value }).then(fetchUserSession)
}
</script>

<template>
  
  



</template>
```

</template>

<template #8>

```vue
<script setup lang="ts">
const { user, fetch: fetchUserSession } = useUserSession()
const { register } = useWebAuthn({
  registerEndpoint: '/api/webauthn/register', // Default
})
const email = ref('')
function signUp() {
  register({ userName: email.value }).then(fetchUserSession)
}
</script>

<template>
  <div v-if="user">Hello {{ user.email }}</div>
  <form v-else @submit.prevent="signUp">
    <input v-model="email" type="email" placeholder="Email" />
    <button type="submit">Sign up</button>
  </form>
</template>
```

</template>

<template #9>

<VideoDemo src="/auth-passkeys.mp4" class="!h-[460px]" />

</template>

</v-switch>

---

# Hybrid Rendering

When using Nuxt `routeRules` to prerender or cache your pages, Nuxt Auth Utils will not fetch the user session during prerendering but instead fetch it on the client-side (after hydration).

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  routeRules: {
    '/': { prerender: true }
  }
})
```

---

# Hybrid Rendering

```vue{all|8-9}
<script setup lang="ts">
const { loggedIn, clear } = useUserSession()
</script>

<template>
  <header>
    <h1>Auth Demo</h1>
    <button v-if="loggedIn" @click="clear">Logout</button>
    <NuxtLink v-else to="/password">Login</NuxtLink>
  </header>
  <main>
    <h1>Welcome to my landing page!</h1>
    <p>This page is pre-rendered at build time, though the auth state will be fetched on client-side.</p>
  </main>
</template>
```

---

# Hybrid Rendering

<VideoDemo src="/nuxt-session-no-auth-state.mp4" />

---

# Hybrid Rendering

````md magic-move {lines: false}

```vue{8-9}
<script setup lang="ts">
const { loggedIn, clear } = useUserSession()
</script>

<template>
  <header>
    <h1>Auth Demo</h1>
    <button v-if="loggedIn" @click="clear">Logout</button>
    <NuxtLink v-else to="/password">Login</NuxtLink>
  </header>
  <main>
    <h1>Welcome to my landing page!</h1>
    <p>This page is pre-rendered at build time, though the auth state will be fetched on client-side.</p>
  </main>
</template>
```

```vue{8-11}
<script setup lang="ts">
const { loggedIn, clear } = useUserSession()
</script>

<template>
  <header>
    <h1>Auth Demo</h1>
    <AuthState>
      <button v-if="loggedIn" @click="clear">Logout</button>
      <NuxtLink v-else to="/password">Login</NuxtLink>
    </AuthState>
  </header>
  <main>
    <h1>Welcome to my landing page!</h1>
    <p>This page is pre-rendered at build time, though the auth state will be fetched on client-side.</p>
  </main>
</template>
```

```vue{8-14}
<script setup lang="ts">
const { loggedIn, clear } = useUserSession()
</script>

<template>
  <header>
    <h1>Auth Demo</h1>
    <AuthState>
      <button v-if="loggedIn" @click="clear">Logout</button>
      <NuxtLink v-else to="/password">Login</NuxtLink>
      <template #placeholder>
        <button disabled>...</button>
      </template>
    </AuthState>
  </header>
  <main>
    <h1>Welcome to my landing page!</h1>
    <p>This page is pre-rendered at build time, though the auth state will be fetched on client-side.</p>
  </main>
</template>
```

````

---

# Hybrid Rendering

<VideoDemo src="/nuxt-session-with-auth-state.mp4" />

---

# What's coming for [v1.0]{.text-green}

<v-clicks depth="2">

- **Session storage**: ability to store the session data outside of the cookie
  - Allow to revoke user sessions remotely
  - Bypass the 4096 bytes limit of cookies
- **Auth middleware**: to easily protect your application routes
- **More OAuth providers**: Apple, BlueSky... pull request welcome 💚

</v-clicks>

---
layout: end
src: '../../reuse/thanks.md'
---