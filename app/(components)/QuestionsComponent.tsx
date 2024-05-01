import React, { useState } from 'react';
import { RadioButton } from 'react-native-paper';
import { OptionsTyped } from './type';

const QuestionsComponent = ({ options }: { options: OptionsTyped }) => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined
  );

  const handleValueChange = (value: any) => {
    setSelectedValue(value);
  };

  return (
    <>
      {options.map((option, index) => {
        return (
          <RadioButton.Group
            value={selectedValue}
            onValueChange={handleValueChange}
            name="myRadioGroup"
            accessibilityLabel="Pick your Answer"
            key={index}
          >
            <RadioButton.Item value={option} label={option} />
          </RadioButton.Group>
        );
      })}
    </>
  );
};

export default QuestionsComponent;
