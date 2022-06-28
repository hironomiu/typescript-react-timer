import { useState, useEffect } from 'react'
import { calc } from '../libs'

export type Props = {
  timer: {
    hours: number
    minutes: number
    seconds: number
  }
  setIsModalOn: (bool: boolean) => void
  hours: number
  minutes: number
  seconds: number
  isStart: boolean
  setIsStart: (bool: boolean) => void
  timerCount: () => NodeJS.Timer
  setHours: (num: number) => void
  setMinutes: (num: number) => void
  setSeconds: (num: number) => void
  setTimer: (nums: { hours: number; minutes: number; seconds: number }) => void
}

export const useTimerButonBoard = (props: Props) => {
  const [isRestart, setIsRestart] = useState(true)
  const [timerId, setTimerId] = useState<NodeJS.Timer>()

  // MEMO: 0秒以下は動作させない。タイマーを起動し0秒になったらアラートをあげる
  useEffect(() => {
    const num = calc(props.timer)
    if (num <= 0) {
      clearInterval(timerId)
      props.setHours(0)
      props.setMinutes(0)
      props.setSeconds(0)
      if (props.isStart) setTimeout(() => props.setIsModalOn(true), 0)
      props.setIsStart(false)
    }
  }, [props, timerId])

  const handleClickStart = () => {
    const id = props.timerCount()
    setTimerId(id)
    props.setIsStart(true)
  }

  const handleClickRestart = () => {
    const id = props.timerCount()
    setTimerId(id)
    setIsRestart(true)
  }

  const handleClickStop = () => {
    clearInterval(timerId)
    setIsRestart(false)
  }

  const handleClickReset = () => {
    props.setHours(0)
    props.setMinutes(0)
    props.setSeconds(0)
    props.setTimer({
      hours: 0,
      minutes: 0,
      seconds: 0,
    })
    props.setIsStart(false)
    setIsRestart(true)
  }

  return {
    isRestart,
    setIsRestart,
    timerId,
    setTimerId,
    handleClickStart,
    handleClickRestart,
    handleClickStop,
    handleClickReset,
  }
}
