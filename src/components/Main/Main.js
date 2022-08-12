import NewSongs from "./Components/FirstBlock/NewSongs"
import TopSongs from "./Components/FirstBlock/TopSongs"
import Collections from "./Components/FirstBlock/Collections"

const Main = () => {
    const songsList = {
      'newSongs' : [
        {
          name: 'Sen Qyz',
          author: 'Ерке Есмахан',
          imgPath: 'https://lmusic.kz/images/cover/erke-esmahan-sen-qyz.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        },
        {
          name: 'Красавчик',
          author: 'Еркебұлан Құмаров',
          imgPath: 'https://lmusic.kz/images/cover/erkebulan-kumarov-krasavchik.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        },
        {
          name: 'Айым Бекен Ай',
          author: 'Алмасхан Насыров',
          imgPath: 'https://lmusic.kz/images/cover/almashan-nasyrov-ajym-beken-aj.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        },
        {
          name: 'Ауылдың баласы ',
          author: 'Ruslan Amir',
          imgPath: 'https://lmusic.kz/images/cover/ruslan-amir-auyldyn-balasy.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        },
        {
          name: 'Қалалық қыз',
          author: 'Нұртас Қайратұлы, Айнұр Бақытжанқызы',
          imgPath: 'https://lmusic.kz/images/cover/nurtas-kajratuly-ajnur-bakytzhankyzy-kalalyk-kyz.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        },
        {
          name: 'Болашақ келіншегім',
          author: 'Мұхтар Ханзада',
          imgPath: 'https://lmusic.kz/images/cover/muhtar-hanzada-bolashak-kelinshegim.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        }
      ],
      'topSongs' : [
        {
          name: 'Sen Qyz',
          author: 'Ерке Есмахан',
          imgPath: 'https://lmusic.kz/images/cover/erke-esmahan-sen-qyz.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        },
        {
          name: 'Красавчик',
          author: 'Еркебұлан Құмаров',
          imgPath: 'https://lmusic.kz/images/cover/erkebulan-kumarov-krasavchik.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        },
        {
          name: 'Айым Бекен Ай',
          author: 'Алмасхан Насыров',
          imgPath: 'https://lmusic.kz/images/cover/almashan-nasyrov-ajym-beken-aj.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        },
        {
          name: 'Ауылдың баласы ',
          author: 'Ruslan Amir',
          imgPath: 'https://lmusic.kz/images/cover/ruslan-amir-auyldyn-balasy.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        },
        {
          name: 'Қалалық қыз',
          author: 'Нұртас Қайратұлы, Айнұр Бақытжанқызы',
          imgPath: 'https://lmusic.kz/images/cover/nurtas-kajratuly-ajnur-bakytzhankyzy-kalalyk-kyz.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        },
        {
          name: 'Болашақ келіншегім',
          author: 'Мұхтар Ханзада',
          imgPath: 'https://lmusic.kz/images/cover/muhtar-hanzada-bolashak-kelinshegim.jpeg',
          pathSong: "#",
          pathAuthor: "#"
        }
      ]
    }

    const LimitLength = str => str.length > 20 ? str.slice(0, 18) + "..." : str;
    
    return <>
        <main>
            <div className='first_block'>
                {/* <div className='popular'>
                  <h3>Популярное</h3>
                  <div className='slider'>
                    
                  </div>
                </div> */}
                <NewSongs 
                  songsList={songsList['newSongs']}
                  LimitLength={LimitLength}
                />
                <TopSongs 
                  songsList={songsList['topSongs']}
                  LimitLength={LimitLength}
                  />
                <Collections />
            </div>
            <div className='second_block'>
              second_block
            </div>
        </main>
    </>
}

export default Main