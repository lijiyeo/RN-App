import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    AsyncStorage,
    TouchableOpacity,
    TextInput,
    ToastAndroid,
} from 'react-native';
import {Actions} from 'react-native-router-flux'
import {myFetch} from '../utils/index'
import { Icon } from '@ant-design/react-native';

export default class Login extends Component{
    constructor(){
        super();
        this.state={
            username:'',
            pwd:'',
            isloading:false
        }
    }

    login=()=>{
        if(this.state.username==""||this.state.pwd==""){
            ToastAndroid.show("用户名或密码不能为空",ToastAndroid.SHORT);
        }else{
            this.setState({
                isloading:true
            })
            myFetch.post('/login',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
                if(res.data.judge==1){
                    console.log("222222222222222222222222222222");
                    this.setState({isloading:false})
                    ToastAndroid.show("未注册",ToastAndroid.SHORT);
                }else if(res.data.judge==2){
                    this.setState({isloading:false})
                    ToastAndroid.show("登录失败",ToastAndroid.SHORT);
                }else{
                    AsyncStorage.setItem('user',JSON.stringify(res.data))
                    .then(()=>{
                        this.setState({isloading:false})
                        Actions.hm();  
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
                onPress={this.login}>
                <Text>登录</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={{
                    width: '80%',
                    height: 40,
                    backgroundColor: '#ccc',
                    marginTop: 30,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                onPress={()=>Actions.signin()}>
                <Text>注册</Text>
            </TouchableOpacity>
        </View>
        {
            this.state.isloading
            ?<View><Text>正在登录。。。</Text></View>
            :null
        }
      </View>
    );
    }
}
