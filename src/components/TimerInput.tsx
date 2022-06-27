type Props = {
  min: number
  max: number
  value: number
  handleChange: (e: any) => void
  col: string
}
const TimerInput = (props: Props) => {
  return (
    <div className="mx-1 border p-2 hover:border-blue-500">
      <input
        type="number"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={props.handleChange}
        className=" border-none outline-none"
      />
      <span className="ml-1">{props.col}</span>
    </div>
  )
}

export default TimerInput
