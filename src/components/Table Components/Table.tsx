import React from 'react'
import { AgGridReact } from 'ag-grid-react'; // React Grid Logic
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import { DataObj, Types } from '../../App';

interface Props{
  colNames: string[],
  rows: DataObj[],
  emailKeys: string[]
}
export default function Table({colNames, rows, emailKeys}:Props) {
    const formatter = (p:any)=>{
      if(emailKeys.includes(p.colDef.field)){
        const emailPath = p.data['emailConfigurations'][0]
        if(Array.isArray(emailPath[p.colDef.field])){
          let values = ''
          emailPath[p.colDef.field].map((x:string) => (values += x + ',  '))
          return values.length>0 ? values : 'None'
        }
      }
      if(Array.isArray(p.value)){
        let values = ''
          p.value.map((x:Types) => (values += x.text + ',  '))
        return values.length>0 ? values : 'None'
      }
      return p.value
    }

    const colDefs = colNames.map((key:any) => ({ field: key, cellDataType: 'text', valueFormatter: formatter }));

  return (
    <div className={"ag-theme-quartz-dark ag-table"} style={{height:'500px', width:'1400px'}}>
          <AgGridReact rowData={rows} columnDefs={colDefs} />
    </div>
  )
}
