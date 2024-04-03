/* eslint-disable no-unused-vars */
/* eslint-disable react/no-deprecated */
/* eslint-disable react/no-array-index-key */
/* eslint-disable new-cap */
/* eslint-disable react/button-has-type */

'use client';

import React from 'react';
import styled from '@emotion/styled';

import { Container } from 'react-bootstrap';
import Audiogram from '@/app/components/studies/audiogram/Audiogram';

const SeleccionEstudio = styled.button`
  background-color:transparent;
  border: none;
  color: black;
  display: grid;
  max-width: 3
  img {
    margin:auto;
  }
`;

const STUDIES_NAMES = {
  D_AEREA: 'dAerea',
  D_OSEA: 'dOsea',
  I_AEREA: 'iAerea',
  I_OSEA: 'iOsea',
};

const STUDIES_IMAGES = {
  [STUDIES_NAMES.D_AEREA]: '/img/estudios/markers/aerea_derecha.png',
  [STUDIES_NAMES.D_OSEA]: '/img/estudios/markers/osea_derecha.png',
  [STUDIES_NAMES.I_AEREA]: '/img/estudios/markers/aerea_izquierda.png',
  [STUDIES_NAMES.I_OSEA]: '/img/estudios/markers/osea_izquierda.png',
};

const PARALLEL_STUDIES_IMAGES = {
  [STUDIES_NAMES.D_AEREA]: '/img/estudios/markers/aerea_derecha.png',
  [STUDIES_NAMES.D_OSEA]: '/img/estudios/markers/osea_derecha_doble.png',
  [STUDIES_NAMES.I_AEREA]: '/img/estudios/markers/aerea_izquierda.png',
  [STUDIES_NAMES.I_OSEA]: '/img/estudios/markers/osea_izquierda_doble.png',
};

const STUDIES_FULL_NAMES = {
  [STUDIES_NAMES.D_AEREA]: 'Aérea derecha',
  [STUDIES_NAMES.D_OSEA]: 'Ósea derecha',
  [STUDIES_NAMES.I_AEREA]: 'Aérea izquierda',
  [STUDIES_NAMES.I_OSEA]: 'Ósea izquierda',
};

const options = {
  method: 'save',
};

const getTargetElement = () => document.getElementById('content-id');

function Component() {
  return (
    <div>
      <Container>
        <button onClick={() => window.print()}>Generate PDF</button>
      </Container>
      <div id="content-id" style={{ color: 'red' }}>
        <Audiogram readOnly />
      </div>
    </div>
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
