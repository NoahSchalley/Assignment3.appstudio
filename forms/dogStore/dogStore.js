let dogsRUsItems = ["Crocheted Dog Toy $10.00", "Slow Feeder Bowl 14.00", "Pawz Grey Treat Jar $20.00", "Blue Sweet Dreams Thermal Pajamas $30.00", "Checker Chewy Vuiton Bowl $32.00", "Red Heart Sweater Dress $27.00", "Velvet Hair Bow - Sun Kissed $12.00", "Into the Wild Leash $27.00"]

btnShowProducts.onclick=function(){
  let Display = lblProductsAvailable.value 
  lblProductsAvailable.value = dogsRUsItems
}


let wishList = []

btnWishList.onclick=function() {
  let addition = inptNewItem.value
  wishList.push(inptNewItem.value)
  lblWishList.value = wishList
}
