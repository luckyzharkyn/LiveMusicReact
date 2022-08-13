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
        },
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
      ],
      'collections' : [
        {
          name: 'Новинки K-Pop',
          imgPath: 'https://lmusic.kz/images/album_cover/novinki-k-pop.jpg',
          pathCollection: '#'
        },
        {
          name: 'Әке туралы әндер жыйнағы',
          imgPath: 'https://lmusic.kz/images/album_cover/ake-turaly-ander-zhyjnagy.jpg',
          pathCollection: '#'
        },
        {
          name: 'Үздік қазақша хит әндер 2020 Топ 40',
          imgPath: 'https://lmusic.kz/images/album_cover/uzdik-kazaksha-hit-ander-2020-top-40.jpg',
          pathCollection: '#'
        },
        {
          name: 'Мектеп туралы әндер',
          imgPath: 'https://lmusic.kz/images/album_cover/mektep-turaly-ander.jpg',
          pathCollection: '#'
        },
        {
          name: 'Қазақша хит әндер 2022',
          imgPath: 'https://lmusic.kz/images/album_cover/kazaksha-hit-ander-2022.jpg',
          pathCollection: '#'
        },
        {
          name: 'Алматы туралы әндер',
          imgPath: 'https://lmusic.kz/images/album_cover/almaty-turaly-ander.jpg',
          pathCollection: '#'
        },
        {
          name: '',
          imgPath: '',
          pathCollection: '#'
        },
      ]
    }

    const LimitLength = str => str.length > 15 ? str.slice(0, 14) + "..." : str;
    
    return <>
        <main className="swap">
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
                  />
                <Collections 
                  songsList={songsList['collections']}
                  LimitLength={LimitLength}
                />
            </div>
            <div className='second_block'>
              second_block
            </div>
        </main>
    </>
}

export default Main