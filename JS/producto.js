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
          $("#infocuenta").removeClass("d-none");
          $("#admins").removeClass("d-none");
          $("#cuenn").html(email)
      
      }
    
}else{



}

var vars = {};
var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
  function (m, key, value) {
    vars[key] = value;
  });
var it = vars.producto;
debugger
var io = parseInt(it);
    /// PARA MOSTRAR UN PRODUCTO
    $.ajax({  
      type: "GET",
      url: "https://uanlis.alwaysdata.net/api/producto/index.php",
      data: {action:'getp',id:io},
      dataType: 'json',
      success: function(data){
     var e = data.data;
     debugger
        $("#nombr").html(e.nombre);
        $("#despi").html(e.description);
        $("#showp").html(e.precio);
        $("#showp").html(e.precio);
        $("#im").append(`<img class="text-center" src="https://uanlis.alwaysdata.net/api/producto${e.imagen}"
        style="object-fit:initial; height: 300px; width: 300px;">
    `);

       var pp = e.id_categoria;

       $.ajax({  
        type: "GET",
        url: "https://uanlis.alwaysdata.net/api/categoria/index.php",
        data: {action:'all'},
        dataType: 'json',
        success: function(data2){
       var e = data2;
       var i = 0;
  for(var prop of data2){ 
    
    if (data2[i].id == pp ){
         $("#catmr").html(data2[i].nombre);
    }

    i++; 
      
     }
     
  debugger
        },error:function(x,y,z){
    debugger
      
        
        }
      });




debugger
      },error:function(x,y,z){
  debugger    
      }
    });
  
 
  




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
          url: "https://uanlis.alwaysdata.net/api/auth/",
          data: {action:"signIn",email:email,password:password},
          dataType: "json",
          success: function (response) {
              debugger
           var pala = response.data

              localStorage.setItem("id",pala.id);
              localStorage.setItem("password",pala.password);
              localStorage.setItem("username",pala.username);
              localStorage.setItem("email",pala.email);
              localStorage.setItem("role",pala.roles);

              if(pala.roles == "CLIENT"){
                 $("#sesionregistrate").addClass("d-none");
                 $("#sesioninicia").addClass("d-none");
                 $("#infocuenta").removeClass("d-none");
                 toastr.success('Iniciaste sesion ', 'Acabas de iniciar sesion');
                 location.reload(); 

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
          url: "https://uanlis.alwaysdata.net/api/auth/",
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







    var vars = {};
    var progrss = null;
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi,
      function (m, key, value) {
        vars[key] = value;
      });
      


 


  
      









      });

