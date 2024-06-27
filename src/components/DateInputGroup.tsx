import React from 'react'
import { dateInputKeys, dateInputLabels } from '../constants/Keys'
import { InputNumber, Form } from 'antd'
import GroupLabel from './Reusables/GroupLabel';
import SubgroupLabel from './Reusables/SubgroupLabel';
export default function DateInputGroup() {
  const todaysDate = new Date().toDateString()

  const componentNesting = (el:string, index:number) => {
    if (index === 0 || index == 3){
      return (
        <div key={index}>
        <SubgroupLabel text={`${index===0?'Starting':'Issuing'} Dates`} />
          <Form.Item label={dateInputLabels[index]} name={el}>
              <InputNumber />
          </Form.Item>
        </div>
      );
    }

    else if(index === 1 || index == 4){
      return (
          <div className="min-max-date-group" key={index}>
            <Form.Item label={dateInputLabels[index]} name={el}>
                <InputNumber />
            </Form.Item>
            <Form.Item label={dateInputLabels[index+1]} name={el}>
                <InputNumber />
            </Form.Item>
          </div>
      )
    }
      return null
    }


  return (
    <div className='date-input-group'>
        <span className='todays-date'>{todaysDate}</span>
        <GroupLabel text='Starting & Issuing Dates' />
        {dateInputKeys.map((el:string, index:number)=>(
            componentNesting(el, index)
        ))}
    </div>
  )
}
