import React from 'react'
import "./Index.scss"

const Header = () => {
  return (
    <header className='header'>
        <div className='header__items--wrap'>
            <h2 className='header__title'>Organizacão</h2>
            <h2 className='header__title selected'>Tarefas</h2>
        </div>
    </header>
  )
}

export default Header