import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';

// formik
import {Formik} from 'formik';
import {View} from 'react-native';

//icons
import {Octicons, Ionicons, Fontisto} from '@expo/vector-icons';


import {
    InnerContainer,
    PageTitle,
    SubTitle,
    StyledFormArea,
    StyledButton,
    ButtonText,
    Line,
    WelcomeContainer,
    WelcomeImage,
    Avatar

} from './../components/styles';

const Welcome = () => {

    return (
            <>
            <StatusBar style="dark" />
            <InnerContainer>
                <WelcomeContainer>
                    <PageTitle Welcome={true}>Welcome Budddy</PageTitle>
                    <SubTitle Welcome={true}>Akhil</SubTitle>
                    <StyledFormArea>
                        <Avatar resizeMode="cover" source={require('./../assets/img/img1.png')} />
                        <Line />
                        <StyledButton onPress={() => {}}>
                            <ButtonText>
                                Logout
                            </ButtonText>
                        </StyledButton>
                        
                    </StyledFormArea>
                </WelcomeContainer>
            </InnerContainer>
            </>
    );
}

export default Welcome;