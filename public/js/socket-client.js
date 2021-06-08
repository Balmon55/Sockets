const socket=io();

const lblonline = document.querySelector("#lblonline")
const lbloffline = document.querySelector("#lbloffline")
const txtmensaje= document.querySelector('#txtmensaje')
const btnEnviar= document.querySelector('#btnEnviar')

socket.on('connect',()=>{
    console.log('Conectado');
    lblonline.style.display=''
    lbloffline.style.display='none'

})
socket.on('disconnect',()=>{
    console.log('Desconcentado del servidor')
    lblonline.style.display='none'
    lbloffline.style.display=''
})
socket.on('respuesta-servidor',(quedijo)=>{
        console.log(quedijo);

})
btnEnviar.addEventListener('click',()=>{

    const mensaje=txtmensaje.value;

    const payload={
        mensaje, 
        id:"123abc",
        fecha: new Date().getTime()
    }

    socket.emit('mensaje-enviado',payload,(id)=>{
        console.log('Desde el server ',id);
    })
    





})