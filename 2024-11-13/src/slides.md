---
layout: cover
highlighter: shiki
css: unocss
title: 'Authentication in Nuxt'
author: 'Atinux'
colorSchema: dark
transition: fade-out
mdc: true
fonts:
  sans: DM Sans
---

<h1 flex="~ col" font-semibold v-click>
<div>Authentication in</div>
<div flex="~ gap3" items-center><img src="/nuxt.svg" class="h-14" /></div>
</h1>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <div>Nuxt Nation</div>
  <div text-sm opacity-50>November 13, 2024</div>
</div>

<!--
Hello everyone, it's a pleasure to see you again at Nuxt Nation.

[click] Today I'm going to talk about Authentication in Nuxt applications.
-->

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

Typically through methods like username/password combinations, social logins or security tokens.

</div>

<!--
So what is authentication?

[click] It's the process of verifying a user's identity to know if they should have access to specific web resources.

[click] It can be through credentials, social login, api tokens and more
-->

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
</v-clicks>

<!--
Let's talk about the existing auth solutions for Nuxt.

[click] First, we have the Nuxt's useCookie composable

[click] The Strapi and Directus modules uses this approach for example

[click] Next we have the Auth module made by Sidebase supporting the Auth.js library and local strategies

[click] Which support many OAuth providers

[click] Credentials signup & signin

[click] It also have an Auth middleware to easily protect pages

[click] Better Auth is a new agnostic Typescript library that is compatible with Nuxt

[click] It is made for full-stack developmemt with a database next to the Nuxt server

[click] It also support OAuth, Credentials, Magic Link and more

[click] Lastly we have the nuxt-auth-utils module, adding helpers to add Authentication to your Nuxt apps
-->

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

<!--
Today I will talk about Nuxt Auth Utils.

It leverages secured & sealed cookies to store the user sessions within your application.

[click] I released it a year ago

[click] it is open source and now have more than nine hundred stars on GitHub

[click] In a year I've seen more than a hundred pull requests

[click] From 50 contributors around the world

[click] It is now downloaded more than thirty thousand times per month on npm
-->

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

<!--
Let's talk about the Features of Nuxt Auth Utils

[click] It works with Hybrid Rendering, meaning that if you have a cached page or ssr disable for some, it will keep working.

[click] It support more than 20 popular OAuth providers

[click] Add passwordless authentication using the web auth standard

[click] It has server helpers to hash and verify passwords

[click] Is is written in Typescript and support types augmentation

[click] Of course, it works on all JS runtime

[click] But it needs a server to run as it needs to encrypt the cookies in API routes
-->

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

<!--
The installation is quite simple.

[click] Run the nuxt module add auth-utils command within your project

[click] Then add the NUXT_AUTH_PASSWORD environment variable using a random string of at least 32 characters, if you don't create it, the module will do it for you in development.

[click] That's it! We can now add user sessions to our Nuxt app
-->

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

<!--
Let's start by creating a server API route.

This route is living on /api/login and only accept POST request, this is why we have the .post.ts suffix in the filename.

We export an eventHandler as the Nuxt server is running Nitro.

[click] First, we read our body and get the password field

[click] If the password is equal to admin, we create a user session and mention that this user is an admin. 

As well as sending back a success object. PLEASE don't do this in production, this example is made for simplicity haha

[click] If the password is wrong, we throw a four o one error
-->

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

<!--
On the application side, Nuxt Auth Utils expose a useUserSession composable with many features.

[click] Let's have a look at the different values

[click] A loggedIn computed that indicates if our user is logged in or not

[click] Our user object as computed

[click] Our session object, that also include our user and additional fields

[click] A fetch method to refresh the user session from the server

[click] A clear method to remove the cookie and set back our user session to null
-->

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
  </form>
