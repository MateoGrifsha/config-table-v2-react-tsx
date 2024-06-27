import React from 'react'

interface Props{
    text:string
}
export default function SubgroupLabel({text}:Props) {
  return (
    <div className='subgroup-label'>{text}:</div>
  )
}
