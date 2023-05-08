// Объект добавляется в экземпляр Vue
var vm = new Vue({
    el: '#configurator',
    data: {
        steps: [
            {
                id: 0,
                isCompleated: false,
                isActive: true,
                name: "Модель и комплектация"
            },
            {
                id: 1,
                isCompleated: false,
                isActive: false,
                name: "Цвет и диски"
            },
            {
                id: 2,
                isCompleated: false,
                isActive: false,
                name: "Интерьер"
            },
            {
                id: 3,
                isCompleated: false,
                isActive: false,
                name: "Автопилот"
            },
            {
                id: 4,
                isCompleated: false,
                isActive: false,
                name: "Оформление заказа"
            }
        ],
        params: [
            {
                range: 663,
                measuring: 'км',
                title: 'Запас хода'
            },
            {
                range: 250,
                measuring: 'км/ч',
                title: 'Макс скорость'
            },
            {
                range: 3.1,
                measuring: 'сек',
                title: 'Разгон от 0 - 100'
            }
        ]
    }
})