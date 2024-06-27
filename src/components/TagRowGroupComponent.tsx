import React from 'react';
import {currencyTypesAllowed, paymentTypesAllowed, waitingPeriodTypeAllowed, riskAddressTypesAllowed, distributionChannelTypesAllowed, arrayLabels, arrays } from '../constants/Keys';
import TagRowComponent from '../components/TagRowComponent'
import GroupLabel from './Reusables/GroupLabel';

export default function TagRowGroupComponent({tagChangeFunction}:any) {
    const rowData = [currencyTypesAllowed, paymentTypesAllowed, distributionChannelTypesAllowed,waitingPeriodTypeAllowed, riskAddressTypesAllowed ]
    
  return (
    <div className={'tag-row-container'}>
        <GroupLabel text='Product Details' />
        {rowData.map((array:string[], index:number)=>(
            <TagRowComponent tags={array} label={arrayLabels[index]} category={arrays[index]} key={index} changeFunc={tagChangeFunction}/>
        ))
        }
    </div>
  )
}
