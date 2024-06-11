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
<div>Building for</div>
<div flex="~ gap3" items-center>the <span class="text-[#00DC82]">Edge</span></div>
</h1>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <div>Code Europe</div>
  <div text-sm opacity-50>June 11, 2024</div>
</div>

---
src: '../../reuse/intro.md'
---

---
layout: center
---

# What is the [Edge]{.text-green}?

<div v-click>

## Limited JavaScript environment running on CDN Nodes.

</div>

---

# On deploy, your [code is replicated]{.text-green} on many nodes

<div v-click class="flex items-center justify-center  p-4 rounded-lg">

<img src="/edge-network.svg" class="h-[400px] z-[40]" />

</div>

---

# It renders [quickly]{.text-green} and is [cheap to host]{.text-green}

<v-clicks>

- Runs milliseconds from end users
- 0ms cold starts
- No servers to maintain
- Automatic scaling
- Affordable
  - **Cloudflare free:** 100,000 requests/day for free
  - **Cloudflare $5/month:** 10 million requests / month + $0.30/million

</v-clicks>

---

# [Edge computing]{.text-green} providers

<v-clicks>

- CloudFlare Pages/Workers
- AWS Lambda@Edge
- Deno Deploy
- Fastly Compute
- Wasmer Edge
- Vercel Edge Functions (CloudFlare)
- Netlify Edge Functions (Deno)

</v-clicks>

---

# [Edge runtime]{.text-green} limitations

<v-clicks>

