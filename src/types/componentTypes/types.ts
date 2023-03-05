export interface IQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface IQState {
  items: IQItem[];
  isLoading: boolean;
  isError: boolean;
}

export interface IGlobalStore {
  questions: IQState;
  filter: string;
  servise: string;
  select: string[];
}

export interface IQuestParams {
  categoryItems: IQItem[];
  color: string;
  bg: string;
}
