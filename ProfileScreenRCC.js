import React, { Component } from 'react'
import { Button, ScrollView, Text, TouchableOpacity, View } from 'react-native'

export class ProfileScreenRCC extends Component {
  constructor(props) {
    super(props);
    this.state = {
      objProfile:{
        studentid: 202310041,
        fullname: "Muhammad Audya Fadhlurrohman",
        gender: 'M',
        semester: 4,
        gpa: 3.4,
        hobby: ['makan','minum','tidur']
      }
    };
  }

  render() {

    const handlerSemester = (value) => {
      this.setState((prevState)=>{
        let cloneObjProfile = Object.assign({}, prevState);
        cloneObjProfile.semester = value;
        return {cloneObjProfile};
      })
    }

    return (
      <ScrollView>
        <View style={{borderWidth:1, padding:10, margin:10}}>
        <Text style={{ fontSize: 24 }} >Semester:</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >
          {this.state.objProfile.semester}
        </Text>
        <View style={{flexDirection:'row'}}>
          <TouchableOpacity
            style={{backgroundColor:'purple',paddingHorizontal:20,paddingVertical:10, margin:5}}
            onPress={(e)=>handlerSemester(++this.state.objProfile.semester)} >
            <Text style={{color:'white'}}>Plus</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{backgroundColor:'purple',paddingHorizontal:20,paddingVertical:10, margin:5}}
            onPress={(e)=>handlerSemester(--this.state.objProfile.semester)} >
            <Text style={{color:'white'}}>Minus</Text>
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    )
  }
}

export default ProfileScreenRCC