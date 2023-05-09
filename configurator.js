// Объект добавляется в экземпляр Vue
var vm = new Vue({
    el: '#configurator',
    data: {
        selectedModelKey: 's',
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
        models: [
            {
                name: "Tesla Model S",
                key: 's',
                colors: {
                    selected: 0,
                    items: [
                        {
                            code: "#000",
                            name: "Черный",
                            price: '0 €',
                            id: 0
                        },
                        {
                            code: "#00f",
                            name: "Синий",
                            price: '1 500 €',
                            id: 1
                        }
                    ]
                },
                complects: {
                    selected: 'longrange',
                    items: [
                        {
                            name: 'Long range',
                            key: 'longrange',
                            price: '99 400 €',
                            params: [
                                {
                                    range: 652,
                                    measuring: 'км',
                                    title: 'Запас хода'
                                },
                                {
                                    range: 250,
                                    measuring: 'км/ч',
                                    title: 'Макс скорость'
                                },
                                {
                                    range: 3.2,
                                    measuring: 'сек',
                                    title: 'Разгон от 0 - 100'
                                }
                            ]
                        },
                        {
                            name: 'Plaid',
                            key: 'plaid',
                            price: '127 980 €',
                            params: [
                                {
                                    range: 628,
                                    measuring: 'км',
                                    title: 'Запас хода'
                                },
                                {
                                    range: 322,
                                    measuring: 'км/ч',
                                    title: 'Макс скорость'
                                },
                                {
                                    range: 2.1,
                                    measuring: 'сек',
                                    title: 'Разгон от 0 - 100'
                                }
                            ]
                        }
                    ]
                }
                
            },
            {
                name: "Tesla Model 3",
                key: '3',
                complects: {
                    selected: 'standartplus',
                    items: [
                        {
                            name: 'Standart +',
                            key: 'standartplus',
                            price: '58 755 €',
                            params: [
                                {
                                    range: 423,
                                    measuring: 'км',
                                    title: 'Запас хода'
                                },
                                {
                                    range: 225,
                                    measuring: 'км/ч',
                                    title: 'Макс скорость'
                                },
                                {
                                    range: 5.3,
                                    measuring: 'сек',
                                    title: 'Разгон от 0 - 100'
                                }
                            ]
                        },
                        {
                            name: 'Long range',
                            key: 'longrange',
                            price: '67 350 €',
                            params: [
                                {
                                    range: 568,
                                    measuring: 'км',
                                    title: 'Запас хода'
                                },
                                {
                                    range: 233,
                                    measuring: 'км/ч',
                                    title: 'Макс скорость'
                                },
                                {
                                    range: 4.2,
                                    measuring: 'сек',
                                    title: 'Разгон от 0 - 100'
                                }
                            ]
                        },
                        {
                            name: 'Perfomance',
                            key: 'perfomance',
                            price: '72 270 €',
                            params: [
                                {
                                    range: 507,
                                    measuring: 'км',
                                    title: 'Запас хода'
                                },
                                {
                                    range: 261,
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
                    ]
                }
                
            },
            {
                name: "Tesla Model X",
                key: 'x',
                complects: {
                    selected: 'longrange',
                    items: [
                        {
                            name: 'Long range',
                            key: 'longrange',
                            price: '109 580 €',
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
                        },
                        {
                            name: 'Plaid',
                            key: 'plaid',
                            price: '120 450 €',
                            params: [
                                {
                                    range: 627,
                                    measuring: 'км',
                                    title: 'Запас хода'
                                },
                                {
                                    range: 262,
                                    measuring: 'км/ч',
                                    title: 'Макс скорость'
                                },
                                {
                                    range: 1.99,
                                    measuring: 'сек',
                                    title: 'Разгон от 0 - 100'
                                }
                            ]
                        }
                    ]
                }
                
            },
            {
                name: "Tesla Model Y",
                key: 'y',
                complects: {
                    selected: 'longrange',
                    items: [
                        {
                            name: 'Long range',
                            key: 'longrange',
                            price: '72 700 €',
                            params: [
                                {
                                    range: 507,
                                    measuring: 'км',
                                    title: 'Запас хода'
                                },
                                {
                                    range: 217,
                                    measuring: 'км/ч',
                                    title: 'Макс скорость'
                                },
                                {
                                    range: 4.8,
                                    measuring: 'сек',
                                    title: 'Разгон от 0 - 100'
                                }
                            ]
                        },
                        {
                            name: 'Perfomance',
                            key: 'perfomance',
                            price: '80 000 €',
                            params: [
                                {
                                    range: 480,
                                    measuring: 'км',
                                    title: 'Запас хода'
                                },
                                {
                                    range: 249,
                                    measuring: 'км/ч',
                                    title: 'Макс скорость'
                                },
                                {
                                    range: 3.5,
                                    measuring: 'сек',
                                    title: 'Разгон от 0 - 100'
                                }
                            ]
                        }
                    ]
                }
                
            },
        ]
    },
    computed: {
        computedModel() {
            const model = this.models.filter(model => model.key == this.selectedModelKey);
            return model.length ? model[0] : [];
        },
        computedComplect() {
            const complect = this.computedModel.complects.items.filter(complect => complect.key == this.computedModel.complects.selected);
            return complect.length ? complect[0] : [];
        },
        curentStepIndex() {
            const curentStep = this.steps.filter(step => step.isActive);
            console.log(curentStep);
            return curentStep.length ? curentStep[0].id : 0;
        }
    },
    methods: {
        nextStep() {
            const index = this.curentStepIndex;

            if (index + 1 > this.steps.length - 1) return;

            this.steps[index + 1].isActive = true;
            this.steps[index].isCompleated = true;
            this.steps[index].isActive = false;
        },
        prevStep() {
            const index = this.curentStepIndex;

            if (index < 1) return;

            this.steps[index - 1].isActive = true;
            this.steps[index - 1].isCompleated = false;
            this.steps[index].isActive = false;
        }
    }
})