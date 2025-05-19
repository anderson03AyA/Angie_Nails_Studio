import React from 'react'
import angieImg from '../assets/angie.jpg';

const Header = () => {
return (
    <div>
        <header>
            <img 
                src={angieImg} 
                alt="Foto de Angie" 
                style={{ width: '100px', height: '100px', borderRadius: '50%' }} 
            />
            <h1 className='header__title'>Angie Nails Studios</h1>
        </header>
    </div>
)
}

export default Header
