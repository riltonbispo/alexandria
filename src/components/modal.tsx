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
import { Star } from 'lucide-react'
import { BookType } from '@/types/bookType'

type props = {
  favorite?: boolean
  book: BookType
}

const Modal = ({ favorite, book }: props) => {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Button
        onClick={() => setOpen((prev) => !prev)}
        className="w-full"
        variant={'secondary'}
      >
        Ver Mais
      </Button>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center gap-4">
            <h4 className="text-xl">{book.volumeInfo.title}</h4>
            <Button variant="ghost" size="icon">
              {favorite ? <Star color="#fbbf24" fill="#fbbf24" /> : <Star />}
            </Button>
          </DialogTitle>
          <DialogDescription>{book.volumeInfo.description}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default Modal
