import { BookType } from '@/types/bookType'
import axios from 'axios'

const API_KEY = 'AIzaSyATHscMN4TKP7E0kCnoI3u1IKctoeyGgWU'
const baseURL = 'https://www.googleapis.com/books/v1'

const req = axios.create({
  baseURL,
})

export const getBooks = async (title: string): Promise<BookType[]> => {
  const response = await req.get('/volumes', {
    params: {
      q: `intitle:"${title}"`,
      key: API_KEY,
    },
  })
  return response.data.items
}
