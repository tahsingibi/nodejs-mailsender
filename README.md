# Node.js Mail Sender

Bu proje, belirlenen bir HTML dosyasını SMTP sunucusu üzerinden e-posta olarak göndermek için Node.js kullanır. Proje, `.env` dosyasındaki ayarlarla birlikte Nodemailer kütüphanesini kullanarak çalışır.

# Kurulum

`npm install` or `yarn install`

## .env dosyası

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=gonderici@gmail.com
SMTP_PASS=uygulama-ozel-sifresi
FROM_EMAIL=gonderici@gmail.com
TO_EMAIL=alici@gmail.com
SUBJECT=E-posta Konusu
```

## Start

`npm run send`or `yarn send`
