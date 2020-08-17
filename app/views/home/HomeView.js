/*
 Date Created       : 20 February 2020
 Create Files       : Zayed Elfasa
 Contributor        : M. Bakhtiar Hanafi, Christiana Fransisca, M. Miftahol Hadi
*/

import React, { Fragment, useEffect } from 'react';
import { View, Text, Image, Platform, Dimensions, TouchableOpacity, ActivityIndicator, StatusBar } from 'react-native';

// import Dimensions from '../../styles/dimensions';
import Colors from '../../assets/styles/colors';
import Styles from '../../assets/styles/styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import useHome from './useHome';
const HomeView = () => {
    const [response,onLogout] = useHome();
    return (
        <View>
            <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#ff6666" translucent={true} />
            <View style={{ backgroundColor: '#ff6666', height: 170 }}>
                <View style={{ marginTop: 50, marginLeft: 20 }}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Hello,</Text>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: 'bold' }}>Bakhtiar Hanafi</Text>
                </View>
                <View style={{ marginLeft: 20, marginRight: 20, marginTop: 10, height: 30, backgroundColor: '#ff7f7f' }}>
                    <View style={{ flexDirection: 'row', marginLeft: 10, marginTop: 5 }}>
                        <Icon name="search" color={"#00FFFFFF"} size={15} />
                        <Text style={{ marginLeft: 5, color: '#00FFFFFF' }}>Search</Text>

                    </View>
                </View>
            </View>
            <View style={{ marginLeft: 20, marginTop: 20 }}>
                <Text style={{ fontSize: 16, color: 'black', fontWeight: 'bold' }}>Semua Menu</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/stock_report.png')} />
                    <Text style={{ color: 'white' }}>Laporan Stok</Text>
                </View>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/sale2_report.png')} />
                    <Text style={{ color: 'white' }}>Laporan</Text>
                    <Text style={{ color: 'white' }}>Penjualan</Text>
                </View>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/sale_report.png')} />
                    <Text style={{ color: 'white' }}>Grafik</Text>
                    <Text style={{ color: 'white' }}>Penjualan</Text>
                </View>

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/finance_report.png')} />
                    <Text style={{ color: 'white' }}>Laporan</Text>
                    <Text style={{ color: 'white' }}>Laba Rugi</Text>
                </View>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/finance_graphic.png')} />
                    <Text style={{ color: 'white' }}>Grafik</Text>
                     <Text style={{ color: 'white' }}>Laba Rugi</Text>
                </View>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/master.png')} />
                    <Text style={{ color: 'white' }}>Master</Text>
                    <Text style={{ color: 'white' }}>Harga Emas</Text>
                </View>

            </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginLeft: 20, marginRight: 20, marginTop: 10 }}>
                
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/point_member_report.png')} />
                    <Text style={{ color: 'white' }}>Laporan</Text>
                    <Text style={{ color: 'white' }}>Poin Member</Text>
                </View>
                <TouchableOpacity onPress={() => onLogout()}>
                <View style={{ height: 100, width: 100, backgroundColor: '#ff7f7f', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                    
                    <Image style={{ height: 50, width: 50 }} source={require('../../assets/icons/logout.png')} />
                    <Text style={{ color: 'white' }}>Keluar</Text>
                    
                </View>
                </TouchableOpacity>

            </View>
            {/* <View style={{
        flexDirection: 'row',
        marginLeft:20,marginRight:20,marginTop:10
      }}>
          <View>
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'powderblue'}} />
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'skyblue'}} />
        </View>
        <View>
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'powderblue'}} />
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'skyblue'}} />
        </View>
        <View>
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'powderblue'}} />
            <View style={{width: 100, height: 100, marginBottom:10, marginLeft:10, backgroundColor: 'skyblue'}} />
        </View>
      </View> */}
        </View>
    );
}

export default HomeView;