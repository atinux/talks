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
  <div>Strapi Conf</div>
  <div text-sm opacity-50>May 13, 2025</div>
</div>

---
src: '../../reuse/intro.md'
---

---
layout: center
---

# What is the [Edge]{.text-green}?

<div v-click>

### Limited JavaScript runtime running on CDN Nodes.

</div>

<v-clicks class="mt-4">

- <lucide-circle-gauge class="text-green" /> Runs milliseconds from end users <span class="opacity-50">(low-latency)</span>
- <lucide-rocket class="text-green" /> 0ms cold starts
- <lucide-fingerprint class="text-green" /> Request / Context isolation <span class="opacity-50">(no shared state)</span>
- <lucide-circle-dollar-sign class="text-green" /> Affordable <span class="opacity-50">(100K requests/day for free on Cloudflare)</span>
- <lucide-circle-alert class="text-orange" /> Subset of Node.js & Browser APIs  <span class="opacity-50">(FS, HTTP, DOM, etc.)</span>
- <lucide-circle-alert class="text-orange" /> Small server size limit <span class="opacity-50">(10MB gzip maximum)</span>

</v-clicks>

---

# On deploy, your [code is replicated]{.text-green} on many nodes

<div v-click class="flex items-center justify-center  p-4 rounded-lg">

<img src="/edge-network.svg" class="h-[400px] z-[40]" />

<div class="fixed bottom-4 text-center text-xs text-green-400 opacity-40">*Cloudflare network</div>

</div>

---

# [Edge computing]{.text-green} providers

<v-clicks>

- AWS Lambda@Edge
- Bunny.net
- CloudFlare Pages/Workers
- Deno Deploy
- Fastly Compute
- Netlify Edge Functions
- Vercel Edge Functions
- Wasmer Edge

</v-clicks>

---

# [Edge runtime]{.text-green} limitations

<v-clicks>

- <lucide-circle-alert class="text-orange" /> Subset of Node.js & Browser APIs  <span class="opacity-50">(FS, HTTP, DOM, etc.)</span>
- <lucide-circle-alert class="text-orange" /> Small server size limit <span class="opacity-50">(10MB gzip maximum)</span>

</v-clicks>

<div v-click class="pt-12">

# Nuxt has your back 🦾

</div>

---
layout: center
---


<h2 class="font-semibold"><span class="text-green">Nuxt</span> is a progressive Web framework to create full-stack applications with TypeScript and Vue.js</h2>

<div v-click class="mt-8 text-gray-300">

October 2016 [•]{.opacity-50} 57K stars on GitHub [•]{.opacity-50} 3.2M downloads/month

</div>

<div v-click class="mt-8 flex items-center shrink-0 justify-around gap-2 opacity-50">
  <img width="152" height="16" alt="Louis Vuitton logo" class="h-5 shrink-0 max-w-[140px] mr-3" src="/brands/louis-vuitton.svg">
  <img width="161" height="18" alt="Back Market logo" class="h-5 shrink-0 max-w-[140px]" src="/brands/backmarket.svg">
  <img width="93" height="28" alt="Dassault Systemes logo" class="h-5 shrink-0 max-w-[140px]" src="/brands/dassault-systemes.svg">
  <img width="136" height="28" alt="Caudalie logo" class="h-5 shrink-0 max-w-[140px]" src="/brands/caudalie.svg">
  <img width="55" height="28" alt="Blizzard logo" class="h-5 shrink-0 max-w-[140px]" src="/brands/blizzard.svg">
  <img width="89" height="28" alt="Fielmann logo" class="h-5 shrink-0 max-w-[140px]" src="/brands/fielmann.svg">
  <img width="144" height="26" alt="Paul Smith logo" class="h-5 shrink-0 max-w-[140px]" src="/brands/paul-smith.svg">
</div>

---

# Nuxt [Features]{.text-green}

<v-clicks>

