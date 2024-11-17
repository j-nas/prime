import { useEffect, useState } from "react"
import { Input } from "./components/ui/input"
import { isPrime } from "./lib/prime"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./components/ui/card"
import { Slider } from "./components/ui/slider"
import { Github } from "lucide-react"

function App() {
  const [currentNumber, setCurrentNumber] = useState(0)
  const [isPrimeNumber, setIsPrimeNumber] = useState(false)

  useEffect(() => {
    setIsPrimeNumber(isPrime(currentNumber))
  }, [currentNumber])

  return (
    <>
      <header className="fixed bg-transparent text-foreground dark place-items-end grid w-full h-8">
        <a href="https://github.com/j-nas/prime">
          <Github className="mr-4" />
        </a>
      </header>
      <main className="bg-background text-foreground dark grid w-full h-screen place-items-center gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Prime Numbers</CardTitle>
            <CardDescription>
              A prime number is a number that can only be divided by 1 or itself
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <Slider
                defaultValue={[0]}
                max={1000}
                step={1}
                value={[currentNumber]}
                onValueChange={e => setCurrentNumber(e[0])}
                className={`${isPrimeNumber && "text-green-600"}`}
              />
              <Input
                type="number"
                inputMode="numeric"
                placeholder="Enter a number"
                onChange={e => setCurrentNumber(Number(e.target.value))}
                className={`${isPrimeNumber && "ring-green-600 ring"}`}
              />
              <p className={`${isPrimeNumber && "text-green-600"}`}>
                {currentNumber} is{" "}
                {isPrimeNumber ? "a prime number ✅" : "not a prime number ☠"}
              </p>
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  )
}

export default App
