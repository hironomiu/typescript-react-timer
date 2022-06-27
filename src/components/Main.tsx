import TimerInputBoard from './TimerInputBoard'
import TimerLine from './TimerLine'
import TimerButtonBoard from './TimerButtonBoard'
import { useMain } from '../hooks/useMain'
const Main = () => {
  const {
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

  return (
    <main className="flex flex-col justify-center items-center my-4">
      <TimerInputBoard
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        handleChangeHours={handleChangeHours}
        handleChangeMinutes={handleChangeMinutes}
        handleChangeSeconds={handleChangeSeconds}
      />
      <TimerLine timer={timer} />
      <TimerButtonBoard
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        timer={timer}
        timerCount={timerCount}
        setHours={setHours}
        setMinutes={setMinutes}
        setSeconds={setSeconds}
        setTimer={setTimer}
      />
    </main>
  )
}

export default Main
