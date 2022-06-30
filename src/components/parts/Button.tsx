import React from 'react'

interface Props extends React.ComponentPropsWithoutRef<'button'> {
  color?: 'primary' | 'secondary'
  styles?: string
  disabled?: boolean
  onClick?: () => void
  children?: React.ReactNode
}
const Button = ({
  color,
  styles,
  disabled,
  onClick,
  style,
  children,
  ...props
}: Props) => {
  return (
    <button
      type="button"
      className={[
        styles,
        `${color ? 'text-blue-300' : ''}`,
        `${disabled ? 'text-gray-400' : ''}`,
      ].join(' ')}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
