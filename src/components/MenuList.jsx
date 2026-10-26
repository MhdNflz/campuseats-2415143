import MenuItemCard from "./MenuItemCard.jsx";

function MenuList({items, onAdd, favourite, onToggleFavourite}) {
    return (
        <div className="grid">
            {items.map((item) => (
                <MenuItemCard 
                    key={item.id} 
                    item={item} 
                    onAdd={onAdd}
                    isFav ={favourite.includes(item.id)}
                    onToggleFavourite={onToggleFavourite}
                />
            ))}
        </div>
    )
}

export default MenuList