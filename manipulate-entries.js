//filterEntries: filters using both key and value, passed as an array ([k, v]).
function filterEntries(obj, condition) {
    return Object.fromEntries(
        Object.entries(obj)
            .filter(([k, v]) => condition([k, v])));
}

//mapEntries: changes the key, the value or both, passed as an array ([k, v]).
function mapEntries(obj, condition) {
    return Object.fromEntries(
        Object.entries(obj)
            .map(([k, v]) => condition([k, v])));
}

//reduceEntries: reduces the entries passing keys and values as an array ([k, v]).
function reduceEntries(obj, condition, i) {
    return Object.entries(obj)
        .reduce(condition, i);
}

//totalCalories: that will return the total calories of a cart.
function totalCalories(obj) {
    return Math.round(Object.entries(obj)
        .reduce((acc, [k, v]) => {
            return acc + (nutritionDB[k].calories) * (v / 100);
        }, 0) * 10) / 10;
}

//lowCarbs: that leaves only those items of the cart which have less than 50 grams of carbs after calculating the total amount.
function lowCarbs(obj) {
    return Object.fromEntries(
        Object.entries(obj)
            .filter(([k, v]) => (((nutritionDB[k].carbs || 0) * (v / 100)) < 50)));
}

//cartTotal: that will give you the right amount of calories, proteins and so on for each item in your grocery cart.
function cartTotal(obj) {
    return Object.fromEntries( //convert array back to object
        Object.entries(obj) //convert object to arr
            .map(([k, v]) => [k, //map goes thru each k-v pair of obj; but manipulate v of obj (grams in cart for a specific k)
                Object.fromEntries( //conv arr to object (to be put back into the v of obj/cart)
                    Object.entries(nutritionDB[k]) //access arr entries of nutritionDB matching k of obj
                        //.map(([nutrient, amount]) => [nutrient, (Math.round((amount * (v / 100)) * 10) / 10)]) // access k-v pairs of specific(k) nutritionDB, mult by v in obj/cart div by 100g
                        .map(([nutrient, amount]) => [nutrient, Number((amount * (v / 100)).toFixed(3))]) // access k-v pairs of specific(k) nutritionDB, mult by v in obj/cart div by 100g
                    )
            ])
    );
}
