import React from 'react'

const TopSongs = ({songsList}) => {
  const music = songsList.map((obj, index) => {
    return <li>
        <span>{index + 1}</span>
        <a href={obj.pathSong}>
          <img src={obj.imgPath}/>
        </a>
        <div>
          <a href={obj.pathSong}>
            <h4>{obj.name}</h4>
          </a>
          <a href={obj.pathAuthor}>
            <h5>{obj.author}</h5>
          </a>
        </div>
    </li>
  })

  return (
    <div className='topSongs'>
        <h3>Топ 10 чарт</h3>
        <ul>
            {music}        
        </ul>
    </div>
  )
}

export default TopSongs