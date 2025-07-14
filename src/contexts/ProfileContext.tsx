import { createContext, useState, type ReactNode } from 'react'
import { githubIssuesApi, githubSearchApi, githubUserApi } from '../lib/axios'

export interface userProfileProps {
  login: string
  id: number
  node_id: string
  avatar_url: string
  gravatar_id: string
  url: string
  html_url: string
  followers_url: string
  following_url: string
  gists_url: string
  starred_url: string
  subscriptions_url: string
  organizations_url: string
  repos_url: string
  events_url: string
  received_events_url: string
  type: string
  user_view_type: string
  site_admin: boolean
  name: string
  company: null
  blog: string
  location: string
  email: null
  hireable: null
  bio: null
  twitter_username: null
  public_repos: number
  public_gists: number
  followers: number
  following: number
  created_at: string
  updated_at: string
}

export interface postProps {
  url: string
  repository_url: string
  labels_url: string
  comments_url: string
  events_url: string
  html_url: string
  id: number
  node_id: string
  number: number
  title: string
  user: {
    login: string
    id: number
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url: string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: string
    user_view_type: string
    site_admin: boolean
  }
  labels: []
  state: string
  locked: boolean
  assignee: null
  assignees: []
  milestone: null
  comments: number
  created_at: string
  updated_at: string
  closed_at: null
  author_association: string
  type: null
  active_lock_reason: null
  sub_issues_summary: {
    total: number
    completed: number
    percent_completed: number
  }
  body: string
  closed_by: null
  reactions: {
    url: string
    total_count: number
    '+1': number
    '-1': number
    laugh: number
    hooray: number
    confused: number
    heart: number
    rocket: number
    eyes: number
  }
  timeline_url: string
  performed_via_github_app: null
  state_reason: null
}

interface ProfileContextType {
  user: userProfileProps
  posts: postProps[]
  numberOfPosts: number
  loadUser: () => Promise<void>
  loadPosts: (query?: string) => Promise<void>
}

interface ProfileProviderProps {
  children: ReactNode
}

export const ProfileContext = createContext({} as ProfileContextType)

export function ProfileProvider({ children }: ProfileProviderProps) {
  const [posts, setPosts] = useState<postProps[]>([])
  const [user, setUser] = useState<userProfileProps>({} as userProfileProps)

  const numberOfPosts = posts.length

  async function loadUser() {
    const response = await githubUserApi.get('/miguelscastro')
    setUser(response.data)
  }

  async function loadPosts(query?: string) {
    if (!query) {
      const response = await githubIssuesApi.get('/issues')
      setPosts(response.data)
    } else {
      const response = await githubSearchApi.get('/search/issues', {
        params: {
          q: `repo:miguelscastro/github-blog ${query}`,
        },
      })
      setPosts(response.data.items)
    }
  }

  return (
    <ProfileContext.Provider
      value={{ user, posts, numberOfPosts, loadUser, loadPosts }}
    >
      {children}
    </ProfileContext.Provider>
  )
}
