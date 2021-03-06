/*
 Date Created       : 04 April 2020
 Create Files       : M. Bakhtiar Hanafi
 Contributor        : M. Bakhtiar Hanafi
 modified           : 04 April 2020
*/
import React from 'react';

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Image,
    Button,
    Text,
    TextInput,
    StatusBar,
    Dimensions,
    TouchableOpacity,
    ActivityIndicator,
} from 'react-native';
import styles from '../../assets/styles/styles';
import axios from 'axios';
import useLogin from './useLogin';
const LoginView = () => {
    const [response,onShowMenu] = useLogin();
    return (
        <View style={styles.container_center}>
            <View style={styles.container_logo}>

                <Image style={ styles.logo_size}

                    source={require('../../assets/images/logo.jpg')} />

                <Text style={styles.text_login}>Mobile Larasati Dashboard</Text>

            </View>
            <View style={{
                flexGrow: 1,

                justifyContent: 'center',

                alignItems: 'center'}}>
                     <TextInput style={styles.form_input}

                    underlineColorAndroid='rgba(0,0,0,0)'

                    placeholder="Username"

                    placeholderTextColor="#ffffff"

                />
                <TextInput style={styles.form_input}

                    underlineColorAndroid='rgba(0,0,0,0)'

                    placeholder="Password"

                    placeholderTextColor="#ffffff"

                />
                <TouchableOpacity onPress={onShowMenu} style={styles.button_standard}>

                    <Text style={styles.text_button}>MASUK</Text>

                </TouchableOpacity>


            </View>
            
        </View>
    );
}

export default LoginView;