- Subset of Node.js & Browser APIs (V8 isolates) (see [runtime-compat](https://runtime-compat.unjs.io))
- Total server size limit (CloudFlare is 10 MB)

</v-clicks>

<div v-click class="pt-12">

# Nuxt got your back 🦾

</div>

---
layout: center
---

# What is [Nuxt]{.text-green}?


<div v-click>

## Web Framework to create full-stack applications with TypeScript and Vue.js

</div>

<div v-click>

October 2016 • 52K stars on GitHub • 2,7M downloads/month

</div>

---

# Nuxt [features]{.text-green}

<v-clicks>

- Server-side rendering (optional)
- Pre-rendering (SSG, ISR, Hybrid)
- File-based routing with code splitting
- Data fetching
- Layouts & Middleware
- State management
- Auto-imports
- Server API routes
- Layers (extend a Nuxt app)
- Modules ecosystem (200+)
- Deploy anywhere (no vendor lock-in)

</v-clicks>

---

## Proxy & polyfill for Node.js built-in modules with [unjs/unenv](https://unenv.unjs.io)

<div class="grid grid-cols-3 gap-4 mt-4 text-[11px]" v-click>

<div>

- **node:assert** - 🚧 mocked using proxy
- **node:assert/strict** - 🚧 mocked using proxy
- **node:async_hooks** - ✅ polyfilled 6/7 exports
- **node:buffer** - ✅ polyfilled all exports
- **node:child_process** - ✅ polyfilled all exports
- **node:cluster** - ✅ polyfilled all exports
- **node:console** - ✅ polyfilled 23/25 exports
- **node:constants** - ✅ polyfilled all exports
- **node:crypto** - ✅ polyfilled all exports
- **node:dgram** - ✅ polyfilled all exports
- **node:diagnostics_channel** - ✅ polyfilled all exports
- **node:dns** - ✅ polyfilled all exports
- **node:dns/promises** - ✅ polyfilled all exports
- **node:domain** - ✅ polyfilled all exports
- **node:events** - ✅ polyfilled 2/15 exports
- **node:fs** - ✅ polyfilled all exports
- **node:fs/promises** - ✅ polyfilled all exports
- **node:http** - ✅ polyfilled 16/17 exports
- **node:http2** - ✅ polyfilled all exports
- **node:https** - ✅ polyfilled all exports

</div>
<div>

- **node:inspector** - ✅ polyfilled all exports
- **node:inspector/promises** - 🚧 mocked using proxy
- **node:module** - ✅ polyfilled 9/21 exports
- **node:net** - ✅ polyfilled 14/18 exports
- **node:os** - ✅ polyfilled all exports
- **node:path** - ✅ polyfilled 15/16 exports
- **node:path/posix** - ✅ polyfilled 15/16 exports
- **node:path/win32** - ✅ polyfilled 15/16 exports
- **node:perf_hooks** - ✅ polyfilled all exports
- **node:process** - ✅ polyfilled 84/92 exports
- **node:punycode** - ✅ polyfilled all exports
- **node:querystring** - ✅ polyfilled all exports
- **node:readline** - ✅ polyfilled all exports
- **node:readline/promises** - ✅ polyfilled all exports
- **node:repl** - 🚧 mocked using proxy
- **node:stream** - ✅ polyfilled 17/37 exports
- **node:stream/consumers** - ✅ polyfilled all exports
- **node:stream/promises** - ✅ polyfilled all exports
- **node:stream/web** - ✅ polyfilled 16/17 exports
- **node:string_decoder** - ✅ polyfilled all exports

</div>

<div>

- **node:sys** - ✅ polyfilled all exports
- **node:timers** - ✅ polyfilled all exports
- **node:timers/promises** - ✅ polyfilled all exports
- **node:tls** - ✅ polyfilled all exports
- **node:trace_events** - ✅ polyfilled all exports
- **node:tty** - ✅ polyfilled all exports
- **node:url** - ✅ polyfilled 10/12 exports
- **node:util** - ✅ polyfilled all exports
- **node:util/types** - ✅ polyfilled all exports
- **node:v8** - ✅ polyfilled all exports
- **node:vm** - ✅ polyfilled all exports
- **node:wasi** - ✅ polyfilled all exports
- **node:worker_threads** - ✅ polyfilled all exports
- **node:zlib** - ✅ polyfilled all exports

</div>
</div>

---

## Produce an optimized output with [nuxt build]{.text-green}

<VideoDemo src="nuxt-optimized-output.mp4" class="mt-4" />

---

## Code Splitting for [minimal cold-start]{.text-green}

<VideoDemo src="server-performance.mp4" class="mt-4" />

---

[Hello World]{.text-green} Cloudflare worker code:

```ts
export default {
  async fetch(request) {
    return new Response('<h1>Hello World</h1>', {
      headers: {
        'content-type': 'text/html;charset=UTF-8'
      }
    })
  }
}
```

---
layout: center
---

## nuxt build [--preset=cloudflare-pages]{.text-green}

---
layout: center
---

# Live [Demo]{.text-green}

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

---

# [Hot]{.text-green} Module Replacement

<VideoDemo src="server-hmr.mp4" />

---

<div class="flex items-baseline justify-between gap-2">
  <h1><span class="text-green">End-to-end</span> TypeScript Support</h1>
  <span class="op-70 pr-3">Feels like RPC.</span>
</div>

<VideoDemo src="server-autocomplete.mp4" />

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

<p class="text-white! text-lg! mt-12!" v-click>

It's like Server Functions™ but you can keep writing REST API routes.

</p>

---

# [Nuxt Devtools]{.text-green} Integration

<VideoDemo src="server-devtools.mp4" />

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

# Nuxt[Hub]{.text-green}

Build full stack apps, on the edge.

<v-clicks>

- **SQL database** to store your application's data with `hubDatabase()`
- **Key-Value** to store JSON data accessible globally with low-latency with `hubKV()`
- **Blob storage** to store static assets, such as images, video and more with `hubBlob()`
- **Remote storage**: connect locally to your remote data with a secure proxy
- **Self-host** on your Cloudflare account, for free.

</v-clicks>

---

<div class="flex h-full items-center justify-between">
  <img src="/nuxthub-schema.png" class="w-2/3 mx-auto" />
</div>

---
layout: center
---

# Live [Demo]{.text-green}

---
layout: center
---

<div class="text-center">

# [draw]{.text-green}.nuxt.dev

<img src="qr-code.png" />

</div>

---
layout: end
src: '../../reuse/thanks.md'
---