import path from 'path'
import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'))
})

app.listen(process.env.PORT || 3000, () => { console.log('Listening...') })

export default app