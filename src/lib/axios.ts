import axios from 'axios'

export const githubIssuesApi = axios.create({
  baseURL: 'https://api.github.com/repos/miguelscastro/github-blog',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
})

export const githubSearchApi = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
})

export const githubUserApi = axios.create({
  baseURL: 'https://api.github.com/users',
  headers: {
    Accept: 'application/vnd.github.v3+json',
  },
})
