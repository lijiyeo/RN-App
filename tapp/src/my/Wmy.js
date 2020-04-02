import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Navigator,TextInput,AsyncStorage, TouchableOpacity, ScrollView,Dimensions } from 'react-native';
import { Icon } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';
const {width} = Dimensions.get('window')

export default class Wmy extends Component {
    exit=()=>{
        AsyncStorage.removeItem("user")
        .then(()=>{
            Actions.reset("login");
            // console.log(Actions.currentScene);
        })
    }
    render() {
        return (
            <ScrollView>
                <View>
                    <View style={{ backgroundColor: 'red', height: 200, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View>
                            <Image resizeMode='contain' style={{ width: 80, height: 80, borderRadius: 160 }} source={require('../../img/tx.png')} />
                            <Text style={{ color: 'white' }}>BINNU DHLLN</Text>
                        </View>
                    </View>
                    <View style={{ backgroundColor: 'white', height: 50, flex: 1, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#eeeeee' }}>
                        <Text style={{ marginLeft: 10, fontSize: 20 }}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="user"
                            />
                            我的个人中心
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "space-evenly",
                        flexWrap: 'wrap'
                    }}>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="setting"
                            />
                            <Text>账户管理</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="setting"
                            />
                            <Text>账户管理</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="setting"
                            />
                            <Text>账户管理</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="setting"
                            />
                            <Text>账户管理</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="setting"
                            />
                            <Text>账户管理</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="setting"
                            />
                            <Text>账户管理</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="setting"
                            />
                            <Text>账户管理</Text>
                        </View>
                        <View style={styles.box}></View>
                        <View style={styles.box}></View>
                    </View>
                    <View style={{ backgroundColor: 'white', height: 50, flex: 1, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#eeeeee', marginTop: 5 }}>
                        <Text style={{ marginLeft: 10, fontSize: 20 }}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="tags"
                            />
                            E族活动
                        </Text>
                    </View>
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: "space-evenly",
                        flexWrap: 'wrap'
                    }}>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="car"
                            />
                            <Text>出行接送</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="car"
                            />
                            <Text>出行接送</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="car"
                            />
                            <Text>出行接送</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="car"
                            />
                            <Text>出行接送</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="car"
                            />
                            <Text>出行接送</Text>
                        </View>
                        <View style={styles.box}>
                            <Icon
                                style={{
                                    height: 20
                                }}
                                color='gray'
                                name="cloud-upload"
                            />
                            <Text onPress={()=>Actions.wpush()}>我的发布</Text>
                        </View>
                    </View>
                    <View style={{ textAlign: 'center', alignItems: 'center' }}>
                        <Button onPress={this.exit} style={styles.btn}>退出登录</Button>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    box: {
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
        width: "33.33%",
        height: 80,
        backgroundColor: 'white'
    },
    btn: {
        width: 300,
        height: 40,
        borderRadius: 10,
        backgroundColor: 'red',
        color: 'white',
        marginTop: 10,
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        textAlignVertical: 'center',
    }
});