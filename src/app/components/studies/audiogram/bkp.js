<Col xs={12} md={12} lg={4} xl={4} key={4} className="col-estudio-info">
  <Row style={{ maxWidth: '375px!important' }}>
    <Col xs={6} lg={6} xl={6}>
      <p className={`color-primary text-center ${(evaluando === 'dAerea' || evaluando === 'iAerea') ? 'opacity-100' : 'opacity-25'}`}>
        Vía aérea
      </p>
    </Col>
    <Col xs={6} lg={6} xl={6}>
      <p className={`color-primary text-center ${(evaluando === 'dOsea' || evaluando === 'iOsea') ? 'opacity-100' : 'opacity-25'}`}>
        Vía ósea
      </p>
    </Col>
    {!readOnly && Object.values(STUDIES_NAMES).map((name, index) => (
      <Col>
        <SeleccionEstudio
          onClick={() => {
            setEvaluando(name);
            agregarCurva(name);
          }}
          key={`${index}SeleccionEstudios`}
          className={evaluando === name ? 'opacity-100' : 'opacity-25'}
        >
          <Image
            src={STUDIES_IMAGES[name]}
            alt={STUDIES_FULL_NAMES[name]}
            width={55}
            height={55}
                        // className={evaluando === name ? 'opacity-100' : 'opacity-25'}
            style={{ margin: '10px auto' }}
          />
          {STUDIES_SIDE[name]}
        </SeleccionEstudio>
      </Col>
    ))}

  </Row>
  <div className="mt-4">
    <p className="mb-0" style={{ fontSize: '22px' }}>Paciente</p>
    <p className="mb-0">
      Apellido:
      <strong> Gomez</strong>
    </p>
    <p className="mb-0">
      Nombre:
      <strong> Jorge</strong>
    </p>
    <p className="mb-0">
      Fecha de nacimiento:
      <strong> 25/02/1976</strong>
    </p>
  </div>
  <div className="mt-4">
    <p className="m-0" style={{ fontSize: '22px' }}>Observaciones</p>
    <p>
      ____________________
      <br />
      ____________________
    </p>
  </div>
  <div className="mt-4">
    <Button className="btn btn-secondary">Guardar estudio</Button>
  </div>
</Col>;
