import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { Input } from "./components/ui/input"

function App() {
  const [count, setCount] = useState(0)
  const [isPrimeNumber, setIsPrimeNumber] = useState(false)

  function isPrime(num: number): boolean {
    if (num <= 1) return false
    if (num <= 3) return true
    if (num % 2 === 0 || num % 3 === 0) return false
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false
    }
    return true
  }

  useEffect(() => {
    setIsPrimeNumber(isPrime(count))
  }, [count])

  return (
    <main
      data-theme="dark"
      className="dark grid w-full h-screen place-items-center gap-4"
    >
      <h1 className="text-6xl">Prime numbers</h1>
      <p>A prime number is a number that can only be divided by 1 or itself</p>
      <Input
        type="number"
        placeholder="Enter a number"
        onChange={e => setCount(Number(e.target.value))}
      />
      <p>
        {count} is {isPrimeNumber ? "a prime number" : "not a prime number"}
      </p>
    </main>
  )
}

export default App
