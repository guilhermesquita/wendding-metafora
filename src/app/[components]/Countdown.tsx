'use client'
import { useEffect, useState } from "react"

type Props = {
  targetDate: string
}

export default function Countdown({ targetDate }: Props) {
  const [timeLeft, setTimeLeft] = useState("")

  useEffect(() => {
    const updateCountdown = () => {
      const diff = new Date(targetDate).getTime() - new Date().getTime()
      if (diff <= 0) return setTimeLeft("Já chegou o grande dia!")
      const days = Math.floor(diff / (1000 * 60 * 60 * 24))
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
      const minutes = Math.floor((diff / (1000 * 60)) % 60)
      setTimeLeft(`${days} dias, ${hours} horas e ${minutes} minutos`)
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 60000)
    return () => clearInterval(interval)
  }, [targetDate])

  return <p className="text-2xl mt-4">{timeLeft}</p>
}
