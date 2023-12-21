'use client'
import React, { useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from './ui/dialog'
import { Button } from './ui/button'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'
import { Star } from 'lucide-react'

type props = {
  favorite?: boolean
  description: string
}

const Modal = ({ favorite, description }: props) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full"
        variant={'secondary'}
      >
        Ver Mais{' '}
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <h4 className="text-xl">Are you sure absolutely sure?</h4>
            <Button variant="ghost" size="icon">
              {favorite ? <Star color="#fbbf24" fill="#fbbf24" /> : <Star />}
            </Button>
          </DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <div>
          <AspectRatio ratio={1 / 1} className="bg-muted">
            <Image
              src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
              alt="Photo by Drew Beamer"
              fill
              className="rounded-md object-cover"
            />
          </AspectRatio>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
