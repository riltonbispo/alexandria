import { ToggleTheme } from '@/components/toggleTheme'
import { Input } from '@/components/ui/input'

export default function Home() {
  return (
    <div className="container">
      <header className="flex justify-center items-center gap-10 my-8">
        <Input
          type="text"
          placeholder="pesquise seu livro favorito"
          className="max-w-lg"
        />
        <ToggleTheme />
      </header>
    </div>
  )
}
