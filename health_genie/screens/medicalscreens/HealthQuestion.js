import React, { useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Checkbox, Text, Button, Provider as PaperProvider } from 'react-native-paper';

const options = [
  { label: 'loss_of_balance', value: 'loss_of_balance' },
  { label: 'dark_urine', value: 'dark_urine' },
  { label: 'cough', value: 'cough' },
  { label: 'chest_pain', value: 'chest_pain' },
  { label: 'blurred_and_distorted_vision', value: 'blurred_and_distorted_vision' },
  { label: 'abdominal_pain', value: 'abdominal_pain' },
  { label: 'joint_pain', value: 'joint_pain' },
  { label: 'fatigue', value: 'fatigue' },
  { label: 'yellowish_skin', value: 'yellowish_skin' },
  { label: 'yellowing_of_eyes', value: 'yellowing_of_eyes' },
  { label: 'phlegm, loss_of_appetite', value: 'phlegm, loss_of_appetite' },
  { label: 'diarrhoea', value: 'diarrhoea' },
  { label: 'vomiting', value: 'vomiting' },
  { label: 'breathlessness', value: 'breathlessness' },
  { label: 'swelled_lymph_nodes', value: 'swelled_lymph_nodes' },
  { label: 'headache', value: 'headache' },
  { label: 'weight_loss', value: 'weight_loss' },
  { label: 'muscle_pain', value: 'muscle_pain' },
  { label: 'nausea', value: 'nausea' },
  { label: 'irritability', value: 'irritability' },
  { label: 'dizziness', value: 'dizziness' },
  { label: 'lethargy', value: 'lethargy' },
  { label: 'skin_rash', value: 'skin_rash' },
  { label: 'itching', value: 'itching' },
  { label: 'excessive_hunger', value: 'excessive_hunger' },
  { label: 'chills', value: 'chills' },
  { label: 'sweating', value: 'sweating' },


];

const MultipleSelectOptionScreen = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [apiPrediction, setApiPrediction] = useState('');
  const [apiChances, setApiChances] = useState('');
  const [apiSpecialist, setApiSpecialist] = useState('');
  const [apiDescription, setApiDescription] = useState('');
  const [finalValue,setFinalValue] = useState({})


  const handleToggleOption = (value) => {
    const updatedOptions = selectedOptions.includes(value)
      ? selectedOptions.filter((option) => option !== value)
      : [...selectedOptions, value];
    setSelectedOptions(updatedOptions);
  };

  const renderOptions = () => {
    return options.map((option) => (
      <View key={option.value} style={styles.optionContainer}>
        <Checkbox.Android
          status={selectedOptions.includes(option.value) ? 'checked' : 'unchecked'}
          onPress={() => handleToggleOption(option.value)}
        />
        <Text style={styles.optionText}>{option.label}</Text>
      </View>
    ));
  };

  const handleSubmit = () => {
    // Handle the selectedOptions array as needed (e.g., store it, send it to a server, etc.)
    console.log('Selected Options:', selectedOptions);
  };

  const handleApiCall = () => {
    // Replace 'YOUR_API_ENDPOINT_URL' with your actual API URL
    const apiUrl = 'https://1fa4-103-149-94-242.ngrok-free.app/predict';

    const options = selectedOptions;

    // Prepare the data to be sent in the POST request
    const data = {
      symptoms: options,
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
        setApiPrediction(responseData.prediction[0]);
        setApiChances(responseData.chances[0]);
        setApiSpecialist(responseData.Specialist[0]);
        setApiDescription(responseData.Description);
        console.log(apiPrediction)

      })
      .catch((error) => {
        // Handle any errors that occurred during the API call
        console.error('Error:', error);
      });
  };

  return (
    <View style={styles.container}>
    <ScrollView>
      <Text style = {styles.title}>Symptoms</Text>
      {renderOptions()}
      <View style={styles.placeholder}>
        <View style={styles.placeholderInset}>
          <Text style={styles.apiResponseText}>
            Prediction: {apiPrediction}
          </Text>
          <Text style={styles.apiResponseText}>
            Chances: {apiChances}
          </Text>
          <Text style={styles.apiResponseText}>
             Specialist: {apiSpecialist}
          </Text>
          <Text style={styles.apiResponseText}>
             Description: {apiDescription}
          </Text>
        </View>
      </View>
      <Button mode="contained" onPress={handleApiCall}>
        Submit
      </Button>
    </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  optionText: {
    fontSize: 16,
    marginLeft: 8,
    color: '#333', // Change the option text color to match your theme
  },
  apiResponseText: {
    fontSize: 16,
    color: '#222',
    textAlign: 'center',
    padding: 16,
  },
  placeholder: {
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    height: 400,
    marginTop: 60,
    padding: 24,
    backgroundColor: '#F3F4F6',
  },
  placeholderInset: {
    borderWidth: 4,
    borderColor: '#CFD1D4',
    borderStyle: 'dashed',
    borderRadius: 9,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
});

export default MultipleSelectOptionScreen;
