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
        styles="w-20 h-8 rounded mx-2 bg-blue-400 text-white disabled:bg-gray-200 disabled:text-gray-400 text-sm font-light"
        disabled={
          props.isStart ||
          !(props.hours > 0 || props.minutes > 0 || props.seconds > 0)
        }
        children="START"
      />
      <Button
        onClick={handleClickRestart}
        styles="w-24 h-8 rounded mx-2 bg-blue-400 text-white disabled:bg-gray-200 disabled:text-gray-400 text-sm font-light"
        disabled={isRestart}
        children="RESTART"
      />
      <Button
        onClick={handleClickStop}
        styles="w-16 h-8 rounded mx-2 bg-blue-400 text-white disabled:bg-gray-200 disabled:text-gray-400 text-sm font-light"
        disabled={!props.isStart || !isRestart}
        children="STOP"
      />

      <Button
        onClick={handleClickReset}
        styles="w-20 h-8 rounded mx-2 bg-blue-400 text-white disabled:bg-gray-200 disabled:text-gray-400 text-sm font-light"
        disabled={isRestart}
        children="RESET"
      />
    </div>
  )
}

export default TimerButtonBoard
