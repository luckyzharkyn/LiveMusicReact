const newSongs = ({songsList, LimitLength}) => {
    
  const music = songsList.map((obj, index) => {
    return <li key={index}>
            <a href={obj.pathSong}>
              <img src={obj.imgPath}/>
              <h4>{LimitLength(obj.name)}</h4>
            </a>
            <a href={obj.pathAuthor}>
              <h5>{LimitLength(obj.author)}</h5>
            </a>
    </li>
  })

    return <>
      <div className='newSongs'>
        <h3>Новые казахские песни</h3>
        <div className='newSongs__content'>
          <ul>
              {music}
          </ul>
        </div>
      </div>
    </>
}

export default newSongs