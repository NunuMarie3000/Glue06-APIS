import React, { Component } from 'react'

import { Card, Button } from 'react-bootstrap'

import axios from 'axios'

import chuckNorrisPic from '../media/Walker-Texas-Ranger.jpg'

export default class Input extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        norrisFact: ''
      }
    }

    getDeets = async () =>{
        const options = {
            method: 'GET',
            url: 'https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random',
            headers: {
              accept: 'application/json',
              'X-RapidAPI-Key': '9fb1c6a542msh8cb274a178d1f04p12400ajsnbf56989dcf65',
              'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
            }
          };

        await axios.request(options).then((res)=>{
            this.setState({norrisFact: res.data.value})
        })
    }

    render() {
    return (
        <>
            <Button onClick={this.getDeets}>Click Me</Button>
            {this.state.norrisFact && <Card style={{ width: '18rem' }}>
                <Card.Body>
                <img alt='chuck norris fact' src={chuckNorrisPic}></img>
                <Card.Text style={{color: 'black'}}>{this.state.norrisFact}</Card.Text>
                </Card.Body>
            </Card>}
        </>
    )
    }
}
