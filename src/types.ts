export type ClientType = 'W-2' | '1099' | 'LLC/S-Corp';

export interface CreditRepairSubmission {
  id?: string;
  type: 'credit-repair';
  fullName: string;
  email: string;
  phone: string;
  state: string;
  creditScoreRange: string;
  mainConcerns: string[];
  primaryGoal: string;
  contactConsent: boolean;
  createdAt: any;
}

export interface TaxStrategySubmission {
  id?: string;
  type: 'tax-strategy';
  fullName: string;
  email: string;
  phone: string;
  state: string;
  clientType: ClientType;
  // W-2 specific
  w2Count?: string;
  hasDependents?: boolean;
  otherIncomeSources?: boolean;
  // 1099 specific
  workType?: string;
  annualRevenue?: string;
  tracksIncomeExpenses?: boolean;
  // Business Owner specific
  isLegallyFormed?: boolean;
  hasEIN?: boolean;
  hasBusinessAccount?: boolean;
  usesProfessionalBookkeeping?: boolean;
  financesSeparate?: boolean;
  tracksRevenue?: boolean;
  tracksExpenses?: boolean;
  
  isDisqualified?: boolean;
  missingRequirements?: string[];
  createdAt: any;
}

export type Submission = CreditRepairSubmission | TaxStrategySubmission;
