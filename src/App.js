import React, { Component } from 'react';
import './App.css';
//import { render } from '@testing-library/react';
import Customer from './components/Customer';


const customers = [
{
  'id': 1,
  'image': 'http://placeimg.com/64/64/1',
  'name':'Mr.Hong',
  'birth': '961222',
  'gender': 'male',
  'job': 'student'
},
{
  'id': 2,
  'image': 'http://placeimg.com/64/64/2',
  'name':'Mr.JJJ',
  'birth': '961122',
  'gender': 'male',
  'job': 'programmer'
},
{
  'id': 3,
  'image': 'http://placeimg.com/64/64/3',
  'name':'ParkHyeWon',
  'birth': '941011',
  'gender': 'female',
  'job': 'Designer'
}
]

class App extends Component{

  render() {

    return (

      <div>
          { customers.map(c => { return( <Customer key={c.id} id={c.id} image={c.image} name={c.name} birth={c.birth} gender={c.gender} job={c.job}/>); }) }
      </div>
    );
  }
}

export default App;