</template>
```

<!--
Let's work on our Vue page now to use our login API route.

First, we get the properties we need and create the password ref.

[click] We also declare our login function that calls our API route and refresh our user session on client side

[click] In our template, we can use the loggedIn value to know if our user is authenticated, call the clear function to logout

[click] And if logged out, display a form to login with a password
-->

---

# Demo

<VideoDemo src="/password-demo.mp4" />

<!--
Now, let's see how our code looks like.

If I enter a wrong password, I can see the 401 status code and our "wrong password" message

If I enter the right password, we can see our valid /api/login http request and a second API call made to the session endpoint.
-->

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

<!--
Let's have a look on how Sealed cookies works.

[click] When we call our /api/login endpoint, the setUserSession() will encrypt the object using iron crypto with our NUXT_SESSION_PASSWORD env variable.

It will also add the Set-Cookie header to our request.

[click] By opening the Chrome devtools, we can see our sealed cookie with the nuxt-session name.
-->

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

<!--
Now let's see how it works when reading the session on the app side.

[click] when calling fetch from useUserSession(), the session endpoint will be called.

This endpoint is added by the nuxt auth utils module. It will decrypt the session data using the session password env variable.

Then, before returning the session data, the endpoint call the 'fetch' hook on server for you to extend it with database user data for example.

It also remove the `secure` property before returning the object that you get in the session object of useUserSession.

[click] This is how it looks like at the end in your devtools
-->

---

# Nuxt Auth Utils [Sealed Cookies]{.text-green}

<v-clicks>

- <lucide-triangle-alert text-amber /> **Maximum size of 4096 bytes**: store only what you need on server (use fetch hook to fill more data)
- <lucide-lock text-green /> **HTTP only**: cannot be read by JavaScript (XSS attacks)
- <lucide-lock text-green /> **Secure by default**: cannot be sent over HTTP
- <lucide-lock text-green /> **SameSite=Lax** by default: to prevent CSRF attacks
- <lucide-settings /> **Customize with `runtimeConfig.session`**
    ```ts
    export default defineNuxtConfig({
      // ...
      runtimeConfig: {
        session: {
          maxAge: 60 * 60 * 24 * 7 // 1 week
        }
      }
    })
    ```

</v-clicks>

<!--
Let's see the benefits and drawbacks of the sealed cookies approach.

[click] the maximum size of a cookie is 4kB, this means that you should only store the data you need on server api routes, like user Id for instance. And use the fetch hook to add more data that is needed for the frontend.

[click] the cookie are stored with HTTP only so JavaScript cannot read its value

[click] the cookie are also set as secure to only be send over HTTPS to avoid any man in the middle attacks

[click] they are set as SameSite Lax to mitigate cross-site request forgery attacks

[click] You can customize the cookie with the runtimeConfig.session object
-->

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

<!--
To store private data that you don't want to send the frontend, you can use the secure property when setting the user session.

[click] In API routes, the secure property will be defined

[click] In frontend code, the secure property will be undefined

This is similar to runtime config and public runtime config in Nuxt
-->

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

<!--
Nuxt Auth Utils is written in TypeScript and allow you to add types augmentation for the user sessions.

[click] Create a auth.d.ts file to extend any properties of the User, UserSession and secure fields

[click] This will provide autocompletion in your backend and frontend
-->

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

<!--
To add Social authentication, Nuxt Auth Utils provides tree-shakable Nitro server handler for each provider it supports.

[click] the function expect and object with a required, onSuccess callback.

An optional config object and an optional OnError callback.

[click] ---

[click] You can find the list of the supported OAuth providers we support, Google, GitHub and Microsoft being the most popular.
-->

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
      user: { login: user.login },
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
      user: { login: user.login },
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

<!--
Let's see an example of a GitHub OAuth.

[click] First, we need to add our GitHub application Client ID and Client Secret  as  environment variables

[click] Next, we create our /auth/github Nitro route using our define oauth github event handler function and adding our onSuccess callback

[click] In this example, we don't use a database, we store the Github user login within the session and its token in our secure property to access them only in API routes.

[click] Lastly, we redirect our user back to the home page.

[click] On the frontend, we can display our user if logged in, or a link to call our server route, note that we don't use NuxtLink here as the /auth/github endpoint is a Nitro route.

[click] Let's see how it looks in video, by clicking on the link, we are redirected to GitHub OAuth page, which then redirect us back to our /auth/github endpoint, which set the cookie and finally redirect us to the home page.
-->

---

# More Server Session Helpers

```ts{1-2|4-5|7-8|10-11}
// Replace a user session. Same as setUserSession except it does not merge data
await replaceUserSession(event, data)

// Get the current user session
const session = await getUserSession(event)

// Clear the current user session
await clearUserSession(event)

