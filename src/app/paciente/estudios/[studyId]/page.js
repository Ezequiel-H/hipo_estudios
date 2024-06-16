// TODO: una pagina que agarra el study id, lo obtiene y
//  dependiendo del type, muestra el componente correcto

'use client';

import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import Audiogram from '@/app/components/studies/audiogram/Audiogram';
// import LogoAudiogram from '@/app/components/studies/audiogram/LogoAudiogram';
// import Impedanciometria from '@/app/components/studies/impedanciometria/Impedanciometria';
// import Timpanometria from '@/app/components/studies/timpanometria/Timpanometria';
// import Otoemision from '@/app/components/studies/otoemision/Otoemision';
// import PotencialEvocado from '@/app/components/studies/potencialEvocado/PotencialEvocado';

const STUDIES = {
  // TODO DB: Traer info del study y actuar en base a cada estudio,
  // aunque no entiendo la nomenclatura.
  AUDIOMETRIA: (params) => <Audiogram params={params} />,
  // LOGOAUDIOMETRIA: (params) => <LogoAudiogram params={params}> />,
  // IMPEDANCIOMETRIA: (params) => <Impedanciometria params={params}> />,
  // TIMPANOMETRIA: (params) => <Timpanometria params={params}> />,
  // OTOEMISION: (params) => <Otoemision params={params}> />,
  // POTENCIAL: (params) => <PotencialEvocado params={params}> />,
};

useEffect(() => {
  // TODO DB: getInfoFromStudy();
  // assignType()
  // eslint-disable-next-line
}, [])

console.log(STUDIES);

function PeachNuevo() {
  return (
    <Layout>
      <Container>
        {/* {STUDIES[type](results)} */}
      </Container>
    </Layout>
  );
}

export default PeachNuevo;
