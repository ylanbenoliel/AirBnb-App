import React from 'react';
import { StatusBar } from 'react-native';
import MapBoxGL from '@react-native-mapbox-gl/maps'

import { Container } from './styles';

export default function main() {
  const coords = [[-49.6446024, -27.2108001]]
  return (
    <Container>
      <StatusBar barStyle='light-content' />
      <MapBoxGL.MapView
        ref={c => (_map = c)}
        style={{ flex: 1 }}
        styleURL={MapBoxGL.StyleURL.Dark}
      >
        <MapBoxGL.Camera
          zoomLevel={16}
          centerCoordinate={coords[0]}
        />
      </MapBoxGL.MapView>
    </Container>
  );
}
