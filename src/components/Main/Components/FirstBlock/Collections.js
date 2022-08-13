import React from 'react'

const Collections = ({ songsList, LimitLength }) => {
  const result = songsList.map((music, index) => {
    return <li key={index}>
      <a href={music.pathCollection}>
        <img src={music.imgPath} /> 
      </a>
      <a href={music.pathCollection}>
        <p>{LimitLength(music.name)}</p>
      </a>
    </li>
  })

  return (
    <div className='collections'>
      <h3>Сборники</h3>
      <ul>
        {result}
      </ul>
    </div>
  )
}

export default Collections