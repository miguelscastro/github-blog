# 📘 GitHub Blog

A React application that transforms GitHub issues into a dynamic blog.

## 🧠 What is this?

This project uses the **GitHub API** to fetch:

- 🧑 **User data** from a specific GitHub profile
- 📝 **Issues** from a selected repository
- 🔍 **Search results** from issues using GitHub's full-text search

Each issue becomes a blog post, allowing you to create and manage content through GitHub itself.

## 🚀 Features

- ✅ Uses GitHub REST API (users, issues, search)
- ✅ Live search with debounce
- ✅ Markdown rendering styled like GitHub
- ✅ Fully responsive layout
- ✅ React Context for global data
- ✅ TypeScript + Styled-Components

## 🔧 Tech Stack

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Axios](https://axios-http.com/) 
- [React Markdown](https://github.com/remarkjs/react-markdown) 
- [github-markdown-css](https://github.com/sindresorhus/github-markdown-css) 
- [Zod](https://zod.dev/)
- [use-debounce](https://www.npmjs.com/package/use-debounce)
- [date-fns](https://date-fns.org/) 
- [React Router](https://reactrouter.com/) 
- [GitHub REST API](https://docs.github.com/en/rest) 

## 🗂️ How it works

1. The app fetches **profile data** from the GitHub API.
2. Issues from the specified repo are listed as **blog posts**.
3. Clicking a post shows the full issue content rendered with **Markdown**.
4. The search bar uses GitHub's search endpoint to find issues by keyword.

## 📦 Setup

Clone the repo:

```
git clone https://github.com/miguelscastro/github-blog.git
cd github-blog
```

Install dependencies:
```
npm install
```

Start the project:
```
npm run dev
```

