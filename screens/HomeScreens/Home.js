import React, { Component } from 'react';
import { Text, View,FlatList ,Image,TouchableHighlight,StyleSheet,Animated,Modal,Alert} from 'react-native';
import data from '../common/flightdata';
import CardView from '../common/CardView';
import { Icon } from 'expo';
import AddModal from './CreateFeed';
const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);
const fakeUrl ='https://images-na.ssl-images-amazon.com/images/M/MV5BNDFmZjgyMTEtYTk5MC00NmY0LWJhZjktOWY2MzI5YjkzODNlXkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_UX182_CR0,0,182,268_AL_.jpg';

export default class HelloWorldApp extends Component {
  constructor(props){
    super(props)
//  this.AddModal=this.AddModal.bind(this);
    //  this.AddModal=this.AddModal.bind(this);
   this.addfedds=this.addfedds.bind(this);
  }
  addfedds=()=>{
    // Alert.alert('hi');
    this.refs.addModal.showAddModal()
  }
  static navigationOptions={
    header:null
  }
  // static navigationOptions = {
  //     title: 'Enquire',
  //     headerStyle: {height: 50},

  //     headerTitleStyle:{
  //         fontWeight: '500',
  //         fontSize:30,
  //         color:"#2f95dc",
  //     },
  //     // headerLeft:(
  //     //   <Text style={{marginLeft:10}}>Pic</Text>
  //     // ),
  //     headerRight:(
              
  //             <View style={{flexDirection: 'row',}}>
  //         <Icon.Ionicons style={{marginRight:15}} name="ios-magnet-outline" size={26} color="red" onPress={this.addfedds} />
  //         <Icon.Ionicons style={{marginRight:10}} name="ios-add-circle-outline" size={26} color="#2f95dc"/>

  //         </View>
  //     ),
     
  // };
  
  
  render() {
        return (
      <View>
          <View style={styles.headercotainer}>
        <View style={styles.headerow}>
        <Image source={{ uri:fakeUrl }} style={styles.headerLeft} />
          <Text style={{ marginLeft:60,flex: 1, alignItems:'center', justifyContent:'center',fontSize:20,fontWeight:"bold",marginTop:20}}>Gotcha</Text>
          <View style={{flexDirection: 'row',}}>
         <Icon.Ionicons style={styles.magnetStyle} name="ios-magnet-outline" size={26} color="red"  />
         <Icon.Ionicons style={styles.createfeedstyle} name="ios-add-circle-outline" size={26} color="#2f95dc" onPress={this.addfedds}/>
        </View>
          </View>
       </View>
      <FlatList
      data={data}
      keyExtractor={item => item.type}
      renderItem={({item}) =><CardView data={item}/> }/>
     <AddModal ref={'addModal'}/>
      </View>

    );
  }
}

const styles=StyleSheet.create({
  headercotainer:{
    marginTop: 0,
     backgroundColor:'white',
     height:75,
     elevation:4
    },
    headerow:{
      flex: 1,
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-between',
       marginTop: 5,
      marginBottom: 1,
      },
    headerLeft:{  
      height: 45,
      width: 50,
     borderRadius: 2,
     borderColor:"black",
     borderWidth:0.5,
     marginTop:20,
     marginBottom:5,
     marginLeft:10
    },
    magnetStyle:{
      marginRight:15,
      marginTop:20
    },
    createfeedstyle:{
      marginRight:10,
      marginTop:20
    }
    

})


