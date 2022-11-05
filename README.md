# Full-Stack Typescript Template
My personal template for hackathon and side projects.

<a href="#license"><img alt="GPLv3 License" src="https://img.shields.io/github/license/d1vshar/fullstack-typescript-template">


## Goal

This template is meant to be used as a hackathon project template. There are two things needed for such a template: development speed and simplicity.

I will continue adding the minimum required functionality as needed.

TODO: add proper eslint configurations

## Tech Stack & Tools

This template is a mono repo built using [Turbo Repo](https://turbo.build/repo). It uses [pnpm](https://pnpm.io/) as its dependency manager.

There are two project folders: `apps` and `packages`.

`apps` contains "launchable" applications or services. These are meant to be hosted / presented / distributed.

`packages` contains projects that are being used in `apps`. Sometimes, you need to split common functionality into different packages.

One such feature is types for a REST API (explained below).

[`apps/web`](apps/web): A sample NextJS application that uses [`zustand`](https://github.com/pmndrs/zustand) as its state-management solution.

[`apps/api`](apps/api): A sample REST API built using ExpressJS and uses [`zod`](https://zod.dev) for schema validation.

[`packages/tsconfig`](packages/tsconfig): A package containing all tsconfigs being used in the template. This is useful if you have a lot of packages / apps.

[`packages/types-api`](packages/types-api): A package containing all schema and type definitions for the REST api in `apps/api`

[`packages/ui`](packages/ui): A package containing all common UI components. This is usefull if you have many web applications, that re-use code.

### REST API docs & schemas

One of the biggest challenges in a 48 hours hackathon is to keep track of fast-evolving REST API endpoints. The best way to keep track is to maintain an OpenAPI spec of your API. But writing and maintaining the spec is a new task which removes any speed advantage it might bring.

With the goal of speed and simplicity, I have taken two decisions:
- Make a hacky utility in `apps/api` that adds a new route `GET /route-list` to your express server. This will list all routes on the live server with their parameters.
- Maintain zod and typescript types in different package `packages/types-api`. This allows these schemas & types to be imported into web apps. These schemas and types are more than enough to infer the shape of the data the server is exchanging in requests & responses. Any changes to the data format made by the person working on `apps/api` will automatically cause `TypeError`s and `ZodError`s on the client side. It will give the exact information needed to transform to a new data format.

I have implemented sample endpoints and requests in both `apps/api` and `apps/web`.

## Building & Running

Uses the standard turbo-repo & pnpm commands.
```
npm i -g pnpm
pnpm i
pnpm dev
pnpm build
```

## Licensing

[MIT License](LICENSE.md)
