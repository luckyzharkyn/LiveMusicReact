import MenuItem from "./Menu/MenuItem"
import Block from "./Menu/Block"

const Sidebar = () => {
    const nameCategories = [
      {
        nameRu: 'Меню',
        nameBlock: 'mainMenu',
      },
      {
        nameRu: 'Музыка мира',
        nameBlock: 'musicOfTheWorld',
      },
      {
        nameRu: 'Сборники',
        nameBlock: 'collections',
      }
    ]

    const MenuList = {  
      'mainMenu' : [
        {
          title: 'Главная',
          href: '#'
        },
        {
          title: 'Мой плейлист',
          href: '#'
        },
        {
          title: 'Топ 100',
          href: '#'
        }
      ],
      'musicOfTheWorld' : [
        {
          title: 'Казахские песни',
          href: '#'
        },
        {
          title: 'Зарубежная музыка',
          href: '#'
        },
        {
          title: 'Русские песни',
          href: '#'
        }
      ],
      'collections' : [
        {
          title: 'Q-pop',
          href: '#'
        },
        {
          title: 'Музыка для свадеб',
          href: '#'
        },
        {
          title: 'Рингтоны',
          href: '#'
        },
      ],

  }
    
    
    const categories = (nameMenu) => {
        return MenuList[nameMenu].map((item, index) => {
          return <MenuItem
                    key={index}
                    item={item}
          />
      })
    }

    const result = () => {
        return nameCategories.map((obj, index) => {
          return <Block 
                      key={index}
                      categories={categories}
                      name={obj.nameRu}
                      nameBlock={obj.nameBlock}
                     
            />
        })
    }


    return <>
        <sidebar className="vanishIn">
            <div className='logo'>
              <img src='https://lmusic.kz/images/logo.png' />
            </div>
            {result()}
        </sidebar>
    </>
}

export default Sidebar