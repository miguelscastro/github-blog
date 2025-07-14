import { useContext, useEffect } from 'react'
import { Header } from '../../components/Header'
import { Card } from './Card'
import { SearchForm } from './SearchForm'
import { PostsContainer, ProfileContainer } from './styles'
import { ProfileContext } from '../../contexts/ProfileContext'

export function Profile() {
  const { posts, numberOfPosts, loadUser, loadPosts } =
    useContext(ProfileContext)

  useEffect(() => {
    loadUser()
    loadPosts()
  }, [])

  return (
    <>
      <Header />
      <ProfileContainer>
        <div>
          <h1>Posts</h1>
          <span>{numberOfPosts} Posts</span>
        </div>
        <SearchForm />
        <PostsContainer>
          {posts.map((post, index) => (
            <Card key={index} post={post} />
          ))}
        </PostsContainer>
      </ProfileContainer>
    </>
  )
}
