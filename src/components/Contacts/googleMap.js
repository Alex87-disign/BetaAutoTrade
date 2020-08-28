import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '300px',
  height: '300px',
  padding: '20px',
  border: '2px solid black',
  margin: '20px'
};

export class MapContainer extends Component {
  render() {
    return (
      <Map
      google={this.props.google}
     
      initialCenter={{
        lat: 40.854885,
        lng: -88.081807
      }}
      zoom={15}
      onClick={this.onMapClicked}
        
      />
    );
  }
}

export default GoogleApiWrapper(
    (props) => ({
      apiKey: props.apiKey
    }
  ))(MapContainer)