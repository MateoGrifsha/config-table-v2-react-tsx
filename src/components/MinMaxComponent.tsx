import React, { useContext } from 'react'
import { minMaxInputValues, minMaxInputLabels } from '../constants/Keys'
import { Form, InputNumber } from 'antd'
import GroupLabel from './Reusables/GroupLabel'
import { DataContext } from '../App'

export default function MinMaxComponent() {
  const {error} = useContext(DataContext)
  return (
    <div className='min-max-container'>
      {error && <div className='error-box'>Minimum cannot be larger than maximum</div>}
      <GroupLabel text='Number of Users' />
        <div className="min-max-placeholders">
          <p>MIN</p>
          <p>MAX</p>
        </div>
        {minMaxInputValues.map((array, index)=>(
          <div key={index} className='min-max-number-row'>
            <label>{minMaxInputLabels[index]}:</label>
            <div className="min-max-number-input">
              <Form.Item name={array[0]}>
                <InputNumber min={0} max={10}/>
              </Form.Item>
              <Form.Item name={array[1]}>
                <InputNumber min={0} max={10}/>
              </Form.Item>
            </div>
          </div>
        ))}
    </div>
  )
}
