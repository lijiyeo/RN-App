import React, { Component } from 'react';
import {View,Text,StyleSheet,Dimensions,AsyncStorage,TouchableOpacity,TextInput,ToastAndroid} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {myFetch} from '../utils/index'
import { Icon } from '@ant-design/react-native';

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            pwd:''
        }
    }
    sginin=()=>{
        if(this.state.username==""||this.state.pwd==""){
            ToastAndroid.show("用户名和密码不能为空",ToastAndroid.SHORT);
        }else{
            myFetch.post('/sginin',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
                if(res.data.lId==1){
                    ToastAndroid.show("用户名已存在",ToastAndroid.SHORT);
                }else if(res.data.lId==2){
                    ToastAndroid.show("注册失败",ToastAndroid.SHORT);
                }else{
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        Actions.login();  
                    })
                }       
            }); 
        }
             
    }
    username=(text)=>{
        this.setState({username:text})
    }
    pwd=(text)=>{
        this.setState({pwd:text})
    }

    render(){
        return(
            <View style={{flex: 1,justifyContent: 'center',backgroundColor:"white"}}>
        <View
          style={{ alignItems: 'center'}}>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput placeholder="用户名" 
                onChangeText={this.username}
            />
          </View>
          <View
            style={{
              width: '80%',
              marginRight: 10,
              borderBottomColor: '#ccc',
              borderBottomWidth: 1,
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
            }}>
            <Icon name="user" color="red"/>
            <TextInput 
                onChangeText={this.pwd}
                placeholder="密码" 
                secureTextEntry={true}
            />
          </View>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={this.sginin}>
                <Text>注册</Text>
            </TouchableOpacity>
        </View>
      </View>
        )
    }
}
