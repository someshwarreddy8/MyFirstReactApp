import './CoreComp.css' 

const TabButtonComp = (prop) => {

    return (
        <>
            <li>
                <button className={prop.isSelected && 'active'} onClick={prop.onSelect}>{prop.children}</button>
            </li>
        </>
    )
}

export default TabButtonComp;