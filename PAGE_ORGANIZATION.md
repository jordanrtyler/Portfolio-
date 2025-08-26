# Page Organization - Jordan Tyler Portfolio

## 🗂️ **New Organization Structure**

Everything that shows up on one page is now organized under the same folder, keeping CSS and HTML separate as requested.

---

## 📁 **Main Site Pages**

### **🏠 Home Page**
```
index.html          (Main home page)
styles.css          (Main site styles)
script.js           (Main site JavaScript)
favicon.svg         (Site favicon)
```

### **👤 About Page**
```
about.html          (About page content)
styles.css          (Main site styles - shared)
script.js           (Main site JavaScript - shared)
```

### **🛠️ Services Page**
```
services.html       (Services page content)
styles.css          (Main site styles - shared)
script.js           (Main site JavaScript - shared)
```

### **📚 Portfolio Page**
```
portfolio.html      (Portfolio page content)
styles.css          (Main site styles - shared)
script.js           (Main site JavaScript - shared)
```

### **📞 Contact Page**
```
contact.html        (Contact page content)
styles.css          (Main site styles - shared)
script.js           (Main site JavaScript - shared)
```

---

## 🖼️ **Gallery Pages (Self-Contained)**

### **📸 Photography Gallery Page**
```
pages/photography-gallery/
├── index.html      (All 29 photography images displayed)
├── gallery.css     (All photography gallery styling)
├── gallery.js      (All photography gallery functionality)
└── README.md       (Page documentation)
```

**What's Included:**
- **29 Total Images** (Nature: 24, Portrait: 3, Storytelling: 2)
- **Category Filtering** (Nature, Portrait, Storytelling)
- **Lightbox Functionality** (Click to view full-size)
- **Responsive Design** (Mobile and desktop optimized)
- **Navigation** (Back to main site)

### **🎨 Graphic Design Gallery Page**
```
pages/graphic-design-gallery/
├── index.html      (All 12 graphic design images displayed)
├── gallery.css     (All graphic design gallery styling)
├── gallery.js      (All graphic design gallery functionality)
└── README.md       (Page documentation)
```

**What's Included:**
- **12 Total Images** (Social Media: 10, Design Work: 2)
- **Category Filtering** (Social Media, Design Work)
- **Lightbox Functionality** (Click to view full-size)
- **Responsive Design** (Mobile and desktop optimized)
- **Navigation** (Back to main site)

---

## 📖 **Case Study Pages**

### **💄 Imperial Beauty Case Study**
```
case-studies/ImperialBeauty/
├── index.html      (Case study content)
└── case-study.css  (Case study specific styling)
```

### **🌐 Website Design Case Study**
```
case-studies/website-design/
├── index.html      (Case study content)
└── case-study.css  (Case study specific styling)
```

---

## 🔗 **Navigation Structure**

### **Main Site Navigation**
```
Home → About → Services → Portfolio → Contact
```

### **Gallery Access**
```
Services Page → Photography Gallery (29 images)
Services Page → Graphic Design Gallery (12 images)
```

### **Case Study Access**
```
Portfolio Page → Imperial Beauty Case Study
Portfolio Page → Website Design Case Study
```

---

## 📊 **Page Summary**

### **Pages with Multiple Images Displayed:**
1. **Photography Gallery**: 29 images (self-contained page)
2. **Graphic Design Gallery**: 12 images (self-contained page)

### **Pages with No Direct Images:**
1. **Home Page**: CSS graphics and icons only
2. **About Page**: CSS graphics and icons only
3. **Services Page**: CSS graphics and icons only
4. **Portfolio Page**: CSS graphics and styling only
5. **Contact Page**: CSS graphics and icons only
6. **Case Study Pages**: CSS graphics and styling only

---

## 🎯 **Benefits of This Organization**

### **✅ What's Organized Together:**
- **Each page folder** contains everything needed for that page
- **CSS and HTML remain separate** as requested
- **All images for one page** are in the same location
- **Related functionality** is grouped together

### **✅ Easy to Manage:**
- **Find any page** quickly in its dedicated folder
- **Update page content** without affecting other pages
- **Maintain page-specific styles** independently
- **Debug page functionality** in isolation

### **✅ Clear Structure:**
- **Main site pages** in root directory
- **Gallery pages** in dedicated folders
- **Case studies** in their own folders
- **Shared resources** clearly identified

---

## 🚀 **How to Use This Organization**

### **For Development:**
1. **Edit page content**: Go to the specific page folder
2. **Update styles**: Modify the page-specific CSS file
3. **Change functionality**: Edit the page-specific JavaScript
4. **Add new pages**: Create new folders following the same pattern

### **For Maintenance:**
1. **Find page issues**: Check the specific page folder
2. **Update page content**: All related files are together
3. **Test page functionality**: Everything needed is in one place
4. **Deploy page changes**: Update the entire page folder

### **For Organization:**
1. **Keep related files together**: Each page has its own folder
2. **Maintain separation**: CSS and HTML stay separate
3. **Easy navigation**: Clear folder structure
4. **Scalable system**: Easy to add new pages

