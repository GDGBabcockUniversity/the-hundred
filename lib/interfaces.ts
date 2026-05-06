export interface NominationData {
  // Step 0: Nomination Type
  nominationType: "other" | "self";
  // Step 1: Nominee Info
  nomineeName: string;
  department: string;
  faculty: string;
  level: string;
  phone: string;
  email: string;
  social: string;
  // Step 2: Recognition Area
  recognitionArea: string;
  // Step 3: Contribution
  briefSummary: string;
  fullDescription: string;
  impact: string;
  // Step 4: Evidence
  evidenceLinks: string;
  // Step 5: Declaration
  nominatorName: string;
  nominatorEmail: string;
  nominatorRelationship: string;
  confirmAccurate: boolean;
  confirmNoGuarantee: boolean;
}

export interface StepProps {
  data: NominationData;
  updateFields: (fields: Partial<NominationData>) => void;
}

export interface StepIndicatorProps {
  currentStep: number;
}
