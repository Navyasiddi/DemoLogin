import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
} from 'react-native';
import {getUser} from './../module/login/store/action';
import {connect} from 'react-redux';
import EmpImage from './../common/image/emp2.jpg';
// import { Avatar } from 'react-native-elements';

class EmployeeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useData: [],
    };
  }

  componentDidMount() {
    this.props.getUser().then((response) => {
      this.setState({
        useData: response,
      });

    });
  }

  render() {
    let itemList = this.state.useData.map((data) => {
      return (
        <View
          style={{
            justifyContent: 'center',
            paddingTop: 13,
            backgroundColor: '#ffff',
          }}>
          <View
            style={{
              height: 108,
              flexDirection: 'row',
              elevation: 4,
              shadowOffset: {width: 5, height: 5},
              shadowColor: 'red',
              shadowOpacity: 0.5,
              shadowRadius: 10,
              backgroundColor: '#ede8e8',
              marginBottom: 10,
              marginHorizontal: 15,
              paddingTop: 7,
            }}>
            <View style={{radius: 20, justifyContent: 'center'}}>
              <Image
                source={EmpImage}
                style={{
                  width: 70,
                  height: 90,
                  marginLeft: 10,
                  resizeMode: 'stretch',
                }}></Image>
            </View>
            <View>
              <Text style={styles.text}>Name : {data.name}</Text>
              <Text style={styles.text}>Age : {data.age}</Text>
              <Text style={styles.text}>Gender : {data.gender}</Text>
              <Text style={styles.text}>Email : {data.email}</Text>
              <Text style={styles.text}>PhoneNo : {data.phoneNo}</Text>
            </View>
          </View>
        </View>
      );
    });
    return <ScrollView>{itemList}</ScrollView>;
  }
}

const mapStateToProps = (state) => {
  const {login} = state;
  return {
    login,
  };
};

const mapDispatchToProps = ((dispatch) => ({
  getUser,
}))();
export default connect(mapStateToProps, mapDispatchToProps)(EmployeeScreen);

const styles = StyleSheet.create({
  text: {
    fontFamily: 'serif',
    alignItems: 'center',
    marginLeft: 10,
    fontSize: 13,
    fontWeight: 'bold',
  },
});
