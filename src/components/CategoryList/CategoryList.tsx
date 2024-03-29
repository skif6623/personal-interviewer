import React, { FC, useState } from 'react';
import { Category } from '../CategoryItem/Category';
import {
  HtmlIcon,
  CssIcon,
  JsIcon,
  ReactIcon,
  DiceIcon,
} from './CategoryList.styled';

const categoryIcons = [
  {
    icon: <DiceIcon />,
    id: 'random',
    color: '#3b3d3d',
    image:
      'https://cdn.pixabay.com/photo/2019/07/11/15/34/luck-4330900_960_720.jpg',
  },
  {
    icon: <HtmlIcon />,
    id: 'html',
    color: '#f46a3b',
    image:
      'https://cdn.pixabay.com/photo/2013/07/18/20/25/boat-164977_960_720.jpg',
  },
  {
    icon: <CssIcon />,
    id: 'css',
    color: '#2196f3',
    image:
      'https://cdn.pixabay.com/photo/2018/08/06/22/55/sun-3588618_960_720.jpg',
  },
  {
    icon: <JsIcon />,
    id: 'java-script',
    color: '#e6c830',
    image:
      'https://cdn.pixabay.com/photo/2016/11/21/13/29/yellow-1845394_960_720.jpg',
  },
  {
    icon: <ReactIcon />,
    id: 'react',
    color: '#00d8ff',
    image:
      'https://cdn.pixabay.com/photo/2016/04/15/04/02/water-1330252_960_720.jpg',
  },
];

export const CategoryList: FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('java-script');

  const toggleCategory = (text: string): void => {
    setActiveCategory(text);
  };

  return (
    <div>
      <ul>
        {categoryIcons.map(({ icon, id, color, image }) => {
          return (
            <Category
              id={id}
              image={image}
              color={color}
              icon={icon}
              active={activeCategory}
              key={id}
              toggle={toggleCategory}
            >
              {id}
            </Category>
          );
        })}
      </ul>
    </div>
  );
};
