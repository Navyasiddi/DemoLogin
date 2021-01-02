import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
} from 'react-native';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getLogin} from './../module/login/store/action';
import email from './../common/image/mail.png';

class LoginScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
   username:'',
   password:'',
  };
  }

  componentDidMount() {
    this.props.getLogin().then((response) => {});
  }
  savedata = () => {
    // this.props.navigation.navigate('Add')
    let userdb = this.props.login.listLogin.username;
    // alert("userdb" + userdb)
    let passdb = this.props.login.listLogin.password;
    // alert("passdb" + passdb)
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    var username = this.state.username;
  // alert("username" + username);

    var password = this.state.password;
    //  alert("password" + password);
    if (username === "") {
      alert('Email Required');
    } else if (!reg.test(username)) {
      alert('Email must be like user@domain.com');
    } 
    else if (password === '') {
      alert('Password Required');
    } else if (username === userdb && password === passdb) {
      alert('successfully logged In');
      this.props.navigation.navigate('Add');
    } else {
      alert('UserName and Password mismatch');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: 'Arial',
            alignItems: 'center',
            marginLeft: 8,
            fontSize: 38,
            fontWeight: 'bold',
            marginBottom: 40,
          }}>
          Sign up
        </Text>
        <TextInput
          style={styles.inputBox}
          value={this.state.username}
          onChangeText={(e) => this.setState({username: e})}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Your Email"
          placeholderTextColor="#850c22"
          selectionColor="#fff"
          keyboardType="email-address"
          onSubmitEditing={() => this.password.focus()}
        />

        <TextInput
          style={styles.inputBox}
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#850c22"
          ref={(input) => (this.password = input)}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.savedata()}>
          <Text style={styles.buttonText}>LogIn</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {login} = state;
  return {
    login,
  };
};

const mapDispatchToProps = ((dispatch) => ({
  getLogin,
}))();

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 240,
    //backgroundColor:' #ffb3ff'
  },

  inputBox: {
    width: 299,
    backgroundColor: '#ede8e8',
    borderRadius: 2,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#991172',
    marginVertical: 9,
  },
  button: {
    width: 299,
    backgroundColor: '#b8236b',
    borderRadius: 2,
    marginVertical: 9,
    paddingVertical: 11,
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#ffffff',
    textAlign: 'center',
  }
});
