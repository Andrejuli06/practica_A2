function Enviar(){
    let name_one= document.getElementById("name").value;
    let name_two= document.getElementById("name2").value;
    let last_name_one= document.getElementById("last_name").value;
    let last_name_two= documet.getElementById("last_name2").value;
    if(name_one.length == 0 || name_two.length == 0 || last_name_one.length == 0|| last_name_two.length == 0 ){
        Swal.fire({
            icon: "error",
            title: "Campos vacios",
            text: "alguno de los campos se encuentra vacio",
          });
    }

    if(name_one.length == 0 ){
        document.getElementById("name_one").style.border= "2px solid red";
    }else{
        document.getElementById("print").innerText = name_one;
    }
}

function limpiar(){
    document.getElementById("print").value;
}
   




