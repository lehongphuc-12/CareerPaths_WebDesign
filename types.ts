
export enum TestStep {
  INTRO = 'INTRO',
  PREFERENCE = 'PREFERENCE',
  SKILLS = 'SKILLS',
  PERSONALITY = 'PERSONALITY',
  COMPLETED = 'COMPLETED'
}

export interface Career {
  id: string;
  name: string;
  category: string;
  description: string;
  matchPercentage: number;
  tags: string[];
  icon: string;
  color: string;
}

export interface TestState {
  currentStep: number;
  totalSteps: number;
  preferences: string[];
  skills: string[];
}
