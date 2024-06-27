import React from 'react'

interface Props{
    text: string
}

export default function GroupLabel({text}:Props) {
  return (
    <div className='group-label'>{text}:</div>
  )
}
