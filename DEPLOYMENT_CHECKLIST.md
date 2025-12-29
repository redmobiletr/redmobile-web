# Pre-Launch Deployment Checklist

## ✅ Security Verification

### 1. Environment Variables
- [ ] `.env` file created with `REACT_APP_FORMSPREE_ENDPOINT`
- [ ] `.env` is in `.gitignore` (not committed)
- [ ] Vercel environment variables configured:
  - `REACT_APP_FORMSPREE_ENDPOINT=https://formspree.io/f/mpqzbqqa`

### 2. Security Headers
- [ ] Deploy to Vercel
- [ ] Verify headers using https://securityheaders.com/
- [ ] Check browser DevTools → Network → Response Headers:
  - [ ] `X-Content-Type-Options: nosniff`
  - [ ] `X-Frame-Options: DENY`
  - [ ] `Content-Security-Policy` present
  - [ ] `Strict-Transport-Security` present
  - [ ] `Referrer-Policy` present

### 3. CSP Violations Check
- [ ] Open browser DevTools → Console
- [ ] Navigate through entire site
- [ ] Check for CSP violation errors
- [ ] Verify:
  - [ ] Google Fonts load correctly
  - [ ] Formspree submissions work
  - [ ] Images load correctly
  - [ ] No inline script errors

### 4. Formspree Configuration
- [ ] Login to Formspree dashboard: https://formspree.io/forms
- [ ] Verify form ID: `mpqzbqqa`
- [ ] Configure email recipient: `info@redmobile.com.tr`
- [ ] Enable email notifications
- [ ] Enable rate limiting (recommended: 5/hour per IP)
- [ ] Enable spam filtering
- [ ] (Optional) Configure reCAPTCHA v3

### 5. Form Testing
- [ ] Test form submission end-to-end
- [ ] Verify email received at `info@redmobile.com.tr`
- [ ] Check email format and content
- [ ] Verify Reply-To header works
- [ ] Test honeypot (fill hidden field - should silently fail)
- [ ] Test KVKK consent requirement
- [ ] Test validation (empty fields, invalid email)
- [ ] Test loading state ("Gönderiliyor...")
- [ ] Test success message
- [ ] Test error handling

### 6. Console Logs Verification
- [ ] Open browser DevTools → Console
- [ ] Navigate and use the form
- [ ] Verify NO PII is logged:
  - [ ] No user names
  - [ ] No email addresses
  - [ ] No phone numbers
  - [ ] No message content
- [ ] Only technical errors (if any) should appear

### 7. HTTPS/TLS
- [ ] Site loads only over HTTPS
- [ ] HTTP redirects to HTTPS automatically
- [ ] HSTS header present and working
- [ ] SSL certificate valid (Vercel handles this)

### 8. Dependency Security
- [ ] Run `npm audit` locally
- [ ] Review moderate+ severity issues
- [ ] Fix or document any unresolved vulnerabilities
- [ ] Update outdated packages if safe

## 📋 Post-Deployment Verification

### Immediate (Within 24 hours)
- [ ] Monitor Formspree dashboard for submissions
- [ ] Check email delivery to info@redmobile.com.tr
- [ ] Verify no CSP violations in browser console
- [ ] Test on multiple browsers (Chrome, Firefox, Safari)
- [ ] Test on mobile devices
- [ ] Verify security headers using online tools

### First Week
- [ ] Monitor spam submissions in Formspree
- [ ] Review form submission patterns
- [ ] Check for any CSP violation reports
- [ ] Verify rate limiting is working
- [ ] Monitor error rates

### Ongoing
- [ ] Run `npm audit` monthly
- [ ] Update dependencies quarterly
- [ ] Review security headers annually
- [ ] Monitor Formspree usage and limits

## 🔧 Quick Commands

### Security Audit
```bash
npm run audit
npm run security:check
```

### Build Test
```bash
npm run build
# Test the build locally
npx serve -s build
```

### Environment Variable Check
```bash
# Verify .env is not committed
git status
# Should NOT show .env file
```

## 🚨 If Issues Found

### CSP Violations
1. Check browser console for specific violations
2. Update `vercel.json` CSP policy
3. Redeploy and retest

### Form Not Working
1. Check Formspree dashboard for errors
2. Verify environment variable in Vercel
3. Check browser console for errors
4. Verify Formspree endpoint is correct

### Security Headers Missing
1. Verify `vercel.json` is in project root
2. Check Vercel deployment logs
3. Ensure file is committed to repository

## 📞 Support Resources

- **Formspree Docs:** https://help.formspree.io/
- **Vercel Docs:** https://vercel.com/docs
- **Security Headers Test:** https://securityheaders.com/
- **CSP Evaluator:** https://csp-evaluator.withgoogle.com/

---

**Last Updated:** 2024  
**Status:** Ready for deployment after checklist completion

