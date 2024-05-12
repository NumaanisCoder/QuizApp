import React, { useState } from 'react';
import { View, TouchableOpacity, Text, ScrollView } from 'react-native';
import QuestionFrame from '../components/QuestionFrame';
import data from '../lib/data.json';

const HomeScreen = () => {
  const [index, setIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionSelect = (selectedKey) => {
    const updatedOptions = [...selectedOptions];
    updatedOptions[index] = selectedKey;
    console.log(selectedOptions);
    setSelectedOptions(updatedOptions);
  };

  const reset = (setselected) =>{
    setselected(null);
  }

  const calculateScore = () => {
    let score = 0;
    selectedOptions.forEach((selectedKey, idx) => {
      const correctKey = data[idx].answer; // Assuming 'answer' key in your data.json
      if (selectedKey === correctKey) {
        score++;
      }
    });
    return score;
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white', color: 'white' }}>
      <View style={{ padding: 10 }}>
        <QuestionFrame data={data[index]} handleOptionSelect={handleOptionSelect} reset={reset}/>
        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center', width: 'fit-content' }} onPress={() => {index <= data.length ? setIndex(index + 1) : "";

        }}>
          <Text style={{ backgroundColor: 'white', color: 'black', paddingHorizontal: 6, paddingVertical: 3, borderRadius: 8, borderColor: "black",borderWidth:2 }}>Next Question</Text>
        </TouchableOpacity>
        <Text>Score: {calculateScore()}</Text>
        <TouchableOpacity onPress={()=>{
            setSelectedOptions([]);
            setIndex(0);
        }}><Text>Reset</Text></TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
