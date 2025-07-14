import { formatDistanceToNow } from 'date-fns'
import type { issueProps } from '../../../contexts/ProfileContext'
import { CardContainer } from './styles'
import { enUS } from 'date-fns/locale'
import { useNavigate } from 'react-router-dom'

interface CardProps {
  issue: issueProps
}

export function Card({ issue }: CardProps) {
  const formattedDate = formatDistanceToNow(new Date(issue.created_at), {
    addSuffix: true,
    locale: enUS,
  })

  const navigate = useNavigate()

  return (
    <CardContainer
      onClick={() => {
        navigate(`/issues/${issue.id}`, {
          state: issue,
        })
      }}
    >
      <header>
        <h3>{issue.title}</h3>
        <span>{formattedDate}</span>
      </header>
      <p>{issue.body}</p>
    </CardContainer>
  )
}
