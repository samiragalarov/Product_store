const router = require('express').Router();
// const Product = require('../modules/Product')
const Basket = require('../modules/Basket')


const {
    verifyToken,
    verifyTokenAndAuthorization,
    verifyTokenAndAdmin,
} = require(".././middelware/middelware");




///add to baket
router.post("/addBasket/:id", verifyToken, async (req, res) => {
    console.log('vs')
    try {
        const basketItem = new Basket(req.body);
        const basket = await basketItem.save();
        res.status(200).json(basket);


    } catch (err) {
        console.log(err)
        res.status(500).json(err);

    }
})

router.get('/basketProducts/:id', verifyToken, async (req, res) => {
    try {

        const baskets = await Basket.find({ userId: req.params.id })
        console.log(baskets)
        res.status(200).json(baskets)


    } catch (err) {
        console.log(err)
        res.status(500).json(err);

    }
})

router.delete('/basketProductsdelete/:id', verifyToken, async (req, res) => {
    try {

        const basketsitem = await Basket.deleteMany({ ownerid: req.params.id })
        console.log(basketsitem)
        res.status(200).json(basketsitem)


    } catch (err) {
        console.log(err)
        res.status(500).json(err);

    }
})




module.exports = router
