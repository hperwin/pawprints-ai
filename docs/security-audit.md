# PawPrints AI -- Security Audit

*Conducted: 2026-03-27*

---

## 1. RLS Policy Audit

### Status: NEEDS ATTENTION

Supabase RLS must be enabled on every table in the public schema. Run the following query to verify:

```sql
SELECT schemaname, tablename
FROM pg_tables
WHERE schemaname = 'public'
AND tablename NOT IN (
  SELECT tablename FROM pg_tables t
  JOIN pg_class c ON c.relname = t.tablename
  WHERE c.relrowsecurity = true
);
```

**Action items:**
- [ ] Enable RLS on all public tables
- [ ] Verify policies restrict users to their own data (auth.uid() = user_id)
- [ ] Verify no UPDATE policies allow users to modify `role`, `is_admin`, or `plan` fields
- [ ] Verify storage bucket policies restrict uploads to authenticated users

### Recommended RLS policies:

```sql
-- Portraits table
CREATE POLICY "Users can view own portraits" ON public.portraits
  FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can insert own portraits" ON public.portraits
  FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can delete own portraits" ON public.portraits
  FOR DELETE USING (auth.uid() = user_id);

-- Profiles table
CREATE POLICY "Users can view own profile" ON public.profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
  FOR UPDATE USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id AND plan = OLD.plan);
```

---

## 2. API Key Scan

### Status: PASS (with notes)

**Scan command run:**
```bash
grep -rn "sk_live_\|sk_test_\|AIza\|supabase.*service_role\|secret.*=.*['\"]" \
  --include="*.ts" --include="*.tsx" --include="*.js" --include="*.json" \
  --exclude-dir=node_modules --exclude-dir=.git .
```

**Findings:**
- No Stripe secret keys found in client code
- No Supabase service role key found in client code
- Supabase anon key is properly exposed via VITE_SUPABASE_ANON_KEY (this is expected and safe)
- No Gemini API keys found in client code

**Action items:**
- [ ] Verify .env is in .gitignore
- [ ] Verify no .env files are tracked (git ls-files | grep .env)
- [ ] Ensure Gemini API calls are made server-side only (Supabase Edge Function or server endpoint)
- [ ] Never expose the Gemini API key in client-side JavaScript

---

## 3. Dependency Audit

### Status: RUN BEFORE DEPLOY

```bash
npm audit
npm audit --audit-level=high
```

**Action items:**
- [ ] Run npm audit and fix all critical/high vulnerabilities
- [ ] Update any packages with known CVEs
- [ ] Consider running `npx snyk test` for deeper analysis
- [ ] Review lockfile for dependency confusion attacks

---

## 4. Auth Flow Security

### Status: VERIFY

**Checklist:**
- [ ] Email confirmation is required on signup (Supabase Auth settings)
- [ ] Rate limiting is enabled on auth endpoints (Supabase Auth > Rate Limits)
- [ ] Password reset tokens expire (check Supabase settings, default: 1 hour)
- [ ] JWT access tokens expire (default: 1 hour, verify)
- [ ] Refresh tokens expire (default: 1 week, verify)
- [ ] If using OAuth, redirect URLs are locked to production domain only
- [ ] No user-accessible endpoint allows modifying `role`, `plan`, or `is_admin`

---

## 5. XSS Prevention

### Status: PASS

**Scan command:**
```bash
grep -rn "dangerouslySetInnerHTML" --include="*.tsx" --include="*.ts" src/
```

**Result:** No instances of dangerouslySetInnerHTML found.

React's default escaping handles all user input rendering. AI-generated content (portrait metadata, style names) is rendered as text, not HTML.

**Action items:**
- [ ] Never use dangerouslySetInnerHTML for user-generated or AI-generated content
- [ ] Sanitize any future markdown rendering with a library like DOMPurify

---

## 6. File Upload Security

### Status: NEEDS IMPLEMENTATION

The app allows image uploads for portrait generation. Security requirements:

**Client-side (currently implemented):**
- File type check: `file.type.startsWith("image/")`
- Implicit size limit via browser

**Server-side (needs implementation):**
- [ ] Validate MIME type server-side (do not trust client headers)
- [ ] Enforce maximum file size: 10MB for images
- [ ] Sanitize filenames: strip path traversal characters
- [ ] Store uploads in authenticated Supabase storage bucket (not public)
- [ ] Generate unique filenames (UUID) to prevent overwrites
- [ ] Scan uploaded images for embedded scripts (ImageMagick identify)

**Supabase storage policies needed:**
```sql
-- Only authenticated users can upload to their own folder
CREATE POLICY "Users upload to own folder" ON storage.objects
  FOR INSERT WITH CHECK (
    bucket_id = 'pet-photos' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

-- Only authenticated users can read their own uploads
CREATE POLICY "Users read own uploads" ON storage.objects
  FOR SELECT USING (
    bucket_id = 'pet-photos' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );
```

---

## 7. CSRF Protection

### Status: PASS

- Supabase handles CSRF for auth endpoints automatically
- All API calls use JWT bearer tokens (not cookies)
- No custom mutation endpoints exist yet that would need CSRF tokens
- When Stripe webhooks are added, must use `stripe.webhooks.constructEvent()` for signature verification

---

## 8. AI-Specific Security (OWASP AI Top 10)

### Status: LOW RISK

- **Prompt injection:** Users do not input text prompts; they upload images and select predefined styles. Prompt injection risk is minimal.
- **Model DoS:** Rate limiting must be implemented on the generation endpoint. Free tier is limited to 1 generation. Pro tier should have reasonable hourly limits (e.g., 50/hour).
- **Insecure output handling:** AI output is images, not text/HTML. No XSS risk from generated content.
- **Excessive agency:** AI has no database write access or admin capabilities.

**Action items:**
- [ ] Implement rate limiting on generation endpoint (50/hour for Pro, 1 total for free)
- [ ] Log generation requests for abuse detection
- [ ] Monitor costs per user to catch anomalies

---

## Summary

| Area | Status | Severity |
|------|--------|----------|
| RLS policies | Needs attention | **High** |
| API key exposure | Pass | Low |
| Dependencies | Run before deploy | **Medium** |
| Auth flow | Verify settings | **Medium** |
| XSS | Pass | Low |
| File upload | Needs implementation | **High** |
| CSRF | Pass | Low |
| AI security | Low risk | **Medium** |

**Critical action before production deploy:**
1. Enable RLS on all tables with proper policies
2. Implement server-side file upload validation
3. Run npm audit and fix critical/high issues
4. Verify auth settings in Supabase dashboard
5. Implement generation rate limiting
