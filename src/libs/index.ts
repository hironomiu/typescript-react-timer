type Calc = {
  hours: number
  minutes: number
  seconds: number
}

export const calc = ({ hours, minutes, seconds }: Calc): number =>
  hours * 60 * 60 + minutes * 60 + seconds

export const createTimer = (num: number) => {
  const hours = Math.floor(num / 60 / 60)
  const minutes = Math.floor((num - hours * 60 * 60) / 60)
  const seconds = num - hours * 60 * 60 - minutes * 60
  return { hours, minutes, seconds }
}
