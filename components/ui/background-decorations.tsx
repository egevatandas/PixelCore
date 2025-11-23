"use client"

export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Sağ Üst Köşe - Kırmızı Blob */}
      <div
        className="absolute -top-40 -right-40 w-96 h-96 rounded-full"
        style={{
          backgroundColor: 'rgba(211, 47, 47, 0.05)',
          filter: 'blur(80px)',
        }}
      />


      {/* Orta Sol - Açık Kırmızı Blob */}
      <div
        className="absolute top-1/2 -left-20 w-80 h-80 rounded-full"
        style={{
          backgroundColor: 'rgba(211, 47, 47, 0.03)',
          filter: 'blur(100px)',
        }}
      />
    </div>
  )
}

