var token = localStorage.getItem("token");
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
            $("#infocuenta").removeClass("d-none");
            $("#admins").removeClass("d-none");
            $("#cuenn").html(email)
        
        }
    
}else{



}

$.ajax({
    type: "POST",
    url: "http://uanlis.alwaysdata.net/api/user/",
    data:{action:"getuse",id:id_user},
    dataType: 'json',
    success: function(reponse){
        debugger
        const {message,data}= reponse;

    $("#nameP").val(data.username);
    $("#emailP").val(data.email);
    $("#passwordP").val(data.password);  


         
       debugger

    },error:function(x,y,z){
debugger

      
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
            url: "http://uanlis.alwaysdata.net/api/auth/",
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
                   toastr.success('Iniciaste sesion', 'Acabas de iniciar sesion');
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
            url: "http://uanlis.alwaysdata.net/api/auth/",
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



    
$("#formularioCuenta").submit(function (e) { 

    var pal = parseJwt(token);
    var Datetime = Date.now()
    debugger
        if (pal.exp > Datetime){
            toastr.info('Necesitar inciar sesion nuevamente', 'Infor');
    
        }else{

debugger

    e.preventDefault();
    var names = document.getElementById("nameP").value;
    var emails = document.getElementById("emailP").value;
    var password = document.getElementById("passwordP").value;
    var passwordn = document.getElementById("passwordPN").value;
debugger
 
 
    if (emails == "" || names == "" || password == "" || passwordn == "") {

        toastr.error('Error','Llena los campos correctamente');
        boolean = false;
    }else{
        $.ajax({
            type: "POST",
            url: "http://uanlis.alwaysdata.net/api/user/",
            data:{action:"updateUser",id:id_user,username:names,password:passwordn,oldpassword:password},
            headers: {"Authorization":"Bearer " + token},
            dataType: 'json',
            success: function(reponse){
                debugger
                const {message,data}= reponse;    
        
            location.href='Cuenta.html'
                 
               debugger
        
            },error:function(x,y,z){
        debugger
      
              
            }
          });

    }

  

    }

    })

    });

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };