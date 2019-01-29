<!-- Creacion del JSON-->
var jsonText = '{"estudiantes" : [' +
'{"codigo" : "001"     ,"nombre" : "Julia"     ,"nota" : 9},' +
'{"codigo" : "002"     ,"nombre" : "Matias"     ,"nota" : 10},' +
'{"codigo" : "003"     ,"nombre" : "Isabella"     ,"nota" : 7},' +
'{"codigo" : "004"     ,"nombre" : "Liz"     ,"nota" : 9},' +
'{"codigo" : "005"     ,"nombre" : "Claudio"     ,"nota" : 8},' +
'{"codigo" : "006"     ,"nombre" : "Maite"     ,"nota" : 3},' +
'{"codigo" : "007"     ,"nombre" : "Cesar"     ,"nota" : 5},' +
'{"codigo" : "008"     ,"nombre" : "Analia"     ,"nota" : 8},' +
'{"codigo" : "009"     ,"nombre" : "Leonel"     ,"nota" : 4},' +
'{"codigo" : "010"     ,"nombre" : "Dante"     ,"nota" : 10}' + ']}';

<!-- Mostrar estudiantes-->
var jsObj = JSON.parse(jsonText);
function leerJSON (json) {
  var out = "--------- Estudiantes ---------<br>";
  var i;
  for (i = 0; i < json.estudiantes.length; i++) {
    out += "Codigo: " + json.estudiantes[i].codigo + " - " +
    "Nombre: " + json.estudiantes[i].nombre + " - " +
    "Nota: " + json.estudiantes[i].nota + "<br>";
  }
  document.getElementById("alumnos").innerHTML = out;
}
function mostrarAlumnos(){
  leerJSON(jsObj);
}

<!-- Calcular nota promedio -->
function promedio(json){
  var out = "La nota promedio es ";
  var aux = json.estudiantes[0].nota;
  var sumar = 0;
  var promed = 0;
  for (i = 0; i < json.estudiantes.length; i++) {
    aux = json.estudiantes[i].nota;
    sumar = sumar + aux;
    promed = sumar / 10;
  }
  document.getElementById("npromedio").innerHTML = out + promed;
}
function mostrarNotaPromedio() {
  promedio(jsObj);
}

<!-- Estudiante con mayor nota -->
function Mnota(json) {
            var Nmayor = json.estudiantes[0].nota;
            var pos = 0;
            var aux = "";
            for (i = 0; i < json.estudiantes.length; i++) {
                if (json.estudiantes[i].nota >= Nmayor) {
                    Nmayor = json.estudiantes[i].nota;
                }
            }
            for (i = 0; i < json.estudiantes.length; i++) {
                if (json.estudiantes[i].nota >= Nmayor) {
                    pos = i;
                    aux=aux+json.estudiantes[pos].nombre+"<br>";
                }
            }
            document.getElementById("mayor").innerHTML = "Las personas con la nota más alta son: <br>" + aux + "<br>";
        }

function eventoMayorNota() {
    Mnota(jsObj);
}

<!-- Estudiante con menor nota -->
function mnota(json) {
            var Nmenor = json.estudiantes[0].nota;
            var pos = 0;
            var aux = "";
            for (i = 0; i < json.estudiantes.length; i++) {
                if (json.estudiantes[i].nota <= Nmenor) {
                    Nmenor = json.estudiantes[i].nota;
                }
            }
            for (i = 0; i < json.estudiantes.length; i++) {
                if (json.estudiantes[i].nota <= Nmenor) {
                    pos = i;
                    aux=aux+json.estudiantes[pos].nombre+"<br>";
                }
            }
            document.getElementById("menor").innerHTML = "Las personas con la nota más baja son: <br>" + aux + "<br>";
        }

function eventoMenorNota() {
    mnota(jsObj);
}
