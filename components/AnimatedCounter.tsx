'use client'
import Counter from "react-countup"

export default function AnimatedCounter({ amount }: { amount: number }) {
  return (
    <div className="w-full">
      <Counter
        decimals={2}
        prefix="$"
        end={amount} />
    </div>
  )
}
