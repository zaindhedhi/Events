// const image = document.querySelector('#img');

// img.addEventListener('mouseover' , function (){
//     image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtftDEvXLJ_rDUsdsVEwidChScRr4EAduDLQ&s'
// })

// img.addEventListener('mouseout' , function(){
//     image.src = 'https://toppng.com/uploads/preview/light-bulb-on-off-png-115539402943y50vxr5yi.png'
// })

// const form = document.querySelector('#form');
// const form = document.querySelector('#form');


// bubbling imageclick phele or ul click bad 
// capturing ulclick phele or image bad
const ul = document.querySelector('ul');
const image = document.querySelector('#image-2')

ul.addEventListener('click' , function(event){
    console.log(event.target.parentNode.remove())
} , false)

image.addEventListener('click' , function(){
    // console.log('image click')
} , false)