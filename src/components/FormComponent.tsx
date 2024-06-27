import { Button, Form, Collapse } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
import { useContext, useState } from 'react';
import { DataContext } from '../App';
import { Types } from '../App';
import RadioGroupComponent from './RadioGroupComponent';
import DateInputGroup from './DateInputGroup';
import TagRowGroupComponent from './TagRowGroupComponent';
import MinMaxComponent from './MinMaxComponent';
import Table from './Table Components/Table';
import EmailTagGroup from './EmailTagGroup';
import SubgroupLabel from './Reusables/SubgroupLabel';
import { minMaxInputValues } from '../constants/Keys';

const {Panel} = Collapse;

function FormComponent(){
    const [form] = Form.useForm()

    const {data, setData, setError} = useContext(DataContext)
    const [history, setHistory] = useState<any>([])
    let hasError = false

    const allKeys:string[] = Object.keys(data)
    const additionalKeys:string[] = Object.keys(data['emailConfigurations'][0])
    const uniqueColumnLabels: Set<string> = new Set([...allKeys, ...additionalKeys])
    uniqueColumnLabels.delete('emailConfigurations');
    
    for (const [key, value] of Object.entries(data)) {
        if(value === undefined || value === null){
            data[key] = false
        }
    }

    const onFinish = (values: any) => {
      minMaxInputValues.forEach((array:any)=>{
        if(values[array[0]]>values[array[1]]){
          setError(true)
          hasError = true
        }
      })
      if(hasError){
        return;
      }

      setError(false)
      setHistory((prev:any) => {return [...prev, values]})
      setData(values)
      console.log(values);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    const tagChange = (key:string | any, value:string[], email:boolean)=>{
      if(email){
        if(value.length>0){
          console.log(key, value, email)
          form.setFieldValue('emailConfigurations', value)
        }
        return
      }

      var values:Types[] = []
      value.map((tag)=>(
        values.push({"text": tag, "name": tag, "value": tag})
      ))

      form.setFieldValue(key, values)
    }

  return (
    <div className='main-container'>
        <Form
          form={form}
          name="basic"
          initialValues={data}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className='form-wrapper'
        >
        
        <div className='first-section'>
            <RadioGroupComponent email={false}/>
            <DateInputGroup />
        </div>

        <div className='second-section'>
            <TagRowGroupComponent tagChangeFunction={tagChange}/>
            <MinMaxComponent />
        </div>

        <div className="email-section">
            <Collapse
            bordered={false}
            expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
            className="site-collapse-custom-collapse"
            defaultActiveKey={['1']}>

              <Panel header="Email Configurations" key="1" className="site-collapse-custom-panel" >
                <div className="email-radio-section">
                  <SubgroupLabel text='Email Details'/>
                    <Form.Item name={"emailConfigurations"}>
                      <RadioGroupComponent email={true} />
                    </Form.Item>
                  </div>

                  <div className="email-tag-section">
                    <SubgroupLabel text='Email Addresses'/>
                    <Form.Item name={"emailConfigurations"}>
                      <EmailTagGroup arrayChangeFunction={tagChange}/>
                    </Form.Item>
                  </div>
              </Panel>

            </Collapse>
        </div>

          <div className="submit-button">
            <Form.Item>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>

        <Table colNames={Array.from(uniqueColumnLabels)} rows={history} emailKeys={additionalKeys}/>
    </div>
  );
};

export default FormComponent;