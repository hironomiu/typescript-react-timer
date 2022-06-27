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
    const hours = Number(e.target.value)
    if (hours > 23) {
      setHours(() => {
        setTimer({ hours: 0, minutes, seconds })
        return 0
      })
    } else if (hours < 0) {
      setHours(() => {
        setTimer({ hours: 23, minutes, seconds })
        return 23
      })
    } else {
      setHours(() => {
        setTimer({ hours: hours, minutes, seconds })
        return hours
      })
    }
  }

  const handleChangeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const minutes = Number(e.target.value)
    if (minutes > 59) {
      setMinutes(() => {
        setTimer({ hours, minutes: 0, seconds })
        return 0
      })
    } else if (minutes < 0) {
      setMinutes(() => {
        setTimer({ hours, minutes: 59, seconds })
        return 59
      })
    } else {
      setMinutes(() => {
        setTimer({ hours, minutes: minutes, seconds })
        return minutes
      })
    }
  }

  const handleChangeSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
    const seconds = Number(e.target.value)
    if (seconds > 59) {
      setSeconds(() => {
        setTimer({ hours, minutes, seconds: 0 })
        return 0
      })
    } else if (seconds < 0) {
      setSeconds(() => {
        setTimer({ hours, minutes, seconds: 59 })
        return 59
      })
    } else {
      setSeconds(() => {
        setTimer({ hours, minutes, seconds: seconds })
        return seconds
      })
    }
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
