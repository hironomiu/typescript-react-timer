import { useTimerButonBoard, Props } from '../hooks/useTimerButtonBoard'

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
      <button
        onClick={handleClickStart}
        className="w-20 h-8 rounded mx-2 bg-blue-400 text-white disabled:bg-gray-200 disabled:text-gray-400 text-sm font-light"
        disabled={
          props.isStart ||
          !(props.hours > 0 || props.minutes > 0 || props.seconds > 0)
        }
      >
        START
      </button>
      <button
        onClick={handleClickRestart}
        className="w-24 h-8 rounded mx-2 bg-blue-400 text-white disabled:bg-gray-200 disabled:text-gray-400 text-sm font-light"
        disabled={isRestart}
      >
        RESTART
      </button>
      <button
        onClick={handleClickStop}
        className="w-16 h-8 rounded mx-2 bg-blue-400 text-white disabled:bg-gray-200 disabled:text-gray-400 text-sm font-light"
        disabled={!props.isStart || !isRestart}
      >
        STOP
      </button>
      <button
        onClick={handleClickReset}
        className="w-20 h-8 rounded mx-2 bg-blue-400 text-white disabled:bg-gray-200 disabled:text-gray-400 text-sm font-light"
        disabled={isRestart}
      >
        RESET
      </button>
    </div>
  )
}

export default TimerButtonBoard
