# AI Image Text Generator

A simple AI Image Text Generator built on [Next.js](https://nextjs.org/) and [Replicate](https://replicate.com/).
## Environment Setup Instructions

### Pre requisites

Creating a [Replicate](https://replicate.com/signin?next=%2F) account as we would require keys to Replicate API.

### Getting Started Steps

- Install dependencies from the root folder - `npm install`

- Rename .env.example to .env and set appropriate variables.

  - REPLICATE_API_TOKEN: This is the token that you would need to create in Replicate for their API.

You can obtain the api token by logging in to replicate and navigate to API tokens which will be under your profile. Copy the value to use.

- Start the project - `npm run dev`

<br />
<br />

## Technical Documentation

### Tech Stack

| Name | Description |
| :--- | ---: |
| [Next.js](https://nextjs.org/) | React framework |
| [Replicate](https://replicate.com/) | Run and fine-tune open-source models. Deploy custom models at scale. All with one line of code. |
| [React](https://react.dev/) | The library for web and native user interfaces |

<br />

### Folder Structure
```bash
.
📦web
 ┣ 📂pages
 ┃ ┣ 📂api
 ┃ ┃ ┗ 📜generate.ts
 ┃ ┣ 📜generate-image-text.tsx
 ┃ ┣ 📜index.tsx
 ┃ ┗ 📜_app.tsx
 ┣ 📂public
 ┃ ┣ 📜favicon.ico
 ┃ ┗ 📜vercel.svg
 ┣ 📂styles
 ┃ ┣ 📜globals.css
 ┃ ┗ 📜Home.module.css
 ┣ 📜.env.example
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜next-env.d.ts
 ┣ 📜next.config.js
 ┣ 📜ogimage.png
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜pnpm-lock.yaml
 ┣ 📜tsconfig.json
 ┣ 📜turbo.json
 ┗ 📜vercel.json
```

<br />

### High Level Technical Architecture

<img src="https://ambitustemplateassets.blob.core.windows.net/assets/AI%20Image%20Text%20Generator.png" alt="Image Description" style="max-width:100%;">

<br />

### Cost to host in Azure

Official estimate from Azure Pricing Calculator - [Azure Pricing Calculator](https://azure.com/e/bbec79326663486ebfb3c76d30b1a9fc)

| Service Category | Service Type | Description | Estimated Monthly Cost | Estimated Upfront Cost |
| :---: | :---: | :---: | :---: | :---: |
| Compute | Azure App Service | *Basic Tier; 1 B1 (1 Core(s), 1.75 GB RAM, 10 GB Storage) x 730 Hours; Linux OS; 0 SNI SSL Connections; 0 IP SSL Connections; 0 Custom Domains; 0 Standard SLL Certificates; 0 Wildcard SSL Certificates* | $12.41 | $0 |
| Developer Tools | Azure DevOps | *Basic Plan; 5 User(s)* | $0 | $0 |
| Total | | | $12.41 | $0 |

***Disclaimer: The above cost is an estimate and may vary based on the actual usage. Caravel Labs or Microsoft is not responsible for additional costs incurred.***
