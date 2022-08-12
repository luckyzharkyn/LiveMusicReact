import React from 'react'

const TopSongs = ({songsList, LimitLength}) => {
  const music = songsList.map(obj => {
    return <li>
        <span>1</span>
        <a href={obj.pathSong}>
                <img src={obj.imgPath}/>
                <h4>{LimitLength(obj.name)}</h4>
              </a>
              <a href={obj.pathAuthor}>
                <h5>{LimitLength(obj.author)}</h5>
              </a>
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