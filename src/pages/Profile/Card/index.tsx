import { formatDistanceToNow } from 'date-fns'
import type { postProps } from '../../../contexts/ProfileContext'
import { CardContainer } from './styles'
import { enUS } from 'date-fns/locale'

interface CardProps {
  post: postProps
}

export function Card({ post }: CardProps) {
  const formattedDate = formatDistanceToNow(new Date(post.created_at), {
    addSuffix: true,
    locale: enUS,
  })

  return (
    <CardContainer>
      <header>
        <h3>{post.title}</h3>
        <span>{formattedDate}</span>
      </header>
      <p>{post.body}</p>
    </CardContainer>
  )
}
