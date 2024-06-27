import React, {useContext, useState} from 'react'
import { DataContext } from '../App'
import { Form, Tag, Input } from 'antd'

interface Props{
    keyProperty:string,
    changeFunc: any
  }

export default function EmailTagsCustom({keyProperty, changeFunc}:Props) {
    const {data} = useContext(DataContext)
    const [tags, setTags] = useState(data['emailConfigurations'][0][keyProperty])
    const [value, setValue] = useState('')

    const handleChange = (e:any) => {
        setValue(e.target.value)
    }
    const handleInput = (e:any) =>{
        setTags((prev:any) => [...prev, e.target.value])
    }
    const handleClose = (removedTag: string) => {
        const newTags = tags.filter((tag:string) => tag !== removedTag);
        setTags(newTags);
      };

  return (
    <div>
        <p>{keyProperty==='customCc'?'Custom CC: ':'Custom BCC'}</p>
        {tags.map((tag:string, index:number)=>{
            return <Tag key={index} closable onClose={()=>handleClose(tag)}>{tag}</Tag>
        })}
        <Form.Item name={keyProperty}>
            <Input onBlur={(e)=>handleInput(e)} onPressEnter={(e)=>handleInput(e)} onChange={(e)=>handleChange(e)} value={value}/>
        </Form.Item>
    </div>
  )
}
