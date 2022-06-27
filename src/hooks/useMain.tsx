import { useState } from 'react'
import { Timer } from '../types'
import { calc, createTimer } from '../libs'

export const useMain = () => {
  const [isStart, setIsStart] = useState(false)

  const [hours, setHours] = useState<number>(0)
  const [minutes, setMinutes] = useState<number>(0)
  const [seconds, setSeconds] = useState<number>(0)
  const [timer, setTimer] = useState<Timer>({
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const timerCount = () => {
    const id = setInterval(() => {
      setTimer((_prev) => {
        const num = calc(_prev.hours, _prev.minutes, _prev.seconds)
        const obj = createTimer(num - 1)
        return {
          hours: obj.hours,
          minutes: obj.minutes,
          seconds: obj.seconds,
        }
      })
    }, 1000)
    return id
  }

  const handleChangeHours = (e: React.ChangeEvent<HTMLInputElement>) => {
    let hours = Number(e.target.value)
    if (hours > 23) {
      hours = 0
    } else if (hours < 0) {
      hours = 23
    }
    setHours(() => {
      setTimer({ hours, minutes, seconds })
      return hours
    })
  }

  const handleChangeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    let minutes = Number(e.target.value)
    if (minutes > 59) {
      minutes = 0
    } else if (minutes < 0) {
      minutes = 59
    }
    setMinutes(() => {
      setTimer({ hours, minutes, seconds })
      return minutes
    })
  }

  const handleChangeSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
    let seconds = Number(e.target.value)
    if (seconds > 59) {
      seconds = 0
    } else if (seconds < 0) {
      seconds = 59
    }
    setSeconds(() => {
      setTimer({ hours, minutes, seconds })
      return seconds
    })
  }

  return {
    isStart,
    setIsStart,
    hours,
    setHours,
    minutes,
    setMinutes,
    seconds,
    setSeconds,
    timer,
    setTimer,
    timerCount,
    handleChangeHours,
    handleChangeMinutes,
    handleChangeSeconds,
  }
}
