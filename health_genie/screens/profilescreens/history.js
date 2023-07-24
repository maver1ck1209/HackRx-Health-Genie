import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // You can use any icon library you prefer

export default function History() {
    const [data, setData] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [factDet, setFactDet] = useState('');

    const handleApiCall = () => {

        const userId = 1111222211;
      // Replace 'YOUR_API_ENDPOINT_URL' with your actual API URL
      const apiUrl = 'https://bc1c-103-68-38-66.ngrok.io/fact';

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
          .then((responseData) => {
            // Handle the API response as needed
            setFactDet(responseData.output);
            }).catch ((error) => {
            // Handle any errors that occurred during the API call
            console.error('Error:', error);
          });
    }

      // Function to handle press on the icon and show the modal
    const handleIconPress = () => {
        setModalVisible(true);
        handleApiCall();
    };

    // Function to hide the modal
    const handleCloseModal = () => {
        setModalVisible(false);
    };

    return (
        <View>
      {/* Icon to trigger the modal */}
      <TouchableOpacity onPress={handleIconPress}>
        <Icon name="notifications" size={30} />
      </TouchableOpacity>

      {/* Modal */}
      <Modal visible={modalVisible} animationType="slide" transparent={false}>
        <ScrollView>
        <View style={styles.modalContainer}>
          <Text style={styles.modalTitle}>Facts!</Text>
          <Text style={styles.modalText}>{factDet}</Text>
          <TouchableOpacity onPress={handleCloseModal} style={styles.closeButton}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
        </ScrollView>
      </Modal>
    </View>
  );
};

const styles = {
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  modalText: {
    fontSize: 18,
    marginBottom: 8,
  },
  closeButton: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  closeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
};

