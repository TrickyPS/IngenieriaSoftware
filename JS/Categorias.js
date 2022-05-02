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
    type: "GET",
    url: "https://uanlis.alwaysdata.net/api/categoria/index.php",
    data:{action:"allCategories"},
    dataType: 'json',
    success: function(data){
        debugger
       var inir = data
       var  i =0;
 for(var prop of data){ 
        $("#inputState01").append(`<option value ="${data[i].id}">${data[i].nombre}</option>`);
        i++;    
 }


              
         
       debugger

    },error:function(x,y,z){
debugger
 
      
    }
  });

function AleatB(){
    var id_P = document.getElementById("inputState01").value
    debugger
    $.ajax({
        type: "GET",
        
        url: "https://uanlis.alwaysdata.net/api/producto/index.php",
        data:{action:"getAllPM",id:id_P},
        dataType: 'json',
        success: function(data){
            debugger
            $(".cats").empty();
            debugger
           var inir = data.data
           var  i =0;
     for(var prop of inir){ 
        $(".cats").append(`<div class=" col-lg-3 col-md-3 col-sm-6">
        <div class="product-grid hei">
            <div class="product-image">
                <a href="#">
                    <img class="pic-1 " src="http://uanlis.alwaysdata.net/api/producto${inir[i].imagen}">

                </a>
                <ul class="social">
                    <li><a href="curso.html" data-tip="Ver Producto"><i class="fa fa-search"></i></a></li>
                    
                </ul>
              

            </div>
      
            <div class="product-content">
                <h3 class="title"><a href="#">${inir[i].nombre}</a></h3>
                <div class="price pb-2">${inir[i].precio}
                    <span>$</span>
                </div>
            </div>
        </div>
    </div>`);
        i++;         
     }    
           debugger
    
        },error:function(x,y,z){
    debugger
       
          
        }
      });


 }

function Aleat(){
    $.ajax({
        type: "GET",
        url: "https://uanlis.alwaysdata.net/api/producto/index.php",
        data:{action:"getAllPNR"},
        dataType: 'json',
        success: function(data){
            $(".cats").empty();
            debugger
           var inir = data.data
           var  i =0;
     for(var prop of inir){ 
        $(".cats").append(`<div class=" col-lg-3 col-md-3 col-sm-6">
        <div class="product-grid hei">
            <div class="product-image">
                <a href="#">
                    <img class="pic-1 hei" src="http://uanlis.alwaysdata.net/api/producto${inir[i].imagen}">

                </a>
                <ul class="social">
                    <li><a href="curso.html" data-tip="Ver Producto"><i class="fa fa-search"></i></a></li>
                    
                </ul>
              

            </div>
      
            <div class="product-content">
                <h3 class="title"><a href="#">${inir[i].nombre}</a></h3>
                <div class="price pb-2">${inir[i].precio}
                    <span>$</span>
                </div>
            </div>
        </div>
    </div>`);
        i++;         
     }    
           debugger
    
        },error:function(x,y,z){
    debugger
       
          
        }
      });


 }
$(document).ready(function () {



  $.ajax({
       type: "GET",
       url: "https://uanlis.alwaysdata.net/api/producto/index.php",
       data:{action:"getAllPNR"},
       dataType: 'json',
       success: function(data){
           debugger
          var inir = data
          var  i =0;
    for(var prop of data){ 
           $("#inputState01").append(`<option value ="${data[i].id}">${data[i].nombre}</option>`);
           i++;    
    }

   
                 
            
          debugger
   
       },error:function(x,y,z){
   debugger
   
         
       }  });            
    $.ajax({
        type: "GET",
        url: "http://uanlis.alwaysdata.net/api/producto/index.php",
        data:{action:"getAllPNR"},
        dataType: 'json',
        success: function(data){
            debugger
           var inir = data.data
           var  i =0;
     for(var prop of inir){ 
        $(".cats").append(`<div class=" pb-4 col-lg-3 col-md-3 col-sm-6">
        <div class="product-grid hei">
            <div class="product-image">
                <a href="#">
                    <img class="pic-1 hei" src="http://uanlis.alwaysdata.net/api/producto${inir[i].imagen}">

                </a>
                <ul class="social">
                    <li><a href="curso.html" data-tip="Ver Producto"><i class="fa fa-search"></i></a></li>
                    
                </ul>
              

            </div>
      
            <div class="product-content">
                <h3 class="title"><a href="#">${inir[i].nombre}</a></h3>
                <div class="price pb-2">${inir[i].precio}
                    <span>$</span>
                </div>
            </div>
        </div>
    </div>`);
        i++;         
     }    
           debugger
    
        },error:function(x,y,z){
    debugger
      
          
        }
      });


 



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
      
                    localStorage.setItem("id",response  .id);
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
      
      
      
      




    $.ajax({
        type:"GET",
        url:"https://uanlis.alwaysdata.net/api/categoria/",
        data:{action:"getAll"},
        dataType:"json",
        success: function(resp){
         
         
        },
        error:function(x,y,z){
            
        }
    });


    $.ajax({
        type:"GET",
        url:"https://uanlis.alwaysdata.net/api/categoria/",
        data:{action:"getAllPN"},
        dataType:"json",
        success: function(resp){
        
      
  
         
        },
        error:function(x,y,z){
            
        }
    });
});
