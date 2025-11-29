# PixelCore - Dijital Ajans Web Sitesi

PixelCore, Next.js 14 ve TypeScript ile geliştirilmiş modern bir dijital ajans web sitesidir.

## 🚀 Hızlı Başlangıç

### Gereksinimler

- **Node.js** 18.x veya üzeri
- **npm** veya **yarn** paket yöneticisi
- **Git** (projeyi indirmek için)

### Kurulum

1. **Projeyi İndirin**
   ```bash
   git clone https://github.com/egemenmain/PixelCore.git
   cd PixelCore
   ```

2. **Bağımlılıkları Yükleyin**
   ```bash
   npm install
   # veya
   yarn install
   ```

3. **Geliştirme Sunucusunu Başlatın**
   ```bash
   npm run dev
   # veya
   yarn dev
   ```

   Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## 📦 Production Build

### Build Oluşturma

```bash
npm run build
# veya
yarn build
```

### Production Sunucusunu Başlatma

```bash
npm start
# veya
yarn start
```

## 🌐 Hosting Seçenekleri

### 1. VPS/Cloud Sunucu (Node.js ile)

#### Adımlar:

1. **Sunucuya Bağlanın**
   ```bash
   ssh kullanici@sunucu-ip
   ```

2. **Node.js ve npm Kurulumu**
   ```bash
   # Ubuntu/Debian için
   curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```

3. **Projeyi Sunucuya Yükleyin**
   ```bash
   git clone https://github.com/egemenmain/PixelCore.git
   cd PixelCore
   npm install
   ```

4. **Build Oluşturun**
   ```bash
   npm run build
   ```

5. **PM2 ile Çalıştırın (Önerilen)**
   ```bash
   # PM2 kurulumu
   npm install -g pm2
   
   # Uygulamayı başlat
   pm2 start npm --name "pixelcore" -- start
   
   # Sistem açılışında otomatik başlat
   pm2 startup
   pm2 save
   ```

6. **Nginx Reverse Proxy Kurulumu**
   ```nginx
   server {
       listen 80;
       server_name yourdomain.com;
       
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

7. **SSL Sertifikası (Let's Encrypt)**
   ```bash
   sudo apt-get install certbot python3-certbot-nginx
   sudo certbot --nginx -d yourdomain.com
   ```

### 2. cPanel/Plesk (Shared Hosting)

#### cPanel için:

1. **Node.js App Oluşturun**
   - cPanel → Software → Setup Node.js App
   - Node.js versiyonu: 18.x seçin
   - Application root: `public_html` veya alt klasör
   - Application URL: domain'inizi seçin

2. **Projeyi Yükleyin**
   ```bash
   # SSH ile bağlanın veya File Manager kullanın
   cd ~/public_html
   git clone https://github.com/egemenmain/PixelCore.git .
   ```

3. **Bağımlılıkları Yükleyin**
   ```bash
   npm install
   ```

4. **Build Oluşturun**
   ```bash
   npm run build
   ```

5. **Start Script'i Güncelleyin**
   - cPanel Node.js App ayarlarında:
   - Application startup file: `server.js` (Next.js otomatik oluşturur)
   - Application mode: `production`

### 3. Docker ile Deploy

#### Dockerfile Oluşturun:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image, copy all the files and run next
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

#### Docker Compose:

```yaml
version: '3.8'
services:
  pixelcore:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    restart: unless-stopped
```

#### Çalıştırma:

```bash
docker build -t pixelcore .
docker run -p 3000:3000 pixelcore
```

### 4. Netlify Deploy

Proje zaten Netlify için yapılandırılmıştır:

1. **Netlify'a Giriş Yapın**
   - [https://app.netlify.com](https://app.netlify.com)

2. **Yeni Site Ekle**
   - "Add new site" → "Import an existing project"
   - GitHub repository'nizi seçin

3. **Build Ayarları**
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Netlify Next.js plugin otomatik yüklenir

4. **Deploy**
   - Netlify otomatik olarak deploy eder
   - Her GitHub push'unda otomatik yeniden deploy

### 5. Vercel Deploy

1. **Vercel CLI ile:**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Vercel Dashboard ile:**
   - [https://vercel.com](https://vercel.com) → New Project
   - GitHub repository'nizi import edin
   - Otomatik olarak Next.js algılanır ve deploy edilir

## ⚙️ Yapılandırma

### Site URL'sini Güncelleme

Kendi domain'inizi kullanmak için şu dosyaları güncelleyin:

1. **lib/metadata.ts**
   ```typescript
   url: "https://yourdomain.com"
   ```

2. **app/sitemap.ts**
   ```typescript
   const baseUrl = "https://yourdomain.com"
   ```

3. **app/robots.ts**
   ```typescript
   const baseUrl = "https://yourdomain.com"
   ```

### Environment Variables

Şu anda proje environment variable gerektirmiyor, ancak gelecekte eklenebilir. `.env.local` dosyası oluşturabilirsiniz:

```env
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## 📁 Proje Yapısı

```
PixelCore/
├── app/                    # Next.js App Router
│   ├── admin/             # Admin paneli
│   ├── blog/              # Blog sayfaları
│   ├── hakkimizda/        # Hakkımızda sayfaları
│   ├── hizmetler/         # Hizmetler sayfaları
│   └── ...
├── components/            # React bileşenleri
│   ├── ui/               # UI bileşenleri
│   └── ...
├── data/                 # Veri dosyaları
├── lib/                  # Yardımcı fonksiyonlar
├── public/               # Statik dosyalar
└── ...
```

## 🔧 Teknolojiler

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animasyonlar
- **Radix UI** - UI bileşenleri
- **Lucide React** - İkonlar

## 📝 Scripts

- `npm run dev` - Geliştirme sunucusu
- `npm run build` - Production build
- `npm start` - Production sunucusu
- `npm run lint` - ESLint kontrolü

## 🆘 Sorun Giderme

### Build Hataları

```bash
# node_modules'ü temizle ve yeniden yükle
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Port Zaten Kullanılıyor

```bash
# Farklı port kullan
PORT=3001 npm run dev
```

### Memory Limit Hatası

```bash
# Node.js memory limit'ini artır
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## 📞 Destek

Sorularınız için GitHub Issues kullanabilirsiniz.

## 📄 Lisans

Bu proje özel bir projedir.

---

**Not:** Production'a deploy etmeden önce admin şifrelerini değiştirmeyi unutmayın! (`app/admin/login/page.tsx`)

