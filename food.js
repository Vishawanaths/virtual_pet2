class Food{
    constructor(){
        var foodStock
        var lastFed
    }

    function preload(){
     foodobj = loadImage("images/Milk(1).png")

    }
    getFoodStock(){
    var foodStockref = database.ref('foodStock') 
    foodStockref.on("value",function(data){
       foodStock = data.val()
   })
    }
    updateFoodStock(stock){
    database.ref('/').update({
       foodStock:stock
    })
    }
    deductFood(){
     var foodIndex = "food"+foodStock
    database.ref(foodIndex).set({
        food:food
    })
    }
    display(){
    //var foodStock = this.body.foodStock
    }
}