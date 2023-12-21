import { BookType } from '@/types/bookType'
import axios from 'axios'

const API_KEY = 'AIzaSyATHscMN4TKP7E0kCnoI3u1IKctoeyGgWU'
const baseURL = 'https://www.googleapis.com/books/v1'

const req = axios.create({
  baseURL,
})

export const getBooks = async (filter: string): Promise<BookType[]> => {
  const response = await req.get('/volumes', {
    params: {
      q: filter,
      key: API_KEY,
      maxResults: 40,
    },
  })
  return response.data.items
}
