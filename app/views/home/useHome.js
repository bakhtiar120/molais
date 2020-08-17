

import {useState, useEffect, useContext} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Alert, Button, Linking, StyleSheet, View} from 'react-native';
import axios from 'axios';
import {AuthContext} from '../../../App';

const useHome = () => {
  const navigation = useNavigation();
  const [response, setResponse] = useState('');
  const {signOut} = useContext(AuthContext);

  onLogout = async () => {
      console.log("logout bro")
    signOut();
  };

  return [response,onLogout];
};

export default useHome;
