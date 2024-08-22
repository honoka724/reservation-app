const Product = require('./model/product')

class FakeDb {

    constructor() {
        this.products = [
                {
                coverimage:'./assets/img/phone-cover.jpg',
                name: 'Phone XL',
                price: 799,
                description: 'A large phone with one of the best screens',
                heading1:"Chalie Brown",
                heading2:"Woodstock",
                heading3:"Snoopy",
                headtxt1:'Nothing takes the taste out of peanut butter quite like unrequited love.',
                headtxt2:'All you need is love. But a little chocolate now and then does not hurt.',
                headtxt3:"What's the good of living if you don't try a few things?"
                },
                {
                coverimage:'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
                name: 'Phone Mini',
                price: 699,
                description: 'A great phone with one of the best cameras',
                heading1:"あああ",
                heading2:"いいい",
                heading3:"ううう",
                headtxt1:'applebananagrape',
                headtxt2:'hamburgerpotato',
                headtxt3:'tomatomatomatomatomato'
                },
                {
                coverimage:'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
                name: 'Phone Standard',
                price: 299,
                description: 'A standard phone.',
                heading1:"あああ",
                heading2:"いいい",
                heading3:"ううう",
                headtxt1:'applebananagrape',
                headtxt2:'hamburgerpotato',
                headtxt3:'tomatomatomatomatomato'
                },
                {
                coverimage:'data:image/gif;base64,R0lGODlhAQABAIAAAHd3dwAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==',
                name: 'Apple Watch',
                price: 399,
                description: 'A digital watch made by Apple',
                heading1:"あああ",
                heading2:"いいい",
                heading3:"ううう",
                headtxt1:'applebananagrape',
                headtxt2:'hamburgerpotato',
                headtxt3:'tomatomatomatomatomato'
                }
            ]
        }

        async initDb() {
            await this.cleanDb()
            this.pushProductsToDb()
        }

        async cleanDb() {
            await Product.deleteMany({})
        }

        pushProductsToDb() {
            this.products.forEach(
                (product) => {
                    const newProduct = new Product(product)
                    newProduct.save()
                }
            )
        }

        // seeDb() {
        //     this.pushProductsToDb()
        // }

    }

    module.exports = FakeDb

