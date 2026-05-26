---
layout: cover
highlighter: shiki
css: unocss
colorSchema: dark
transition: fade-out
mdc: true
fonts:
  sans: Geist
---

# The [Vite]{.text-primary} Ecosystem

<h2 v-click>

From [DX]{.text-primary} to [AX]{.text-primary}, Building the Open-Source Stack for the AI Era

</h2>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <div>Adeo Dev Summit</div>
  <div text-sm opacity-50>May 26, 2026</div>
</div>

<!--
Hello everyone. I'm really happy to be here at the Adeo Dev Summit.

Today I will be talking about the shift toward Agent Experience and how we are building the open source stack for the AI era.
-->

---
layout: center
---

# You are [the proof]{.text-primary} Vite matters

<v-clicks class="mt-8 text-2xl">

- <vscode-icons-file-type-vue /> **451** Vue.js apps
- <vscode-icons-file-type-vite /> **419** Vite apps
- <vscode-icons-file-type-nuxt /> **37** Nuxt apps

</v-clicks>

<div v-click class="mt-12 opacity-70 text-lg">
... at Adeo, today.
</div>

<!--
Let me start with these numbers.

At Adeo and Decathlon combined, you run more than 450 Vue.js applications. More than 400 are built with Vite. And about 37 are Nuxt.

First: thank you. You are exactly why this ecosystem exists and why it's now the default in our industry.
-->

---
layout: center
---

# Vite is no longer a [bundler]{.text-primary}

<v-click>

## It became a [platform]{.text-primary}.

</v-click>

<!--
Vite started in 2020 as a dev server and a bundler. Fast HMR, native ES modules.

But somewhere along the way, Vite stopped being just a bundler. Today the Vite ecosystem powers full-stack frameworks, server runtimes, AI tools, observability, content. It became a platform — the same way Node.js did 15 years ago.

And like every platform, the interesting part is not the core. It's the things built on top.
-->

---
layout: center
---

# From [DX]{.text-primary} → [AX]{.text-primary}

:br

<v-click>

### Developer Experience

Tools that help humans ship faster. :br :br

</v-click>

<v-click>

### Agent Experience

Tools that help AI agents ship correctly.

</v-click>

<div v-click class="mt-12 text-lg opacity-80">

The same tools, used by different kinds of users. :br Last week, 26% of `nuxt dev` commands were run by agents.

</div>

<!--
Here's the shift.

For 15 years we optimized for Developer Experience — DX. Fast feedback loops, great error messages, clean APIs. We did that for humans.

In 2026, our codebases aren't only edited by humans anymore. They're edited by agents. Claude, Cursor, Copilot, internal coding agents. They read your code, they write it, they run it. Some of you are already seeing this

These agents are users of your stack too. They need structured logs they can read, predictable builds, clear APIs, deterministic deploy targets.

Last week, 26% of the `nuxt dev` commands were run by agents.

So the question is: what does your toolchain look like, if you take Agent Experience seriously?
-->

---
layout: center
---

# Agents are [crawling docs]{.text-primary}

<p v-click>How can we improve agents accessing your docs?</p>

<p v-click class="text-yellow">55% of nextjs.org traffic is from AI agents.</p>

<!--
Agents are crawling your documentation.

So how can we improve their experience accessing them?

Did you know that 55% of nextjs traffic is from AI agents nowadays?
-->

---

# Agents are good at [Markdown]{.text-primary}

<p v-click>Best practices for agent readability.</p>

<v-clicks>

- Serve an `llms.txt` file at your site root
- Allow AI bots in `robots.txt`
- Publish a `sitemap.xml` with `<lastmod>` dates
- Publish a `sitemap.md` with headings and links
- Return Markdown if header is `Accept: text/markdown`
  - Add a `Link: <https://example.com/path>; rel="canonical"` header
  - Add a `<link rel="alternate" type="text/markdown" href="/path.md">` in the HTML page

</v-clicks>

