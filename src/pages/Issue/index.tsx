import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import 'github-markdown-css/github-markdown.css'

import { useLocation } from 'react-router-dom'

import { Header } from '../../components/Header'
import { IssueContainer, MarkdownWrapper } from './styles'

export function Issue() {
  const { state, pathname } = useLocation()
  console.log(state)

  return (
    <>
      <Header issue={state} uri={pathname} />
      <IssueContainer>
        <MarkdownWrapper className="markdown-body">
          <Markdown remarkPlugins={[remarkGfm]}>{state.body}</Markdown>
        </MarkdownWrapper>
      </IssueContainer>
    </>
  )
}
