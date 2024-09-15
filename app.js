// const image = document.querySelector('#img');

// img.addEventListener('mouseover' , function (){
//     image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtftDEvXLJ_rDUsdsVEwidChScRr4EAduDLQ&s'
// })

// img.addEventListener('mouseout' , function(){
//     image.src = 'https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png'
// })

const form = document.querySelector('#form');
const fullName = document.querySelector('#fullName');
const password = document.querySelector('#password');
const email = document.querySelector('#email');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

form.addEventListener('submit' , function(){
    event.preventDefault()
    if(!passwordRegex.test(password.value)){
        console.log('invalid password')
    }
   else{
    console.log(fullName.value);
    console.log(email.value);
    console.log(password.value);
   }
})

// bubbling imageclick phele or ul click bad 
// capturing ulclick phele or image bad
// const ul = document.querySelector('ul');
// const image = document.querySelector('#image-2')

// ul.addEventListener('click' , function(event){
//     console.log(event.target.parentNode.remove())
// } , false)

// image.addEventListener('click' , function(){
//     // console.log('image click')
// } , false)