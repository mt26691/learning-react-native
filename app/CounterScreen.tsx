import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const CounterScreen: React.FC = () => {
    const [counter, setCounter] = useState(0);

    const increaseCounter = () => {
        setCounter(counter + 1);
    };

    const decreaseCounter = () => {
        setCounter(counter - 1);
    };

    return (
        <View>
            <Text>Counter: {counter}</Text>
            <Button title="Increase" onPress={increaseCounter} />
            <Button title="Decrease" onPress={decreaseCounter} />
        </View>
    );
};

export default CounterScreen;