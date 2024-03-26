let radiologia = [
    {
      hora: "11:00",
      especialista: "IGNACIO SCHULZ",
      paciente: "FRANCISCA ROJAS",
      rut: "9878782-1",
      prevision: "FONASA",
    },
    {
      hora: "11:30",
      especialista: "FEDERICO SUBERCASEAUX",
      paciente: "PAMELA ESTRADA",
      rut: "15345241-3",
      prevision: "ISAPRE",
    },
    {
      hora: "15:00",
      especialista: "FERNANDO WURTHZ",
      paciente: "ARMANDO LUNA",
      rut: "16445345-9",
      prevision: "ISAPRE",
    },
    {
      hora: "15:30",
      especialista: "ANA MARIA GODOY",
      paciente: "MANUEL GODOY",
      rut: "17666419-0",
      prevision: "FONASA",
    },
    {
      hora: "16:00",
      especialista: "PATRICIA SUAZO",
      paciente: "RAMON ULLOA",
      rut: "14989389-K",
      prevision: "FONASA",
    },
  ];
  
  let traumatologia = [
    {
      hora: "8:00",
      especialista: "MARIA PAZ ALTUZARRA",
      paciente: "PAULA SANCHEZ",
      rut: "15554774-5",
      prevision: "FONASA",
    },
    {
      hora: "10:00",
      especialista: "RAUL ARAYA",
      paciente: "ANGÉLICA NAVAS",
      rut: "15444147-9",
      prevision: "ISAPRE",
    },
    {
      hora: "10:30",
      especialista: "MARIA ARRIAGADA",
      paciente: "ANA KLAPP",
      rut: "17879423-9",
      prevision: "ISAPRE",
    },
    {
      hora: "11:00",
      especialista: "ALEJANDRO BADILLA",
      paciente: "FELIPE MARDONES",
      rut: "1547423-6",
      prevision: "ISAPRE",
    },
    {
      hora: "11:30",
      especialista: "CECILIA BUDNIK",
      paciente: "DIEGO MARRE",
      rut: "16554741-K",
      prevision: "FONASA",
    },
    {
      hora: "12:00",
      especialista: "ARTURO CAVAGNARO",
      paciente: "CECILIA MENDEZ",
      rut: "9747535-8",
      prevision: "ISAPRE",
    },
    {
      hora: "12:30",
      especialista: "ANDRES KANACRI",
      paciente: "MARCIAL SUAZO",
      rut: "11254785-5",
      prevision: "ISAPRE",
    },
  ];
  
  let dental = [
    {
      hora: "8:30",
      especialista: "ANDREA ZUÑIGA",
      paciente: "MARCELA RETAMAL",
      rut: "11123425-6",
      prevision: "ISAPRE",
    },
    {
      hora: "11:00",
      especialista: "MARIA PIA ZAÑARTU",
      paciente: "ANGEL MUÑOZ",
      rut: "9878789-2",
      prevision: "ISAPRE",
    },
    {
      hora: "11:30",
      especialista: "SCARLETT WITTING",
      paciente: "MARIO KAST",
      rut: "7998789-5",
      prevision: "FONASA",
    },
    {
      hora: "13:00",
      especialista: "FRANCISCO VON TEUBER",
      paciente: "KARIN FERNANDEZ",
      rut: "18887662-K",
      prevision: "FONASA",
    },
    {
      hora: "13:30",
      especialista: "EDUARDO VIÑUELA",
      paciente: "HUGO SANCHEZ",
      rut: "17665461-4",
      prevision: "FONASA",
    },
    {
      hora: "14:00",
      especialista: "RAQUEL VILLASECA",
      paciente: "ANA SEPULVEDA",
      rut: "14441281-0",
      prevision: "ISAPRE",
    },
  ];
  
  // 1. Agregar las siguientes horas al arreglo de Traumatología
  traumatologia.push(
    {
      hora: "09:00",
      especialista: "RENÉ POBLETE",
      paciente: "ANA GELLONA",
      rut: "13123329-7",
      prevision: "ISAPRE",
    },
    {
      hora: "09:30",
      especialista: "MARIA SOLAR",
      paciente: "RAMIRO ANDRADE",
      rut: "12221451-K",
      prevision: "FONASA",
    },
    {
      hora: "10:00",
      especialista: "RAUL LOYOLA",
      paciente: "CARMEN ISLA",
      rut: "10112348-3",
      prevision: "ISAPRE",
    },
    {
      hora: "10:30",
      especialista: "ANTONIO LARENAS",
      paciente: "PABLO LOAYZA",
      rut: "13453234-1",
      prevision: "ISAPRE",
    },
    {
      hora: "12:00",
      especialista: "MATIAS ARAVENA",
      paciente: "SUSANA POBLETE",
      rut: "14345656-6",
      prevision: "FONASA",
    }
  );
  
  let traumatologiaContainer = document.getElementById("traumatologia");
  
  traumatologiaContainer.innerHTML = "";
  
  traumatologia.forEach((consulta) => {
    let paragraph = document.createElement("p");
    paragraph.textContent = `${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}`;
    traumatologiaContainer.appendChild(paragraph);
  });
  
  //appenChild() agrega un elemento al final de un elemento padre
  
  // Eliminar el primer y último elemento del arreglo de Radiología
  radiologia.shift();
  radiologia.pop();
  
  let radiologiaContainer = document.getElementById("radiologia");
  
  radiologia.forEach((consulta) => {
    let paragraph = document.createElement("p");
    paragraph.textContent = `${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}`;
    radiologiaContainer.appendChild(paragraph);
  });
  
  //Imprimir en la página HTML la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo
  
  let dentalContainer = document.getElementById("dental");
  
  dental.forEach((consulta) => {
    let paragraph = document.createElement("p");
    paragraph.textContent = `${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}`;
    dentalContainer.appendChild(paragraph);
  });
  
  //Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. Para esto, deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo
  
  let allPatients = [];
  
  allPatients = allPatients.concat(
    radiologia.map((consulta) => consulta.paciente),
    traumatologia.map((consulta) => consulta.paciente),
    dental.map((consulta) => consulta.paciente)
  );
  
  let allPatientsContainer = document.getElementById("all-patients");
  
  allPatients.forEach((paciente) => {
    let paragraph = document.createElement("p");
    paragraph.textContent = paciente;
    allPatientsContainer.appendChild(paragraph);
  });
  
  // Filtrar pacientes de ISAPRE en la lista de consultas médicas de Dental
  let isapreDental = dental.filter((consulta) => consulta.prevision === "ISAPRE");
  
  let isapreDentalContainer = document.getElementById("isapre-dental");
  
  isapreDental.forEach((paciente) => {
    let paragraph = document.createElement("p");
    paragraph.textContent = `${paciente.paciente} - ${paciente.prevision}`;
    isapreDentalContainer.appendChild(paragraph);
  });
  
  // Filtrar pacientes de FONASA en la lista de consultas médicas de Traumatología
  let fonasaTraumatologia = traumatologia.filter(
    (consulta) => consulta.prevision === "FONASA"
  );
  
  let fonasaTraumatologiaContainer = document.getElementById(
    "fonasa-traumatologia"
  );
  
  fonasaTraumatologia.forEach((paciente) => {
    let paragraph = document.createElement("p");
    paragraph.textContent = `${paciente.paciente} - ${paciente.prevision}`;
    fonasaTraumatologiaContainer.appendChild(paragraph);
  });
  
  //cantidad de atenciones
  
  document.getElementById(
    "atencionRadiologia"
  ).textContent = `${radiologia.length} atenciones`;
  document.getElementById(
    "atencionTraumatologia"
  ).textContent = `${traumatologia.length} atenciones`;
  document.getElementById(
    "atencionDental"
  ).textContent = `${dental.length} atenciones`;
  
  //primera atención
  
  document.getElementById("primeraRadiologia").innerHTML = radiologia[0].paciente;
  document.getElementById("primeraTraumatologia").innerHTML =
    traumatologia[0].paciente;
  document.getElementById("primeraDental").innerHTML = dental[0].paciente;
  
  //ultima atención
  
  document.getElementById("ultimaRadiologia").innerHTML =
    radiologia[radiologia.length - 1].paciente;
  document.getElementById("ultimaTraumatologia").innerHTML =
    traumatologia[traumatologia.length - 1].paciente;
  document.getElementById("ultimaDental").innerHTML =
    dental[dental.length - 1].paciente;