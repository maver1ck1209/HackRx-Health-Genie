import React,{useEffect} from 'react';
import { StyleSheet, SafeAreaView, View, Text, Alert } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';


export default function StepCounter() {

    const handleApiCall = () => {

        const userId = 1111222211;
      // Replace 'YOUR_API_ENDPOINT_URL' with your actual API URL
      const apiUrl = 'https://f8e8-103-68-38-66.ngrok.io/notifs';

      // Prepare the data to be sent in the POST request
      const data = {
        user_id: userId,
      };
        // Replace 'YOUR_API_ENDPOINT_URL' with your actual API URL
    
        fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
          .then((response) => response.json())
          .then((data) => {
            // Handle the API response
            // Assuming the API response contains a 'message' field
            const message = data.output;
    
            // Show an alert with the received message
            Alert.alert('API Response', message);
          })
          .catch((error) => {
            // Handle any errors that occurred during the API call
            console.error('Error:', error);
          });
      };

    handleApiCall();
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
      <View style={styles.container}>
        <Text style={styles.title}>My Workplace</Text>

        <View style={styles.stats}>
          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="users" size={22} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Clients</Text>

                <Text style={styles.statsItemValue}>-</Text>
              </View>
            </View>

            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="grid" size={22} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Views</Text>

                <Text style={styles.statsItemValue}>-</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="archive" size={22} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Projects</Text>

                <Text style={styles.statsItemValue}>-</Text>
              </View>
            </View>

            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="columns" size={22} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Boards</Text>

                <Text style={styles.statsItemValue}>-</Text>
              </View>
            </View>
          </View>

          <View style={styles.statsRow}>
            <View style={styles.statsItem}>
              <View style={styles.statsItemIcon}>
                <FeatherIcon color="#fff" name="list" size={22} />
              </View>

              <View>
                <Text style={styles.statsItemLabel}>Active Tasks</Text>

                <Text style={styles.statsItemValue}>-</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
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
  stats: {
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  statsRow: {
    flexDirection: 'row',
    marginHorizontal: -6,
  },
  statsItem: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 12,
    backgroundColor: '#fff',
    marginHorizontal: 6,
    marginBottom: 12,
  },
  statsItemIcon: {
    backgroundColor: '#faad55',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 46,
    height: 46,
    marginRight: 8,
    borderRadius: 8,
  },
  statsItemLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#8e8e93',
    marginBottom: 2,
  },
  statsItemValue: {
    fontSize: 22,
    fontWeight: '600',
    color: '#081730',
  },
});

//