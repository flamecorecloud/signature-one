export const PathRoute = [
  {
    label: "Document Signature",
    items: [
      { name: "PDF to Sign", path: "converter/pdf-to-sign", color: "blue", icon: icon("PS", "purple") },
    ],
  },
  // {
  //   label: "Document Converter",
  //   items: [
  //     { name: "Word to PDF", path: "converter/word-to-pdf", color: "blue", icon: icon("WP", "blue") },
  //     { name: "Text to PDF", path: "converter/txt-to-pdf", color: "yellow", icon: icon("TP", "yellow") },
  //     { name: "HTML to PDF", path: "converter/html-to-pdf", color: "orange", icon: icon("HP", "orange") },
  //     { name: "RTF to PDF", path: "converter/rtf-to-pdf", color: "rose", icon: icon("RP", "rose") },
  //     { name: "ODT to PDF", path: "converter/odt-to-pdf", color: "purple", icon: icon("OP", "purple") },
  //     // { name: "HTML to Word", path: "converter/html-to-docx", color: "blue", icon: icon("HW", "blue") },
  //     { name: "TXT to ODT", path: "converter/txt-to-odt", color: "purple", icon: icon("TO", "purple") },
  //     { name: "Word to ODT", path: "converter/word-to-odt", color: "purple", icon: icon("WO", "purple") },
  //     // { name: "ODT to Word", path: "converter/odt-to-word", color: "blue", icon: icon("OW", "blue") },
  //   ],
  // },
  // {
  //   label: "Spreadsheet Converter",
  //   items: [
  //     { name: "Excel to PDF", path: "converter/excel-to-pdf", color: "green", icon: icon("EP", "green") },
  //     { name: "ODS to PDF", path: "converter/ods-to-pdf", color: "purple", icon: icon("OP", "purple") },
  //     // { name: "CSV to Excel", path: "converter/csv-to-excel", color: "teal", icon: icon("CE", "teal") },
  //     { name: "Excel to ODS", path: "converter/excel-to-ods", color: "green", icon: icon("EO", "green") },
  //     // { name: "ODS to Excel", path: "converter/ods-to-excel", color: "green", icon: icon("OE", "green") },
  //     { name: "CSV to ODS", path: "converter/csv-to-ods", color: "teal", icon: icon("CO", "teal") },
  //   ],
  // },
  // {
  //   label: "Presentation Converter",
  //   items: [
  //     { name: "PowerPoint to PDF", path: "converter/ppt-to-pdf", color: "red", icon: icon("PP", "red") },
  //     { name: "ODP to PDF", path: "converter/odp-to-pdf", color: "purple", icon: icon("OP", "purple") },
  //     { name: "PowerPoint to ODP", path: "converter/ppt-to-odp", color: "purple", icon: icon("PO", "purple") },
  //     // { name: "ODP to PowerPoint", path: "converter/odp-to-ppt", color: "red", icon: icon("OP", "red") },
  //   ],
  // },
  // {
  //   label: "PDF Converter",
  //   items: [
  //     { name: "PDF to Word", path: "converter/pdf-to-word", color: "blue", icon: icon("PW", "blue") },
  //     { name: "PDF to Excel", path: "converter/pdf-to-excel", color: "green", icon: icon("PE", "green") },
  //     { name: "PDF to PowerPoint", path: "converter/pdf-to-ppt", color: "red", icon: icon("PP", "red") },
  //     { name: "PDF to Image", path: "converter/pdf-to-image", color: "pink", icon: icon("PI", "pink") },
  //   ],
  // },
];

function icon(letter, color) {
  const colorMap = {
    blue: "border-blue-500 text-blue-600 bg-blue-50",
    green: "border-green-500 text-green-600 bg-green-50",
    red: "border-red-500 text-red-600 bg-red-50",
    yellow: "border-yellow-500 text-yellow-600 bg-yellow-50",
    orange: "border-orange-500 text-orange-600 bg-orange-50",
    purple: "border-purple-500 text-purple-600 bg-purple-50",
    pink: "border-pink-500 text-pink-600 bg-pink-50",
    teal: "border-teal-500 text-teal-600 bg-teal-50",
    gray: "border-gray-400 text-gray-600 bg-gray-100",
  };

  const colorClass = colorMap[color] || colorMap.gray;

  return (
    <div className={`relative h-8 w-8 rounded-md flex items-center justify-center border-3 ${colorClass} font-medium`}>
      <div className="relative text-xs">{letter}</div>
    </div>
  );
}
