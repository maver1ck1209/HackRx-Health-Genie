import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';

export default function Article() {
  const [newsUrl, setNewsUrl] = useState('');
  const [newsTitle, setNewsTitle] = useState('');
  const [newsAuthor, setNewsAuthor] = useState('');


  const handleApiCall = () => {

      const userId = 1111222211;
      // Replace 'YOUR_API_ENDPOINT_URL' with your actual API URL
      const apiUrl = 'https://f8e8-103-68-38-66.ngrok.io/news';

      // Prepare the data to be sent in the POST request
      const data = {
        user_id: userId,
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
        setNewsUrl(responseData.obj1.url);
        setNewsTitle(responseData.obj1.title);
        setNewsAuthor(responseData.obj1.author);
        setNews(responseData);
      }).catch ((error) => {
      // Handle any errors that occurred during the API call
      console.error('Error:', error);
    });
  };

 handleApiCall();

  return (
    <SafeAreaView style={{ backgroundColor: '#fff' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>News Feed</Text>
          <TouchableOpacity
            onPress={() => {}}>
            <View style={styles.card}>
              <Image
                alt=""
                resizeMode="cover"
                source={{ uri: newsUrl }}
                style={styles.cardImg}
              />
              <View style={styles.cardBody}>
                <Text style={styles.cardTag}>Health</Text>

                <Text style={styles.cardTitle}>{newsTitle}</Text>

                <View style={styles.cardRow}>
                  <View style={styles.cardRowItem}>
                    <Image
                      alt=""
                      source={{ uri: newsUrl }}
                      style={styles.cardRowItemImg}
                    />

                    <Text style={styles.cardRowItemText}>{newsAuthor}</Text>
                  </View>

                  <Text style={styles.cardRowDivider}>·</Text>

                  <View style={styles.cardRowItem}>
                    <Text style={styles.cardRowItemText}>July 22nd, 2023</Text>
                  </View>
                </View>
              </View>
            </View>
          </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'stretch',
    borderRadius: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  cardImg: {
    width: 96,
    height: 96,
    borderRadius: 12,
  },
  cardBody: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 16,
  },
  cardTag: {
    fontWeight: '500',
    fontSize: 12,
    color: '#939393',
    marginBottom: 7,
    textTransform: 'capitalize',
  },
  cardTitle: {
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 19,
    color: '#000',
    marginBottom: 8,
  },
  cardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: -8,
    marginBottom: 'auto',
  },
  cardRowDivider: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#939393',
  },
  cardRowItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 6,
    borderRightWidth: 1,
    borderColor: 'transparent',
  },
  cardRowItemText: {
    fontWeight: '400',
    fontSize: 13,
    color: '#939393',
  },
  cardRowItemImg: {
    width: 22,
    height: 22,
    borderRadius: 9999,
    marginRight: 6,
  },
});
