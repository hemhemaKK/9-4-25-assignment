function createInventoryItem(name,category,price){
    let items = {}
    items.name = name
    items.category = category
    items.price = price
    items.describeItem = function(){
        console.log(`Item:${name}, category:${category}, Price:${price}`)
    }
    return items
}

function addItemDiscount(inventoryItem, discount){
    inventoryItem.discountprice = inventoryItem.price - (inventoryItem.price*discount/100)
    inventoryItem.applyDiscount = function(){
        console.log(`Discounted Price for ${this.name}:${this.discountprice}`)
    }
    return inventoryItem
}

const item = createInventoryItem("Laptop", "Electronics", 1500);
item.describeItem();

const discountedItem = addItemDiscount(item, 10);
discountedItem.applyDiscount();