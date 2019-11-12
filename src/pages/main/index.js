import React, { useState, useEffect } from 'react';
import { StatusBar } from 'react-native';
import MapBoxGL from '@react-native-mapbox-gl/maps'

import { Container, AnnotationContainer, AnnotationText } from './styles';
import api from '../../services/api'

export default function main() {

  const coords = [[-49.6446024, -27.2108001]]
  const [locations, setLocations] = useState([])

  useEffect(() => {
    async function fetchLocations() {
      try {
        const response = await api.get('/properties', {
          params: {
            latitude: -27.210768,
            longitude: -49.644018,
          }
        })
        setLocations(response.data)
      } catch (err) {

      }
    }
    fetchLocations()
  }, [])

  function renderLocations() {
    locations.map(location => {
      <MapBoxGL.PointAnnotation
        id={location.id.toString()}
        coordinate={[parseFloat(location.longitude), parseFloat(location.latitude)]}
      >
        <AnnotationContainer>
          <AnnotationText>{location.price}</AnnotationText>
        </AnnotationContainer>
        <MapBoxGL.Callout title={location.title} />
      </MapBoxGL.PointAnnotation>
    })
  }

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
        {renderLocations()}
      </MapBoxGL.MapView>
    </Container>
  );
}
