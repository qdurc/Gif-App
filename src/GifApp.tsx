import { useState } from "react"

export const GifApp = () => {

  const [categories, setcategories] = useState([ 'One Punch', 'Dragon Ball' ]);
  
  const handlerAddCategory = () => {
     setcategories([...categories, 'Android'])
  }
 
  return (
    <>  
        {/* Titulo */}
        <h1>GifExperApp</h1>

        {/* Input */}
        <button onClick={ handlerAddCategory }>Agregar</button>

        {/* Listado de Gif */}
        <ol>
          { categories.map((gif) => {
            return(
              <li key={ gif }> { gif } </li>
            )
          }) }
        </ol>
          {/* Gif item */}
          
    </>
  )
}

