import { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import { useSearchParams, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import 'react-pdf/dist/Page/AnnotationLayer.css'
import 'react-pdf/dist/Page/TextLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`

export default function PDFViewer() {
  const [params] = useSearchParams()
  const url = params.get('file')
  const [numPages, setNumPages] = useState(null)
  const navigate = useNavigate()

  return (
    <div className="bg-[#f9fafb] min-h-screen">
      <Navbar />
      <div className="pt-[50px] flex flex-col items-center py-8 gap-4">
        <div className="w-[900px]">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-[#0f6e56] text-[13px] hover:opacity-75 transition mb-4"
          >
            ← Kembali
          </button>
        </div>
        <Document
          file={url}
          onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        >
          {Array.from({ length: numPages || 0 }, (_, i) => (
            <div key={i} className="mb-4 shadow-md">
              <Page pageNumber={i + 1} width={900} />
            </div>
          ))}
        </Document>
      </div>
    </div>
  )
}