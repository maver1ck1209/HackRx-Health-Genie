import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import {Formik} from 'formik';
import {View, TouchableOpacity} from 'react-native';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';

//Date time picker
import DateTimePicker from '@react-native-community/datetimepicker';

import {
    StyledContainer,
    InnerContainer,
    PageLogo,
    PageTitle,
    SubTitle,
    StyledFormArea,
    LeftIcon,
    StyledInputLabel,
    StyledTextInput,
    RightIcon,
    Colors,
    StyledButton,
    ButtonState,
    ButtonText,
    Line,
    MsgBox,
    ExtraView,
    ExtraText,
    TextLink,
    TextLinkContent,

} from './../components/styles';

//Colors
const {brand, darkLight, primary} = Colors;


const Signup = () => {
    const [hidePassword, setHidePassword] = useState(true);
    const [show,setshow] = useState(false);
    const [date,setDate] = useState(new Date(2000, 0, 1));


    //Actual Date of birth to be set
    const [dob, setDob] = useState();

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setshow(false);
        setDate(currentDate);
        setDob(currentDate);
    }

const showDatePicker = () => {
    setshow(true);
}

    return (
        <StyledContainer>
            <StatusBar style="dark" />
            <InnerContainer>
                <PageTitle>Health Genie</PageTitle>
                <SubTitle>Account SignUp</SubTitle>

                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode='date'
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                        />
                )}

                <Formik 
                    initialValues ={{fullName: '', email: '', dateOfBirth: '', password: '', confirmPassword: ''}} 
                    onSubmit={(values) => {
                        console.log(values);
                    }}>

                    {({handleChange, handleBlur, handleSubmit, values}) => (
                    <StyledFormArea>
                        <MyTextInput 
                            label = "Full Name"
                            icon="person"
                            placeholder="Richard Barnes"
                            placeholderTextColor="#9CA3AF"
                            onChangeText={handleChange('fullName')}
                            onBlur={handleBlur('fullName')}
                            value={values.fullName}
                        />
                        <MyTextInput 
                            label = "Email Address"
                            icon="mail"
                            placeholder="name@gmail.com"
                            placeholderTextColor="#9CA3AF"
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            keyboardType="email-address"
                        />
                        <MyTextInput 
                            label = "Date of Birth"
                            icon="calendar"
                            placeholder="YYY - MM - DD"
                            placeholderTextColor="#9CA3AF"
                            onChangeText={handleChange('dateofBirth')}
                            onBlur={handleBlur('dateOfBirth')}
                            value={dob ? dob.toDateString() : ''}
                            isDate={true}
                            editable={false}
                            showDatePicker={showDatePicker}
                        />
                        <MyTextInput 
                            label = "Password"
                            icon="lock"
                            placeholder="* * * * * * * * *"
                            placeholderTextColor= "#9CA3AF"
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MyTextInput 
                            label = " Confirm Password"
                            icon="lock"
                            placeholder="* * * * * * * * *"
                            placeholderTextColor= "#9CA3AF"
                            onChangeText={handleChange('confirmPassword')}
                            onBlur={handleBlur('confirmPassword')}
                            value={values.confirmPassword}
                            secureTextEntry={hidePassword}
                            isPassword={true}
                            hidePassword={hidePassword}
                            setHidePassword={setHidePassword}
                        />
                        <MsgBox>...</MsgBox>
                        <StyledButton onPress={handleSubmit}>
                            <ButtonText>
                                SignUp
                            </ButtonText>
                        </StyledButton>
                        <Line />
                        <ExtraView>
                            <ExtraText>Already have an account?</ExtraText>
                            <TextLink>
                                <TextLinkContent>Login</TextLinkContent>
                            </TextLink>
                        </ExtraView>
                    </StyledFormArea>)}
                </Formik>
            
            
            </InnerContainer>
        </StyledContainer>
    );
}

const MyTextInput = ({label, icon, isPassword, hidePassword, setHidePassword, isDate, showDatePicker, ...props}) => {
    return (
        <View>
                <LeftIcon> 
                    <Octicons name={icon} size={30} color={brand} />
                </LeftIcon>
                <StyledInputLabel>
                    {label}
                </StyledInputLabel>
                {!isDate && <StyledTextInput {...props} />}
                {isDate && <TouchableOpacity onPress={showDatePicker}>
                    <StyledTextInput {...props}/>
                    </TouchableOpacity>}
                {isPassword && (
                    <RightIcon onPress={() => setHidePassword(!hidePassword)} >
                        <Ionicons name={hidePassword ? 'md-eye-off': 'md-eye'} size={30} color={darkLight}/>
                    </RightIcon>
                )}
        </View>
    );
};
export default Signup;