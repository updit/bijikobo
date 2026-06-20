export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface Stat {
  value: string;
  label: string;
}

export interface Service {
  name: string;
}

export interface CharacterState {
  isAwake: boolean;
  scrollProgress: number;
}
