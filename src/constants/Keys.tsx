import { wait } from "@testing-library/user-event/dist/utils"

export const radioKeys = ['canSell', "canCancel", "canReturn", "canDuplicate", "canAdjustPremium", "hasInstallments","hasRenewals"]
export const radioQuestions = ['Available for sale', "Can the item be canceled", "Is it returnable", "Can it be duplicated", "Can be adjusted to Premium", "Does it have installments","Does it have renewals"]

export const dateInputKeys = ['defaultStartDateUtcDiff', 'minStartDateUtcDiff', 'maxStartDateUtcDiff','defaultIssueDateUtcDiff', 'minIssueDateUtcDiff', 'maxIssueDateUtcDiff']
export const dateInputLabels = ['Default Starting Date', 'Minimum Starting Date', 'Maximum Starting Date', 'Default Issuing Date', 'Minimum Issuing Date', 'Maximum Issuing Date']

export const arrayLabels = ['Currency Types Allowed', 'Payment Types Allowed', 'Distribution Channel Types Allowed', 'Waiting Period Type Allowed', 'Risk Address Types Allowed']
export const arrays = ['currencyTypesAllowed', 'paymentTypesAllowed', 'distributionChannelTypesAllowed', 'waitingPeriodTypeAllowed', 'riskAddressTypesAllowed']
export const currencyTypesAllowed:string[] = ['ALL','EUR', 'USD',]
export const paymentTypesAllowed:string[] = ['CSH', 'CSH1', 'CSH2', 'CSH3']
export const distributionChannelTypesAllowed:string[] = ['CSH4', 'CSH5', 'CSH6', 'CSH7']
export const waitingPeriodTypeAllowed:string[] = ['CSH8', 'CSH9', 'CSH10', 'CSH11']
export const riskAddressTypesAllowed:string[] = ['CSH12', 'CSH13', 'CSH14', 'CSH15']

export const minMaxInputLabels = ['Beneficiary Count' , 'Policy Holder Count', 'Policy User Count', 'Insurer Count', 'Invoice Recipient Count']
export const minMaxInputValues = [
    ['minBeneficiaryCount', 'maxBeneficiaryCount'], 
    ['minPolicyHolderCount', 'maxPolicyHolderCount'], 
    ['minPolicyUserCount', 'maxPolicyUserCount'], 
    ['minInsurerCount', 'maxInsurerCount'], 
    ['minInvoiceRecipientCount', 'maxInvoiceRecipientCount']
  ]

export const emailRadioKeys = ['shouldSendEmail', "sendToAgent", "sendToCustomer"]
export const emailRadioQuestions = ['Should be sent email', "Should be sent to agent", "Should be sent to customer"]

export const emailArrayKeys = ['customCc', 'customBcc']