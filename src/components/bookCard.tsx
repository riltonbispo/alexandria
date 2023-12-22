import React from 'react'
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
  CardDescription,
} from './ui/card'
import { Heart } from 'lucide-react'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'
import { Button } from './ui/button'
import Modal from './modal'
import { BookType } from '@/types/bookType'

type props = {
  favorite?: boolean
  book: BookType
}

const BookCard = ({ favorite, book }: props) => {
  const thumbnailUrl =
    book.volumeInfo.imageLinks?.smallThumbnail ||
    'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80'

  return (
    <Card className="flex flex-col justify-between">
      <CardHeader>
        <AspectRatio ratio={240 / 345}>
          {thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              alt={book.volumeInfo.title}
              fill
              className="rounded-md object-cover"
            />
          )}
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <CardTitle className="flex justify-between items-start gap-2 my-3">
          <span className="text-base">{book.volumeInfo.title}</span>
        </CardTitle>
        <CardDescription>
          {book.volumeInfo.authors && book.volumeInfo.authors[0]}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex flex-col gap-2">
        {favorite ? (
          <Button
            className="w-full items-center justify-between"
            variant={'outline'}
          >
            Salvo
            <Heart className="h-4 w-4" fill="#dc2626" color="#dc2626" />
          </Button>
        ) : (
          <Button
            className="w-full items-center justify-between"
            variant={'outline'}
          >
            Salvar
            <Heart className="h-4 w-4" />
          </Button>
        )}
        <Modal favorite={favorite} book={book} />
      </CardFooter>
    </Card>
  )
}

export default BookCard
