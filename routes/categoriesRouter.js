const express = require('express');

const router = express.Router();


router.get('/:catId/products/:productId', (req, res) => {
  const {catId, productId} = req.params;
  res.json(
    {
      catId,
      productId
    })
})

module.exports = router;
