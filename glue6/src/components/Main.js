import React, { Component } from 'react'

import Input from './Input'

import chuckNorrisGif from '../media/chuck-norris-kick-action.gif'
const gifStyle = { width: '80px', height: '85px'}

export default class Main extends Component {
  render() {
    return (
      <>
      <div>
        <img style={gifStyle} alt='chuck' src={chuckNorrisGif}/>
      </div>
        <Input/>
      </>
    )
  }
}
