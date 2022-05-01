$(document).ready(function () {
    debugger
    var id_user = localStorage.getItem("id");
  var is_role = localStorage.getItem("role");
  var email = localStorage.getItem("email");
    debugger

if(id_user >0){
    if(is_role == "CLIENT"){
        $("#sesionregistrate").addClass("d-none");
        $("#sesioninicia").addClass("d-none");
        $("#infocuenta").removeClass("d-none");
        $("#cuenn").html(email)
    
    }else{
        $("#sesionregistrate").addClass("d-none");
        $("#sesioninicia").addClass("d-none");
        $("#categoriasi").addClass("d-none");
    
    }
    
}else{



}

$.ajax({
    type: "POST",
    url: "https://is-fcfm.alwaysdata.net/api/producto/",
    data:{action:"getAllPN"},
    dataType: 'json',
    success: function(reponse){
        debugger
        const {message,data}= reponse;

    var ir =    data[0].id;
debugger
 for(var i = 0; i<9 ;i++){

    if(i<3){
        $("#splide-slide01").append(`<div class="col-lg-4 col-md-3 col-sm-12  pt-2">
        <div class="imagen text-center" style="border-color: white !important;;">
          <img src="../IMG/photoshop.png" style="height: 200px; width: 200px;">
        </div>
        <div class="stats mt-2 text-center">
          <div class="mx-auto p-price" style="color: white;">
          <h4>${data[i].nombre}</h4>
          <span>Precio</span>
          <p class="lead" style="color: white;">
            <span>$${data[i].precio}</span>
            </p>
             <button style="font-family: 'Bebas Neue'; background-color: rgb(100, 100, 96);  color: white;"
              class="p1p btn mt-3 mb-4 zoom" type="submit" onclick="location.href='producto.html?producto=${data[i].id}';">ver producto</button>
          </div>
        </div>
      </div>`);

    }
    if(i>=3 && i<6){
        $("#splide-slide02").append(`<div class="col-lg-4 col-md-3 col-sm-12  pt-2">
        <div class="imagen text-center" style="border-color: white !important;;">
          <img src="../IMG/photoshop.png" style="height: 200px; width: 200px;">
        </div>
        <div class="stats mt-2 text-center">
          <div class="mx-auto p-price" style="color: white;">
            <h4>${data[i].nombre}</h4>
            <span>Precio</span>
            <p class="lead" style="color: white;">
              <span>$${data[i].precio}</span>
            </p>
            <button style="font-family: 'Bebas Neue'; background-color: rgb(100, 100, 96);  color: white;"
            class="p1p btn mt-3 mb-4 zoom" type="submit" onclick="location.href='producto.html?producto=${data[i].id}';">ver producto</button>
          </div>
        </div>
      </div>`);

    }
    if(i>=6 && i<9){
        $("#splide-slide03").append(`<div class="col-lg-4 col-md-3 col-sm-12  pt-2">
        <div class="imagen text-center" style="border-color: white !important;;">
          <img src="../IMG/photoshop.png" style="height: 200px; width: 200px;">
        </div>
        <div class="stats mt-2 text-center">
          <div class="mx-auto p-price" style="color: white;">
          <h4>${data[i].nombre}</h4>
          <span>Precio</span>
          <p class="lead" style="color: white;">
            <span>$${data[i].precio}</span>
            </p>
            <button style="font-family: 'Bebas Neue'; background-color: rgb(100, 100, 96);  color: white;"
            class="p1p btn mt-3 mb-4 zoom" type="submit" onclick="location.href='producto.html?producto=${data[i].id}';">ver producto</button>
          </div>
        </div>
      </div>`);

    }




 }
    

            
      
      
       
            
        
      
          


         
       debugger

    },error:function(x,y,z){

    //  location.href = "IndexNuevo.php";
      
    }
  });

  $.ajax({
    type: "POST",
    url: "https://is-fcfm.alwaysdata.net/api/producto/",
    data:{action:"getAllPN2"},
    dataType: 'json',
    success: function(reponse){
        debugger
        const {message,data}= reponse;

    var ir =    data[0].id;
debugger
 for(var i = 0; i<4 ;i++){

    $("#recient").append(` <div class="col mb-5 zoom">
    <div class="card h-100" style="background-color: #383a41; color: white;">
      <!-- Product image-->
      <img class="card-img-top" src="../IMG/reactredux.png" alt="..." style="object-fit: cover; height:158px;">
      <!-- Product details-->
      <div class="card-body p-4">
        <div class="text-center">
          <!-- Product name-->
          <h5 class="fw-bolder">${data[i].nombre}</h5>
          <!-- Product price-->
          Precio: $${data[i].precio}
        </div>
      </div>
      <!-- Product actions-->
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent text-center">
        <button style="font-family: 'Bebas Neue'; background-color: rgb(100, 100, 96);  color: white;"
        class="p1p btn mt-3 mb-4 zoom" type="submit" onclick="location.href='producto.html?producto=${data[i].id}';">ver producto</button>
      </div>
    </div>
  </div>
    `);

    }
   
       debugger

    },error:function(x,y,z){

    //  location.href = "IndexNuevo.php";
      
    }
  });



  

    $("#rertol").submit(function (e) { 
        e.preventDefault();
    
        var email = document.getElementById("emaili").value;
        var password = document.getElementById("passwordi").value;
    debugger
  
     var boolean = true;
    
        if ( password =="") {
       
         toastr.error('Error','Ingresa la contraseña correctamente')
         boolean = false
        }
        if (email == "") {
    
            toastr.error('Error','Ingresa el correo correctamente')
            boolean = false
        }
         if(boolean == true){
    
            $.ajax({
                type: "POST",
                url: "https://is-fcfm.alwaysdata.net/api/auth/",
                data: {action:"signIn",email:email,password:password},
                dataType: "json",
                success: function (response) {
                    debugger
                 var pala = response.data;
                 var pala2 = response.token;
                    localStorage.setItem("id",pala.id);
                    localStorage.setItem("password",pala.password);
                    localStorage.setItem("username",pala.username);
                    localStorage.setItem("email",pala.email);
                    localStorage.setItem("role",pala.roles);
                    localStorage.setItem("token",pala2);
                    
                    if(pala.roles == "CLIENT"){
                       $("#sesionregistrate").addClass("d-none");
                       $("#sesioninicia").addClass("d-none");
                       $("#infocuenta").removeClass("d-none");


                       toastr.success('Iniciaste sesion ', 'Acabas de iniciar sesion');




                    

                    }else{
                        $("#sesionregistrate").addClass("d-none");
                        $("#sesioninicia").addClass("d-none");
                        $("#categoriasi").addClass("d-none");

                        toastr.success('Iniciaste sesion ', 'Acabas de iniciar sesion');
                    }



                },
                error:function(x,y,z){
                    toastr.error('Error', 'El usuario y la contraseña no coinciden');
                }
            });
    
        }
    
    })
    
    
    
    
    
    
    
    $("#rerto").submit(function (e) {
        e.preventDefault();
    
        var name = document.getElementById("nombrer").value;
        var email = document.getElementById("emailr").value;
        var password = document.getElementById("passwordr").value;
        
      debugger
            var boolean = true;
    
        if ( password == "") {
            toastr.error('Error', 'Ingresa la contraseña correctamente')
            boolean = false;
        }
        if (email == "" || name == "") {
            toastr.error('Error', 'Llena bien los campos')
            boolean = false;
        }
        if (boolean == true) {
            debugger
            //toastr.success('Bien', 'Te has registrado correctamente');
            $.ajax({
                type: "POST",
                url: "https://is-fcfm.alwaysdata.net/api/auth/",
                data: {action:"signUp",username:name,email:email,password:password},
                dataType: "json",
                success: function (response) {
                    debugger
                   

                        toastr.success('Bien', 'Cuenta creada');
debugger
                        
   
                },
                error:function(x,y,z){
                    toastr.error('Error', 'Error interno al registrar usuario');
                }
            });
    
        }
    
    })


});
















