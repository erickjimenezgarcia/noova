import { useState, useEffect, useRef, forwardRef } from 'react'
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs'
import HTMLFlipBook from 'react-pageflip'
import { ChevronLeft, ChevronRight } from 'lucide-react'

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

const FlipPage = forwardRef(({ src, pageNumber, isFirst }, ref) => (
  <div
    ref={ref}
    className="bg-white overflow-hidden"
    data-density={isFirst ? "hard" : "soft"}
  >
    {src ? (
      <img
        src={src}
        alt={`Página ${pageNumber}`}
        className="w-full h-full object-cover"
        draggable={false}
      />
    ) : (
      <div className="w-full h-full flex items-center justify-center">
        <div className="animate-pulse text-sm">Cargando...</div>
      </div>
    )}
  </div>
));
FlipPage.displayName = "FlipPage";

export default function PdfFlipbook({ pdfUrl }) {
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(true)
  const [dimensions, setDimensions] = useState({ width: 320, height: 450 })
  const flipBookRef = useRef()
  const containerRef = useRef()

  // Calcula el tamaño según el contenedor
  useEffect(() => {
    const updateDimensions = () => {
      const screenW = window.innerWidth
      // En móvil: ocupa casi todo el ancho menos flechas y padding
      // En desktop: tamaño fijo cómodo
      const isMobile = screenW < 768
      const availableW = isMobile ? screenW - 80 : 380  // 80px para flechas + margen
      const ratio = 540 / 380  // ratio original alto/ancho
      setDimensions({
        width: Math.floor(availableW),
        height: Math.floor(availableW * ratio),
      })
    }

    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  useEffect(() => {
    const loadPDF = async () => {
      try {
        setLoading(true)
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise
        const pageImages = []
        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i)
          const canvas = document.createElement('canvas')
          const context = canvas.getContext('2d')
          if (!context) continue
          const viewport = page.getViewport({ scale: 2 })
          canvas.width = viewport.width
          canvas.height = viewport.height
          await page.render({ canvasContext: context, viewport }).promise
          pageImages.push(canvas.toDataURL('image/png'))
        }
        setPages(pageImages)
      } catch (error) {
        console.error('Error cargando PDF:', error)
      } finally {
        setLoading(false)
      }
    }
    loadPDF()
  }, [pdfUrl])

  useEffect(() => {
    const updateDimensions = () => {
      const screenW = window.innerWidth
      const isMobile = screenW < 768
      // En móvil portrait: una sola página, ocupa todo el ancho menos padding
      // En desktop: dos páginas lado a lado
      const availableW = isMobile ? screenW - 48 : 380
      const ratio = 540 / 380
      setDimensions({
        width: Math.floor(availableW),
        height: Math.floor(availableW * ratio),
        isMobile,
      })
    }
    updateDimensions()
    window.addEventListener('resize', updateDimensions)
    return () => window.removeEventListener('resize', updateDimensions)
  }, [])

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center w-full h-64 gap-4">
        <div className="w-10 h-10 border-4 border-t-transparent rounded-full animate-spin" />
        <p className="font-medium">Cargando páginas...</p>
      </div>
    )
  }

  return (
    <div ref={containerRef} className="flex flex-col md:flex-row items-center justify-center gap-2 w-full py-6 px-2">

      {/* Flecha arriba en móvil / izquierda en desktop */}
      <button
        onClick={() => flipBookRef.current?.pageFlip().flipPrev()}
        className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition order-1 md:order-none"
      >
        <ChevronLeft className="hidden md:block" size={20} />
        <ChevronLeft className="block md:hidden rotate-90" size={20} />
      </button>

      {/* Libro - siempre en el centro */}
      <div className="flex-shrink-0 order-2 md:order-none">
        <HTMLFlipBook
          ref={flipBookRef}
          width={dimensions.width}
          height={dimensions.height}
          showCover={true}
          maxShadowOpacity={0.4}
          flippingTime={700}
          usePortrait={dimensions.isMobile}
          
          mobileScrollSupport={false}
          className="shadow-2xl"
        >
          {pages.map((src, i) => (
            <FlipPage key={i} src={src} pageNumber={i + 1} isFirst={i === 0} />
          ))}
        </HTMLFlipBook>
      </div>

      {/* Flecha abajo en móvil / derecha en desktop */}
      <button
        onClick={() => flipBookRef.current?.pageFlip().flipNext()}
        className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center transition order-3 md:order-none"
      >
        <ChevronRight className="hidden md:block" size={20} />
        <ChevronRight className="block md:hidden rotate-90" size={20} />
      </button>

    </div>
  )
}