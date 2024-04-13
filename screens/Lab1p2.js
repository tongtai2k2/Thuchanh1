import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Vibration } from 'react-native';
import { Entypo } from '@expo/vector-icons';

const Lab1p2 = () => {
  const [darkMode, setDarkMode] = useState(false);
  const bgColorFunction = darkMode ? '#414853' : '#ededed';
  const bgColorNumber = darkMode ? '#303946' : '#fff';
  const bgColorResult = darkMode ? '#282f3b' : '#f5f5f5';
  const bgColorThemeButton = darkMode ? '#7b8084' : '#e5e5e5';
  const textColorHistory = darkMode ? '#B5B&BB' : '#7c7c7c';
  const colorIcon = darkMode ? 'white' : 'black';

  const buttonsLeft = [
    ['C', 'DEL'],
    [7, 8, 9],
    [6, 5, 4],
    [3, 2, 1],
    [0, '.']
  ];
  const buttonsRight = ['/', '*', '-', '+', '='];

  const [currentNumber, setCurrentNumber] = useState('');
  const [lastNumber, setLastNumber] = useState('');

  const calculator = () => {
    let lastChar = currentNumber[currentNumber.length - 1];
    if (['+', '-', '*', '/'].includes(lastChar)) {
      setCurrentNumber(currentNumber);
    } else {
      let result = eval(currentNumber).toString();
      setCurrentNumber(result);
    }
  };

  const handleInput = (buttonPress) => {
    switch (buttonPress) {
      case '+':
      case '-':
      case '*':
      case '/':
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
      case 'DEL':
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber.substring(0, currentNumber.length - 1));
        break;
      case 'C':
        Vibration.vibrate(35);
        setCurrentNumber('');
        setLastNumber('');
        break;
      case '=':
        Vibration.vibrate(35);
        setLastNumber(currentNumber + '=');
        calculator();
        break;
      default:
        Vibration.vibrate(35);
        setCurrentNumber(currentNumber + buttonPress);
        break;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'space-around', alignItems: 'flex-end', backgroundColor: bgColorResult }}>
        <TouchableOpacity
          style={{ marginTop: 10, marginLeft: 20, borderRadius: 90, height: 40, width: 40, justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-start', backgroundColor: bgColorThemeButton }}
          onPress={() => setDarkMode(!darkMode)}
        >
          <Entypo name={darkMode ? 'light-up' : 'moon'} size={40} style={{ color: colorIcon }} />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginRight: 10, color: textColorHistory }}>{lastNumber}</Text>
        <Text style={{ color: '#00b9d6', fontSize: 35, margin: 15 }}>{currentNumber}</Text>
      </View>
      <View style={{ flex: 2, flexDirection: 'row' }}>
        <View style={{ flex: 3 }}>
          {buttonsLeft.map((row, rowIndex) => (
            <View key={rowIndex} style={{ flex: 1, flexDirection: 'row' }}>
              {row.map((item, colIndex) => (
<TouchableOpacity key={`${rowIndex}-${colIndex}`} style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: rowIndex === 0 ? bgColorFunction : bgColorNumber }} onPress={() => handleInput(item)}>
                  <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{item}</Text>
                </TouchableOpacity>
              ))}
            </View>
          ))}
        </View>
        <View style={{ flex: 1, backgroundColor: '#00b9d6' }}>
          {buttonsRight.map((item, index) => (
            <TouchableOpacity key={index} style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} onPress={() => handleInput(item)}>
              <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fff' }}>{item}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default Lab1p2;