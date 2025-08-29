# Portfolio Images Folder

This folder contains images for the Visual Portfolio Showcase section on the homepage.

## Folder Structure

```
portfolio-images/
├── photography/
│   ├── featured/          # Main featured photography image
│   └── secondary/         # Secondary photography image
├── graphic-design/
│   ├── featured/          # Main featured graphic design image
│   └── secondary/         # Secondary graphic design image
└── README.md             # This file
```

## How to Update Images

### Photography Section
- **Featured Image**: Place your main photography showcase image in `photography/featured/`
- **Secondary Image**: Place your secondary photography image in `photography/secondary/`

### Graphic Design Section
- **Featured Image**: Place your main graphic design showcase image in `graphic-design/featured/`
- **Secondary Image**: Place your secondary graphic design image in `graphic-design/secondary/`

## Image Requirements

### Recommended Specifications:
- **Format**: JPG, PNG, or WebP
- **Size**: 800x600px minimum (will be automatically resized)
- **File Size**: Under 500KB for optimal loading
- **Aspect Ratio**: 4:3 or 16:9 works best

### File Naming:
- Use descriptive names like `nature-landscape.jpg` or `social-media-campaign.png`
- Avoid spaces in filenames (use hyphens or underscores)
- Keep names under 50 characters

## Current Images in Use:

### Photography:
- **Featured**: `images/photography/nature/hayden-creek-3.jpg`
- **Secondary**: `images/photography/portrait/IMG_7204.jpeg`

### Graphic Design:
- **Featured**: `images/graphic-design/social-media/12.png`
- **Secondary**: `images/graphic-design/design-work/grey-black-vintage-texture-album-cover-poster-2.png`

## To Update:

1. Add your new images to the appropriate folders
2. Update the image paths in `index.html` (lines 216, 247, 295, 326)
3. Update the alt text and descriptions as needed
4. Test the changes locally before deploying

## Notes:
- Images will be automatically optimized for web display
- Hover effects and overlays will be applied automatically
- Make sure images are high quality but web-optimized
