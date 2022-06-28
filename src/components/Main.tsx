import TimerInputBoard from './TimerInputBoard'
import TimerLine from './TimerLine'
import TimerButtonBoard from './TimerButtonBoard'
import { useMain } from '../hooks/useMain'
import { useState } from 'react'
import TimeUpModal from './modals/TimeUpModal'

const Main = () => {
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
  } = useMain()

  // TODO: とりあえず実装。hooksにもってく
  const [isModalOn, setIsModalOn] = useState(false)

  return (
    <main className="flex flex-col justify-center items-center mt-8 mb-4">
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
    </main>
  )
}

export default Main
