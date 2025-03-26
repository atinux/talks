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

<img src="/pre-intro.jpg" class="w-full" />

---
layout: cover
---

<h1 flex="~ col" font-semibold>
<div>Créer des applications</div>
<div flex="~ gap3" items-center><span class="text-[#00DC82]">full-stack</span> dans le Edge</div>
</h1>

<div abs-br mx-10 my-12 flex="~ col" text-sm text-right>
  <div>BordeauxJS</div>
  <div text-sm opacity-50>March 25, 2025</div>
</div>

---
src: '../../reuse/intro.md'
---

---

# Mon Parcous

<v-clicks depth="2">

- Developpement de jeux PHP -- 2005-2010
- Epitech Toulouse -- 2010-2011 (18 ans)
- Developpeur chez Pantera Commerce -- 2011-2016 (Toulouse / Barcelone)
  - Creation d'une API REST e-commerce (headless) avec Node.js, MongoDB, Redis & Elasticsearch
  - Developpement d'une interface admin avec Backbone.js / jQuery
  - Developpement du frontend avec Backbone.js & pre-rendering avec [Crawlable](https://trupin.github.io/crawlable/)
- Création du framework open source [Nuxt](https://nuxt.com) -- Octobre 2016
  - Developpement de 3 versions majeures
  - Creation d'une core team
  - +30 [meetups & conferences](https://github.com/atinux/talks) autour de Nuxt
- Création de [NuxtLabs](https://nuxtlabs.com) -- 2017-now
  - Boostrap avec consulting & formations autour de Nuxt
  - Pre-seed round de $2M -- 2020
  - Seed round de $5M -- 2022
</v-clicks>

---

# Qu'est ce que Nuxt ?

<v-clicks depth="2">

- Web Framework open source basé sur Vue.js
- Facilite le développement d'application web moderne
  - Rendu côté serveur (SSR) pour un SEO & performance optimale
  - Pré-rendu (SSG, ISR) pour une vitesse de chargement optimale
  - Intégration avec divers hebergeurs sans configuration
  - "Data fetching" simple avec composables
  - Systeme de modules & layers pour une extension facile
- Projet maintenu par la core team & une communauté active
</v-clicks>

---

# Nuxt Stats

- +56K stars sur GitHub
- +1M sites internet créés avec Nuxt
- +2M téléchargements par mois

<img src="/nuxt-downloads.svg" class="w-1/2 mt-2" />

---

# Nuxt Modules

Paquets NPM pour étendre les fonctionnalités de Nuxt (Auth, CMS, UI, Database, etc.)

- +250 modules
- +200 maintainers
- +1500 contributors

https://nuxt.com/modules

---

# Modules Officiels

<v-clicks>

- [Nuxt UI](https://ui.nuxt.com): La bibliothèque UI intuitive propulsée par Reka UI et Tailwind CSS
- [Nuxt Content](https://content.nuxt.com): Le CMS basé sur les fichiers avec support pour Markdown, YAML, JSON
- [Nuxt Image](https://image.nuxt.com): Ajoutez des images avec de manière optimale avec redimensionnement et support de +30 fournisseurs
- [Nuxt Fonts](https://fonts.nuxt.com): Ajoutez des polices web personnalisées en privilégiant la performance
- [Nuxt Icon](https://github.com/nuxt/icon): Module d'icônes pour Nuxt avec plus de 200 000 icônes prêtes à l'emploi d'Iconify
- [Nuxt Scripts](https://scripts.nuxt.com): Ajoutez des scripts tiers sans sacrifier les performances
- [Nuxt Test Utils](https://nuxt.com/docs/getting-started/testing): Utilitaires de test pour Nuxt
- [Nuxt ESLint](https://eslint.nuxt.com): Intégration ESLint consciente du projet, facile à utiliser, extensible et pérenne

</v-clicks>

---

# Le Contexte

<v-clicks>

- En 2017, Cloudflare lance **Cloudflare Workers**
- Exécute du JavaScript **à l’Edge** (proche de l’utilisateur)
- Déploiement rapide sur plus de 275 localisations
- Latence ultra faible : **~30ms** depuis n’importe où dans le monde
- Démarrage à froid en 0ms

</v-clicks>

---

# Nuxt sur l'Edge ?

<v-clicks>

- En 2020, on fait le pari d’exécuter **Nuxt** sur ces runtimes Edge
- Objectif : **SSR** ultra rapide, sans serveurs à gérer
- Exemple : Cloudflare Workers = **100K requetes/jour gratuites** puis **0,3$/1M requêtes**

</v-clicks>

---

# Les Défis 🧠


<v-clicks>

- Rendre Nuxt **agnostique à l’environnement**
- Repenser le serveur pour fonctionner sans Node.js
- Limiter le **démarrage à froid** & la **taille du bundle** (< 10MB)

</v-clicks>

---

# Abstraction d’environnement

<v-clicks>

- Création de [`unjs/unenv`](https://github.com/unjs/unenv)
- Simule les APIs Node dans un environnement Edge
- Permet un code **universel** et portable

</v-clicks>

---

# Nouveau serveur HTTP

<v-clicks>

- Création de `unjs/h3`
- Framework minimal, compatible Connect/Express
- Chaque handler est chargé **à la demande**

</v-clicks>

<div v-click class="w-2/3">
  <VideoDemo src="server-performance.mp4" />
</div>
---

# Nouveau moteur de build

<v-clicks>

- Création de [`nitrojs/nitro`](https://github.com/nitrojs/nitro)
- Bundle optimisé pour tous les environnements (Node, Edge, etc.)
- Utilise Rollup + `nft` pour ne garder que le code utile
- Bundle total : **~192 kB gzip**

</v-clicks>

---

# Résultat demarrage a froid 🎯

<v-clicks>

- Nuxt 2 : ~300ms
- Nuxt 3 : **~4ms**

</v-clicks>

---

# Edge Plateformes supportées

- 🌐 Cloudflare Workers/Pages  
- 🦕 Deno Deploy  
- ▲ Vercel Edge Functions  
- 🔵 Netlify Edge Functions  

> Et aussi : Node, serverless, hébergement statique…

---

# Développment d'applications Full-stack 💡

- Grâce au dossier `server/`
- Créez des **API routes** côté serveur

---

# Routage basé sur les fichiers

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
  <h1><span class="text-green">Support TypeScript</span> de bout en bout</h1>
</div>

<VideoDemo src="server-autocomplete.mp4" />

---

# [Appels de fonctions]{.text-green} pendant le SSR

<div class="text-white! text-lg! mt-12!" v-click :class="{ 'op-100!': $clicks >= 1 }">

Pendant le rendu côté serveur, l'appel à `useFetch` ou `$fetch` pour les routes du Serveur Nuxt va émuler une requête et appeler la fonction exportée, [économisant le temps d'aller-retour HTTP et la bande passante]{.text-green}.

</div>

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

<div class="text-white! text-lg! mt-12!" v-click>

Appeler `$fetch` dans vos API routes pour appeler d'autres API routes va également appeler la fonction directement.

</div>

---

# Intégration dans la [Nuxt Devtools]{.text-green}

<VideoDemo src="server-devtools.mp4" />

---
layout: center
---

# Demo

---

# Résumé 🚀

<v-clicks>

- ✅ Nuxt est prêt pour l’Edge  
- ✅ Ultra rapide, déploiement simplifié  
- ✅ Portabilité totale : Node, Edge, Deno…
- 💚 Nuxt = liberté de déploiement + perf au top

</v-clicks>

---
layout: cover
---

# Merci