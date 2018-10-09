import React, { Component } from 'react';
import { Text, View, Modal, Dimensions, Alert, Image, TouchableOpacity, StyleSheet, TextInput, Keyboard, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Icon, ImagePicker, Video } from 'expo';
let { width, height } = Dimensions.get('window');
import MyCameraModal from './Acessimages/Camera';

export default class HelloWorldApp extends Component {
  constructor(props) {
    super(props);
    this.addCamerafedds=this.addCamerafedds.bind(this);
    this.state = {
      modalVisible: false,
      visibleHeight: Dimensions.get('window').height,
      k_visible: false,
      text: "",
      image1: null,
      image2: null,
      image3: null,
      image4: null,
      image5: null,
      image6: null,
      image7: null,
      image8: null,
      image9: null,
      image10: null,
      // video1: []

    }
  }
////////////////for showing modal//////////////////
  ////////////////for showing modal//////////////////
  showAddModal = () => {
    this.setState({
      modalVisible: true
    });
    // this.refs.myModal.open()
  }
  ////////////////for showing modal//////////////////
  ////////////////for showing modal//////////////////



  ///////////////addcamera modal/////////////////////
  ///////////////addcamera modal/////////////////////
  addCamerafedds=()=>{
    // Alert.alert('hi');
    this.refs.addCamera.showCameraModal();
  }
  /////////////addcamera modal //////////////////////////
  /////////////addcamera modal //////////////////////////

  //////listener for keyboard popup///////////////////
  //////listener for keyboard popup///////////////////
  componentDidMount() {
    Keyboard.addListener('keyboardWillShow', this.keyboardWillShow.bind(this));
    Keyboard.addListener('keyboardWillHide', this.keyboardWillHide.bind(this));
  }

  componentWillUnmount() {
    Keyboard.removeListener('keyboardWillShow');
    Keyboard.removeListener('keyboardWillHide');
  }

  keyboardWillShow(e) {
    let newSize = Dimensions.get('window').height - e.endCoordinates.height
    this.setState({ visibleHeight: newSize, k_visible: true })
  }

  keyboardWillHide(e) {
    if (this.componentDidMount) {
      this.setState({ visibleHeight: Dimensions.get('window').height, k_visible: false })
    }

  }
  //////listener for keyboard popup///////////////////
  //////listener for keyboard popup///////////////////

  /////////////////header in the feed///////////////////////////
  /////////////////header in the feed///////////////////////////
  renderheader() {
    return (
      <View style={styles.headercotainer}>
        <View style={styles.headerow}>
          <Icon.Ionicons style={styles.headerLeft} name="ios-close" size={60} color="red" onPress={this.addfedds} />
          <Text style={styles.headertext}>New Feed</Text>
          <Icon.Ionicons style={styles.headerRight} name="ios-checkmark" size={60} color="red" onPress={this.addfedds} />

        </View>
      </View>
    );
  }
  /////////////////header in the feed///////////////////////////
  /////////////////header in the feed///////////////////////////

  /////////////////for writing in the feed///////////////////////////
  /////////////////for writing in the feed///////////////////////////
  renderText() {
    return (
      <View style={{
        padding: 16,
        // backgroundColor: this.state.text,
        borderBottomColor: '#fff',
        borderBottomWidth: 1
      }}>
        <TextInput
          multiline={true}
          numberOfLines={4}
          // fontSize={}
          // allowFontScaling={true}
          onChangeText={(text) => this.setState({ text })}
          value={this.state.text}
          editable={true}
          maxLength={600}
          fontSize={20}
          underlineColorAndroid="transparent"
          placeholderTextColor={'gray'} placeholder={"What's on your mind?"}
        />
      </View>
    )
  }
  /////////////////for writing in the feed///////////////////////////
  /////////////////for writing in the feed///////////////////////////

  /////////////////image picking///////////////////////////
  /////////////////image picking///////////////////////////

