import express from 'express'
import generateFakeData from '../../functions/generateFakeData.js'

const router = express.Router()

router.post('/getFakeData', (req, res) => {

    const {region, seed, mistakesCount, fakeDataCount, isFirstQuery, pageIndex} = req.body

    console.log(req.body)

    let result = generateFakeData(region, Number(seed), mistakesCount, fakeDataCount, pageIndex)

    return res.status(200).json({
        users: result, 
        isFirstQuery
    })


})

export default router
