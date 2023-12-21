'use client'
import BookCard from '@/components/bookCard'
import { ToggleTheme } from '@/components/toggleTheme'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useBooks } from '@/hooks/useQueries'

export default function Home() {
  const { data } = useBooks('harry potter')
  return (
    <div className="container relative">
      <header className="my-8 flex flex-col gap-4 md:flex-row">
        <Input
          type="text"
          placeholder="pesquise seu livro favorito"
          className="max-w-[80%] md:max-w-[40%]"
        />
        <Button variant="secondary" className="">
          Pesquisar
        </Button>
        <div className="absolute top-0 right-[30px]">
          <ToggleTheme />
        </div>
      </header>
      <ScrollArea className="h-[85vh] w-full rounded-md border p-4">
        <main className="grid gap-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
          {data && data.map((book) => <BookCard key={book.id} book={book} />)}
        </main>
      </ScrollArea>
    </div>
  )
}
