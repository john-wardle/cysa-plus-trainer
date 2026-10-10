import { questionBank as coreQuestionBank, cysaDomains, pentestDomains } from '../questionBank'
import { securityOperationsQuestions } from './securityOperations'
import { vulnerabilityManagementQuestions } from './vulnerabilityManagement'
import { incidentResponseQuestions } from './incidentResponse'
import { reportingCommunicationQuestions } from './reportingCommunication'
import { pentestPlanningQuestions } from './pentestPlanning'
import { pentestInfoGatheringQuestions } from './pentestInfoGathering'
import { pentestAttacksQuestions } from './pentestAttacks'
import { pentestReportingQuestions } from './pentestReporting'
import { pentestToolsQuestions } from './pentestTools'

export type { TrainingQuestion } from '../questionBank'
export { cysaDomains, pentestDomains }

export const questionBank = [
  ...coreQuestionBank,
  ...securityOperationsQuestions,
  ...vulnerabilityManagementQuestions,
  ...incidentResponseQuestions,
  ...reportingCommunicationQuestions,
  ...pentestPlanningQuestions,
  ...pentestInfoGatheringQuestions,
  ...pentestAttacksQuestions,
  ...pentestReportingQuestions,
  ...pentestToolsQuestions,
]
