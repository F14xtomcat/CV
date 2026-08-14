# Jonathan Dcruz — Portfolio

A personal portfolio site built with vanilla HTML5, CSS3, and JavaScript (no frameworks or libraries).

## Structure

```
index.html
css/style.css
js/script.js
images/
  profile-placeholder.svg
  project-iot.svg
  project-ml.svg
  project-ai.svg
```

## Before you push

1. Rename the repo folder / GitHub repo to `RollNo_Name_Portfolio` (e.g. `B23CS1139_JonathanDcruz_Portfolio`) — swap in your actual roll number.
2. Replace `profile-placeholder.svg` and the project thumbnails in `images/` with real photos/screenshots if you have them (optional — the placeholders work fine as-is).
3. Add your real resume PDF to the project and update the `href="Jonathan_Dcruz_Resume.pdf"` link in the Contact section of `index.html` to match its filename/path (or remove that link if you don't want to include a resume).
4. Update the `liveLink` / `repoLink` values in `js/script.js` for each project once you have real demo/repo URLs.

## Push to GitHub

```bash
cd RollNo_Name_Portfolio
git init
git add .
git commit -m "Initial commit: portfolio site"
git branch -M main
git remote add origin https://github.com/<your-username>/RollNo_Name_Portfolio.git
git push -u origin main
```

Make sure the repository is set to **Public** (Settings → General → Danger Zone → Change visibility, or set it when creating the repo).

## Deploy with GitHub Pages

1. On GitHub, open the repo → **Settings** → **Pages**.
2. Under "Build and deployment", set **Source** to `Deploy from a branch`.
3. Set **Branch** to `main` and folder to `/ (root)`, then **Save**.
4. Wait a minute, then your site will be live at:
   `https://<your-username>.github.io/RollNo_Name_Portfolio/`

## Submit

- Copy the GitHub Pages URL into Google Classroom under the assignment.
- Paste the same URL into the shared class Excel sheet.
- Do not submit a ZIP file or email the files — only the live link.
- Double-check the live link loads correctly before the deadline.
