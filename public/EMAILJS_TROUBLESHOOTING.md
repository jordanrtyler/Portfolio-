# EmailJS Troubleshooting Guide

## Common Issues and Solutions

### 1. Check Browser Console for Errors

**How to check:**
1. Open your contact form page
2. Press `F12` (or `Cmd+Option+I` on Mac) to open Developer Tools
3. Click on the **Console** tab
4. Try submitting the form
5. Look for any red error messages

**What to look for:**
- `EmailJS library not loaded!` - Library didn't load properly
- `400` errors - Invalid request/configuration
- `401` errors - Authentication failed (wrong Public Key)
- `404` errors - Service or Template not found

---

### 2. Verify EmailJS Configuration

**Check these in your EmailJS Dashboard:**

#### Public Key (Line 168)
- Go to EmailJS Dashboard → Account → General
- Copy your Public Key
- Verify it matches: `fRYgNLPSGZoUt3YnC`

#### Service ID (Line 219)
- Go to EmailJS Dashboard → Email Services
- Find your service → Click on it
- Copy the Service ID
- Verify it matches: `service_2fxt49o`
- **Important:** Make sure your service is **connected** and **active**

#### Template ID (Line 219)
- Go to EmailJS Dashboard → Email Templates
- Find your template → Click on it
- Copy the Template ID
- Verify it matches: `template_kvyjuov`

---

### 3. Check Email Service Connection

**In EmailJS Dashboard:**
1. Go to **Email Services**
2. Click on your service (`service_2fxt49o`)
3. Verify it shows as **"Connected"** (green status)
4. If not connected:
   - Click **"Reconnect"** or **"Connect"**
   - Follow the setup instructions for your email provider
   - For Gmail, you may need to use an App Password

---

### 4. Verify Email Template Variables

**Your template must include these variables:**
- `{{from_name}}`
- `{{from_email}}`
- `{{company}}`
- `{{service}}`
- `{{message}}`

**To check:**
1. Go to EmailJS Dashboard → Email Templates
2. Open your template (`template_kvyjuov`)
3. Verify all variables are present
4. Test the template using the "Test" button

---

### 5. Check Email Quota

**Free tier limits:**
- 200 emails per month
- If you've exceeded this, emails won't send

**To check:**
- Go to EmailJS Dashboard → Account
- Check your usage/quotas

---

### 6. Test EmailJS Directly

**Add this test code temporarily to check if EmailJS works:**

```javascript
// Test EmailJS connection
emailjs.send('service_2fxt49o', 'template_kvyjuov', {
    from_name: 'Test',
    from_email: 'test@example.com',
    company: 'Test Company',
    service: 'Test Service',
    message: 'This is a test message'
})
.then(function(response) {
    console.log('Test SUCCESS!', response);
}, function(error) {
    console.error('Test FAILED!', error);
});
```

---

### 7. Common Error Codes

| Error Code | Meaning | Solution |
|------------|---------|----------|
| 400 | Bad Request | Check template variables match |
| 401 | Unauthorized | Verify Public Key is correct |
| 404 | Not Found | Check Service ID and Template ID |
| 429 | Too Many Requests | You've exceeded your quota |
| 500 | Server Error | EmailJS service issue, try again later |

---

### 8. Gmail-Specific Issues

**If using Gmail:**
- You may need to enable "Less secure app access" OR
- Use an App Password instead of your regular password
- Go to Google Account → Security → App Passwords
- Generate an app password and use it in EmailJS

---

### 9. Check Spam Folder

**Sometimes emails go to spam:**
- Check your spam/junk folder
- Check EmailJS Dashboard → Email Logs to see if emails were sent
- The logs will show delivery status

---

### 10. Verify Form Data

**Check that form data is being collected correctly:**

Open browser console and add this before the emailjs.send:

```javascript
console.log('Form Data:', formData);
console.log('Template Params:', templateParams);
```

This will show you exactly what data is being sent.

---

## Step-by-Step Debugging

1. **Open browser console** (F12)
2. **Submit the form**
3. **Check for errors** in console
4. **Check EmailJS Dashboard** → Email Logs
5. **Verify all IDs** match your dashboard
6. **Test template** in EmailJS dashboard
7. **Check service connection** status
8. **Verify email quota** hasn't been exceeded

---

## Still Not Working?

1. **Double-check all IDs** - Copy-paste directly from EmailJS dashboard
2. **Test template in EmailJS** - Use the "Test" button in dashboard
3. **Check EmailJS status page** - https://status.emailjs.com/
4. **Try a different email service** - Test with a different provider
5. **Contact EmailJS support** - They can help debug account issues

---

## Quick Checklist

- [ ] Public Key is correct
- [ ] Service ID is correct
- [ ] Template ID is correct
- [ ] Email service is connected
- [ ] Template has all required variables
- [ ] Not exceeded email quota
- [ ] Browser console shows no errors
- [ ] EmailJS library loads (check Network tab)
- [ ] Form data is being collected correctly

