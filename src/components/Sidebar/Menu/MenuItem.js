const MenuItem = ({item}) => {
    return <li>
        <a href={item.href}>
            {item.title}
        </a>
    </li>
}

export default MenuItem