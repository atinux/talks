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
<div>Full Stack Development</div>
<div flex="~ gap3" items-center>with <Nuxt class="h-12" /></div>
</h1>

<div v-click uppercase text-sm tracking-widest>
Yes, we can.
</div>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <div>Vue Amsterdam</div>
  <div text-sm opacity-50>Fev. 28th 2024</div>
</div>

---
src: '../../reuse/intro.md'
---

---
layout: center
---

# Traditional [Nuxt]{.text-green} Application

---
layout: center
clicks: 8
---

<div class="flex items-center gap-2 relative">
  <div i-ph-desktop-duotone text-7xl />
  <div v-click :class="[$clicks >= 5 ? 'i-ph-arrow-left-duotone' : 'i-ph-arrow-right-duotone']" text-4xl />
  <div v-after i-logos-nuxt-icon text-7xl />
  <div v-click :class="{
    'i-ph-arrow-right-duotone': $clicks < 4,
    'i-ph-arrow-left-duotone': $clicks >= 4 && $clicks < 6,
    'i-ph-arrows-horizontal-duotone text-amber-400 text-6xl': $clicks >= 6
  }" text-4xl />
  <div v-after i-ph-computer-tower-duotone text-7xl />
  <v-click>
    <div i-logos-strapi-icon text-3xl class="-right-[40px] absolute" />
    <div i-logos-contentful text-3xl class="-right-[20px] top-[90px] absolute" />
    <div i-simple-icons-wordpress text-white text-3xl class="-right-[20px] -top-[50px] absolute" />
    <div i-logos-nestjs text-3xl class="-right-[70px] -top-[34px] absolute" />
    <div i-logos-supabase-icon text-3xl class="-right-[75px] top-[66px] absolute" />
  </v-click>
  <div v-click="7" class="absolute text-amber-400 top-[50px] text-sm left-[210px]">latency</div>
  <div v-click="8" class="absolute text-amber-400 top-[65px] text-lg left-[135px]">cost $</div>
  <div v-click="8" class="absolute text-amber-400 top-[65px] text-lg right-[7px]">cost $</div>
</div>

<!--
Let's take a look at how it works. Here we have our customer using a fancy computer.

[click] When going to my website, it hits my Nuxt server. And in most common cases, my Nuxt app will call another API.

[click] This server can either be a headless CMS, service API or a custom API built for a specific use case.

[click] We can think of some examples such as Strapi, Supabase, Wordpress, etc.

[click] This API sends back the data, most of the time as JSON

[click] Lastly, my Nuxt server will server render my Vue application and return HTML, CSS and JavaScript in order to have a universal application.

[click] This API calls made between my Nuxt server and the API can suffer from lantency if they are located on different locations

[click] And on top of this, I would have to pay for two servers to run
-->

---
layout: center
---

# [Nuxt]{.text-green} Server Routes

<!--
With Nuxt 3, we introduced the Server Routes.
-->

---

# [File-based]{.text-green} Routing

```bash {1|2,5|2-4|6-7|8-9|all}
-| server/
---| api/
-----| blog/
-------| [slug].get.ts   # /api/blog/:slug (only GET)
-----| hello.ts          # /api/hello
---| routes/
-----| sitemap.xml.ts        # /sitemap.xml
---| middleware/
-----| log.ts            # log all requests
```

<div v-after class="mt-8 inline-flex items-center gap-1">Powered by <NitroIcon class="inline-block h-6" /> <a href="https://nitro.unjs.io">Nitro</a>.</div>

---

# API Route [Format]{.text-green}

```ts{1,10|2|3|4|5|7|9}
export default defineEventHandler(async (event) => {
  const path = event.path
  const params = event.context.params
  const query = getQuery(event)
  const body = await readBody(event)

  throw createError({ statusCode: 400, message: 'bad input' })

  return { all: 'good' }
})
```

<div v-after class="mt-8 inline-flex items-center gap-1">Powered by <a href="https://h3.unjs.io">H3 Utils</a>.</div>

---

# [Hot]{.text-green} Module Replacement

