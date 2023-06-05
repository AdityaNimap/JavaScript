let arr = [
    {id:1},
    {id:3},
    {id:1},
    {id:1},
    {id:2}
    ]
    
let final = arr.filter((item,index) => {
    return index === arr.findIndex((obj) => item.id === obj.id)
})
console.log(final)
