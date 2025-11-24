# EmailJS Code Updates - Exact Locations

## 📍 Update Locations in `public/contact.html`

### ✅ UPDATE #1: Your Email Address (Line 217)

**Current Code:**
```javascript
to_email: 'your-email@example.com' // Replace with your email address
```

**What to Change:**
Replace `'your-email@example.com'` with your actual email address where you want to receive notifications.

**Example:**
```javascript
to_email: 'jordan.tyler@example.com' // Your email address
```

---

### ✅ UPDATE #2: Service ID and Template ID (Line 222)

**Current Code:**
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

**What to Change:**
Replace both `'YOUR_SERVICE_ID'` and `'YOUR_TEMPLATE_ID'` with your actual EmailJS IDs.

**Example:**
```javascript
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

**Where to find these:**
- **Service ID**: EmailJS Dashboard → Email Services → Your Service → Service ID
- **Template ID**: EmailJS Dashboard → Email Templates → Your Template → Template ID

---

### ✅ UPDATE #3: Public Key (Line 168) - Already Set! ✅

**Current Code:**
```javascript
emailjs.init("fRYgNLPSGZoUt3YnC"); // Replace with your EmailJS Public Key
```

**Status:** ✅ You already have a Public Key set! If this is your actual key, you're good. If not, replace it with your Public Key from EmailJS Dashboard → Account → General → Public Key.

---

## 📋 Complete Update Checklist

- [ ] Line 217: Replace `'your-email@example.com'` with your email
- [ ] Line 222: Replace `'YOUR_SERVICE_ID'` with your Service ID
- [ ] Line 222: Replace `'YOUR_TEMPLATE_ID'` with your Template ID
- [ ] Line 168: Verify Public Key is correct (already appears to be set)

---

## 🎯 Quick Reference

**Line 168:** Public Key (already set)
```javascript
emailjs.init("fRYgNLPSGZoUt3YnC");
```

**Line 217:** Your Email Address
```javascript
to_email: 'your-email@example.com'  // ← CHANGE THIS
```

**Line 222:** Service ID and Template ID
```javascript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
//            ↑ CHANGE THIS    ↑ CHANGE THIS
```

---

## 📝 Example of Complete Updated Code

After updates, lines 217 and 222 should look like this:

```javascript
// Line 217
to_email: 'jordan.tyler@example.com' // Your actual email

// Line 222
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

---

## ⚠️ Important Notes

1. **Keep the quotes** - All values must be in quotes: `'your-value'`
2. **No spaces** - Don't add extra spaces inside the quotes
3. **Case sensitive** - Service IDs and Template IDs are case-sensitive
4. **Test after updates** - Fill out the form and check your email

---

## 🐛 Troubleshooting

**Not receiving emails?**
- Check browser console (F12) for errors
- Verify all three values are correct
- Make sure your EmailJS service is connected
- Check spam folder

**Getting errors?**
- Double-check quotes are correct
- Verify IDs match exactly (copy-paste from EmailJS dashboard)
- Make sure Public Key is correct

