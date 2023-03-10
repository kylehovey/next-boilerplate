# Kyle's NextJS Boilerplate

Here is (yet another) boilerplate. I'm sure this will change with time, but lately I've been building so many side-projects that it makes sense to get some of my initial setup tracked as an independent repository.

## What is Standard

This repository was bootstrapped with `npx create-next-app` (docs [here](https://nextjs.org/docs/api-reference/create-next-app)) using a Typescript template. Pretty much everything was left as-is, so there should be no surprises from the NextJS perspective.

## What I Added

### Linting and Formatting

I have a few preferred lint rules and formatting setup that I use on all of my projects. I installed [Prettier](https://prettier.io/) and configured it to work in concert with [ESLint](https://eslint.org/). Most of the rules should be familiar to anyone wanting to try this boilerplate, I did change a few rules from the Airbnb standard, and added some rules that help keep code a little more organized.

### Testing

I added [Jest](https://jestjs.io/) for testing individual pieces of logic. I configured it to use [SWC](https://swc.rs/docs/usage/jest) instead of Babel to speed up test runs.

### Pre-Commit Hooks

To keep code consistently clean as the project evolves, I added a pre-commit hook that will format the code whenever you create a commit. If you need to make a quick commit and bypass this, you can always `git commit --no-verify`, but I don't recommend it.

### Component Library

Lately I've been enjoying [Chakra UI](https://chakra-ui.com/) for building FE UI easily and quickly. It has a bit of a learning curve, but so far I've been impressed with how well their patterns scale in real use cases. I've been using this library in a professional context for a little over half a year at the time of creating this repo and my opinion of Chakra continues to grow more and more positive.

The Chakra setup here is completely standard. There is no custom or bespoke setup to surprise anyone already used to using Chakra.

### State Management

When you need to share state between multiple components, and also dispatch state changes from multiple levels in the tree, the go-to tool in React is [Redux](https://redux.js.org/). While it has more or less solved most common state management issues for React, it is a bit verbose and dealing with types can be tricky. For this reason, I added [Redux Toolkit](https://redux-toolkit.js.org/) to manage Redux. Redux Toolkit is officially supported by the Redux team, so the API is very good and has been around for a while.

## When to Not Use This

The landscape of NextJS is constantly evolving, especially with the release of NextJS 13. When the [App Directory](https://beta.nextjs.org/docs/app-directory-roadmap) feature is out of Beta, I can imagine that the structure of Next may be different enough that using `npx create-next-app` would make more sense than using this boilerplate if you are starting a new project.
