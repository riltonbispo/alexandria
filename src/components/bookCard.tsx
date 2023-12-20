import React from 'react'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'
import { Star } from 'lucide-react'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'
import { Button } from './ui/button'
import Modal from './modal'

type props = {
  favorite?: boolean
}

const BookCard = ({ favorite }: props) => {
  return (
    <Card className="flex-1">
      <CardHeader>
        <AspectRatio ratio={1 / 1} className="bg-muted">
          <Image
            src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
            alt="Photo by Drew Beamer"
            fill
            className="rounded-md object-cover"
          />
        </AspectRatio>
      </CardHeader>
      <CardContent>
        <CardTitle className="flex justify-between items-center">
          <span>Title Book</span>
          <Button variant="ghost" size="icon">
            {favorite ? <Star color="#fbbf24" fill="#fbbf24" /> : <Star />}
          </Button>
        </CardTitle>
      </CardContent>
      <CardFooter>
        <Modal favorite={favorite} />
      </CardFooter>
    </Card>
  )
}

export default BookCard
