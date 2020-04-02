import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Grid, Icon, Button } from '@ant-design/react-native';

export default class Wservice extends Component {
    render() {
        return (
            <ScrollView>
                <View>
                    <View style={{ backgroundColor: 'red', flexDirection: 'row', height: 60 }}>
                        <View style={{
                            height: 40,
                            width: '85%',
                            backgroundColor: '#fbb8b8',
                            flexDirection: 'row',
                            alignItems: 'center',
                            borderRadius: 20,
                            paddingLeft: 20,
                            marginTop: 10,
                            marginLeft: 10
                        }}>
                            <Icon
                                style={{
                                    paddingLeft: 5
                                }}
                                color='white'
                                name="search"
                            />
                            <TextInput placeholder='请输入商品名称' />
                        </View>
                        <Icon
                            style={{
                                paddingLeft: 15,
                                paddingTop: 16
                            }}
                            color='white'
                            name="shopping"
                        />
                    </View>
                    <View style={{ height: 200, backgroundColor: 'white' }}>
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }} source={require('../../img/服务.png')} />
                    </View>
                    <View style={{ flexDirection: 'column', width: '100%', height: 320 }}>
                        <View style={{ backgroundColor: 'white', width: '100%', height: 100, flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <View>
                                <Image style={{ height: 50, width: 50, marginLeft: 10 }} source={require('../../img/服务2.png')} />
                            </View>
                            <View><Text style={{ fontSize: 17, paddingLeft: 20 }}>居家维修保养</Text></View>
                        </View>
                        <View style={{ backgroundColor: 'white', width: '100%', height: 100, flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <View>
                                <Image style={{ height: 50, width: 50, marginLeft: 10 }} source={require('../../img/服务2.png')} />
                            </View>
                            <View><Text style={{ fontSize: 17, paddingLeft: 20 }}>居家维修保养</Text></View>
                        </View>
                        <View style={{ backgroundColor: 'white', width: '100%', height: 100, flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <View>
                                <Image style={{ height: 50, width: 50, marginLeft: 10 }} source={require('../../img/服务2.png')} />
                            </View>
                            <View><Text style={{ fontSize: 17, paddingLeft: 20 }}>居家维修保养</Text></View>
                        </View>
                        <View style={{ backgroundColor: 'white', width: '100%', height: 100, flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <View>
                                <Image style={{ height: 50, width: 50, marginLeft: 10 }} source={require('../../img/服务2.png')} />
                            </View>
                            <View><Text style={{ fontSize: 17, paddingLeft: 20 }}>居家维修保养</Text></View>
                        </View>
                        <View style={{ backgroundColor: 'white', width: '100%', height: 100, flex: 1, flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                            <View>
                                <Image style={{ height: 50, width: 50, marginLeft: 10 }} source={require('../../img/服务2.png')} />
                            </View>
                            <View><Text style={{ fontSize: 17, paddingLeft: 20 }}>居家维修保养</Text></View>
                        </View>
                    </View>
                    <View style={{ textAlign: 'center', alignItems: 'center' }}>
                        <Button style={styles.btn}>发布请求</Button>
                        <Text style={{ marginTop: 20 }}>©E族之家 版权所有</Text>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    btn: {
        width: 400,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'red',
        color: 'white',
        marginTop: 10
    }
})