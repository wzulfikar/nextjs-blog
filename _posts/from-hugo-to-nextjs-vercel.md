---
title: "From Hugo to Next.js + Vercel"
excerpt: "Before this, I write my blog using Hugo, a static site generator from Go. And now, you're looking at the Next.js version of that blog. Here's what I did to migrate it."
date: '2021-04-10T03:53:24.613Z'
coverImage: https://og-image.wzulfikar.com/i/**From%20Hugo%20to%20Next.js%20%2B%20Vercel**.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&widths=200&widths=100&heights=200&heights=100
ogImage: 
  url: https://og-image.wzulfikar.com/i/**From%20Hugo%20to%20Next.js%20%2B%20Vercel**.png?theme=dark&md=1&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-white-logo.svg&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&widths=200&widths=100&heights=200&heights=100
---

The blog that I have in [wzulfikar.com](https://wzulfikar.com) was written using [Hugo](https://gohugo.io), a static site generator from Go. And now, you're looking at the Next.js version of that blog. Here's what I did to migrate it. 

### 1. Setting up Next.js

First, we start with install Next.js blog template. Notice that I used the `blog-starter-typescript` because I want to use the typescript template:

```
npx create-next-app --example blog-starter-typescript nextjs-blog
```

### 2. Moving the markdown files

Once the setup is ready, I moved all markdown files from my Hugo blog to `nextjs-blog/_posts`. This part is quite straightforward because apparently, the format that Hugo uses is almost similar with what Next.js blog needs. For example:

From this:
```yml
---
title: "Gotcha!"
date: 2019-06-25T20:26:16+08:00
tags: ["programming"]
draft: false
hideToc: true
---

My markdown content..
```

To this:
```yml
---
title: "Gotcha!"
date: "2019-06-25T20:26:16+08:00"
excerpt: "Collection of programming gotchas I have  encountered. The one that made me confused."
tags: ["programming"]
draft: false
hideToc: true
coverImage: https://og-image.wzulfikar.com/i/**Gotcha!**.png?theme=dark&md=1&fontSize=100px&images=NO_IMAGE
ogImage: 
  url: https://og-image.wzulfikar.com/i/**Gotcha!**.png?theme=dark&md=1&fontSize=100px&images=NO_IMAGE
---

My markdown content..
```

What I needed to add is the `excerpt`, `coverImage`, and `ogImage.url`.

### 3. Generating Cover Image

I realised that the images I used in my previous blog is not standardized; they all have different sizes. This means that I can't use those images for my cover. I figured that I can generate those images using https://og-image.vercel.app but I realized that they'll keep Vercel branding for the first image.

Going to side quest mode, I forked the repo (from github.com/vercel/og-image to github.com/wzulfikar/og-image) and adjusted the code so that I can omit the first image. Check it out!

https://og-image.wzulfikar.com

![Fork of vercel/og-image](/images/ogimage-fork.jpg)

### 4. Deploying to Vercel

Now that everything looks good, I can deploy it to Vercel. To activate my custom domain, i just need to add new CNAME entry in my cloudflare:

```
type    name    content
CNAME   next    cname.vercel-dns.com
```

Custom domain enabled, Github repo linked to Vercel, and finally I run `vercel` to deploy the site.

So, that's it the process. If you have any question, you can find me at [twitter.com/wzulfikar](https://twitter.com/wzulfikar). 

Till next!