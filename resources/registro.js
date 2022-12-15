const url = "http://localhost:3000/api/informacion/";
let resultados = '';
const formArticulo = document.querySelector("form");
const docinfo = document.getElementById("DOCINFO");
const apenominfo = document.getElementById("APENOMINFO");
const emainfo = document.getElementById("EMAINFO");
const celinfo = document.getElementById("CELINFO");
const asuinfo = document.getElementById("ASUINFO");
var opcion = '';

btnCrear.addEventListener('click', () => {
    console.log("Acción de listar activada");
    opcion = 'crear';
});

formArticulo.addEventListener('submit',
    (e) => {
   	 e.preventDefault();
   	 if (opcion == 'crear') {
   		 if (DOCINFO.value == "" || APENOMINFO.value == "" || EMAINFO.value == "" || CELINFO.value == "" || ASUINFO.value == "") {
       		 alert("Asegúrese de que todos los campos estén completos");
       		 return false;
   		 } else {
       		 console.log("Todos los campos están completos");
       		 fetch(
           		 url,
           		 {
               		 method: 'POST',
               		 headers: {
                   		 'content-Type':'application/json'
               		 },
               		 body: JSON.stringify(
                   		 {
                       		 DOCINFO: DOCINFO.value,
                       		 APENOMINFO: APENOMINFO.value,
                       		 EMAINFO: EMAINFO.value,
                       		 CELINFO: CELINFO.value,
                       		 ASUINFO: ASUINFO.value
                   		 }
               		 )
           		 }
       		 )
       		 .then(
           		 response => response.json()
       		 )
       		 .then(
           		 response => location.reload()
       		 );
   		 }
   	 } else if(opcion == 'editar'){
   		 console.log("Activado el ");
   	 }
    }
);