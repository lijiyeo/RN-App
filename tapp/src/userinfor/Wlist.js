import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from '@ant-design/react-native';


export default class Wlist extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <View style={{ backgroundColor: 'white', flexDirection: 'row', height: 60, justifyContent: "center" }}>
                        <View style={{
                            height: 40,
                            width: '90%',
                            backgroundColor: '#ccc',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 5,
                            paddingLeft: 20,
                            marginTop: 10
                        }}>

                            <TextInput placeholder='请输入商品名称' />
                            <Icon
                                style={{
                                    paddingLeft: 250
                                }}
                                color='gray'
                                name="search"
                            />
                        </View>

                    </View>
                    <View style={{ backgroundColor: 'white', flexDirection: 'row', width: '100%', height: 40, justifyContent: "center" }}>
                        <View style={{ width: '20%', height: 40, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                            <Text style={{ color: 'red' }}>综合</Text>
                        </View>
                        <View style={{ width: '20%', height: 40, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                            <Text>销量</Text>
                        </View>
                        <View style={{ width: '20%', height: 40, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                            <Text>新品</Text>
                        </View>
                        <View style={{ width: '20%', height: 40, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                            <Text>价格</Text>
                        </View>
                        <View style={{ width: '20%', height: 40, alignItems: 'center', flex: 1, justifyContent: 'center' }}>
                            <Text>信用</Text>
                        </View>
                    </View>

                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "space-evenly",
                        flexWrap: 'wrap'
                    }}>
                        <View style={styles.box}>
                            <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../img/shj1.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../img/shj2.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../img/shj1.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../img/shj2.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../img/shj1.png')} />
                        </View>
                        <View style={styles.box}>
                            <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../img/shj2.png')} />
                        </View>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        width: "40%",
        height: 200,
        margin: 10,
        backgroundColor: 'blue'
    }
});