import React from 'react'
import EmailTagComponent from './EmailTagComponent'
import { emailArrayKeys } from '../constants/Keys'
import EmailTagsCustom from './EmailTagsCustom'


export default function EmailTagGroup({arrayChangeFunction}:any) {

  return (
    <div>
        {emailArrayKeys.map((key:string, index:number)=>(
              <EmailTagComponent key={index} keyProperty={key} changeFunc={arrayChangeFunction}/>
        ))}
    </div>
  )
}
