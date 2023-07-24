import React from 'react';
import {
    Pressable,
    StyleSheet,
    SafeAreaView,
    View,
    TouchableOpacity,
    Image,
    Text,
} from 'react-native';

import FeatherIcon from 'react-native-vector-icons/Feather';

export default function ProfileUser({ navigation }) {

    const onPressHandler = () => {
        // navigation.navigate('Screen_A');
        navigation.goBack();
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f6f6f6' }}>
      <View style={styles.container}>
        <View style={styles.profile}>
          <TouchableOpacity
            onPress={() => {
              // handle onPress
            }}>
            <View style={styles.profileAvatarWrapper}>
              <Image
                alt=""
                source={{
                  uri: 'https://media.licdn.com/dms/image/C4E03AQFnH6UTWQXk9g/profile-displayphoto-shrink_400_400/0/1627907377318?e=1695254400&v=beta&t=6nUnVIIuXepgQy_0CNDhFmk7hkVLbtTgS5Nm5BlS4VU',
                }}
                style={styles.profileAvatar}
              />

              <TouchableOpacity
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.profileAction}>
                  <FeatherIcon color="#fff" name="edit-3" size={15} />
                </View>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>

          <View style={styles.profileBody}>
            <Text style={styles.profileName}>Akhil R Nair</Text>

            <Text style={styles.profileAddress}>Ajay Vihar, Krra 136 Petta, Kochi Pin: 682038</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      paddingVertical: 48,
      paddingHorizontal: 0,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
    },
    profile: {
      padding: 24,
      backgroundColor: '#fff',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    profileAvatar: {
      width: 72,
      height: 72,
      borderRadius: 9999,
    },
    profileAvatarWrapper: {
      position: 'relative',
    },
    profileAction: {
      position: 'absolute',
      right: -4,
      bottom: -10,
      alignItems: 'center',
      justifyContent: 'center',
      width: 28,
      height: 28,
      borderRadius: 9999,
      backgroundColor: '#007bff',
    },
    profileName: {
      marginTop: 20,
      fontSize: 19,
      fontWeight: '600',
      color: '#414d63',
      textAlign: 'center',
    },
    profileAddress: {
      marginTop: 5,
      fontSize: 16,
      color: '#989898',
      textAlign: 'center',
    },
  });