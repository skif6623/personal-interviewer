import { IQItem, IQuestParams } from '../types/componentTypes/types';

export const getSortedQuestions = (questions: IQItem[], title?: string) => {
  switch (title) {
    case 'html':
      return {
        categoryItems: questions.filter(item => item.category === title),
        color: '#f46a3b',
        bg: 'https://cdn.pixabay.com/photo/2013/07/18/20/25/boat-164977_960_720.jpg',
      };
    case 'css':
      return {
        categoryItems: questions.filter(item => item.category === title),
        color: '#2196f3',
        bg: 'https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_960_720.jpg',
      };
    case 'java-script':
      return {
        categoryItems: questions.filter(item => item.category === title),
        color: '#e6c830',
        bg: 'https://cdn.pixabay.com/photo/2016/11/21/13/29/yellow-1845394_960_720.jpg',
      };

    case 'react':
      return {
        categoryItems: questions.filter(item => item.category === title),
        color: '#00d8ff',
        bg: 'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg',
      };

    default:
      return;
  }
};

export const getVisibleQuestions = (
  filter: string,
  questParams: IQuestParams
) => {
  const func = () => {
    const normalizeFilter = filter.toLowerCase();

    return questParams.categoryItems.filter(item =>
      item.question.toLowerCase().includes(normalizeFilter)
    );
  };
  return func();
};
