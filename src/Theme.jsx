import React, { Component } from 'react'
import Navbar from './Navbar';
import Slider from './Slider';
import Services_card from './Services_card';

export default class Theme extends Component {
  render() {
    return (
      <div>


<Navbar/>
      <Slider/>
      <Services_card/>

      </div>
    )
  }
}
