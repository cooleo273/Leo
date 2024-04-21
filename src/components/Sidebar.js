import React from 'react'

const dropdowns =document.querySelectorAll('.drop-down');
    
    
dropdowns.forEach(dropdown =>{
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelector('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', ()=>{
        select.classList.toggle('.select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open')
    });
    options.forEach(option =>{
        option.addEventListener('click', ()=>{
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open')
           }) 
    options.forEach(option =>{
                option.classList.remove('active')
            });
            option.classList.add('active')
        })

})  

function Sidebar(props) {

   
  return (
    <div className='drop-down'>
        <div className='select'>
            <span className='selected'>List Type</span>
            <div className='caret'></div>
        </div>
        <ul className='menu'>
            <li className='active'>List Type</li>
            <li>facebook</li>
            <li>facebook</li>
            <li>facebook</li>
            <li>facebook</li>
        </ul>
    </div>
  )
}

export default Sidebar