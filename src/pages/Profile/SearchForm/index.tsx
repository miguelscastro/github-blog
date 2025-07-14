import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import z from 'zod'
import { SearchFormContainer } from './styles'
import { useContext, useEffect, useState } from 'react'
import { ProfileContext } from '../../../contexts/ProfileContext'
import { useDebounce } from 'use-debounce'

const searchFormSchema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm() {
  const { loadPosts } = useContext(ProfileContext)
  const [query, setQuery] = useState<string>('')

  const { register } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormSchema),
    mode: 'onChange',
  })

  const [debouncedQuery] = useDebounce(query, 1000)

  useEffect(() => {
    if (debouncedQuery.trim() == '') {
      loadPosts()
    } else {
      loadPosts(debouncedQuery)
    }
  }, [debouncedQuery])

  return (
    <SearchFormContainer>
      <input
        type="text"
        placeholder="Search content"
        {...register('query')}
        onChange={(e) => setQuery(e.target.value)}
      />
    </SearchFormContainer>
  )
}