// Require a user session (send back 401 if no `user` key in session)
const session = await requireUserSession(event)
```

<!--
Nuxt Auth Utils exposes more server utils such as a way to replace the whole user session

[click] get User session to know if the API call is authenticated or not

[click] clear user session to tell the browser to remove the nuxt-session cookie

[click] and finally require user session to protect api routes by throwing a four o one if the API call is not authenticated
-->

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

<!--
If you plan to let users signup and signin with email and password, we expose a hashPassword server function to safely hash a password to store in database.

It uses scrypt under the hood so it can work in all JS runtimes.

[click] Use the verify password server function to time safely check the validity of the entered password against a stored hash one

[click] ---

[click] you can customize the scrypt options using your nuxt.config file
-->

---

# WebAuthn / Passkeys

Server helpers to register and verify WebAuthn credentials. Thank you @Gerbuuun implementing it!

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
        id: dbUser.id,
        email: dbUser.email
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

<!--
Nuxt Auth Utils also support the web auth standard to add passwordless auth to your Nuxt application.

I would like to thank Gerben Mulder for implementing this feature!

[click] First you need to install the simplewebauth peer dependencies

[click] Then, enable the web auth n option in your nuxt config

[click] Create an API route using the define web auth n register event handler, similar to OAuth, you add a onSuccess callback

[click] Let's pretend here that I am upserting my user in my database

[click] And finally set our user session

[click] On the frontend, we can get the register function by calling the useWebAuthn composable

[click] Let's create our email ref and our signUp function calling our register endpoint and refreshing our session if the signup process is valid

[click] Finally, we add our form and logged in state based on our user session

[click] Let's see the final result in video, shall we?

Let's signup with email, confirm the signup using the Chrome profile and using my fingerprint. It's all good and we can see in the network tab the API calls to the register and session endpoints.
-->

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

<!--
As you may know, Nuxt 3 comes with hybrid rendering, meaning that you can specify that some pages of your app are prerendered, some others are without server-side rendering, et cetera.

Nuxt Auth Utils knows about the state of the page and will load the session on client-side if it could not load it on server-side while avoiding any hydration errors.
-->

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

<!--
Let's see the code of our pre-rendered landing page.

[click] We can see in our header that we display a login or logout button based on the user session state
-->

---

# Hybrid Rendering

<VideoDemo src="/nuxt-session-no-auth-state.mp4" />

<!--
Let's see how it looks in production once we pre-rendered the landing page. For this demo I am running in a 4G network to properly see what is happening.

Let's login on come back to our landing page on client-side.

Now, let's refresh our page.

As we can see, we have the Login link that is changed after hydration to a Logout button, I think we can do better in term of user experience.
-->

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

<!--
Let's go back to our buttons here.

[click] And wrap them with the AuthState component that Nuxt Auth Utils expose

[click] We can now use a placeholder slot to customize what is rendered when the authentication state is unknown, by default it is empty, so here we will add a disabled button with tree dots.
-->

---

# Hybrid Rendering

<VideoDemo src="/nuxt-session-with-auth-state.mp4" />

<!--
Let's checkout our updated demo using the new AuthState component.

If I refresh the landing page, we can see our disabled button, then the login link.

Let's login and come back to our landing page.

Now if I refresh, we can see a nicer behavior with our disabled button changing to a logout button. This is up to you to improve the design to be as good as possible.
-->

---

# What's coming for [v1.0]{.text-green}

github.com/atinux/nuxt-auth-utils

<v-clicks depth="2">

- **Session storage**: ability to store the session data outside of the cookie
  - Allow to revoke user sessions remotely
  - Bypass the 4096 bytes limit of cookies
- **Auth middleware**: to easily protect your application routes
- **More OAuth providers**: Apple, BlueSky... pull request welcome 💚
- **A documentation website**: to help you getting started with the library
- **RFC**: to migrate to `@nuxt/auth-utils`

</v-clicks>

<!--
So what's coming before 1.0?

[click] we are working on adding the possibility to plug a session storage

[click] This will allow the possibility to revoke user sessions remotely

[click] as well as by-passing the 4kb limit of cookie storage

[click] I plan to add a global and local auth middleware to easily protect your applications routes, even though it is quite simple today already!

[click] More OAuth providers such as Apple or Bluesky, your pull request is more than welcome, as most of the OAuth providers has been implemented by the community.

[click] A nice documentation website as now the readme is getting very long!

[click] Lastly, I will open an RFC to discuss with the community about migrating to `@nuxt/auth-utils`.
-->

---
layout: end
src: '../../reuse/thanks.md'
---
