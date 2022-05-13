import React, { useState } from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import { Button, ScrollView, Text, TouchableOpacity, View, StyleSheet, Image } from 'react-native'
import Irvan from "../../assets/audy.jpg"
import sd from "../../assets/sd.png"
import smp from "../../assets/smp.png"
import sma from "../../assets/sma7.jpg"


export function ProfileScreen() {
  const firstName = "Muhammad";//value srting
  const middleName = "Audya";//value srting
  const lastName = "Fadhlurrohman"; //value srting
  const fullname = firstName + ' '+ middleName + ' '+ lastName;
  
  const studentid = 202310041; //value long
  const gender = 'M'; //value char
  var semester = 4; //value integer
  let gpa = 3.8; //value desimal

  const maxSemester = 8;
  let percentSemester = 100 / (maxSemester / semester);

  var educations = [
    {id:1,image:sd ,level:"SDN", school:"Pondok Rumput 1", kota:"Bogor", tahun:"2008 - 2014"},
    {id:2,image:smp ,level:"SMPN", school:"19", kota:"Bogor", tahun:"2014 - 2017"},
    {id:3,image:sma ,level:"SMAN", school:"7", kota:"Bogor", tahun:"2017 - 2020"},
  ];

  const hobby = [
    {id: 1, hobby: "Basket", icon: "basketball-outline"},
    {id: 2, hobby: "Musik", icon: "musical-notes-outline"},
    {id: 3, hobby: "Design", icon: "desktop-outline"},
    {id: 4, hobby: "Writing", icon: "pencil-outline"},
    {id: 5, hobby: "Drawing", icon: "brush-outline"}
  ];
  
  const objectProfile = {
    studentid: studentid,
    fullname: fullname,
    gender: gender,
    semester: semester,
    gpa: gpa,
    percentSemester:percentSemester,
    hobby: hobby,
    educations: educations
  };

  let genderName = '-';
  if(objectProfile.gender == 'M'){
    genderName = 'Male';
  }else if(objectProfile.gender == 'F'){
    genderName = 'Female';
  }else{
    genderName = 'Unknow';
  }

  //USE HOOK//
  const [objProfile, setObjProfile] = useState(objectProfile);
  
  const handlerSemester = (value)=>{
    setObjProfile({...objProfile, semester:value});
  }
  //END USE HOOK//

  return (
    <ScrollView>
      <View style={styles.containerprofile}>
        <View style={styles.containeravatar}> 
        <Image source={Irvan} style={styles.avatar} />
        </View>         
        <Text style={{ fontSize: 24, fontWeight: 'bold', color: "#EFEFEF"}} >{objectProfile.fullname}</Text>
        <Text style={{ fontSize: 22, color: "#EFEFEF" }} >{objectProfile.studentid}</Text>
        <View style={styles.icon}>
        <Ionicons name="heart-outline" size={25} color={"#F66B0E"} style={{marginRight:10}} />
        <Ionicons name="chatbubble-ellipses-outline" size={25} color={"#F66B0E"} />
        <Ionicons name="arrow-redo-outline" size={25} color={"#F66B0E"} style={{marginLeft:10}}/>        
        </View>
      </View>
      <View style={styles.containerdetail}>
        <View style={ styles.row }>
          <Text style={ styles.h2 } >Semester  :</Text>
          <TouchableOpacity
            style={{margin:10,}}
            onPress={(e)=>handlerSemester(--objProfile.semester)} >
            <Ionicons name="remove-circle" size={25} color={"#205375"} />
          </TouchableOpacity>
          <Text style={{ fontSize: 24, fontWeight: 'bold', margin: 5 }} >
          {objProfile.semester}
          </Text>
          <TouchableOpacity
            style={{margin:10}}
            onPress={(e)=>handlerSemester(++objProfile.semester)} >
            <Ionicons name="add-circle" size={25} color={"#205375"} />
          </TouchableOpacity>
        </View>
          <View style={ styles.row }>
          <Text style={ styles.h2 } >GPA          :</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 10 }} >
            {objectProfile.gpa}
            {(objectProfile.gpa >= 3.7) ? (
            <Text style={{ fontSize: 22, color:'#205375', fontWeight: 'normal'}}> [ Cumlaude ]</Text>
            ) :''}
          </Text>
        </View>
        <View style={ styles.row }>
          <Text style={ styles.h2 } >Gender     :</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} >
            {( objectProfile.gender == 'M' ) ? ' Pria':' Wanita' }
          </Text>
        </View>
        <View style={ styles.row }>
        <Text style={ styles.h2 } >Progress   :</Text>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginLeft: 5 }} > {objectProfile.percentSemester}%</Text>
        </View>
      </View>
      <View>
        <Text style={ styles.title } >Hobby</Text>
      </View>
      <ScrollView horizontal >
      <View style ={styles.containerhobby}>
        {objectProfile.hobby.map((v)=>(
          <View style = {{justifyContent: 'center'}} key={v.id}>
            <View style = {styles.hobby}>
            <View style={{ flexDirection: 'row', marginBottom: 5, paddingTop: 5 }}>
              <Ionicons name={v.icon} size={40} color={"#000"} />
            </View>
            <View style={{ flexDirection: 'row', marginBottom: 5, paddingLeft: 7 }}>
              <Text style={{ fontWeight: 'bold', fontSize: 16, color: "#000" }} >{v.hobby}</Text>
            </View>
            </View>
          </View>
        ))}
      </View>
      </ScrollView>
      <View>
        <Text style={ styles.title } >Educations</Text>
        {objectProfile.educations.map((e)=>(
          <View style = {styles.educations} key={e.id}>
          <View style={{ flexDirection: 'row'}}>
          <Image source={e.image} style={{height:80, width:80}} />
          <View style={{flex:1, margin: 10}}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: "justify" }} > {e.level} {e.school} {e.kota}</Text>
            <Text key={e.id} style={{ fontSize: 20, textAlign: "justify" }} > {e.tahun}</Text>
          </View>
          </View>
          </View>
        ))}
      </View>
      
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
  containerprofile: {
    alignItems: 'center',
    backgroundColor: "#205375",
    borderRadius: 10,
    width: "auto",
    padding: 20,
    margin: 20,
    shadowColor: "#000",
    shadowOffset: {width: 5, height: 5,},
    shadowOpacity: 0.25,
    shadowRadius: 3,
    elevation: 5,
  },
  containeravatar: {
    borderRadius: 100, backgroundColor: '#205375', borderColor: '#F66B0E', padding: 5, borderWidth: 3
  },
  avatar: {
    height: 100, width: 100, borderRadius: 50
  },
  icon: {
    flexDirection:'row', alignItems: "center", marginTop: 10
  },
  containerdetail: {
    borderWidth:2, padding:10, margin:20, marginTop:0, borderRadius: 10, borderColor: "#205375", color: '#EFEFEF'
  },
  containerhobby: {
    flexDirection: 'row',
    paddingRight: 20
  },
  hobby: {
    alignItems:'center',padding:10, margin:20, marginRight:0, borderRadius: 10, backgroundColor: "#F66B0E", width: 200 
  },
  educations: {
    alignItems:'center',padding:10, margin:20, marginBottom:0, borderWidth:2, borderRadius: 10, width: "auto", marginBottom: 5, paddingTop: 5, borderColor: '#112B3C', backgroundColor: "white"
  },
  h2: {
    fontSize: 24, margin: 5
  },
  row: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 24, marginLeft: 20, fontWeight:'bold', color: '#112B3c'
  }
})

export default ProfileScreen