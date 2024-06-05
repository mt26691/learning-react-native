import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View style={styles.container}>
            <ImageDetail
                imageSource={require('../assets/images/beach.jpg')}
                title="Beach" />
            <ImageDetail
                imageSource={require('../assets/images/mountain.jpg')}
                title="Mountain" />
            <ImageDetail
                imageSource={require('../assets/images/forest.jpg')}
                title="Forest" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain',
    },
});

export default ImageScreen;