# How to Set Up Product Images

Your shopping platform is configured to use **local images** in an `images/` folder. Follow these steps:

## 📁 Folder Structure

```
shopping-platform/
├── images/
│   ├── earbuds.jpg
│   ├── cable.jpg
│   ├── stand.jpg
│   ├── mouse.jpg
│   ├── keyboard.jpg
│   ├── protector.jpg
│   ├── antivirus.jpg
│   └── vpn.jpg
├── index.html
├── style.css
└── script.js
```

## 🖼️ Download Images from Unsplash

Go to **https://unsplash.com** and download these images. Search for each product and download the image:

### Product Images to Download

1. **earbuds.jpg** — Search "wireless earbuds" on Unsplash
   - Download and save as `earbuds.jpg`

2. **cable.jpg** — Search "USB-C cable" on Unsplash
   - Download and save as `cable.jpg`

3. **stand.jpg** — Search "laptop stand" on Unsplash
   - Download and save as `stand.jpg`

4. **mouse.jpg** — Search "wireless mouse" on Unsplash
   - Download and save as `mouse.jpg`

5. **keyboard.jpg** — Search "mechanical keyboard" on Unsplash
   - Download and save as `keyboard.jpg`

6. **protector.jpg** — Search "screen protector" on Unsplash
   - Download and save as `protector.jpg`

7. **antivirus.jpg** — Search "cybersecurity" on Unsplash
   - Download and save as `antivirus.jpg`

8. **vpn.jpg** — Search "VPN security" on Unsplash
   - Download and save as `vpn.jpg`

## 📝 Steps

### 1. Create Images Folder

```bash
# In your shopping-platform folder, create a new folder:
mkdir images
```

### 2. Download Images

- Go to https://unsplash.com
- For each product, search the name
- Click "Download" → "Download Free"
- Save the image in the `images/` folder with the exact filename listed above

### 3. Verify Folder Structure

Your folder should look like:
```
shopping-platform/
├── images/
│   ├── earbuds.jpg
│   ├── cable.jpg
│   ├── stand.jpg
│   ├── mouse.jpg
│   ├── keyboard.jpg
│   ├── protector.jpg
│   ├── antivirus.jpg
│   └── vpn.jpg
├── index.html
├── style.css
├── script.js
└── README.md
```

### 4. Test Locally

1. Open `index.html` in your browser
2. You should see all 8 products with images displayed
3. Try filtering and adding to cart

### 5. Deploy

Once images are added and tested:

```bash
git add .
git commit -m "Add shopping platform with product images"
git push
```

GitHub Pages and Vercel will automatically deploy with the images!

## 🎨 Image Requirements

- **Format:** JPG, PNG (any image format works)
- **Size:** 300x300px (recommended) - but any size works
- **File Size:** Keep under 500KB per image for better performance
- **Filenames:** Must match exactly (earbuds.jpg, cable.jpg, etc.)

## 💡 Pro Tips

- Compress images before uploading: https://tinypng.com
- Use consistent image dimensions (all 300x300 or similar)
- Use descriptive filenames matching the product name
- Free image sources:
  - Unsplash.com ✅ (recommended)
  - Pexels.com
  - Pixabay.com

## ✅ Checklist

- [ ] Created `images/` folder in shopping-platform
- [ ] Downloaded all 8 product images
- [ ] Renamed images to match filenames exactly
- [ ] Verified folder structure matches above
- [ ] Tested locally (images show in browser)
- [ ] Pushed to GitHub with images
- [ ] Verified on GitHub Pages and Vercel

---

That's it! Your shopping platform is now ready to deploy with real product images! 🎉
