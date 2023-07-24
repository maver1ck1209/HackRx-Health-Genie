import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity, TextInput, ScrollView, Image } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

export default function Chatbot() {
  const [searchText, setSearchText] = useState('');
  const [apiResponse, setApiResponse] = useState('');
  const [apiGender, setApiGender] = useState('');


  const handleApiCall = () => {
    const userId = 1111222211;
    //const userId = 1111222223;

    // Replace 'YOUR_API_ENDPOINT_URL' with your actual API URL
    const apiUrl = 'https://f8e8-103-68-38-66.ngrok.io/diet';

    // Prepare the data to be sent in the POST request
    const data = {
      user_id: userId,
      text: searchText,
    };

    // Perform the API call using the fetch() function
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((responseData) => {
        // Handle the API response as needed
        setApiResponse(responseData.output);
        setApiGender(responseData.gender);
      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error('Error:', error);
      });
  };

  // Function to get the appropriate user icon based on gender
  const getUserIcon = () => {
    if (apiResponse && apiGender === 'M') {
      return require('./../../assets/img/male.png');
    } else if (apiResponse && apiGender === 'F') {
      return require('./../../assets/img/female.png');
    } else {
      return require('./../../assets/img/default.png');
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.actionWrapper}>
            <TouchableOpacity onPress={() => {}} style={{ marginRight: 'auto' }}>
              <Image source={getUserIcon()} style={styles.userIcon} />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
              <View style={styles.action}>
                <FeatherIcon color="#6a99e3" name="bell" size={22} />
              </View>
            </TouchableOpacity>
          </View>

          <Text style={styles.headerTitle}>Chatbot</Text>

          <View style={styles.headerSearch}>
            <View style={styles.headerSearchInput}>
              <View style={styles.inputWrapper}>
                <TextInput
                  placeholder="Enter ingredients"
                  placeholderTextColor="#9eadba"
                  style={styles.input}
                  value={searchText}
                  onChangeText={(text) => setSearchText(text)} // Update the searchText state
                />

                <View style={styles.inputIcon}>
                  <FeatherIcon color="#9eadba" name="box" size={16} />
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={handleApiCall}>
              <View style={styles.btn}>
                <Text style={styles.btnText}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView>
          <View style={styles.placeholder}>
            <View style={styles.placeholderInset}>
              {/* Display the API response data here */}
              {apiResponse ? (
                <Text style={styles.apiResponseText}>{apiResponse}</Text>
              ) : (
                <Text style={styles.apiResponseText}>No data to display.</Text>
              )}
            </View>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  headerTitle: {
    fontSize: 27,
    fontWeight: '700',
    color: '#222',
    marginTop: 24,
    marginBottom: 16,
  },
  headerSearch: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerSearchInput: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    marginRight: 12,
  },
  userIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    backgroundColor: '#e8f0f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 24,
    padding: 0,
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#e5e7eb',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  action: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginHorizontal: 8,
    backgroundColor: '#e8f0f9',
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginHorizontal: -8,
  },
  input: {
    height: 44,
    backgroundColor: '#f0f6fb',
    paddingLeft: 44,
    paddingRight: 24,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  inputWrapper: {
    position: 'relative',
    width: '100%',
  },
  inputIcon: {
    position: 'absolute',
    width: 44,
    height: 44,
    top: 0,
    left: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderWidth: 1,
    backgroundColor: '#222',
    borderColor: '#222',
  },
  btnText: {
    fontSize: 17,
    lineHeight: 24,
    fontWeight: '600',
    color: '#fff',
  },
  apiResponseText: {
    fontSize: 16,
    color: '#222',
    textAlign: 'center',
    padding: 16,
  },
});
