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
    hours = hours > 23 ? 0 : hours < 0 ? 23 : hours
    setHours(() => {
      setTimer({ hours, minutes, seconds })
      return hours
    })
  }

  const handleChangeMinutes = (e: React.ChangeEvent<HTMLInputElement>) => {
    let minutes = Number(e.target.value)
    minutes = minutes > 59 ? 0 : minutes < 0 ? 59 : minutes
    setMinutes(() => {
      setTimer({ hours, minutes, seconds })
      return minutes
    })
  }

  const handleChangeSeconds = (e: React.ChangeEvent<HTMLInputElement>) => {
    let seconds = Number(e.target.value)
    seconds = seconds > 59 ? 0 : seconds < 0 ? 59 : seconds
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
