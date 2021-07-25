# Contributing to HTML Recipes

HTML Recipes is built with the static site generator [Eleventy](https://11ty.dev).

To view the project locally, run `npm install` and then use `npm start` to launch Eleventy in "watch" mode which includes Browsersync and will load on `localhost:8080` if available. 

_Note: A browser will not automatically open using the `start` command_.

## To contribute

1. Make a fork of this repo
1. Clone it locally
1. Follow the guidelines and steps below for the type of contribution you're making
1. Submit a PR back to the main repo

## Guidelines

- snippets should be generic "wireframe" style and preference "lorem ipsum" for text
- if images are needed, use the [Unsplash source API](https://source.unsplash.com/) and query the smallest image size necessary
- only add styles if absolutely necessary to understand the intent of the preview
- descriptions are optional _unless_ notes about accessibility are necessary

## Adding a new snippet

Create a Nunjucks (`.njk`) file within `src/snippets/` that includes the following frontmatter:

```md
---
title: Snippet Title
contributorsName: Your Name
contributorsURL: Your URL
templateEngineOverride: md, njk
---
```

> **For the snippet to display** you must add the file slug into the array located in `src/_data/snippets.js` in the order you propose it be included in the list. This requires either restarting the build, or opening and simply saving `.eleventy.js` in order to refresh the cached snippet collection to include the new content.

If the snippet could benefit from a small description to note any unique attributes or accessibility features, or link to external resources, include a Markdown-formatted description assigned to the Nunjucks `description` variable:

```html
{% set description %} 

Description here, including blank lines before and after to ensure correct Markdown conversion. 

{% endset %}
```

Then, add the snippet between the following Nunjucks template tags for defining the `html` variable:

```html
{%- set html -%}
<!-- your snippet HTML here -->
{%- endset -%}
```

Be sure the file concludes with the reference to the `code` partial:

```js
{% include "code.njk" %}
```

## Editing an existing snippet

Find the snippet in `src/snippets` and make your edits to either the description or the snippet itself.

**If the edit is a variation** - as in, significantly alters the original and the rationale is not to improve semantics or accessibility:

1. make a copy of the original and add your edits as a new snippet instead
2. add in your details in the frontmatter for `contributorsName` and `contributorsURL`

## Adding snippet styles

> Only add styles if absolutely necessary to understand the intent of the preview

Any added styles should be "wireframe" style with no excessive decoration. Styles should be scoped to the generated class name of the wrapping div, which will be `demo-snippet-title`.

Place added styles in `src/sass/_demo.scss`.

Ensure that added styles _only_ impact your added snippet.