import React,{useState} from 'react';
import {
    StyleSheet,
    View,
    Text,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Image,
    Modal,
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons'; // You can use any icon library you prefer

import FontAwesome from 'react-native-vector-icons/FontAwesome5';

const items = [
    {
      img: 'https://images.bajajfinservhealth.in/307337003644382135_e9d2167eddf711ebae52ea9e79e2afba_ProfilePic_dr.jpg?d=doctorlistingingestionpr.azureedge.net&w=68&h=68',
      name: 'Dr. Abulais Abduluziz Khan',
      specialization: 'Ayurveda',
      experience: '8 years',
      price: 100,
    },
    {
      img: 'https://images.bajajfinservhealth.in/403190651037291098_712b1970ddff11ebac427ed5bb35125b_doc_profile_image.jpg?d=doctorlistingingestionpr.azureedge.net&w=68&h=68',
      name: 'Dr. Pravin Patil',
      specialization: 'General Physicial',
      experience: '11',
      price: 100,
    },
    {
      img: 'https://images.bajajfinservhealth.in/477988314932582893_99ac886e947711ec901fb23f32f239fe_ProfilePic_WhatsApp%20Image%202021-07-07%20at%2010.jpg?d=doctorlistingingestionpr.azureedge.net&w=68&h=68',
      name: 'Dr. Mallesh Chaudhary',
      specialization: 'General physician',
      experience: '1 year',
      price: 350,
    },
    {
      img: 'https://images.bajajfinservhealth.in/11101055978694347_a9631c80e8b211eb9149ea9e79e2afba_doc_profile_image.jpg?d=doctorlistingingestionpr.azureedge.net&w=68&h=68',
      name: 'Dr. Sanjali Kumbhar',
      specialization: 'Homeopath',
      experience: '7 years',
      price: 200,
    },
  ];

export default function Doctors() {

  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [factDet, setFactDet] = useState('');

  const handleApiCall = () => {

    const userId = 1111222211;
  // Replace 'YOUR_API_ENDPOINT_URL' with your actual API URL
  const apiUrl = 'https://f8e8-103-68-38-66.ngrok.io/fact';

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
        <SafeAreaView style={{ backgroundColor: '#f3f5f9' }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Doctor List</Text>

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


        {items.map(
          ({ img, name, specialization, experience, price }, index) => {
            return (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  // handle onPress
                }}>
                <View style={styles.card}>
                  <Image
                    alt=""
                    resizeMode="cover"
                    source={{ uri: img }}
                    style={styles.cardImg}
                  />

                  <View style={styles.cardBody}>
                    <Text>
                      <Text style={styles.cardTitle}>{name}</Text>{' '}
                      <Text style={styles.cardText}>{specialization}</Text>{' '}
                      <Text style={styles.cardText}>{experience}</Text>
                    </Text>

                    <Text style={styles.cardPrice}>
                      <Text>from </Text>

                      <Text style={styles.cardPriceValue}>
                        Rs{price.toLocaleString('en-IN')}{' '}
                      </Text>

                      <Text style={styles.cardPriceCurrency}>40% off</Text>
                    </Text>

                    <TouchableOpacity
                      onPress={() => {
                        // handle onPress
                      }}>
                      <View style={styles.btn}>
                        <Text style={styles.btnText}>Book now</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </View>
              </TouchableOpacity>
            );
          },
        )}
      </ScrollView>
    </SafeAreaView>
    )
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
      width: 120,
      height: 154,
      borderRadius: 12,
    },
    cardBody: {
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0,
      flexDirection: 'column',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      paddingVertical: 8,
      paddingHorizontal: 16,
    },
    cardTitle: {
      fontSize: 22,
      fontWeight: '700',
      color: '#173153',
      marginRight: 8,
    },
    cardText: {
      fontSize: 13,
      fontWeight: '600',
      color: '#5f697d',
    },
    cardRow: {
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: -8,
      flexWrap: 'wrap',
    },
    cardRowItem: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 6,
    },
    cardRowItemText: {
      marginLeft: 4,
      fontSize: 12,
      fontWeight: '500',
      color: '#5f697d',
    },
    cardPrice: {
      fontSize: 13,
      fontWeight: '500',
      color: '#5f697d',
    },
    cardPriceValue: {
      fontSize: 21,
      fontWeight: '700',
      color: '#173153',
    },
    cardPriceCurrency: {
      fontSize: 14,
      fontWeight: 'bold',
      color: '#6f61c4',
    },
    btn: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      paddingVertical: 6,
      paddingHorizontal: 14,
      borderWidth: 1,
      backgroundColor: '#173153',
      borderColor: '#173153',
    },
    btnText: {
      fontSize: 13,
      lineHeight: 18,
      fontWeight: '600',
      color: '#fff',
    },
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
  });