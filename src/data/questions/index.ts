import { questionBank as coreQuestionBank, cysaDomains } from '../questionBank'
import { securityOperationsQuestions } from './securityOperations'
import { vulnerabilityManagementQuestions } from './vulnerabilityManagement'
import { incidentResponseQuestions } from './incidentResponse'
import { reportingCommunicationQuestions } from './reportingCommunication'

export type { TrainingQuestion } from '../questionBank'
export { cysaDomains }

export const questionBank = [
  ...coreQuestionBank,
  ...securityOperationsQuestions,
  ...vulnerabilityManagementQuestions,
  ...incidentResponseQuestions,
  ...reportingCommunicationQuestions,
]
