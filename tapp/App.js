import React ,{useState,useEffect}from 'react';
import {StyleSheet,View,Text, Image, StatusBar,AsyncStorage,BackHandler,ToastAndroid} from 'react-native';
import {Router,Scene, Tabs,Drawer,Lightbox,Modal, Overlay, Actions} from 'react-native-router-flux';
import {Icon,Grid} from '@ant-design/react-native';
import Home from './src/home/Wservice';
import Wmy from './src/my/Wmy';
import Wlist from './src/userinfor/Wlist';
import Wpush from './src/my/Wpush';
import SplashScreen from 'react-native-splash-screen'
import Login from './src/common/Login';
import SignIn from './src/common/SignIn';
import SwiperPage from './src/common/SwiperPage'

console.disableYellowBox=true;
var now=new Date().getTime();

const App = () => {
    let [isLogin,setLogin]=useState(false);
    let [isInstall,setInstall]=useState(true);

    let init=()=>{
        AsyncStorage.getItem("isInstall")
            .then((res)=>{
                if(res){
                    setInstall(false);
                }
            })

        AsyncStorage.getItem("user")
            .then(res=>{
                let user=JSON.parse(res);
                if(!user){
                    SplashScreen.hide();
                }
                if(user&&user.token){
                    setLogin(true);
                    SplashScreen.hide();
                }
                console.log(res);
            })
    }
    useEffect(()=>{ 
       init();
    },[])

    let afterInstall=()=>{
        setInstall(false)
    }

    if(isInstall){
        return<View style={{flex:1}}>
            <SwiperPage afterInstall={afterInstall}/>
        </View>
    }
    
    return (
        <Router
            backAndroidHandler={()=>{
				if(Actions.currentScene != 'home'&&Actions.currentScene!="login"){
					Actions.pop();
					return true;
				}else{
					if(new Date().getTime()-now<2000){
						BackHandler.exitApp();
					}else{
						ToastAndroid.show('确定要退出吗',100);
						now = new Date().getTime();
						return true;
					}
				}
				
			}}
        >
            <Overlay>
            <Modal key="modal" hideNavBar>
            <Lightbox key="lightbox">
                        <Scene key="root">
                            <Tabs
                                key='tabbar'
                                hideNavBar
                                activeTintColor="red"
                                inactiveTintColor="blue"
                                tabBarStyle={{ backgroundColor: '#ccc' }}
                            >
                                {/* 服务 */}
                                <Scene
                                    key='hm'
                                    hideNavBar
                                    icon={({ focused }) =>
                                        <Icon
                                            color={focused ? 'red' : 'blue'}
                                            name='setting' /
                                        >}
                                    title="首页"
                                    
                                >
                                <Scene key="home"component={Home} />
                                </Scene>
                                {/* 列表 */}
                                <Scene
                                    key='wlist'
                                    hideNavBar
                                    icon={({ focused }) =>
                                        <Icon
                                            color={focused ? 'red' : 'blue'}
                                            name='menu' /
                                        >}
                                    title="分类"
                                    component={Wlist}
                                />


                                {/* 个人中心 */}
                                <Scene
                                    key='wmy'
                                    hideNavBar
                                    icon={({ focused }) =>
                                        <Icon
                                            color={focused ? 'red' : 'blue'}
                                            name='user' /
                                        >}
                                    title="个人中心"
                                >
                                <Scene key="wmy" component={Wmy} />
                            <Scene key="wpush" component={Wpush} />
                                </Scene>

                            </Tabs>
                        </Scene>
                    </Lightbox>
            <Scene initial={!isLogin} key="login" component={Login}/>
            <Scene key="signin" component={SignIn}/>

            </Modal>
            </Overlay>
        </Router>
    );
};


export default App;