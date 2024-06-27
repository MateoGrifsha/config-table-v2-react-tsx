import { Tag, Form } from 'antd';
import React, { useState, useContext } from 'react';
import { DataContext } from '../App';

const { CheckableTag } = Tag;

interface Props{
    tags: string[],
    label: string,
    changeFunc: any,
    category: string
}
export default function TagRowComponent({tags, label, changeFunc, category}:Props) {
    const {data} = useContext(DataContext)

    const initialTags:string[] =[]
    const valueKey = data[category]

    if(valueKey != null){
        for(let i = 0;i<valueKey.length;i++){
            initialTags.push(data[category][i]['text'])
        }
    }
    const [selectedTags, setSelectedTags] = useState<string[]>(initialTags);

    const handleChange = (tag: string, checked: boolean) => {
        const nextSelectedTags = checked ? [...selectedTags, tag] : selectedTags.filter(t => t !== tag);
        setSelectedTags(nextSelectedTags);
        changeFunc(category, nextSelectedTags, false)
      };

  return (
    <div className={'tag-selection-row'}>
         <span className='tag-row-label'>{label}:</span>
         <Form.Item name={category}>
            {tags.map((tag, index) => (      
                <CheckableTag
                    key={index}
                    checked={selectedTags.indexOf(tag) > -1}
                    onChange={checked => handleChange(tag, checked)}
                    >
                    {tag}
                </CheckableTag>
            ))}
        </Form.Item>
    </div>
  )
}