<p v-click>Bonus: you save money to teams using agents to fetch your docs as less tokens are used when fetching Markdown content.</p>

<!--
Something we all now today, agents are good at Markdown

Here's some best practices you can follow today for improving the agent readability.

- (bullet points)
-->

---

# Example on **nuxt.com**

<img src="/nuxt-website-markdown.png" >

<!--
Here's an example on requesting nuxt.com docs with the text/markdown accept header.

Reducing the size of the input agents have to consume to understand the data is part of the agent experience.
-->

---

# MCP (Model Context Protocol)

<p v-click>Help agents find up-to-date resources and reduce hallucinations.</p>

<p v-click>Nuxt UI MCP expose these tools:</p>

<v-clicks>

- Search: `search_components`, `search_composables`, `search_icons`
- Components: `get_component`, `get_component_metadata`
- Documentation: `search_documentation`, `get_documentation_page`
- Templates: `list_templates`, `get_template`
- Examples: `list_examples`, `get_example`
- Migration: `get_migration_guide`

</v-clicks>

<p v-click>Bonus: <a href="https://ui.nuxt.com/mcp" target="_blank">ui.nuxt.com/mcp</a> detects if the header accepts `text/html` and returns the documentation on how to install the MCP client for the user.</p>

<!--
And there's more, adding an MCP to your documentation helps agents find up-to-date resources, categorize them, and reduce hallucinations.

We shipped the Nuxt UI MCP with these tools.

- (bullet points)
-->

---

# Nuxt UI MCP usage for last 30 days

<img src="/nuxt-ui-mcp-usage.png">

<!--
And our Nuxt UI MCP is widely used, last month we had 20M requests.
-->

---

# We got your back with [Docus]{.text-primary} <DocusIcon class="h-8 inline-flex relative mb-3" />

<p v-click>A page in your wiki is dead weight if your AI can't read it. Docus makes sure it does.</p>

<v-clicks>

- Native MCP server + auto-generated `llms.txt`
- Built-in AI assistant connected to any LLMs
- Multi-language by design, backed by `@nuxtjs/i18n`
- Expose your Agent skills using the `skills/` directory
- Self-hosted on your infra: your stack knowledge never leaves Adeo
- Open source under MIT license

</v-clicks>

<p v-click><a href="https://docus.dev" target="_blank">docus.dev</a></p>

<!--
But don't worry, we got your back with Docus.
Because a page in your wiki is dead weight if you AI can't read it, Docus makes sure it does.
If you know VitePress, it is our version of it, but better haha, built with Nuxt, and made for the agentic era.
It ships with:
- A Native MCP server + auto generated llms.txt
- ...
-->

---
layout: cover
---

# Demo

Docus meets Adeo Design System.

