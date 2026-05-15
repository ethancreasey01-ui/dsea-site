# DSEA Site — Claude Context

## Project
Dynamic Solutions Electrical & Aircon — local trades business, Cranbourne, South-East Melbourne.

**Stack**: React SPA · Vite · Tailwind CSS · Framer Motion · Vercel  
**Repo**: https://github.com/ethancreasey01-ui/dsea-site  
**Live domain**: https://www.dsea.com.au  
**Vercel team**: ethans-projects-9ae33fde · Project ID: prj_wUU4wmGnkK8iiHzYgat4SSF056IU

## Deploy
Push to `main` → Vercel auto-deploys to production. No manual steps needed.  
Use Vercel MCP (`list_deployments`) to confirm state is READY after pushing.

## Google Ads
**Account**: 359-788-5390 (elliot.a.bradbury@hotmail.com)  
**Tag ID**: AW-16909323459

| Conversion | Label | Where it fires |
|---|---|---|
| Calls From LP | `dMZyCK3Py7EaEMOZ__4-` | `App` useEffect on mount |
| LP Enquiry | `dfGvCO39ybEaEMOZ__4-` | `handleSubmit` after Formspree fetch resolves |

**Rule**: Never put Google snippets in `index.html` that need to interact with DOM content — the page is an empty `<div id="root">` when those run. Use `useEffect` instead.

## Contact Form
Formspree endpoint: `https://formspree.io/f/xbdzybga`  
Handled in `Contact` component → `handleSubmit`. Fires LP Enquiry conversion after successful fetch.

## Performance Standards
- Videos: compress with ffmpeg before committing. Target <1MB each.  
  `ffmpeg -i in.mp4 -vcodec libx264 -crf 28 -preset fast -vf "scale='min(720,iw)':-2" -an -movflags +faststart out.mp4`
- Gallery: only set `src` on active video ±2. Use `loadedIndices` Set pattern. `preload="metadata"` for non-active, `preload="auto"` for active.
- Images below the fold: `loading="lazy"`
- Canonical URL: always `https://www.dsea.com.au/` — never the Vercel preview URL

## Key Files
- `index.html` — Google tag base snippet, canonical URL, meta tags
- `src/App.jsx` — entire site (single file). Google Ads useEffect at top of `App()`. Gallery component ~line 1436. Contact component ~line 1797.

## Launch Checklist (for reference)
- [ ] Canonical URL points to production domain
- [ ] Google tag base snippet in `index.html` head
- [ ] Phone swap snippet in `App` useEffect
- [ ] Form conversion event fires after successful submit
- [ ] All videos compressed <1MB
- [ ] Gallery uses `loadedIndices` lazy loading
- [ ] `loading="lazy"` on below-fold images
- [ ] Test with ad blocker OFF + Tag Assistant
