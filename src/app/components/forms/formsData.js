const PEACHdata = [
  [
    '¿Su hijo(a) ha estado usando sus audífonos o el implante coclear?',
    '¿Su hijo(a) ha estado bien de salud?',
    'Los audífonos o el implante coclear, ¿han estado funcionando adecuadamente?',
  ],
  [
    '¿Con qué frecuencia su hijo(a) utilizó sus audífonos o el implante coclear?',
    '¿Con qué frecuencia su hijo(a) se quejó o se molestó por sonidos fuertes?',
    'Cuando llamaba a su hijo(a) dentro de un ambiente silencioso, ¿respondía a su nombre?',
    'Al solicitarlo, ¿su hijo(a) siguió instrucciones simples o realizó una tarea simple estando dentro de un ambiente silencioso?',
    'Cuando llamaba a su hijo(a) dentro de un ambiente ruidoso en el que él o ella no podía ver su rostro, ¿respondía a su nombre? (Por ejemplo, miraba, se volteaba o emitía una respuesta verbal.)',
    'Al solicitarlo, ¿su hijo(a) siguió instrucciones o realizó una tarea simple estando dentro de un ambiente ruidoso?',
    'Cuando estuvo en un lugar silencioso, leyendo con su hijo(a), ¿con qué frecuencia su hijo(a) prestó mucha atención a lo que usted estaba diciendo? O, si su hijo(a) estuvo escuchando un cuento o una canción en el televisor o con un CD y no había ruidos de fondo, ¿cuán frecuente su hijo(a) pudo seguir lo que se estaba diciendo?',
    '¿Con qué frecuencia su hijo(a) inició/participó en conversaciones en ambientes silenciosos?',
    '¿Con qué frecuencia su hijo(a) inició/participó en conversaciones en situaciones ruidosas?',
    '¿Con qué frecuencia su hijo(a) entendió lo que usted le dijo en el carro/autobús/tren?',
    '¿Con qué frecuencia su hijo(a) reconoció las voces de las personas, sin ver quién estaba hablando?',
    '¿Con qué frecuencia su hijo(a) utilizó un teléfono/celular con éxito?',
    '¿Con qué frecuencia su hijo(a) respondió a otros sonidos que no fueran voces?',

  ],

];

const VANDERBILTdata = {
  ninos: [
    'Quiero “desconectar” en ambientes muy ruidosos.',
    'Me resulta difícil concentrarme cuando hay mucha gente hablando.',
    'Mi cerebro se cansa después de escuchar todo el día.',
    'Me agota escuchar en la escuela.',
    'Intentar escuchar en la escuela me estresa.',
    'Gasto mucha energía intentando escuchar en clase.',
    'Quiero irme a dormir después de un largo día escuchando.',
    'Dejo de intentar escuchar cuando me canso.',
    'Me canso tanto escuchando que no quiero hacer nada más.',
    'Me agota tener que escuchar con atención.',
  ],
  padres: {
    mental: [
      'Mi hijo/a se frustra cuando le resulta difícil oír.',
      'Mi hijo/a prefiere estar solo/a después de escuchar durante mucho tiempo.',
      'Mi hijo/a deja de prestar atención después de escuchar durante mucho tiempo.',
      'Escuchar supone un gran esfuerzo para mi hijo/a.',
      'Mi hijo/a se cansa de escuchar al final del día.',
      'Mi hijo/a deja de prestar atención si se frustra al escuchar.',
      'Mi hijo/a “se rinde” en las situaciones en que escuchar es difícil.',
    ],
    fisica: [
      'Mi hijo/a necesita tiempo para relajarse después de la escuela.',
      'Mi hijo/a está tan cansado/a que se tumba para descansar.',
      'Mi hijo/a parece agotado/a al final de la jornada escolar.',
      'Mi hijo/a está más cansado/a durante la semana que los fines de semana.',
      'Mi hijo/a necesita relajarse después de un día agotador escuchando.',
    ],
  },
  profesores: [
    'El/La alumno/a “desconecta” después de largos períodos de escucha.',
    'El/La alumno/a parece menos motivado/a para trabajar después de escuchar durante mucho tiempo.',
    'El/La alumno/a deja de participar cuando le resulta difícil oír.',
    'El/La alumno/a parece estar agotado/a por escuchar todo el día en la escuela.',
    'El/La alumno/a tiene problemas de concentración cuando le cuesta oír.',
    'El/La alumno/a parece rendirse con más facilidad cuando tiene problemas de audición.',
    'El/La alumno/a parece enojado/a cuando le resulta difícil oír y comprender.',
    'El/La alumno/a necesita descansos de audición para seguir con la tarea.',
  ],
};

const SPSSQ12 = [
  {
    title: 'Seleccione una de las siguientes opciones',
    options: [
      'No uso audífono(s)',
      'Uso solo un audífono (Oído izquierdo)',
      'Uso solo un audífono (Oído derecho)',
      'Uso dos audífonos (en ambos oídos)',
    ],
  },
  {
    title: 'Si usa audífono(s), ¿por cuánto tiempo?',
  },
  [
    'Está hablando con una persona y hay un televisor prendido en la misma habitación. Sin bajar el volumen de la TV. ¿Puede oír lo que dice la persona con la que habla?',
    'Está escuchando a alguien que habla con usted mientras intenta seguir las noticias de la TV. ¿Puede entender a la persona con la que habla y lo que dicen en la TV al mismo tiempo?',
    'Está conversando con un amigo/familiar en una habitación donde hay otras personas hablando. ¿Puede oír lo que dice la persona con la que habla?',
    'Está en un grupo de cinco personas durante una reunión familiar/almuerzo en un ambiente ruidoso, y puede ver a todas las personas que hablan con usted. ¿Puede seguir la conversación?',
    'Está en un grupo y la conversación cambia de una persona a otra. ¿Puede seguir la conversación fácilmente sin perderse el principio de lo que dice cada persona con la que habla?',
    'Está al aire libre. Un perro ladra fuertemente. ¿Puede saber inmediatamente dónde está el perro sin tener que mirar?',
    '¿Puede saber cuán lejos se encuentra un auto/camión sólo por el ruido que hacen?',
    '¿Puede saber si un auto/camión se acerca o se aleja de usted a partir del ruido que hacen?',
    'Cuando oye más de un sonido a la vez, ¿tiene la impresión de que se han mezclado pareciendo un sonido único?',
    'Cuando escucha música, ¿puede distinguir los instrumentos que son parte de la música?',
    'Los sonidos cotidianos que puede oír fácilmente, ¿le parecen claros?',
    '¿Tiene que concentrarse mucho cuando escucha a alguien o algo?',
  ],
];

export { PEACHdata, VANDERBILTdata, SPSSQ12 };
