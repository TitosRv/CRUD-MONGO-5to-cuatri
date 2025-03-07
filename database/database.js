db.estudiantes.insertOne({
    // Datos de registro
    matriculaEstudiante: "251T0001",                   // Generada automáticamente: [2 dígitos del año][semestre][inicial del apellido paterno][consecutivo de 4 dígitos]
    nombreCompleto: "Juan Pérez Gómez",
    fechaAlta: new Date(),                   // Fecha del sistema al registrar el alumno
    fechaNacimiento: new Date("2000-05-15"),
    sexo: "M",                               // O "F"
    telefonos: ["555-1234", "555-5678"],      // Puede tener uno o varios
    correos: ["juan.perez@example.com"],      // Puede tener uno o varios
    rfc: "SIGR-770910",                       // Con el formato especificado
    
    // Domicilio del estudiante
    domicilio: {
      calle: "Av. Universidad",
      numeroInterior: "101",
      numeroExterior: "202",
      colonia: "Centro",
      codigoPostal: "12345",
      ciudad: "Ciudad Universitaria"
    },
    
    // Datos académicos
    promedioBachillerato: 9.2,               // Numérico con un decimal
    especialidadBachillerato: "Ciencias",      // Seleccionable de un catálogo
    foto: "ruta/a/la/foto.jpg",              // URL o referencia al archivo de imagen
    
    // Datos del tutor (se admite más de uno)
    tutores: [{
      nombreCompleto: "María López",
      domicilio: {
        calle: "Calle Tutor",
        numeroInterior: "3",
        numeroExterior: "45",
        colonia: "Residencial",
        codigoPostal: "54321",
        ciudad: "Ciudad Tutor"
      },
      telefonos: ["555-9876"],
      correos: ["maria.lopez@example.com"]
    }],
    
    // Carrera y especialidad a cursar
    carrera: "Ingeniería en Sistemas",      // Seleccionable de un catálogo (El catalogo carrera tiene especialidades y es otra coleccion)
    especialidadCursar: "Desarrollo de Software",  // Dependiente de la carrera (seleccionable de la coleccion "carreras")
    
    // Entrega de certificado de bachillerato: 1 si, 0 no
    certificadoBachillerato: 1,
  });

  db.registroObservacionesDocente.insertOne({
    observacionesDocentes: [{
      docente: "Lic. Roberto Martínez",
      asignatura: "Matemáticas",
      semestre: "1",                         // "1" o "2" misma funcion de autorelleno 
      año: 2023, //*funcion para rellenar el campo automaticamente*
      descripcion: "Buen rendimiento en la asignatura.",
      matriculaEstudiante: "251T0001"
    }],
  })

  db.registroActividadExtracurricular.insertOne({
    actividadExtracurricular: [{
        nombreProfesor: "Mario",
        actividad: "futbol",         // Seleccionable de un catálogo (coleccion aparte)
        fechaInicio: new Date("2023-09-01"),
        fechaTermino: new Date("2023-12-15"),
        resultado: "Excelente",                   // Resultado cualitativo
        matriculaEstudiante: "251T0001"
      }]
  })
  
  //Coleccion "Carreras" para el catalogo seleccionable
  db.carreras.insertMany({
    nombreCarrera: "Ingeniería en Sistemas",
    especialidades: [
      {
        nombreEspecialidad: "Desarrollo de Software",
        materias: [{
            nombreMateria: "BD"
        }]
      },
      {
        nombreEspecialidad: "Redes y Telecomunicaciones",
      },
      {
        nombreEspecialidad: "Inteligencia Artificial",
      }
    ]
  },
  {
    nombreCarrera: "Ingenieria en Diseño",
    especialidades: [
        {
            nombreEspecialidad: "Dibujo 1"
        },
        {
            nombreEspecialidad: "Dibujo 2"
        },
        {
            nombreEspecialidad: "Dibujo 3"
        }
    ]
  }
);


  //Coleccion "ActividadesExtracurriculares" para el catalogo del profesor de actividades
  db.actExtracurriculares.insertOne({
    nombreProfesor: "Mario",
    nombre: "Futbol",
    fechaInicio: new Date("2023-09-01"),
    fechaTermino: new Date("2023-12-15")
  })


  db.datosDocente.insertOne({
    nombre: "Lic. Roberto Martinez",
    materias:[{
        nombreMateria: "Español"
    }]
  })