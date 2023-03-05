import React, { FC } from 'react';
import Select from 'react-select';
interface OptionProps {
  value: string;
  label: string;
  color: string;
}

const options: OptionProps[] = [
  { value: 'html', label: 'HTML', color: '#f46a3b' },
  { value: 'css', label: 'CSS', color: '#2196f3' },
  { value: 'java-script', label: 'JS', color: '#e6c830' },
  { value: 'react', label: 'React', color: '#00d8ff' },
];

const colorStyles = {
  control: (styles: any) => ({
    ...styles,
    minWidth: 250,
  }),
  option: (styles: any, { data }: any) => {
    return { ...styles, color: data.color };
  },
  multiValue: (styles: any, { data }: any) => {
    return {
      ...styles,
      fontSize: 12,
      backgroundColor: data.color,
    };
  },
  multiValueLabel: (styles: any) => {
    return {
      ...styles,
      color: '#ffffff',
      fontSize: 12,
      fontWeight: 700,
    };
  },
  multiValueRemove: (styles: any) => {
    return {
      ...styles,
      color: '#ffffff',
      cursor: 'pointer',
      ':hover': {
        color: 'red',
      },
    };
  },
};

export const CategorySelector: FC = () => {
  const handleChange = (opt: any) => {
    console.log(opt);
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      isMulti
      styles={colorStyles}
    />
  );
};
