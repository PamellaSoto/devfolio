import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

const app = express()

const allowedOrigin = (process.env.CORS_ORIGIN || '')
  .split(',')
  .filter(Boolean)
app.use(cors({ origin: allowedOrigin.length ? allowedOrigin : true }))

app.use(express.json())

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
})

app.post('/api/contact', async (req, res) => {
  const { name, email, message, _honey } = req.body
  if (_honey) return res.status(400).send('Spam detected. Silly goose')

  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      replyTo: email,
      subject: `Nova mensagem de ${name} pelo site`,
      html: `Nome: ${name}<br/>Email: ${email}<br/>Mensagem: ${message}`,
    })
    res.json({ ok: true })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false, error: 'Erro ao enviar email' })
  }
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Servidor rodando na ${PORT}`))
