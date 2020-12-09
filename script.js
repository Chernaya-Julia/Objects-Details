const magicBook = {
    recipes: {
        golem: {
            bone: 10,
            stone: 100,
            nail: 100,
            poo: 53
        },
        littleDevil: {
            lava: 10,
            evil: 999
        },
    },
};

const kitchen = {
    bone: 999,
    stone: 999,
    nail: 999,
    poo: 999,
    lava: 999,
    evil: 999,
    kettle: { 
        material: 'metal',
        ingridients: {},
    },
    addIngridientToKettle(nameOfIngridient, amount) {
        var realAmount;
        // Проверка наличия на "кухне" достаточного количества компонентов. Если их недостаточно - то добавим только то количество, которое есть на "кухне"
        if (this[nameOfIngridient] >= amount) {
            realAmount = amount;
        } else {
            realAmount = this[nameOfIngridient];
        }
        // Добавление компонента (если свойства нет - создадим и добавим, если есть - то увеличим количество)
        if (this.kettle.ingridients[nameOfIngridient] == undefined) {
            this.kettle.ingridients[nameOfIngridient] = realAmount;
        } else {
            this.kettle.ingridients[nameOfIngridient] = this.kettle.ingridients[nameOfIngridient]+realAmount;
        }
        this[nameOfIngridient] = this[nameOfIngridient]-realAmount;
    },
    cook(recipe) {
        for (key in recipe) {
            if (recipe[key] != this.kettle.ingridients[key]) {
                console.log('Неверное количество ингредиентов');
                return;
            }
        }
        console.log('ОК');
    },
};

// Добавляем компоненты для приготовления Голема
kitchen.addIngridientToKettle('bone',10);
kitchen.addIngridientToKettle('stone',100);
kitchen.addIngridientToKettle('nail',100);
kitchen.addIngridientToKettle('poo',53);

kitchen.cook(magicBook.recipes.golem);

console.log(kitchen);