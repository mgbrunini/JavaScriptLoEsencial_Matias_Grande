<!-- Creacion del JSON-->
var jsonText = '{"estudiantes" : [' +
'{"codigo" : "001"     ,"nombre" : "Julia"     ,"nota" : 9},' +
'{"codigo" : "002"     ,"nombre" : "Matias"     ,"nota" : 10},' +
'{"codigo" : "003"     ,"nombre" : "Isabella"     ,"nota" : 7},' +
'{"codigo" : "004"     ,"nombre" : "Liz"     ,"nota" : 9},' +
'{"codigo" : "005"     ,"nombre" : "Claudio"     ,"nota" : 8},' +
'{"codigo" : "006"     ,"nombre" : "Cecilia"     ,"nota" : 3},' +
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
