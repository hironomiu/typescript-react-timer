import TimerInput from './TimerInput'

type Props = {
  isStart: boolean
  hours: number
  minutes: number
  seconds: number
  handleChangeHours: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeMinutes: (e: React.ChangeEvent<HTMLInputElement>) => void
  handleChangeSeconds: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const TimerInputBoard = (props: Props) => {
  return (
    <div className="flex">
      <TimerInput
        min={-1}
        max={24}
        value={props.hours}
        handleChange={props.handleChangeHours}
        col={'時'}
        isStart={props.isStart}
      />
      <TimerInput
        min={-1}
        max={60}
        value={props.minutes}
        handleChange={props.handleChangeMinutes}
        col={'分'}
        isStart={props.isStart}
      />
      <TimerInput
        min={-1}
        max={60}
        value={props.seconds}
        handleChange={props.handleChangeSeconds}
        col={'秒'}
        isStart={props.isStart}
      />
    </div>
  )
}

export default TimerInputBoard
