# Video Editing Portfolio — GitHub Pages Starter

This is a super-minimal starter for a free portfolio hosted on **GitHub Pages** with your **custom domain**.

## Quick start (5–10 min)

1. Create a GitHub account at https://github.com if you don’t have one.
2. Create a **new repository** named **`USERNAME.github.io`** (replace USERNAME with your GitHub username).
   - Keep it **Public**.
3. Upload the files from this folder to that repo (drag-and-drop in the web UI is fine).
4. Visit **Settings → Pages**. For a user site named `USERNAME.github.io`, GitHub Pages auto-publishes from the **`main`** branch. If you see a source dropdown, choose **main / root** and save.
5. Your site will be live at `https://USERNAME.github.io` in a minute or two.

## Use your custom domain

1. In your repo, go to **Settings → Pages → Custom domain** and enter **`www.yourdomain.com`**. Save.  
   - GitHub will create a `CNAME` file for you automatically.
2. In your domain registrar (e.g., Namecheap) DNS settings:
   - Create a **CNAME** record:  
     **Host**: `www` → **Value**: `USERNAME.github.io`
   - (Simpler) Set a URL redirect from the root `yourdomain.com` to `https://www.yourdomain.com`.
3. After DNS updates, return to **Settings → Pages** and click **Enforce HTTPS**.

## Customize

- Edit `index.html` with your name, bio, and video links.
- Replace the example YouTube/Vimeo embed with your reel.
- Drop three thumbnails into `/images` and rename them to `thumb1.jpg`, `thumb2.jpg`, `thumb3.jpg`.
- Tweak styles in `style.css`.

## Update your site

- Edit files in GitHub and click **Commit**.
- Changes go live automatically within a minute.

## Troubleshooting

- If the site doesn’t load, double-check the repo is **public** and named correctly: `USERNAME.github.io`.
- If your custom domain doesn’t work yet, DNS may need more time. Confirm the **CNAME** record for `www` is set to `USERNAME.github.io`.
- If HTTPS won’t enable, remove and re-add the custom domain in **Settings → Pages**, then try **Enforce HTTPS** again.
