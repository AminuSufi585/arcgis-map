import React, { Component } from 'react';
import { WebMap, WebScene } from 'react-arcgis';

export default class App extends Component {
  render() {
    return (
      <div style={{ width: '100vw', height: '100vh' }}>
        <WebMap id="6627e1dd5f594160ac60f9dfc411673f" />
        <WebScene id="f8aa0c25485a40a1ada1e4b600522681" />
      </div>
    );
  }
}