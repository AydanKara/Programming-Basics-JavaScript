function petShop(input){

    let dog = Number(input[0])
    let cat = Number(input[1])
    let dogFood = 2.5
    let catFood = 4
    let cost = (dog * dogFood) + (cat * catFood)
    let result =`${cost} lv.`
    console.log(result)

}

petShop(['5','4'])