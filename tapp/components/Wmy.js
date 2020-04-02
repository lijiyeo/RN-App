import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Navigator,TextInput, TouchableOpacity, ScrollView,Dimensions } from 'react-native';
import { Icon } from '@ant-design/react-native';
import {Actions} from 'react-native-router-flux';
const {width} = Dimensions.get('window')
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
};


export default class Wmy extends Component {
    takephoto = ()=>{
        ImageCropPicker.openCamera({
            width: 300,
            height: 400,
            cropping: true,
          }).then(image => {
            this.setState({imageUrl:{uri:image.path}})
          });
        }
    render() {
        return (
            <ScrollView>
                <View>
                    <View style={{ backgroundColor: 'red', height: 200, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <View>
                            <Image resizeMode='contain' style={{ width: 80, height: 80, borderRadius: 160 }} source={require('../assets/tx.png')} />
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
                                name="car"
                            />
                            <Text onPress={()=>Actions.wpush()}>我的发布</Text>
                        </View>
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
    }
});