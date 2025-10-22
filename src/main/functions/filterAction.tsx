export const converterMap = {
  // 🧾 Document Converter
  "pdf-to-sign": {
    filters: [{ name: 'Word Documents', extensions: ['pdf'] }],
    convertTo: 'pdf:writer_pdf_Export'
  },
  "word-to-pdf": {
    filters: [{ name: 'Word Documents', extensions: ['doc', 'docx'] }],
    convertTo: 'pdf:writer_pdf_Export'
  },
  "txt-to-pdf": {
    filters: [{ name: 'Text Files', extensions: ['txt'] }],
    convertTo: 'pdf:writer_pdf_Export'
  },
  "html-to-pdf": {
    filters: [{ name: 'HTML Files', extensions: ['html', 'htm'] }],
    convertTo: 'pdf:writer_pdf_Export'
  },
  "rtf-to-pdf": {
    filters: [{ name: 'RTF Files', extensions: ['rtf'] }],
    convertTo: 'pdf:writer_pdf_Export'
  },
  "odt-to-pdf": {
    filters: [{ name: 'ODT Files', extensions: ['odt'] }],
    convertTo: 'pdf:writer_pdf_Export'
  },
  "html-to-docx": {
    filters: [{ name: 'HTML Files', extensions: ['html', 'htm'] }],
    convertTo: 'docx:writer8'
  },
  "txt-to-odt": {
    filters: [{ name: 'Text Files', extensions: ['txt'] }],
    convertTo: 'odt:writer8'
  },
  "word-to-odt": {
    filters: [{ name: 'Word Documents', extensions: ['doc', 'docx'] }],
    convertTo: 'odt:writer8'
  },
  "odt-to-word": {
    filters: [{ name: 'ODT Files', extensions: ['odt'] }],
    convertTo: 'docx:writer8'
  },

  // 📊 Spreadsheet Converter
  "excel-to-pdf": {
    filters: [{ name: 'Excel Sheets', extensions: ['xls', 'xlsx'] }],
    convertTo: 'pdf:calc_pdf_Export'
  },
  "ods-to-pdf": {
    filters: [{ name: 'ODS Files', extensions: ['ods'] }],
    convertTo: 'pdf:calc_pdf_Export'
  },
  "csv-to-excel": {
    filters: [{ name: 'CSV Files', extensions: ['csv'] }],
    convertTo: 'xlsx:calc8'
  },
  "excel-to-ods": {
    filters: [{ name: 'Excel Sheets', extensions: ['xls', 'xlsx'] }],
    convertTo: 'ods:calc8'
  },
  "ods-to-excel": {
    filters: [{ name: 'ODS Files', extensions: ['ods'] }],
    convertTo: 'xlsx:calc8'
  },
  "csv-to-ods": {
    filters: [{ name: 'CSV Files', extensions: ['csv'] }],
    convertTo: 'ods:calc8'
  },

  // 📽 Presentation Converter
  "ppt-to-pdf": {
    filters: [{ name: 'PowerPoint Presentations', extensions: ['ppt', 'pptx'] }],
    convertTo: 'pdf:impress_pdf_Export'
  },
  "odp-to-pdf": {
    filters: [{ name: 'ODP Files', extensions: ['odp'] }],
    convertTo: 'pdf:impress_pdf_Export'
  },
  "ppt-to-odp": {
    filters: [{ name: 'PowerPoint Presentations', extensions: ['ppt', 'pptx'] }],
    convertTo: 'odp:impress8'
  },
  "odp-to-ppt": {
    filters: [{ name: 'ODP Files', extensions: ['odp'] }],
    convertTo: 'ppt:impress8'
  },

  // 📄 PDF Converter
  "pdf-to-word": {
    filters: [{ name: 'PDF Files', extensions: ['pdf'] }],
    convertTo: 'docx:writer8'
  },
  "pdf-to-excel": {
    filters: [{ name: 'PDF Files', extensions: ['pdf'] }],
    convertTo: 'xlsx:calc8'
  },
  "pdf-to-ppt": {
    filters: [{ name: 'PDF Files', extensions: ['pdf'] }],
    convertTo: 'ppt:impress8'
  },
  "pdf-to-image": {
    filters: [{ name: 'PDF Files', extensions: ['pdf'] }],
    convertTo: 'png'
  }
};