/*
 * @Author: LIn bowen
 * @Date: 2021-04-06 16:11:03
 * @LastEditors: LIn bowen
 * @LastEditTime: 2021-04-07 17:32:19
 * @Descripttion:
 */
import React from 'react';
import { useEffect } from 'react';
// import { useToggle, useMount } from 'ahooks';

const init = () => {
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
  map.on('click', (e) => {
    console.log(e.lngLat.toArray());
  });
};

const MapEngine = () => {
  // console.log(123);
  useEffect(() => {
    init();
    console.log(1);
  });
  return <div id="mapx" style={{ width: '100%', height: '100vh' }}></div>;
};
export default MapEngine;
