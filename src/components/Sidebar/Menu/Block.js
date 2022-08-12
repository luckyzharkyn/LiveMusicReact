const Block = ({categories, name, nameBlock}) => {
    return <div className='menu'>
        <div className="nameCategories">{name}</div>
        <ul>
        {categories(nameBlock)}
        </ul>
    </div>
}

export default Block