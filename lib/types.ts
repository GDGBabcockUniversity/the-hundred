export interface NominationFormData {
  // Step 1 — About the Nominee
  firstName: string;
  lastName: string;
  school: string;
  department: string;
  level: string;
  email: string;

  // Step 2 — The Nomination
  categories: string[];
  reason: string;
  evidence: string;
}

export const INITIAL_FORM_DATA: NominationFormData = {
  firstName: "",
  lastName: "",
  school: "",
  department: "",
  level: "",
  email: "",
  categories: [],
  reason: "",
  evidence: "",
};
