import { useTimerButonBoard, Props } from '../../hooks/useTimerButtonBoard'
import Button from '../parts/Button'

const TimerButtonBoard = (props: Props) => {
  const {
    isRestart,
    handleClickStart,
    handleClickRestart,
    handleClickStop,
    handleClickReset,
  } = useTimerButonBoard(props)

  return (
    <div className="flex mt-2">
      <Button
        onClick={handleClickStart}
        disabled={
          props.isStart ||
          !(props.hours > 0 || props.minutes > 0 || props.seconds > 0)
        }
      >
        START
      </Button>
      <Button onClick={handleClickRestart} disabled={isRestart}>
        RESTART
      </Button>
      <Button onClick={handleClickStop} disabled={!props.isStart || !isRestart}>
        STOP
      </Button>
      <Button onClick={handleClickReset} disabled={isRestart}>
        RESET
      </Button>
    </div>
  )
}

export default TimerButtonBoard
