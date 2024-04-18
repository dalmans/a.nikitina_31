import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
1. встановити NodeJS на власний комп'ютер
2. створити новий React-проект з назвою blog
3. створити новий JSX-елемент з назвою jsxElement з таким вмістом:
<h1>I am a JSX element</h1>
відобразити елемент jsxElement*/
function App() {

  const jsxElement = <h1>I am a JSX element</h1>;
  //4. створити новий JSX-елемент header з таким вмістом:
  const header = (
    <header>
      <h1>Welcome to React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3>
    </header>
  )
  //5.  створити новий JSX-фрагмент з таким вмістом
  const div = (
    <><h1>Welcome to React</h1>
      <h2>Getting Started React</h2>
      <h3>JavaScript Library</h3></>

  )
  //6. створити новий JSX-елемент footer з таким вмістом:
  const footer = (
    <footer><p>Copyright &copy; 2024</p>
    </footer>

  )

  return (
    <>
      {header}
      {div}
      {jsxElement}
      {footer}

    </>
  )
}

export default App
