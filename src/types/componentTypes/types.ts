export interface IQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface IQState {
  html: string[];
  css: string[];
  js: string[];
  react: string[];
  items: IQItem[];
  isLoading: boolean;
  isError: boolean;
}

export interface IGlobalStore {
  questions: IQState;
  filter: string;
  servise: boolean;
}

export interface IQuestParams {
  categoryItems: IQItem[];
  color: string;
  bg: string;
}
