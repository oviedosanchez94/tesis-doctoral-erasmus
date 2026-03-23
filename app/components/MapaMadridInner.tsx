'use client'
import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, GeoJSON, Tooltip } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const MUNICIPIOS_PARTICIPANTES = [
  'Leganés',
  'Alcorcón',
  'Parla',
  'Aranjuez',
  'San Martín de Valdeiglesias',
]

const OVERPASS_QUERY = `
[out:json][timeout:30];
(
  relation["admin_level"="8"]["name"="Leganés"]["boundary"="administrative"];
  relation["admin_level"="8"]["name"="Alcorcón"]["boundary"="administrative"];
  relation["admin_level"="8"]["name"="Parla"]["boundary"="administrative"];
  relation["admin_level"="8"]["name"="Aranjuez"]["boundary"="administrative"];
  relation["admin_level"="8"]["name"="San Martín de Valdeiglesias"]["boundary"="administrative"];
);
out geom;
`

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type GeoJsonData = any

function municipioStyle() {
  return {
    fillColor: '#0071e3',
    weight: 2,
    color: '#005ab5',
    fillOpacity: 0.55,
  }
}

export default function MapaMadridInner() {
  const [geojson, setGeojson] = useState<GeoJsonData>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch('https://overpass-api.de/api/interpreter', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `data=${encodeURIComponent(OVERPASS_QUERY)}`,
    })
      .then((r) => r.json())
      .then(async (data) => {
        const osmtogeojson = (await import('osmtogeojson')).default
        const gj = osmtogeojson(data)
        setGeojson(gj)
        setLoading(false)
      })
      .catch(() => {
        setError(true)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50 rounded-2xl">
        <div className="text-center">
          <div className="w-8 h-8 border-2 border-[#0071e3] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-xs text-gray-400">Cargando mapa...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-full bg-gray-50 rounded-2xl">
        <p className="text-xs text-gray-400">No se pudo cargar el mapa. Comprueba la conexión.</p>
      </div>
    )
  }

  return (
    <MapContainer
      center={[40.2, -3.85]}
      zoom={9}
      style={{ height: '100%', width: '100%', borderRadius: '16px' }}
      scrollWheelZoom={false}
      zoomControl={true}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {geojson && (
        <GeoJSON
          data={geojson}
          style={municipioStyle}
          onEachFeature={(feature, layer) => {
            const nombre = feature.properties?.name ?? ''
            if (nombre) {
              layer.bindTooltip(nombre, {
                permanent: false,
                direction: 'top',
                className: 'leaflet-tooltip-custom',
              })
            }
          }}
        />
      )}
    </MapContainer>
  )
}
