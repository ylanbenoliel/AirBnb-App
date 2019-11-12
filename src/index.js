import React from 'react'
import Routes from './routes'
import MapBoxGL from '@react-native-mapbox-gl/maps'
import config from './utils/config'

MapBoxGL.setAccessToken(config.get("accessToken"))

const App = () => <Routes />

export default App