[docus-adeo-mozaic.vercel.app](https://docus-adeo-mozaic.vercel.app)

<!--
Let's have a quick demo using Adeo Design System.
-->

---
layout: cover
---

# <UnjsNitro class="h-14 inline-flex relative mb-2" /> [Nitro]{.text-primary}

## Extends your Vite application with a production-ready server, compatible with any runtime

<!--
First pillar: Nitro. If you've touched Nuxt, you've touched Nitro — it's the server engine underneath. But Nitro is also a standalone framework you can use on its own, or with any frontend.
-->

---

# Why adding Nitro to your Vite app

<v-clicks class="mt-8 opacity-80">

- **Deploy anywhere**: run the same code on Node.js, CF Workers, Deno, Bun, AWS, Vercel, and more.
- **Production server**: add a `server.ts` file or create your server logic in `server/` folder.
- **Built for speed**: Vite 8 (rolldown-powered) dev experience with HMR on the server, sub-second cold production builds, and output bundles under 60kB.
- **Batteries included**: storage, caching, and SQL across runtimes, all optional,
- **Minimal overhead**: progressive approach, add it as a Vite plugin.

</v-clicks>

---

# Nitro [Build Presets]{.text-primary}

<v-click>

```bash
# Same code, different targets

NITRO_PRESET=node-server vite build         # Your Kubernetes clusters, EC2, on-prem
NITRO_PRESET=bun vite build             # Bun runtime
NITRO_PRESET=cloudflare-module vite build    # Cloudflare Workers
NITRO_PRESET=vercel vite build               # Vercel
NITRO_PRESET=aws-lambda vite build           # AWS Lambda
NITRO_PRESET=deno-deploy vite build          # Deno Deploy
NITRO_PRESET=azure vite build                # Azure Functions
```

</v-click>

<div v-click class="mt-6 text-lg">

One codebase. [20+ deploy targets]{.text-primary}. No vendor lock-in.

</div>


<div v-click class="mt-6 text-lg">

Bonus: many platforms are auto-detected abd supported with zero configuration

</div>

<!--
This is the money slide.

Same code. You change `NITRO_PRESET` — one environment variable — and you get a build for a completely different platform.

Node? Done — and that's the one you care about, because that one drops straight into your Kubernetes clusters. The same K8s clusters that the talk earlier today about Kubernetes-native workflows referenced.

Bun? Cloudflare Workers? AWS Lambda? Vercel? Azure? All done. Same code.

For a group like Adeo this is enormous. You have different countries with different regulatory constraints, different cloud preferences. With Nitro, your developers write the same code, and your platform team picks the target per market.

Vercel sponsors a lot of work on Nitro because of this. Vercel's product is the best paved-road experience to deploy. But the OSS guarantees you're never locked in — you can move tomorrow.
-->

---

# Nitro [in the wild]{.text-primary}

<v-clicks>

- <vscode-icons-file-type-nuxt /> **Vue** with Nuxt
- <vscode-icons-file-type-reactjs /> **React** with Tanstack Start
- <vscode-icons-file-type-angular /> **Angular** with AnalogJS
- <logos-solidjs-icon /> **Solid** with SolidStart
- <UnjsNitro /> **Standalone** with Nitro as your API server or Vite Plugin

</v-clicks>

<!--
Nitro is also not a Vue thing. It's framework-agnostic.

Nuxt uses it. TanStack Start — the new React full-stack framework — uses it. AnalogJS for Angular uses it. SolidStart uses it.

And critically: you can use it without any frontend framework. If all you want is a fast, deploy-anywhere API server with file-based routing, you can scaffold it in one command.

This is what I mean by platform. Nitro became the de-facto server runtime for the modern JS stack.
-->

---
layout: cover
---

# Demo

<p v-clicks>Add Nitro to your Vite app</p>

<!--
Live coding starts now.

The app we're going to build is a product assistant — imagine a chatbot for store associates at Leroy Merlin or Decathlon. An associate asks "what's the difference between these two drills?" and the assistant answers, using product data and an LLM.

I start with a plain Vite Vue app — what you know — and I add Nitro on top.

[switch to terminal — checkpoint: 01-nitro]
-->

---
layout: cover
---

# Agentic Apps

How to make our Vite + Nitro apps AI-native

<!--
Pillar 2: the AI stack. This is the layer on top of Nitro that makes our app AI-native.

I'm going to move fast on AI Gateway because Saad and Bruno already made the case for it this morning. My job is to show you the developer side — what the code actually looks like.
-->

---

# Every LLM speaks [markdown]{.text-primary}

<v-clicks>

- ChatGPT, Claude, Gemini, Mistral —> all stream markdown
- Tool descriptions are markdown
- Agent reports are markdown
- RAG knowledge bases are markdown
- These slides are markdown

</v-clicks>

<div v-click class="mt-8 text-lg opacity-80">

Markdown is the [HTML of LLMs]{.text-primary}.

</div>

<!--
Markdown is everywhere in AI apps.

Every LLM you interact with — ChatGPT, Claude, Gemini, Mistral, the model your team is fine-tuning internally — they all output markdown by default. Bold, italic, code blocks, lists, tables.

Tool descriptions in tool calling — markdown. Agent reports — markdown. RAG documents — markdown. The slides I'm showing you right now — markdown, rendered by Slidev.

Markdown is the HTML of LLMs. So we need a fast, streaming-aware markdown parser. That's where most apps fail today.
-->

---

# The [naive way]{.text-primary} most apps still do it

```ts
let buffer = ''
for await (const chunk of llmStream) {
  buffer += chunk
  setHtml(marked.parse(buffer))  // 😬 re-parse the whole string, every token
}
```

- 🐌 O(n²) work as the buffer grows
- 🌪️ Layout jumps as headings and tables get rewritten
- 🧱 Blocks the main thread on long responses
- 💔 Awful UX on mobile

<!--
This is what most Vue or React chatbot apps do today. On every new token, re-parse the entire accumulated string. Re-render the HTML.

Works for 50 tokens. Collapses on 5000. Quadratic work. Layout jumps. Main thread blocked.

For a mobile-first group — and you heard the Decathlon talk this afternoon on mobile-first e-commerce — this is the difference between a fluid AI experience and one that feels broken.

We need a parser designed for streaming.
-->

---
layout: cover
---

# <ComarkIcon class="h-12" />

<v-click>

### A fast, [streaming-ready markdown]{.text-primary} parser and renderer.

</v-click>

<v-clicks class="mt-8 text-lg opacity-80">

- **Incremental**, only re-parses what changed
- **AST-first**, render to Vue, React, Svelte, raw HTML or ANSI (terminal)
- **Auto-close** incomplete markdown syntax
- **Extensible** with plugins (Math, Highlight, Table of Contents, etc)

</v-clicks>

<p v-click><a href="https://comark.dev" target="_blank">comark.dev</a></p>

<!--
Comark is a streaming markdown parser designed for the AI era.

Incremental: a new token doesn't re-parse the whole document, it patches the AST. O(n²) becomes O(1) per token.

AST-first: render to whatever UI library you want.

Streaming-native: the API is a `TransformStream`. You pipe the LLM output in, you pipe parsed AST nodes out.

About 30x faster than `marked` on long streaming responses, in our benchmarks. And it doesn't block the main thread.

Now let me show you the glue.
-->

---

# AI SDK + Comark

<v-switch>

<template #1>

```ts
// API route
import { defineHandler } from 'nitro'
import { streamText } from 'ai'

export default defineHandler(async (event) => {
  const result = streamText({
    model: 'anthropic/claude-sonnet-4.6',
    prompt: 'Compare these two drills...',
  })

  return result.toUIMessagesStreamResponse()
})
```

</template>

<template #2>

```vue {2,6,7,20-22}
<script setup lang="ts">
import { Chat } from '@ai-sdk/vue'
import { isTextUIPart } from 'ai'
import { Comark } from '@comark/vue'

const input = ref('')
const chat = new Chat()
</script>

<template>
  <div v-for="message in chat.messages" :key="message.id">
    <template v-for="(part, i) in message.parts" :key="i">
      <p v-if="isTextUIPart(part) && message.role === 'user'">{{ part.text }}</p>
      <Suspense v-else-if="isTextUIPart(part)">
        <Comark :markdown="part.text" :streaming="part.state === 'streaming'" caret />
      </Suspense>
    </template>
  </div>

  <form @submit.prevent="chat.sendMessage({ text: input }); input = ''">
    <input v-model="input" />
  </form>
</template>
```

</template>


<template #3>

```vue {3,4,11-18}
<script setup lang="ts">
import { Chat } from '@ai-sdk/vue'
import { isTextUIPart } from 'ai'
import { Comark } from '@comark/vue'

const input = ref('')
const chat = new Chat()
</script>

<template>
  <div v-for="message in chat.messages" :key="message.id">
    <template v-for="(part, i) in message.parts" :key="i">
      <p v-if="isTextUIPart(part) && message.role === 'user'">{{ part.text }}</p>
      <Suspense v-else-if="isTextUIPart(part)">
        <Comark :markdown="part.text" :streaming="part.state === 'streaming'" caret />
      </Suspense>
    </template>
  </div>

  <form @submit.prevent="chat.sendMessage({ text: input }); input = ''">
    <input v-model="input" />
  </form>
</template>
```

</template>

</v-switch>

<!--
Vercel's AI SDK gives you `streamText` — one API to talk to any LLM provider. You don't write OpenAI-specific code anymore. You write AI SDK code, and you switch providers with one line.

Pipe that stream through Comark. What comes out is a stream of typed AST nodes — heading, paragraph, code, list item — that you render with any UI library.

Three lines of glue, and you have a streaming, performant, provider-agnostic markdown chatbot.

The AI SDK is fully open source. It runs anywhere — Vercel, your K8s, your laptop. Same code.
-->

---

# Vercel [AI Gateway]{.text-primary}

Switch provider with [one string]{.text-primary}

```ts
import { streamText } from 'ai'

const result = streamText({
  // Change one string, change provider:
  model: 'anthropic/claude-sonnet-4.6',
  // model: 'openai/gpt-5',
  // model: 'mistral/mistral-large',
  // model: 'meta/llama-3.3-70b',
  prompt: '...',
})
```

<v-clicks class="mt-4">

- One endpoint, 100+ models
- Built-in retries, fallbacks, caching
- Observability: cost, latency, errors per model
- Spend caps and rate limits per team
- Zero Data Retention and No Prompt Training selection
- All you need is to set the `AI_GATEWAY_API_KEY` env variable

</v-clicks>

<!--
One string. That's the API surface for changing provider.

Decathlon France could use Anthropic. Leroy Merlin Italy could use Mistral for European data residency. ManoMano could use a self-hosted Llama. Same code, three configs.

You get retries and fallbacks for free. Caching. Observability. Cost per team. Spend caps. The platform team gets a control surface, developers stay productive.

In a minute I'll switch provider live, in front of you. But first — one more thing the AI SDK gives you that fits perfectly with what your teams are already building.
-->

---

# <LogosNuxtIcon class="h-14" /> [Nuxt]{.text-primary}

## Vite, with the [boring parts]{.text-primary} already done. :br :br

<v-clicks>

- **File-based routing** with automatic code-splitting per page and smart prefetching
- **Layouts** for reusable components across pages without re-rendering
- **SSR-safe data fetching** with retries, fallbacks, and caching
- **300+ modules** to extend functionality when you need it
- **Nitro under the hood** to deploy anywhere and fast boot times
- **Layers** for sharing code across your 419 apps when you need it
  ```ts
  export default defineNuxtConfig({
    extends: [
      './features/product/',
      './features/cart/',
      './features/support/',
      './features/blog/'
    ]
  })
  ``` 

</v-clicks>

<!--
This is what you get the moment you `npx nuxi init`.

File-based routing with automatic code-splitting per page. No bundle the user doesn't need.

A layouts system. Type-safe runtime config. SSR-safe data fetching with `useFetch` — solves the hydration mismatch problem at the framework level.

270+ official and community modules. `@nuxt/image` does image optimization. `@nuxt/fonts` handles web fonts with zero CLS. `@nuxt/content` is a Markdown-based CMS. `@nuxt/ui` is the design system.

Nitro under the hood — which means everything we said in pillar 1 about deploy anywhere applies to every Nuxt app automatically.

i18n, SEO, head tags, sitemap generation — all one-command modules.

And layers — this is the killer feature for a group like Adeo. You can share code across your 419 apps with a clean composition model. No more "copy-paste the auth composable across 50 repos."
-->

---

# Install a [module]{.text-primary}, one command

```bash
npx nuxt add image
npx nuxt add fonts
npx nuxt add content
npx nuxt add ui
```

<v-click class="mt-6 opacity-80">

Each command:
- Install the npm package of the module
- Adds its config to `nuxt.config.ts`
- Plugs into the Nuxt lifecycle

</v-click>

<a href="https://nuxt.com/modules" v-click target="_blank">nuxt.com/modules</a>

<!--
Adding a module is one command. The CLI installs the dependency, registers the module in `nuxt.config.ts`, and auto-imports its composables.

`@nuxt/image` — drop in `<NuxtImg src="...">` and you get responsive images, lazy-loading, format conversion, CDN integration.

`@nuxt/fonts` — automatic web font optimization, no CLS, works with Google Fonts, Adobe Fonts, local files.

`@nuxt/content` — file-based CMS, write Markdown, query it like a database.

`@nuxt/ui` — the design system, accessible components, tailwind-based.

In a plain Vite app you'd be installing 5 packages, configuring 5 things, writing 5 wrappers. In Nuxt it's `nuxt module add` and move on.
-->

---
layout: cover
---

# SSR is [optional]{.text-primary}

<v-clicks>

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  ssr: false,
})
```

That's it!

</v-clicks>

---

# Agents can write Nuxt code

<p v-click><a href="https://nuxt.com/evals" target="_blank">nuxt.com/evals</a></p>

<img src="/nuxt-evals.png" v-click />

---
layout: cover
---

# Agentic Nuxt

Live Demo of a Leroy Merlin with an AI Agent.

[adeo-nuxt-ai-demo.vercel.app](https://adeo-nuxt-ai-demo.vercel.app/)

<!--
[live demo]

Now I'm going to do something that I think will be the most memorable moment of this talk.

I've spent the last 30 minutes wiring up our Adeo Assistant — Vite, then Nitro, then AI SDK. I wrote ~150 lines of glue code.

Watch this.

[in terminal]
`npx nuxi init adeo-assistant-nuxt`
`cd adeo-assistant-nuxt`
`npm install @ai-sdk/gateway ai comark`

I copy in *only* the AI route handler and the chat component. No router config. No build config. No layout wrapper. No env loader. No head management. Nothing.

`npm run dev`

[wait for it]

Same app. Same UI. Same AI streaming. Same provider switching. In one tenth of the code.

That's pillar 3.
-->

---

# The stack

<v-clicks>

- **Nuxt**:
  - **Vite + Vue 3** for the the foundation (you already have it)
  - **Nitro** for the backend, deploy anywhere, including K8s
- **@mozaic-ds/vue** to use Adeo Design System
- **AI SDK + Comark** for the Chat agent
- **Workflows + Sandbox** for a reliable durable agent

</v-clicks>

<div v-click>

**Bonus:**: you get [observability for your agent](https://vercel.com/remi-test-trial-team/adeo-nuxt-ai-demo/workflows).

</div>

<!--
Five pieces. One app. All open source.

You can run this whole stack on a Node.js server in your Kubernetes cluster, with on-prem LLMs, with your own logging backend. Nothing forces you to use Vercel.

But if you do use Vercel — full disclosure, my employer — you get an experience designed end-to-end for this stack. That's the deal. Best OSS, best paved road, your choice.

Let me deploy it live.
-->

---
layout: center
---

# Resources

<v-clicks class="mt-4 text-lg">

- <vscode-icons-file-type-vite /> **Vite** — <a href="https://vite.dev" target="_blank">vite.dev</a>
- <vscode-icons-file-type-nuxt /> **Nuxt** — <a href="https://nuxt.com" target="_blank">nuxt.com</a>
- <UnjsNitro /> **Nitro** — <a href="https://nitro.build" target="_blank">nitro.build</a>
- **Docus** — <a href="https://docus.dev" target="_blank">docus.dev</a>
- **Comark** — <a href="https://comark.dev" target="_blank">comark.dev</a>
- **AI SDK** — <a href="https://ai-sdk.dev" target="_blank">ai-sdk.dev</a>
- **Workflows** — <a href="https://workflow-sdk.dev" target="_blank">workflow-sdk.dev</a>

</v-clicks>

---
src: '../../reuse/intro2.md'
---

---
layout: end
src: '../../reuse/thanks2.md'
---
