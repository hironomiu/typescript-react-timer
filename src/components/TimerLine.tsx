import React from 'react'

type Timer = {
  hours: number
  minutes: number
  seconds: number
}
const TimerLine = ({ timer }: { timer: Timer }) => {
  return (
    <div className="text-5xl my-4">
      {('00' + timer.hours).slice(-2)}:{('00' + timer.minutes).slice(-2)}:
      {('00' + timer.seconds).slice(-2)}
    </div>
  )
}

export default TimerLine
