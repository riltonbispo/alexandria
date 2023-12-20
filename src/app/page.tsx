import BookCard from '@/components/bookCard'
import { ToggleTheme } from '@/components/toggleTheme'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="container">
      <header className="flex justify-center items-center gap-10 my-8 ">
        <div className="flex gap-4">
          <Input
            type="text"
            placeholder="pesquise seu livro favorito"
            className="max-w-lg"
          />
          <Button variant="secondary">Pesquisar</Button>
        </div>
        <ToggleTheme />
      </header>
      <main className="flex gap-4">
        <BookCard favorite />
        <BookCard />
        <BookCard favorite />
        <BookCard />
      </main>
    </div>
  )
}
