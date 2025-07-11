import { Header } from '../../components/Header'
import { Card } from './Card'
import { SearchForm } from './SearchForm'
import { Container } from './styles'

export function Profile() {
  return (
    <Container>
      <Header />
      <SearchForm />
      {/* {post.map((post) => {
        <Card post={post}/>
      })} */}
    </Container>
  )
}
