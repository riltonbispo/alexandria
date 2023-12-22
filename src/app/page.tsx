'use client'
import BookCard from '@/components/bookCard'
import { ToggleTheme } from '@/components/toggleTheme'
import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { useBooks } from '@/hooks/useQueries'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@radix-ui/react-tabs'
import { useState } from 'react'

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('')

  const { data, refetch } = useBooks(searchTerm)

  const handleSearch = () => {
    refetch()
  }

  return (
    <div className="container relative">
      <header className="my-8 flex flex-col gap-4 md:flex-row">
        <Input
          type="text"
          placeholder="pesquise seu livro favorito"
          className="max-w-[80%] md:max-w-[40%]"
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'Enter') {
              handleSearch()
            }
          }}
        />
        <Button variant="secondary" onClick={handleSearch}>
          Pesquisar
        </Button>
        <div className="absolute top-0 right-[30px]">
          <ToggleTheme />
        </div>
      </header>
      <Tabs defaultValue="books">
        <TabsList>
          <TabsTrigger value="books">books</TabsTrigger>
          <TabsTrigger value="favorites">favorites</TabsTrigger>
        </TabsList>
        <TabsContent value="books">
          <ScrollArea className="h-[85vh] w-full rounded-md border p-4">
            <main className="grid gap-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {data &&
                data.map((book) => <BookCard key={book.id} book={book} />)}
            </main>
          </ScrollArea>
        </TabsContent>
        <TabsContent value="favorites">
          <ScrollArea className="h-[85vh] w-full rounded-md border p-4">
            <h2 className="my-4">Meu Livros Salvos</h2>
            <main className="grid gap-3 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6">
              {data &&
                data.map((book) => <BookCard key={book.id} book={book} />)}
            </main>
          </ScrollArea>
        </TabsContent>
      </Tabs>
    </div>
  )
}
