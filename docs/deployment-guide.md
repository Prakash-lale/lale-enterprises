# Deployment Guide (GitHub Pages)

This guide explains how to host the Lale Enterprises website on GitHub Pages for free.

## Step 1: Configure `astro.config.mjs`
Ensure your configuration file has the correct `site` and `base` properties:

```js
export default defineConfig({
  site: 'https://laleenterprises.in', // Your actual site URL
  base: '/', // Change this if hosting on a subfolder (e.g., '/repo-name/')
  integrations: [
    react(),
    sitemap(), // Automatically generates sitemap-index.xml
  ],
});
```

## Step 2: Build the Site
Generate the production-ready static files:

```bash
npm run build
```

The output will be stored in the `dist/` folder.

## Step 3: Push to GitHub
1. Create a repository named `lale-enterprises` (or similar).
2. Initialize Git and push your code:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USER/repo.git
git push -u origin main
```

## Step 4: Enable GitHub Pages
1. Go to your repository settings on GitHub (**Settings** > **Pages**).
2. Under **Build and deployment** > **Source**, select **GitHub Actions**.
3. **Note**: You don't need to choose a template if you've already pushed the `.github/workflows/deploy.yml` file I created. GitHub will detect it automatically.
4. Go to the **Actions** tab to watch the build finish.

## Step 5: Custom Domain Setup
1. In the **Pages** settings, scroll down to **Custom domain**.
2. Type your domain (e.g., `www.laleenterprises.com`) and click **Save**.
3. **DNS Configuration**:
   - Go to your domain registrar (GoDaddy, Namecheap, etc.).
   - Create a `CNAME` record:
     - **Host**: `www`
     - **Value**: `yourusername.github.io`
   - Create `A` records for the apex domain (`@`):
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

## Step 6: Final Configuration Update
Once your custom domain is working, open `astro.config.mjs` one last time and update the `site` property:

```js
site: 'https://www.laleenterprises.com',
```

Then push the change to GitHub to trigger a final, SEO-optimized build.
