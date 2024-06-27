import FormComponent from "./components/FormComponent";
import React, {createContext, useState } from 'react'

export interface Types{
  text:string,
  name:string,
  value:string
}
interface ProductEmailConfiguration {
  shouldSendEmail: boolean;
  sendToAgent: boolean;
  sendToCustomer: boolean | null;
  customCc: string[];
  customBcc: string[];
}
export interface DataObj{
  canSell:boolean | null,
  canCancel:boolean | null,
  canReturn:boolean | null,
  canDuplicate:boolean | null,
  canAdjustPremium:boolean | null,
  hasInstallments:boolean | null,
  hasRenewals:boolean | null,
  defaultStartDateUtcDiff: number | null,
  minStartDateUtcDiff:number | null,
  maxStartDateUtcDiff:number | null,
  defaultIssueDateUtcDiff: number | null,
  minIssueDateUtcDiff:number | null,
  maxIssueDateUtcDiff:number | null,
  minBeneficiaryCount:number | null,
  maxBeneficiaryCount:number | null,
  minPolicyHolderCount:number | null,
  maxPolicyHolderCount:number | null,
  minPolicyUserCount:number | null,
  maxPolicyUserCount:number | null,
  minInsurerCount:number | null,
  maxInsurerCount:number | null,
  minInvoiceRecipientCount:number | null,
  maxInvoiceRecipientCount:number | null,
  currencyTypesAllowed:Array<Types> | null,
  paymentTypesAllowed:Array<Types> | null,
  distributionChannelTypesAllowed:Array<Types> | null,
  waitingPeriodTypeAllowed:Array<Types> | null,
  riskAddressTypesAllowed:Array<Types> | null,
  emailConfigurations:Array<ProductEmailConfiguration> | null
  [key: string]: string | boolean | number | null | Array<Types> | Array<ProductEmailConfiguration> | null; //allows keys to come as those datatypes
}
const dataArray:Array<DataObj> = [{
  "canSell": false,
  "canCancel": null,
  "canReturn": true,
  "canDuplicate": false,
  "canAdjustPremium": true,
  "hasInstallments": true,
  "hasRenewals": null,

  "defaultStartDateUtcDiff": 0,
  "minStartDateUtcDiff":  -4,
  "maxStartDateUtcDiff": 20,

  "defaultIssueDateUtcDiff": 0,
  "minIssueDateUtcDiff": 0,
  "maxIssueDateUtcDiff": 5,
  
  "minBeneficiaryCount": 2,
  "maxBeneficiaryCount": 2,

  "minPolicyHolderCount": 0,
  "maxPolicyHolderCount": 0,

  "minPolicyUserCount": 1,
  "maxPolicyUserCount": 3,

  "minInsurerCount": 2,
  "maxInsurerCount": 10,
  
  "minInvoiceRecipientCount": 5,
  "maxInvoiceRecipientCount": 7,
  
  "currencyTypesAllowed": [
  {
    "text": "ALL",
    "name": "ALL",
    "value": "ALL"
  },
  {
    "text": "EUR",
    "name": "EUR",
    "value": "EUR"
  },
  {
    "text": "USD",
    "name": "USD",
    "value": "USD"
  }
],
  "paymentTypesAllowed": [
{
  "text": "CSH2",
  "name": "CSH2",
  "value": "CSH2"
}
],
  "distributionChannelTypesAllowed": [
{
  "text": "CSH7",
  "name": "CSH7",
  "value": "CSH7"
},

],
"waitingPeriodTypeAllowed": null,
"riskAddressTypesAllowed": null,
"emailConfigurations": [
  {
    "shouldSendEmail": true,
    "sendToAgent": true,
    "sendToCustomer": null,
    "customCc": ['aaaa'],
    "customBcc":['bbbb']
  }
],
}]

export const DataContext = createContext <DataObj | undefined | null | any>(null);
function App() {
  const [data, setData] = useState<DataObj>(dataArray[0])
  const [error, setError] = useState<boolean>(false)


  return (
    <div className="App">
      <DataContext.Provider value={{data, setData, error, setError}}>
        <FormComponent />
      </DataContext.Provider>
    </div>
  );
}

export default App;
