import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';


const QuestionFrame = ({ data, handleOptionSelect,reset }) => {
  const { question, options,answer } = data;

  const [selected, setselected] = useState(null);

  function handleCurrentSelection(key){
    setselected(key);
  }

  return (
    <View className="p-10">
      <Text className="text-lg">{`Ques) ${question}`}</Text>
      <View>
        {options.map((value, key) => (
          <TouchableOpacity
            key={key}
            style={{
              padding: 5,
              borderWidth: 2,
              backgroundColor: key === selected ? 'green' : 'black',
              marginVertical: 2,
              borderRadius: 8,
            }}
            onPress={() => {handleOptionSelect(value); handleCurrentSelection(key)}}
          >
            <Text className="text-base text-white">{`${key}) ${value}`}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuestionFrame;
