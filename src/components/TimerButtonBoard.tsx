import { useState, useEffect } from 'react'
import { calc } from '../libs'
type Props = {
  timer: {
    hours: number
    minutes: number
    seconds: number
  }
  timerCount: () => NodeJS.Timer
  setHours: (num: number) => void
  setMinutes: (num: number) => void
  setSeconds: (num: number) => void
  setTimer: (nums: { hours: number; minutes: number; seconds: number }) => void
}
const TimerButtonBoard = (props: Props) => {
  const [isStart, setIsStart] = useState(false)
  const [isRestart, setIsRestart] = useState(true)
  const [timerId, setTimerId] = useState<NodeJS.Timer>()

  // MEMO: 0秒以下は動作させない
  useEffect(() => {
    const num = calc(
      props.timer.hours,
      props.timer.minutes,
      props.timer.seconds
    )
    if (num <= 0) {
      clearInterval(timerId)
      setIsStart(false)
    }
  }, [props.timer, setIsStart, timerId])

  return (
    <div className="flex mt-2">
      <button
        onClick={() => {
          const id = props.timerCount()
          setTimerId(id)
          setIsStart(true)
        }}
        className="w-20 h-8 rounded mx-2 bg-blue-300 disabled:bg-gray-200"
        disabled={isStart}
      >
        START
      </button>
      <button
        onClick={() => {
          const id = props.timerCount()
          setIsRestart(true)
          setTimerId(id)
        }}
        className="w-24 h-8 rounded mx-2 bg-blue-300 disabled:bg-gray-200"
        disabled={isRestart}
      >
        RESTART
      </button>
      <button
        onClick={() => {
          clearInterval(timerId)
          setIsRestart(false)
        }}
        className="w-16 h-8 rounded mx-2 bg-blue-300 disabled:bg-gray-200"
        disabled={!isStart || !isRestart}
      >
        STOP
      </button>
      <button
        onClick={() => {
          props.setHours(0)
          props.setMinutes(0)
          props.setSeconds(0)
          props.setTimer({
            hours: 0,
            minutes: 0,
            seconds: 0,
          })
          setIsStart(false)
          setIsRestart(true)
        }}
        className="w-20 h-8 rounded mx-2 bg-blue-300 disabled:bg-gray-200"
        disabled={isRestart}
      >
        RESET
      </button>
    </div>
  )
}

export default TimerButtonBoard
