import React, { Component } from 'react'
import {View, Text } from 'react-native'


// function component tidak bisa menggunakan state
const About = (props) => {
    const { deskripsi } = props

    return (
        <View>
            <Text>About The App</Text>
            <Text>{deskripsi}</Text>
        </View>
    )
}



// Kelas Komponen
// class About extends Component {
//     constructor(){
//         super()
//         this.state = {
//             aboutText : 'About The App'
//         }
//     }
//     render(){
//         const {aboutText} = this.state
//         const {deskripsi} = this.props
//         return (
//             <View>
//                 <Text>{aboutText}</Text>
//                 <Text>{deskripsi}</Text>
//             </View>
//         )
//     }
// }

export default About