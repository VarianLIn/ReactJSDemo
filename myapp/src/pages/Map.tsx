/*
 * @Author: LIn bowen
 * @Date: 2021-03-30 09:18:49
 * @LastEditors: LIn bowen
 * @LastEditTime: 2021-03-30 15:38:34
 * @Descripttion:
 */

import React from 'react';
// import ReactDOM from 'react-dom';

class MapE extends React.Component {
  // constructor() {
  //   // super(props);
  //   // this.state = {date: new Date()};
  // }

  init() {
    let map = new GeoGlobe.Map({
      container: 'mapx',
      style: {
        version: 8,
        glyphs: 'lib/resource/pbf/{fontstack}/{range}.pbf',
        sources: {},
        layers: [],
      },
      zoom: 6.8,
      center: [115.73143736303132, 27.319580616450395],
      pitch: 0, // 最大60
      minZoom: 1,
      maxZoom: 17.4,
    });
    map.on('load', () => {
      map.addLayer({
        id: 'map',
        type: 'raster',
        source: {
          type: 'raster',
          tiles: ['http://b.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'],
          tileSize: 256,
        },
        paint: {
          'raster-opacity': 1,
        },
      });
    });
  }

  componentDidMount() {
    this.init();
  }

  componentWillUnmount() {}

  render() {
    return <div id="mapx" style={{ height: '100vh' }}></div>;
  }
}

// ReactDOM.render(<Clock />, document.getElementById('root'));
export default MapE;
