export const calc = (
  hours: number,
  minutes: number,
  seconds: number
): number => {
  const result = hours * 60 * 60 + minutes * 60 + seconds
  return result
}

export const createTimer = (num: number) => {
  const hours = Math.floor(num / 60 / 60)
  const minutes = Math.floor((num - hours * 60 * 60) / 60)
  const seconds = num - hours * 60 * 60 - minutes * 60
  return { hours, minutes, seconds }
}
