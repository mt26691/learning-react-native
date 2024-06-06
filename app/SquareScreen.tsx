import React, { useReducer } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const reducer = (state: any, action: any) => {
    if (action.payload > 255 || action.payload < 0) return state;
    switch (action.type) {
        case 'UPDATE_RED':
            return { ...state, red: action.payload };
        case 'UPDATE_GREEN':
            return { ...state, green: action.payload };
        case 'UPDATE_BLUE':
            console.log(state);
            return { ...state, blue: action.payload };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const initialState = { red: 0, green: 0, blue: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    const { red, green, blue } = state;

    return (
        <View>
            <TextInput
                style={styles.input}
                value={red.toString()}
                onChangeText={(text) => dispatch({ type: 'UPDATE_RED', payload: parseInt(text) || 0 })}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                value={green.toString()}
                onChangeText={(text) => dispatch({ type: 'UPDATE_GREEN', payload: parseInt(text) || 0 })}
                keyboardType="numeric"
            />
            <TextInput
                style={styles.input}
                value={blue.toString()}
                onChangeText={(text) => {
                    console.log('update blue');
                    dispatch({ type: 'UPDATE_BLUE', payload: parseInt(text) || 0 })
                }}
                keyboardType="numeric"
            />
            <View style={[styles.square, { backgroundColor: `rgb(${red}, ${green}, ${blue})` }]} />
        </View>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    square: {
        width: 100,
        height: 100,
    },
});

export default SquareScreen;