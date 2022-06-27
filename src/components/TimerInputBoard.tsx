import TimerInput from './TimerInput'

type Props = {
  hours: number
  minutes: number
  seconds: number
  handleChangeHours: (e: any) => void
  handleChangeMinutes: (e: any) => void
  handleChangeSeconds: (e: any) => void
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
      />
      <TimerInput
        min={-1}
        max={60}
        value={props.minutes}
        handleChange={props.handleChangeMinutes}
        col={'分'}
      />
      <TimerInput
        min={-1}
        max={60}
        value={props.seconds}
        handleChange={props.handleChangeSeconds}
        col={'秒'}
      />
    </div>
  )
}

export default TimerInputBoard
