import { getBooks } from '@/services/api'
import { useQuery } from '@tanstack/react-query'

export const useBooks = (bookTitle: string) => {
  const query = useQuery({
    queryKey: ['books', bookTitle],
    queryFn: () => getBooks(bookTitle),
    refetchOnWindowFocus: false,
    enabled: false,
  })

  return query
}
