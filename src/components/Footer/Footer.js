
const Footer = () => {
  const links = [
    {
      src: 'https://irecommend.ru/sites/default/files/product-images/10297/BrcQEzD7vieEk9catAA6lg.jpg',
      href: '#'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/1200px-VK_Compact_Logo_%282021-present%29.svg.png',
      href: '#'
    },
    {
      src: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Twitter-logo.svg/1200px-Twitter-logo.svg.png',
      href: '#'
    },
    {
      src: 'https://play-lh.googleusercontent.com/lMoItBgdPPVDJsNOVtP26EKHePkwBg-PkuY9NOrc-fumRtTFP4XhpUNk_22syN4Datc',
      href: '#'
    }
  ]

  const result = links.map((link, index) => {
    return <li key={index}>
        <a href={link.href}>
          <img src={link.src} />
        </a>
    </li>
  })
    return <>
        <footer className="vanishIn">
          <img src='https://lmusic.kz/images/logo-footer.png' />
          <div className='authorRights'>
            Все права защищены
          </div>
          <div className='social_links'>
              <ul>
                {result}
              </ul>
          </div> 
        </footer>
    </>
}

export default Footer