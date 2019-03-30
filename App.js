import React from 'react';
import { AppRegistry, TextInput, StyleSheet, Text, View, TouchableOpacity, ListView, Alert } from 'react-native';
// import console = require('console');


export default class App extends React.Component {
  constructor(){
    super()

    this.state = {
      name: '',
      attack: '',
      power: '',
      toggle: true,
      mentor: [],
      battlers: [],
      fighterOne: '',
      fighterTwo: '',
      winner: ''

    }
  }
  handleName(val){
    this.setState({
      name: val
    })
  }
  handleAttack(val){
    this.setState({
      attack: val
    })
  }
  handlePower(val){
    this.setState({
      power: val
    })
  }
  handleMentor(i){
    this.state.mentor.push(i)
    this.setState({ 
      toggle: false
    })
  }
  handleBattle = (i) => {
    if(this.state.fighterOne === ''){
     return this.setState({
        fighterOne: i
      })
    } else if(this.state.fighterTwo === ''){
      return this.setState({
        fighterTwo: i
      }) 
    } else {
          return null
        }

  }
  winnerB = () => {
    this.setState({
      fighterOne: '',
      fighterTwo: ''
    })
    this.random()
    
  }
  random = () => {
    (Math.floor(Math.random() * 2) == 0) ? this.setState({
      winner: this.state.fighterOne
    }) : this.setState({
      winner: this.state.fighterTwo
    })
  }
  mapped = () => {
    let ind = 1
    return mappedMentors = this.state.mentor.map(i => {
      ind +=1
       return (
          <View style={styles.displayMentor} key={ind}>
          <TouchableOpacity value={i} onPress={() => this.handleBattle(i.name)} style={styles.buttonMentor}>
          
            <Text style={styles.displayMentor}>{i.name}</Text>
            <Text>Attack: {i.attack}</Text>
            <Text>Power: {i.power}</Text>
            </TouchableOpacity>
          </View>
        )
    })
  }
  
  render() {
    if( this.state.toggle === true){
      let user = {name: this.state.name, attack: this.state.attack, power: this.state.power}
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => {this.setState({toggle: !this.state.toggle})}}>
        <Text>Battle Zone</Text>
      </TouchableOpacity>
        <Text style={styles.title}>Welcome to Mentor Battles</Text>
        <TextInput
        style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(name) => this.setState({name})}
        value={this.state.text}
        placeholder={'Name'}
      />
      <TextInput
        style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(attack) => this.setState({attack})}
        value={this.state.text}
        placeholder={'Special Attack'}
      />
      <TextInput
        style={{height: 40, width: 150, borderColor: 'gray', borderWidth: 1}}
        onChangeText={(power) => this.setState({power})}
        value={this.state.text}
        placeholder={'Super Power'}
      />
      <TouchableOpacity style={styles.button} onPress={() => {this.handleMentor(user)}}>
        <Text>Press Here</Text>
      </TouchableOpacity>
      </View>
    );
    }
    else {
      return(
      <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {this.setState({toggle: !this.state.toggle})}}>
        <Text>Add Mentor</Text>
      </TouchableOpacity>
        
        <Text style={styles.battle}>Battle Arena</Text>
        <View>
          <Text style={styles.title}>Battler One</Text>
          <Text style={styles.name}>{this.state.fighterOne}</Text>
          <Text style={styles.title}>Battler Two</Text>
          <Text style={styles.name}>{this.state.fighterTwo}</Text>
          <TouchableOpacity style={styles.button} onPress={this.winnerB}><Text>Battle</Text></TouchableOpacity>
          <Text>The winner is {this.state.winner}</Text>
        </View>
        
        
        {this.mapped()}


      </View>
      )}
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    width: 100,
    padding: 10,
    margin: 10
  },
  buttonMentor: {
    alignItems: 'center',
    width: 200,
    backgroundColor: '#00ff00',
    padding: 10,
    margin: 10,
    fontSize: 20
  },
  name: {
    fontSize: 40,
    color: '#00ff00'
  },
  battle: {
    fontSize: 60,
    color: '#0000cc'
  },
  title: {
    fontSize:20
  },
  displayMentor: {
    fontSize:20
  }
});