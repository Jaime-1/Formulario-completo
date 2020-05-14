//(funcion)(){
    var formulario = document.getElementById('formulario'),
		nombre = formulario.nombre,
    apellido = formulario.apellido,
		correo = formulario.correo,
    edad = formulario.edad,
    fecha = formulario.fecha,
		sexo = formulario.sexo,
		terminos = formulario.terminos,
		error = document.getElementById('error');
function validarNombre(e){
    if(nombre.value == '' || nombre == null){
        console.log('Completa el nombre');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Un Nombre</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}
function validarApellidos(e){
     if(apellido.value == '' || apellido == null){
        console.log('Completa sus Apellidos');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Sus Apellidos</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}
function validarCorreo(e){
     if(correo.value == '' || correo == null){
        console.log('Completa el correo');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Ingresa Un Email</li>';
        e.preventDefault();
}else{
    error.style.display='none';
}
}
function validarEdad(e){
  if(edad.value == '' || edad == null){
    console.log('Completa la edad');
    error.style.display = 'block';
    error.innerHTML = error.innerHTML + '<li>Ingrese Su Edad</li>';
    e.preventDefault();
  }else {
    error.style.display='none';
  }
}
function validarFecha(e){
  if(fecha.value == '' || fecha == null){
    console.log('Completa la fecha');
    error.style.display = 'block';
    error.innerHTML = error.innerHTML + '<li>Ingrese Su Fecha de Nacimiento</li>';
    e.preventDefault();
  }else {
    error.style.display='none';
  }
}
function validarSexo(e){
    if(sexo.value == '' || sexo.value == null){
        console.log('Selecciona Un Sexo');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Selecciona Un Sexo</li>';
        e.preventDefault();
    }else{
    error.style.display='none';
}
}
function validarTerminos(e){
    if(terminos.checked == false){
        console.log('Acepta Los Terminos');
        error.style.display = 'block';
        error.innerHTML = error.innerHTML + '<li>Acepta Los Terminos</li>';
        e.preventDefault();
    }else if(nombre.value == '' || nombre == null || correo.value == '' || correo == null || sexo.value == '' || sexo.value == null){
    error.style.display='block';
}
}

function validarForm(e){
   error.innerHTML = '';
   error.style.display = 'block';
   validarNombre(e);
   validarApellidos(e);
   validarCorreo(e);
   validarEdad(e);
   validarFecha(e);
   validarSexo(e);
   validarTerminos(e);
}


formulario.addEventListener('submit', validarForm);

function sololetras(e) {
       key=e.keyCode || e.which;

       teclado=String.fromCharCode(key).toLowerCase();

       letras="qwertyuiopasdfghjklñzxcvbnm ";

       especiales="8-37-38-46-164";

       teclado_especial=false;

       for(var i in especiales){
           if(key==especiales[i]){
               teclado_especial=true;
               break;
           }
       }

       if(letras.indexOf(teclado)==-1 && !teclado_especial){
          return false;
       }
   }


//}())
