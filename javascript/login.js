const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container =  document.querySelector(".container");

sign_up_btn.addEventListener('click', ()=> {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', ()=> {
    container.classList.remove("sign-up-mode");
});

$('#login').on('submit',function(e){
    e.preventDefault();
var formData = new FormData(this);
   $.ajax({
       type:'POST',
       url: $('#login').attr('action'),
       data:formData,
       cache:false,
       contentType: false,
       processData: false,
       success:function(result){

        if(result){
        swal({
            icon: 'success',
            title: 'Iniciaste sesion',
        }).then((value) => {
            window.location.href="index.php";
        });
    }else{
        swal({
            icon: 'error',
            title: 'Credenciales incorrectas',
        }).then((value) => {
            
        });
    }

    if(condition){}
    else{}
 }
 })
})


$('#registro').on('submit',function(e){
    e.preventDefault();
var formData = new FormData(this);
   $.ajax({
       type:'POST',
       url: $('#registro').attr('action'),
       data:formData,
       cache:false,
       contentType: false,
       processData: false,
       success:function(result){
        swal({
            icon: 'success',
            title: 'Usuario registrado',
        }).then((value) => {
            window.location.href="index.php";
        });
    if(condition){}
    else{}
 }
 })
})


// 