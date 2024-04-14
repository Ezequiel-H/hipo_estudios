/* eslint-disable react/no-deprecated */
/* eslint-disable react/no-array-index-key */
/* eslint-disable new-cap */
/* eslint-disable react/button-has-type */

'use client';

import React from 'react';

import LogoAudiogram from '../components/studies/audiogram/LogoAudiogram';

function Component() {
  return (
    <LogoAudiogram />
  );
}

export default Component;

// function MyDocument() {
//   return (
//     <Document>
//       <Page>
//         <Text>¡Hola, aaaaa!</Text>
//       </Page>
//     </Document>
//   );
// }

// function PDFExportComponent() {
//   const handleDownloadPDF = () => {
//     const pdfBlob = new Blob([<MyDocument />], { type: 'application/pdf' });
//     const url = URL.createObjectURL(pdfBlob);
//     const link = document.createElement('a');
//     link.href = url;
//     link.download = 'documento.pdf';
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div>
//       <button onClick={handleDownloadPDF}>Descargar PDF</button>
//       <PDFViewer>
//         <MyDocument />
//       </PDFViewer>
//     </div>
//   );
// }

// export default PDFExportComponent;

// const handleDownloadPDF = () => {
//   const input = document.getElementById('pdf-content');
//   // Specify the id of the element you want to convert to PDF
//   html2canvas(input)
//     .then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'JPEG', 0, 0);
//       // pdf.output('dataurlnewwindow');
//       pdf.save('download.pdf');
//     });
// };

// return (
//   <Layout>
//     <Identify />
//     <div id="pdf-content">
//       <Audiogram />
//       <button onClick={handleDownloadPDF}>Download PDF</button>
//     </div>
//   </Layout>
// );
