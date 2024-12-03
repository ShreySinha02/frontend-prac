let btns=document.querySelectorAll('.accordion')
let accordion;
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{

      
        
        let current=btn.nextElementSibling.style
        accordion?accordion.display='none':'';
        if( current.display=='block')
        {
            current.display='none'
        }
        else{
            current.display='block'
        }
        accordion=btn.nextElementSibling.style
    })
})

