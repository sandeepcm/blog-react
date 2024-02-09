const { Router } = require('express')
const router = Router()

router.get('/', (req, res, next) => {
  res.json({ message: 'This is the posts router' })
});

module.exports = router;