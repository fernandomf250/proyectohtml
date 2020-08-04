$("#butlog").click(function() {//obtiene valores de los usuarios con sus respectivas contraseñas en login 
    var nombre=$('#nombre').val();
    var apellido=$('#apellido').val();
    var direc=$('#direc').val();
    var tel=$('#tel').val();
    var gmail=$('#gmail').val();
    var contra=$('#contra').val();
    var contrac=$('#contrac').val();

    AgregarRegistro(nombre,apellido,direc,tel,gmail,contra,contrac);

  });

  function AgregarRegistro(nombre,apellido,direc,tel,gmail,contra,contrac) {
    var dbCitas = localStorage.getItem("registro"); //Obtener datos de localStorage
    dbCitas = JSON.parse(dbCitas); // Covertir a objeto

    // Seleccionamos los datos de los inputs de formulario
    
    var datos_cita = JSON.stringify({
        nombre:nombre,
        apellido:apellido,
        direc:direc,
        tel:tel,
        gmail:gmail,
        contra:contra
    });

    if(contra === contrac){
        dbCitas.push(datos_cita); // Guardar datos en el array definido globalmente
        localStorage.setItem("registro", JSON.stringify(dbCitas)); 
        alert("Se registro corectamente");
    }else{
        alert("la contraseñas no coinciden");
    }

    
    
}
