import React from 'react';
import './css/Cursor.scss';

setTimeout(() => {
    const cursor = document.querySelector('.cursor')
    const aTag = document.getElementsByClassName('tag')
    const darkTag = document.getElementsByClassName('dark')

    for (let i = 0; i < aTag.length; i++) {
        aTag[i].addEventListener('mouseover', () => {
            cursor.classList.add('hover')
        })
        aTag[i].addEventListener('mouseleave', () => {
            cursor.classList.remove('hover')
        })        
    }

    for (let i = 0; i < darkTag.length; i++) {
        darkTag[i].addEventListener('mouseover', () => {
            cursor.classList.add('dark')
        })
        darkTag[i].addEventListener('mouseleave', () => {
            cursor.classList.remove('dark')
        })        
    }

    document.addEventListener('mousemove', e => {
        cursor.setAttribute(
            "style", `transform: translate3d(${e.clientX - 20}px, ${e.clientY - 20}px, -10px);`)
    })

    document.addEventListener('mousedown', () => {
        cursor.classList.add('expand')
    })

    document.addEventListener('mouseup', () => {
        cursor.classList.remove('expand')
    })
}, 10);

function Cursor() {
    return (
        <>  
            <div className="cursor"></div>          
        </>
    )
}

export default Cursor