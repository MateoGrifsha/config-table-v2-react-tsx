import React, { useContext } from 'react'
import { Form, Radio } from 'antd';
import { radioKeys, radioQuestions, emailRadioKeys } from '../constants/Keys';
import { DataContext } from '../App';
import GroupLabel from './Reusables/GroupLabel';

interface Props{
  email: boolean,
}

export default function RadioGroupComponent({email}:Props) {
  const {data} = useContext(DataContext)

  const emailConfigInitialValues = data['emailConfigurations'][0]

  for (const [key, value] of Object.entries(emailConfigInitialValues)) {
    if(value === undefined || value === null){
      data['emailConfigurations'][0][key] = false
    }
  }

  return (
    <div className='radio-component'>
      {!email && <GroupLabel text="Product Information and Specifications"/>}
        {!email && radioKeys.map((el:string, index:number) =>(
            <Form.Item label={radioQuestions[radioKeys.indexOf(el)]} name={el} key={index}>
              <Radio.Group optionType="button" buttonStyle="solid">
                <Radio.Button value={true} className='true-button'>YES</Radio.Button>
                <Radio.Button value={false} className='false-button'>NO</Radio.Button>
              </Radio.Group>
            </Form.Item>
        ))  
        }
      
        {email && 
          emailRadioKeys.map((el:string, index:number)=>(
            <Form.Item name={el} label={el} key={index} initialValue={emailConfigInitialValues[el]}>
              <Radio.Group optionType="button" buttonStyle="solid">
                <Radio.Button value={true} className='true-button'>YES</Radio.Button>
                <Radio.Button value={false} className='false-button'>NO</Radio.Button>
              </Radio.Group>
            </Form.Item>
          ))
        }
    </div>
  )
}