  _pickImage = async () => {
    let { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 } = this.state;

    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [7, 5],
      quality: 0.5,
      base64: true
    });

    console.log(result);

    if (!result.cancelled) {
      console.log(result.base64);

      if (!image1) {
        this.setState({
          image1: result.uri
        });
      } else if (!image2) {
        this.setState({
          image2: result.uri
        });
      } else if (!image3) {
        this.setState({
          image3: result.uri
        });
      } else if (!image4) {
        this.setState({
          image4: result.uri
        });
      } else if (!image5) {
        this.setState({
          image5: result.uri
        });
      } else if (!image6) {
        this.setState({
          image6: result.uri
        });
      } else if (!image7) {
        this.setState({
          image7: result.uri
        });
      } else if (!image8) {
        this.setState({
          image8: result.uri
        });
      } else if (!image9) {
        this.setState({
          image9: result.uri
        });
      } else if (!image10) {
        this.setState({
          image10: result.uri
        });
      }
    }
  };
  /////////////////image picking///////////////////////////
  /////////////////image picking///////////////////////////
  /////////////////video pick/////////////////////////////
  // _pickVideo = async () => {
  //   let { video1 } = this.state;

  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     // allowsEditing: true,
  //     type:'video',
  //     // mediaTypes: 'video',
  //     // allowsEditing:true
  //   });

  //   console.log(result);
  //   if (!result.cancelled) {
  //     if (!video1) {
  //       this.setState({
  //         video1: result.uri
  //       });
  //     }
  //   }
  // };


  /////////////////video pick/////////////////////////////
  ////////////////////Selected videos for posting////////////
  // renderVideo(video1) {
  //   return (
  //     <View>
  //       {video1 &&
  //         <Video
  //         // source={{ uri: 'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4' }}
  //           source={{ uri: video1 }}
  //           rate={1.0}
  //           volume={1.0}
  //           isMuted={false}
  //           resizeMode="cover"
  //           // shouldPlay
  //           // isLooping
  //           style={{ width: 300, height: 300 }}
  //         ></Video>}
  //     </View>
  //   )
  // }

  ////////////////////Selected videos for posting////////////
  ////////////////////Selected videos for posting////////////


  /////////////////seleted images for posting///////////////////////////
  /////////////////seleted images for posting///////////////////////////
  
  renderImage({ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 }) {
    return (
      <View>
        {image1 &&
          <Image source={{ uri: image1 }} style={{ width: width, height: 300, marginTop: 5 }} />}
        {image2 &&
          <Image source={{ uri: image2 }} style={{ width: width, height: 300, marginTop: 5 }} />}
        {image3 &&
          <Image source={{ uri: image3 }} style={{ width: width, height: 300, marginTop: 5 }} />}
        {image4 &&
          <Image source={{ uri: image4 }} style={{ width: width, height: 300, marginTop: 5 }} />}
        {image5 &&
          <Image source={{ uri: image5 }} style={{ width: width, height: 300, marginTop: 5 }} />}
        {image6 &&
          <Image source={{ uri: image6 }} style={{ width: width, height: 300, marginTop: 5 }} />}
        {image7 &&
          <Image source={{ uri: image7 }} style={{ width: width, height: 300, marginTop: 5 }} />}
        {image8 &&
          <Image source={{ uri: image8 }} style={{ width: width, height: 300, marginTop: 5 }} />}
        {image9 &&
          <Image source={{ uri: image9 }} style={{ width: width, height: 300, marginTop: 5 }} />}
        {image10 &&
          <Image source={{ uri: image10 }} style={{ width: width, height: 300, marginTop: 5 }} />}
      </View>
    )

  }
  /////////////////seleted images for posting///////////////////////////
  /////////////////seleted images for posting///////////////////////////

  /////////////////menu icons///////////////////////////
  /////////////////menu icons///////////////////////////

  renderMenu() {
    // const {k_visible} = this.state;
    // if(k_visible) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => { Keyboard.dismiss() }}
          style={{
            margin: 20, height: 56, borderTopWidth: StyleSheet.hairlineWidth, borderColor: '#72757A',
            flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 16
          }}>
          <Text style={{ color: "black", fontSize: 16, fontWeight: '500' }}>Add to your post</Text>
          <View style={{ flexDirection: 'row', paddingRight: 16 }}>
            <Icon.Ionicons style={styles.icon} name='md-image' color='#93B75F' size={24} onPress={this._pickImage} />
            <Icon.Ionicons style={styles.icon} name='md-camera' color='#93B75F' size={24} onPress={this.addCamerafedds} />
            <Icon.Ionicons style={styles.icon} name='md-videocam' color='#E7404E' size={24} />
            <Icon.Ionicons style={styles.icon} name='md-pin' color='#D8396F' size={24} />
            <Icon.Ionicons style={styles.icon} name='ios-happy' color='#EDC370' size={24} />

          </View>
        </TouchableOpacity>
      </View>
    )
    // }
  }
  /////////////////menu icons///////////////////////////
  /////////////////menu icons///////////////////////////


  



  ////////////////render the main layout together//////////////////
  render() {
    let { image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 ,video1} = this.state;
    return (
      <Modal
        ref={'myModal'}
        visible={this.state.modalVisible}
        onRequestClose={() => {
          this.setState({
            modalVisible: false
          })
        }}
      >
        <View style={{ height: this.state.visibleHeight }}>
          {this.renderheader()}

          <KeyboardAvoidingView style={styles.keyboardAvoidContainer} behavior="padding">
            <ScrollView style={{ marginBottom: 20 }} >
              <View>
                {this.renderText()}
                {this.renderImage({ image1, image2, image3, image4, image5, image6, image7, image8, image9, image10 })}
                {/* {this.renderVideo({video1})}  */}
            </View>

            </ScrollView>
            {this.renderMenu()}

          </KeyboardAvoidingView>


        </View>
        <MyCameraModal ref={'addCamera'}/>


      </Modal>
    );
  }
  ////////////////render the main layout together//////////////////


}



