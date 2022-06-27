type Props = {
  min: number
  max: number
  value: number
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  col: string
  isStart: boolean
}

const TimerInput = (props: Props) => {
  return (
    <div
      className={
        !props.isStart
          ? 'mx-1 border p-2 hover:border-blue-500'
          : 'mx-1 border p-2'
      }
    >
      <input
        type="number"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.handleChange}
        className="border-none outline-none disabled:text-gray-500"
        disabled={props.isStart}
      />
      <span className="ml-1">{props.col}</span>
    </div>
  )
}

export default TimerInput
