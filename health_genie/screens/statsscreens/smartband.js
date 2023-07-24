import React from 'react';
import {
    StyleSheet,
    View,
    Text,
    Pressable,
} from 'react-native';

export default function SmartBand({ navigation }) {

    const onPressHandler = () => {
        // navigation.navigate('Screen_A');
        navigation.goBack();
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Connect Your SmartBand
        </Text>
            <Pressable
                onPress={onPressHandler}
                style={({ pressed }) => ({ backgroundColor: pressed ? '#ddd' : '#0f0' })}
            >
                <Text style={styles.text}>
                    Go Back to Doctors Menu
          </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        margin: 10,
    }
})