const styles = StyleSheet.create({
  keyboardAvoidContainer: {
    flex: 1,
    backgroundColor: '#fff'
  },
  container: {
    flex: 1
  },
  headercotainer: {
    marginTop: 0,
    backgroundColor: 'white',
    height: 65,
    elevation: 4
  },
  headerow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 5,
    marginBottom: 1,
  },
  headerLeft: {
    marginTop: 10,
    marginLeft: 10
  },
  headerRight: {
    marginRight: 10
  },
  headertext: {
    fontWeight: "bold",
    fontSize: 30
  },
  icon: {
    marginLeft: 10
  }
})
// import React from 'react';
// import { Text, Image, TouchableOpacity } from 'react-native';
// import { StatusUpdateForm } from 'expo-activity-feed';

// class StatusUpdateScreen extends React.Component {
//   static navigationOptions = ({ navigation }) => ({
//     title: 'NEW POST',
//     headerLeft: (
//       <TouchableOpacity
//         style={{ paddingLeft: 15 }}
//         onPress={() => navigation.goBack()}
//       >
//         <Image
//           style={{ width: 24, height: 24 }}
//           source={require('../images/icons/close.png')}
//         />
//       </TouchableOpacity>
//     ),
//     headerRight: (
//       <TouchableOpacity
//         style={{ paddingRight: 15 }}
//         onPress={navigation.getParam('submitFunc')}
//       >
//         <Text style={{ color: '#007AFF', fontSize: 17 }}>Send</Text>
//       </TouchableOpacity>
//     ),
//     headerTitleStyle: {
//       fontWeight: '500',
//       fontSize: 13,
//     },
//   });

//   render() {
//     return (
//       <StatusUpdateForm
//         fullscreen
//         {...this.props}
//         registerSubmit={(submitFunc) => {
//           this.props.navigation.setParams({ submitFunc });
//         }}
//       />
//     );
//   }
// }

// export default StatusUpdateScreen;
