// TODO: una pagina que agarra el study id, lo obtiene y
//  dependiendo del type, muestra el componente correcto

'use client';

import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import Layout from '@/app/components/general/Layout';
import { getStudyById } from '@/app/db/studies';
import { STUDY_TYPES } from '@/app/constants/study';
import AudiogramCompleto from '@/app/components/studies/audiogram/AudiogramCompleto';
// import LogoAudiogram from '@/app/components/studies/audiogram/LogoAudiogram';
// import Impedanciometria from '@/app/components/studies/impedanciometria/Impedanciometria';
// import Timpanometria from '@/app/components/studies/timpanometria/Timpanometria';
// import Otoemision from '@/app/components/studies/otoemision/Otoemision';
// import PotencialEvocado from '@/app/components/studies/potencialEvocado/PotencialEvocado';

const STUDIES_DIAGRAMS = {
  [STUDY_TYPES.AUDIOGRAM]: (result) => <AudiogramCompleto result={result} modo="derecho" />,
  [STUDY_TYPES.LOGOAUDIOGRAM]: (result) => <AudiogramCompleto result={result} modo="derecho" />,
};

// LOGOAUDIOMETRIA: (params) => <LogoAudiogram params={params}> />,
// IMPEDANCIOMETRIA: (params) => <Impedanciometria params={params}> />,
// TIMPANOMETRIA: (params) => <Timpanometria params={params}> />,
// OTOEMISION: (params) => <Otoemision params={params}> />,
// POTENCIAL: (params) => <PotencialEvocado params={params}> />,

function ViewStudy({ params }) {
  const { studyId } = params;
  const [study, setStudy] = useState('');

  useEffect(() => {
    const fetchStudy = async () => {
      const response = await getStudyById(studyId);
      setStudy(response);
    };

    fetchStudy();
  }, [studyId]);

  return (
    <Layout>
      <Container>
        {study && STUDIES_DIAGRAMS[STUDY_TYPES.AUDIOGRAM](study.result)}
      </Container>
    </Layout>
  );
}

export default ViewStudy;