<VideoDemo src="/server-hmr.mp4" />

---

<div class="flex items-baseline justify-between gap-2">
  <h1><span class="text-green">High</span> Performance</h1>
  <span class="op-70 pr-3">Code Splitting for minimal cold-start</span>
</div>

<VideoDemo src="/server-performance.mp4" />

---

<div class="flex items-baseline justify-between gap-2">
  <h1><span class="text-green">End-to-end</span> TypeScript Support</h1>
  <span class="op-70 pr-3">Feels like RPC.</span>
</div>

<VideoDemo src="/server-autocomplete.mp4" />

---

# [Function calls]{.text-green} during SSR

<p class="text-white! text-lg! mt-12!" v-click :class="{ 'op-100!': $clicks >= 1 }">

During server-side rendering, calling `useFetch` or `$fetch` for Nuxt Server routes will emulate a request and call the exported function, [saving HTTP round-trip time and bandwidth]{.text-green}.

</p>

<div class="w-full flex gap-2 justify-between items-center">

<v-after>

```vue
<script setup>
const { data } = await useFetch('/api/hello')
</script>

<template>
  <div>{{ data }}</div>
</template>
```

</v-after>

<div v-click i-ph-arrow-right-duotone text-7xl />

<div v-after>

```ts{2-4}
export default defineEventHandler(
  async (event) => {
    return { hello: 'world' }
  }
)
```

</div>

</div>

<p class="text-white! text-lg! mt-12!" v-click>

Calling `$fetch` inside your API routes to call other API routes will also call the function directly.

</p>

---

# [Nuxt Devtools]{.text-green} Integration

<VideoDemo src="/server-devtools.mp4" />

---
layout: center
---

# What about [storing data]{.text-green}?

---
layout: center
---

<div class="relative">
  <div i-logos-nuxt-icon text-8xl />
  <!-- <div class="absolute w-[216px] h-[216px] border -top-[60px] -left-[60px] rounded-full" /> -->
  <div v-click class="absolute -top-[120px] left-[10px] text-xl text-center items-center inline-flex flex-col">
    Database
    <div i-ph-database-duotone text-7xl />
  </div>

  <div v-click class="absolute top-[110px] -left-[80px] text-xl text-center">
    <div i-ph-coin-duotone text-7xl />
    KV
  </div>
  <div v-click class="absolute top-[80px] left-[130px] text-xl text-center">
    <div i-ph-shapes-duotone text-7xl />
    Blob
  </div>
</div>


---
layout: center
---

# I [got something]{.text-green} for you...

---

# Meet [NuxtHub]{.text-green}

Build full stack apps, on the edge.

<v-clicks>

- **SQLite database** to store your application's data with `hubDatabase()`
- **Key-Value** to store JSON data accessible globally with low-latency with `hubKV()`
- **Blob storage** to store static assets, such as images, video and more with `hubBlob()`
- **Remote storage**: connect locally to your remote data with a secure proxy
- **Self-host** on your Cloudflare account, for free.

</v-clicks>

---
layout: center
---

# Demo

---
layout: center
---

<div class="text-center">

# [Open]{.text-green} Source

TODO: make <a href="https://github.com/nuxt-hub/core" target="_blank">repository</a> open source and set <a href="https://dash.cloudflare.com/c8539464e3cff13ca824f869b9306ae7/pages/view/nuxthub-module/domains" target="_blank">custom domain</a>

</div>

---
layout: center
---

<div class="text-center">

# [hub]{.text-green}.nuxt.com

<h2 v-click>github.com/<span class="text-green">nuxt-hub/core</span></h2>

</div>

---

# Come say [Hi!]{.text-green}

<img src="/nuxtlabs-booth.png" alt="NuxtLabs" class="h-[260px] rounded-lg mb-4" />

<v-clicks>

- **30% off on UI Pro** with `VUEAMSTERDAM2024` until Friday
- Free Nuxt Beanies (stock limited)
- Stickers Stickers Stickers

</v-clicks>

---
layout: end
src: '../../reuse/thanks.md'
---