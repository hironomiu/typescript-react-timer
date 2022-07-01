import TimerInputBoard from './TimerInputBoard'
import TimerLine from './TimerLine'
import TimerButtonBoard from './TimerButtonBoard'
import { useTimerMain } from '../../hooks/useTimerMain'
import { useState } from 'react'
import TimeUpModal from '../modals/TimeUpModal'

const TimerMain = () => {
  const {
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
  } = useTimerMain()

  // TODO: とりあえず実装。hooksにもってく
  const [isModalOn, setIsModalOn] = useState(false)

  return (
    <>
      <TimerInputBoard
        isStart={isStart}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        handleChangeHours={handleChangeHours}
        handleChangeMinutes={handleChangeMinutes}
        handleChangeSeconds={handleChangeSeconds}
      />
      <TimerLine timer={timer} />
      <TimerButtonBoard
        isStart={isStart}
        setIsStart={setIsStart}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        timer={timer}
        timerCount={timerCount}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        setTimer={setTimer}
        setIsModalOn={setIsModalOn}
      />
      {isModalOn ? <TimeUpModal setIsModalOn={setIsModalOn} /> : null}
    </>
  )
}

export default TimerMain
