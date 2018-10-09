import React, { Component } from 'react';
import { View ,StyleSheet,Text,TouchableOpacity} from 'react-native';
import {Icon } from 'expo';
export default class FeedSocial extends Component {
  constructor(props){
    super(props)
     this.state={ liked:false,
                   hand:false,
                   comment:false
                }

}

pressedLike= ()=>{
  this.setState({
   liked:!this.state.liked
  })
}

pressedhand=()=>{
  this.setState({
    hand:!this.state.hand
  })
}

Commentpress=()=>{
  this.setState({
    comment:!this.state.comment
  })
}
  render(){
    let value=parseInt(this.props.data.values.cost);
 return(
  <View style={styles.container}>
  <TouchableOpacity underlayColor='transparent' 
              onPress={this.pressedLike}>
                <View >
                    {this.state.liked? <Icon.Ionicons  style={{marginLeft:8}}  name="ios-heart" size={15} color="red" />:<Icon.Ionicons style={{marginRight:15}}  style={{marginLeft:8}} name="ios-heart-outline" size={15} color="black"/>}
                    {this.state.liked? <Text style={styles.textstyle}>{value+1}</Text>:<Text style={styles.textstyle} >{value}</Text>}
                </View> 
  </TouchableOpacity>
  <TouchableOpacity  underlayColor='transparent' 
              onPress={this.Commentpress}>
                <View >
                 {this.state.comment?<Icon.Ionicons  style={{marginLeft:20}}  name="ios-chatbubbles" size={15} color="red" />:<Icon.Ionicons style={{marginLeft:20}}  name="ios-chatbubbles-outline" size={15} color="black" />}
                <Text style={styles.textstyle}>Comment</Text>
                </View> 
  </TouchableOpacity>
  <TouchableOpacity underlayColor='transparent' 
              onPress={this.pressedhand}>
                <View >
                    {this.state.hand? <Icon.Ionicons  style={{marginLeft:18}} name="ios-hand" size={15} color="red" />:<Icon.Ionicons  style={{marginLeft:10}}   name="ios-hand-outline" size={15} color="black" />}
                    {this.state.hand? <Text style={styles.textstyle}>Blocked</Text>:<Text style={styles.textstyle} >Block</Text>}
                </View> 
  </TouchableOpacity>
  {/* <Icon name="ios-hand-outline" size={30} color="#4F8EF7" /> */}
  
  </View>
 )
  }
  
};
const styles=StyleSheet.create({
  container:{
    marginTop:5,
    marginBottom: 2,
    width:'100%',
    height:40,
    backgroundColor:"#fff",
    // backgroundColor:"rgba(216,216,216,45)",
    // borderRadius:14,
    borderColor:"green",
    borderWidth:1,
    justifyContent:"space-evenly",
    flexDirection:"row",
    alignItems:"center",
    elevation:4
  },
  textstyle:{
    fontWeight: "bold",
    alignItems: 'center',
    marginRight: 1,
    color:"grey"
    },
  
  
});

 


