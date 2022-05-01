debugger

    var id_user = localStorage.getItem("id");
  var is_role = localStorage.getItem("role");
  var email = localStorage.getItem("email");
 $("#nm").html(email);
  var token = localStorage.getItem("token");
    debugger
    $.ajax({
        type: "GET",
        enctype: "multipart/form-data",
        url: "https://is-fcfm.alwaysdata.net/api/producto/index.php",
        data: {action:'getAllUS'}, 
        dataType:"json",
        success: function (reponse) {
            debugger
            const {message,data}= reponse;
        
for( var i = 0 ; i < 15 ; i++){
  
                                      

    $(".tb").append(`
   
    <tr>
        <th>#</th>
        <th>${data[i].id}</th>
        <th>Correo</th>
    </tr>
    <tr>
        <td>1</td>
        <td>${data[i].email}l</td>
        <td>${data[i].username}</td>
    </tr>
  
    `);
}
        
           alert(response);
                
            
        },
        error: function (x, y, z) {
            debugger
            alert(x);
            toastr.error('Error', 'Eror interno al actualizar usuario');
        }
    });

    $.ajax({
        type: "GET",
        url: "https://is-fcfm.alwaysdata.net/api/categoria/index.php",
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
        //  location.href = "IndexNuevo.php";
          
        }
      });
$("#formProducto").submit( function (e) {
    var pal = parseJwt(token);
var Datetime = Date.now()
debugger
    if (pal.exp > Datetime){
        toastr.info('Necesitar inciar sesion nuevamente', 'Infor');

    }else{
    e.preventDefault();
    var campos = [];
    var name = document.getElementById("nameP").value;
    var descrip = document.getElementById("PDescription").value;
    var marca = document.getElementById("inputState01").value;
    var precio = document.getElementById("PPrecio").value;
    var image = $('#Cimagen').prop('files');
    var boolean = true;
    debugger
    if (boolean == true) {
        //var files = avatar; //$('#updateAvatar')[0].files[0];
        var formData = new FormData();
        formData.append('imagen',image[0]);
        formData.append('action',"add");
        formData.append('nombre',name);
        formData.append('precio',precio);
        formData.append('description',descrip);
        formData.append('marca',marca);
        formData.append('categoria',marca);
        debugger
        $.ajax({
            type: "POST",
            enctype: "multipart/form-data",
            url: "https://is-fcfm.alwaysdata.net/api/producto/",
            data: formData, 
            dataType:"json",
            headers: {"Authorization":"Bearer " + token},
            processData: false, 
            contentType:false,
            success: function (response) {
               debugger
            



               alert(response);
                    
                
            },
            error: function (x, y, z) {
                debugger
                alert(x);
                toastr.error('Error', 'Eror interno al actualizar usuario');
            }
        });
    }
    }
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };

})