import React, {useState} from 'react';
import { Button, Form } from 'react-bootstrap';
import { addStudyForUser } from '@/app/db/studies';
import localStorageNames from '@/app/constants/localStorage';
import Finished from './Finished';

function FinishStudyBtn({ observations, results, patientId, type }) {
    const [proceso, setProceso] = useState(1);
    const [nextStudy, setNextStudy] = useState('')

    function createNextStudy() {
        window.location.href = `/profesional/pacientes/${patientId}/nuevo/${nextStudy}`;
    }

    return (
        <div className="mt-4">
        {
            proceso === 1 ? (
            <Button
                onClick={async () => {
                    const datosJSON = JSON.stringify(results);
                    localStorage.setItem(localStorageNames.AUDIOGRAM, datosJSON);
                    const professionalId = localStorage.getItem('userId');
                    await addStudyForUser(patientId, {
                        type: type,
                        result: results,
                        date: new Date(),
                        observation: observations || "no",
                        professional: professionalId,
                    });
                    setProceso(2);
                }}
                className="btn btn-secondary"
            >
                Guardar estudio
            </Button>
            ) : (proceso === 2) ? (
            <>
                <p>¿Terminaste con este paciente?</p>
                <Button
                    onClick={() => {
                        // const datosJSON = JSON.stringify(STUDIES);
                        // localStorage.setItem(localStorageNames.AUDIOGRAM, datosJSON);
                        setProceso(3);
                    }}
                    className="btn btn-secondary"
                    style={{ marginRight: '10px' }}
                >
                Si
                </Button>
                <Button
                    onClick={() => {
                        // const datosJSON = JSON.stringify(STUDIES);
                        // localStorage.setItem(localStorageNames.AUDIOGRAM, datosJSON);
                        setProceso(4);
                    }}
                    className="btn btn-primary"
                    style={{ marginLeft: '10px!important' }}
                >
                Realizar otro estudio
                </Button>
            </>
            ) : proceso === 3 ? (
            <Finished modal />
            ) : proceso === 4 ? (
            <>
                <p className="color-black mt-4">Realizar otro estudio</p>
                <div style={{ display: 'flex' }}>
                <Form.Select
                    aria-label="Seleccionar estudio a realizar"
                    style={{ marginRight: '10px' }}
                    value={nextStudy}
                    onChange={(e) => setNextStudy(e.target.value)}
                >
                    <option>Seleccionar próximo estudio</option>
                    <option value="logoaudiometria">Logoaudiometría</option>
                    <option value="impedanciometria">Impedanciometría</option>
                    <option value="timpanometria">Timpanometría</option>
                    <option value="potenciales-evocados">Potenciales evocados</option>
                    <option value="otoemision">Otoemisión</option>
                </Form.Select>
                <Button
                    className="btn btn-primary"
                    onClick={() => createNextStudy()}
                >
                    Realizar
                </Button>
                </div>
            </>
            ) : null
        }
        </div>
    )
}

export default FinishStudyBtn;