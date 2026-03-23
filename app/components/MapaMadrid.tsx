import dynamic from 'next/dynamic'

const MapaMadridInner = dynamic(() => import('./MapaMadridInner'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center h-full bg-gray-50 rounded-2xl">
      <div className="text-center">
        <div className="w-8 h-8 border-2 border-[#0071e3] border-t-transparent rounded-full animate-spin mx-auto mb-3" />
        <p className="text-xs text-gray-400">Cargando mapa...</p>
      </div>
    </div>
  ),
})

export default function MapaMadrid() {
  return (
    <div style={{ height: '380px', width: '100%' }}>
      <MapaMadridInner />
    </div>
  )
}
