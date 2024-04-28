const foodItemsReturn = {
    data: [
        {id:1, name: 'Arroz', price: 4.99},
        {id:2, name: 'Feijão', price: 8.12},
        {id:3, name: 'Farinha de Mandioca', price: 6.85},
        {id:4, name: 'Leite', price: 4.85},
        {id:5, name: 'Trigo', price: 5.49},
        {id:6, name: 'Ovos', price: 8.99},
     ]
}

export function getFoodItems() {
  return Promise.resolve(foodItemsReturn);
}