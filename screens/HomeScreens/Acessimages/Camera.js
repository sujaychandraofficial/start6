import React from 'react';
import { Text, View, TouchableOpacity, Modal, StyleSheet, Dimensions, Alert } from 'react-native';
import { Camera, Permissions, Constants, Icon } from 'expo';
let { height, width } = Dimensions.get('window');


const wbOrder = {
  auto: 'sunny',
  sunny: 'cloudy',
  cloudy: 'shadow',
  shadow: 'fluorescent',
  fluorescent: 'incandescent',
  incandescent: 'auto',
};

export default class CameraExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalVisible: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back,
      flash: Camera.Constants.FlashMode.off,
      zoom: 0,
      whiteBalance: 'auto',
      autoFocus: 'on',
      ratio: '16:9',

    };
  }

  ////////////modal showing area/////////////
  ////////////modal showing area/////////////
  showCameraModal = () => {
    this.setState({
      modalVisible: true
    });
  }
  ////////////modal showing area/////////////
  ////////////modal showing area/////////////

  //////////////on mount error////////////////////////////////////
  //////////////on mount error////////////////////////////////////
  handleMountError = ({ message }) => console.error(message);
  /////////////////////////////////////////////////////////////
  /////////////////////////////////////////////////////////////


  ////////////modal showing area/////////////
  ////////////modal showing area/////////////
  showCameraModal = () => {
    this.setState({
      modalVisible: true
    });
    // this.refs.myModal.open()
  }
  ////////////modal showing area/////////////
  ////////////modal showing area/////////////



  /////////////////////asks permission//////////////////////////////
  /////////////////////asks permission//////////////////////////////
  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }
  /////////////////////asks permission//////////////////////////////
  /////////////////////asks permission//////////////////////////////

  ///////////////////////render bottom bar//////////////////////////////
  ///////////////////////render bottom bar//////////////////////////////
  renderbottom() {
    return (
      <View style={{ flexDirection: 'row', justifyContent: "space-evenly", }}>
        <TouchableOpacity onPress={() => {
          this.setState({
            type: this.state.type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back,
          });
        }}>
          <Icon.Ionicons style={{ marginTop: height / 1.15 }} name='ios-reverse-camera' color='#EDC370' size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.setState({
            flash: this.state.flash === Camera.Constants.FlashMode.off
              ? Camera.Constants.FlashMode.on
              : Camera.Constants.FlashMode.off,
          });
        }}>
          <Icon.Ionicons style={{ marginTop: height / 1.15 }} name='md-flash' color='#EDC370' size={40} />
        </TouchableOpacity>
        <TouchableOpacity onPress={this.snap}>
          <Icon.Ionicons style={{ marginTop: height / 1.3 }} name='md-disc' color='#93B75F' size={130} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
          this.setState({
            whiteBalance: wbOrder[this.state.whiteBalance]
          })
        }}>
          <Icon.Ionicons style={{ marginTop: height / 1.15 }} name='ios-color-wand' color='#EDC370' size={40} />
        </TouchableOpacity>
        <View style={{ flexDirection: 'column', marginTop: height / 1.2 }}>
          <TouchableOpacity onPress={() => {
            this.setState({ zoom: this.state.zoom + 0.1 > 1 ? 1 : this.state.zoom + 0.1 });
          }}>
            <Icon.Ionicons name='ios-add-circle' color='#EDC370' size={40} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {
            this.setState({ zoom: this.state.zoom - 0.1 < 0 ? 0 : this.state.zoom - 0.1 });
          }}>
            <Icon.Ionicons name='ios-remove-circle' color='#EDC370' size={40} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  ///////////////////////render bottom bar//////////////////////////////
  ///////////////////////render bottom bar//////////////////////////////

  /////////////////snap photo///////////////////////////////////////
  /////////////////snap photo///////////////////////////////////////
  snap = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      console.log(photo)
    }
  };
  //////////////////////////////////////////////////////////////////
  /////////////////snap photo///////////////////////////////////////


  //////////////////////////render modal////////////////////////////////
  //////////////////////////render modal////////////////////////////////

  render() {
    const { hasCameraPermission } = this.state;
    // console.log(this.getRatios())
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <Modal
          ref={'myCameraModal'}
          visible={this.state.modalVisible}
          onRequestClose={() => {

            this.setState({
              zoom: 0,
              whiteBalance: 'auto',
              modalVisible: false,
              // newPhotos:false
            })
          }}
        >
          <View style={{ flex: 1 }}>
            <Camera
              ref={ref => {
                this.camera = ref;
              }}
              style={{ height: height }} type={this.state.type}
              flashMode={this.state.flash}
              zoom={this.state.zoom}
              whiteBalance={this.state.whiteBalance}
              autoFocus={this.state.autoFocus}
              ratio={this.state.ratio}
              onMountError={this.handleMountError}
            >
              {this.renderbottom(this.state.type)}


            </Camera>
          </View>
        </Modal>
      );
    }
  }
  //////////////////////////render modal////////////////////////////////
  //////////////////////////render modal////////////////////////////////



}

const styles = StyleSheet.create({
  Touchablestyles: {
    flex: 0.1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  textstyles: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white'
  },
  topbar: {
    flex: 0.2,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: Constants.statusBarHeight / 2,
  },
  Bottombar: {
    paddingBottom: 25,
    backgroundColor: 'transparent',
    alignSelf: 'flex-end',
    justifyContent: 'space-between',
    flex: 0.12,
    flexDirection: 'row',
  }
});
