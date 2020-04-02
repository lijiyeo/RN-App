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
                                <View style={{ color: 'red', paddingRight: -50, flex: 1 }}>
                                    <Text>{item.create_at.substr(0, 10)}
                                    {
                                        Math.random()>0.5
                                        ?<Text style={{paddingLeft:10}}>已回复</Text>
                                        :<Text style={{color:'red',paddingLeft:20}}>待回复</Text>
                                    }
                                </Text>
                                </View>
                            </View>
                        )
                    }
                    <View style={{flexDirection: 'row',alignItems: 'center',justifyContent: "center"}}>
                        <Button style={{width:100,height:80,backgroundColor:'red',marginLeft:15}}>上一页</Button>
                        <Text style={{paddingLeft:35}}>第1页</Text>
                        <Button style={{width:100,height:80,backgroundColor:'red',marginLeft:40}}>下一页</Button>
                    </View>
                </View>
            </ScrollView>
        )
    }
}