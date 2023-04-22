import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';

const App = () => {
  const [showbutton, setShowbutton] = useState(false)
  const handleonClick = () => {
    if (showbutton) {
      setShowbutton(false)
    }
    else {
      setShowbutton(true)
    }
  }
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 30 }}>Hello world</Text>
      <Text style={{ fontSize: 50, display:showbutton?"flex":"none"}}>Satya Betichod</Text>
      <Button onPress={handleonClick} title="Click Me"/>
    </View>
  );
};

export default App;