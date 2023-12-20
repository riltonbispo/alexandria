import React from 'react'
import {
  Dialog,
  DialogTrigger,
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
}

const Modal = ({ favorite }: props) => {
  return (
    <Dialog>
      <DialogTrigger className="flex-1">
        <Button className="w-full">Open</Button>
      </DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <h4 className="text-xl">Are you sure absolutely sure?</h4>
            <Button variant="ghost" size="icon">
              {favorite ? <Star color="#fbbf24" fill="#fbbf24" /> : <Star />}
            </Button>
          </DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers. This action cannot be
            undone. This will permanently delete your account and remove your
            data from our servers.
          </DialogDescription>
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