- <lucide-file-code-2 class="text-green" /> Server-side rendering <span class="opacity-50">(can be disabled globally or at the route level)</span>
- <lucide-globe class="text-green" /> Pre-rendering <span class="opacity-50">(SSG, ISR, Hybrid)</span>
- <lucide-milestone class="text-green" /> Routing & layouts with automatic code splitting
- <lucide-unplug class="text-green" /> Data fetching at the component level
- <lucide-shield-check class="text-green" /> Protect routes with middleware
- <lucide-database class="text-green" /> State management
- <lucide-pc-case class="text-green" /> Server API routes
- <lucide-layers class="text-green" /> Layers system <span class="opacity-50">(Domain-Driven Design)</span>
- <lucide-puzzle class="text-green" /> Modules ecosystem <span class="opacity-50">(270+)</span>
- <lucide-cloud-lightning class="text-green" /> Deploy anywhere <span class="opacity-50">(no vendor lock-in)</span>

</v-clicks>

---

# Nuxt [Official Modules]{.text-green}

<v-clicks>

- `@nuxt/content`{.text-green} – The file-based CMS with support for Markdown, YAML, JSON
- `@nuxt/eslint`{.text-green} – Project-aware, easy-to-use, extensible and future-proof ESLint integration
- `@nuxt/fonts`{.text-green} – Add custom web fonts with performance in mind
- `@nuxt/icon`{.text-green} – Icon module for Nuxt with 200,000+ ready to use icons from Iconify
- `@nuxt/image`{.text-green} – Add images with progressive processing, lazy-loading, resizing and providers support
- `@nuxt/scripts`{.text-green} – Add 3rd-party scripts without sacrificing performance
- `@nuxt/test-utils`{.text-green} – Test utilities for Nuxt
- `@nuxt/ui`{.text-green} – The Intuitive UI Library powered by Reka UI and Tailwind CSS

</v-clicks>

<div v-click class="pt-6">
Install with one command:

```bash
npx nuxt module add <module>
```

</div>

---

# <logos-strapi-icon class="h-10" /> Strapi with <logos-nuxt-icon class="h-9" /> Nuxt

<v-clicks>

1. `npx nuxt module add strapi`
2. Set the `STRAPI_URL` environment variable
3. Start using the Strapi Vue composables:
    ```ts
    const { find } = useStrapi()
    const { login } = useStrapiAuth()
    const user = useStrapiUser()

    // Example: Fetch restaurants
    const restaurants = await find('restaurants')

    // Example: Login
    await login({
      identifier: 'test@test.com',
      password: 'password'
    })
    ```
</v-clicks>

<div v-click class="mt-4">
Learn more on <a href="https://strapi.nuxtjs.org">strapi.nuxtjs.org</a>
</div>

---
layout: center
---

# [Nuxt]{.text-green} is ready for the [Edge]{.text-green}

---

# Node.js [Proxy & Polyfill]{.text-green}

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

# Optimized [Build Output]{.text-green}

<VideoDemo src="optimized-output.mp4" class="mt-4" />

---

# Optimized [Cold Start]{.text-green}

<VideoDemo src="server-performance.mp4" class="mt-4" />

---

# Nuxt [Build Presets]{.text-green} for the Edge

```bash
# Build for Cloudflare Workers
nuxt build --preset=cloudflare_module

# Build for Deno Deploy
nuxt build --preset=deno_deploy

# Build for Netlify Edge Functions
nuxt build --preset=netlify_edge

# Build for Vercel Edge Functions
nuxt build --preset=vercel_edge
```

<div v-click class="pt-4">

```ts
// Generated output format
export default {
  async fetch(request) {
    // Your Nuxt code
  }
}
```

</div>

---
layout: center
---

# Live [Demo]{.text-green}

---
layout: center
---

<div class="text-center">

# [nuxt]{.text-green}.com

## github.com/[nuxt]{.text-green}

</div>

---
layout: center
---

# Not a big fan of [Vue]{.text-green}?

<v-click>

### The whole Server & Build Engine is [agnostic]{.text-pink} to the frontend framework.

</v-click>

<img src="/nitro.svg" class="h-12 mt-6" v-click />

---

# [Nitro]{.text-pink} in the wild

<v-clicks>

- <logos-react/> [React]{.text-cyan}: TanStack Start
- <logos-vue/> [Vue]{.text-green}: Nuxt
- <logos-angular-icon/> [Angular]{.text-red}: AnalogJS
- <logos-solidjs-icon/> [SolidJS]{.text-blue}: SolidStart

</v-clicks>

---
layout: center
---

<div class="text-center">

# [nitro]{.text-pink}.build

## github.com/[nitrojs]{.text-pink}

</div>
---
layout: end
src: '../../reuse/thanks.md'
---