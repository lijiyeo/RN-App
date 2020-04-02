import React, { Component } from 'react'
import { StyleSheet, View, Text, Image, Navigator, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Button } from '@ant-design/react-native';

export default class Wpush extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            linum: 0,
            limit: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }
    }
    componentDidMount() {
        fetch('https://cnodejs.org/api/v1/topics')
            .then(res => res.json())
            .then(res => {
                res.data.map((item) => {
                    this.setState({
                        data: res.data
                    })
                })
            })
    }
    getUp=()=>{
        if(this.page==1){
            ToastAndroid.show('这已经是第一页了', ToastAndroid.SHORT)
        }else{
            this.setState({
                page:this.state.page-1
            })
        }
    }
    getDown=()=>{
        this.setState({
            page:this.state.page+1
        })
    }
    getTitle = ()=>{
        fetch('https://cnodejs.org/api/v1/topics?page＝'+this.state.page+'&limit＝15')
            .then(res=>res.json())
            .then(res=>{
                this.setState({tits: res.data});
            })
    }
    render() {
        return (
            <ScrollView>
                <View style={{ backgroundColor: 'white' }}>
                    {
                        this.state.data.map((item, idx) =>
                            <View style={{ height: 40, width: '100%', flexDirection: 'row', borderBottomWidth: 1, alignItems: 'center' }}>
                                <View style={{ flex: 2, marginLeft: 5 }}><Text>{item.title.substr(0, 15) + '...'}</Text></View>
                                <View style={{ color: 'red', paddingRight: -50, flex: 1 }}><Text style={{ color: 'red' }}>{item.create_at.substr(0, 10)}<Text style={{ marginLeft: 5 }}>已回复</Text></Text></View>
                            </View>
                        )
                    }
                    <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: "center"}}>
                        <Button style={{width:150,height:80,backgroundColor:'red',marginLeft:40}}>上一页</Button>
                        <Text>第页</Text>
                        <Button style={{width:150,height:80,backgroundColor:'red',marginLeft:40}}>下一页</Button>
                    </View>
                </View>
            </ScrollView>
        )
    }
}
