# Cristian Sbrolli Website

Static GitHub Pages website for a professional academic homepage with a separate publications page.

## Edit points

- Main content and links live in `assets/js/site-data.js`.
- Styling lives in `assets/css/styles.css`.
- Homepage markup is in `index.html`.
- Full publications page markup is in `publications/index.html`.
- The bundled CV is `assets/docs/Cristian_Sbrolli_CV.pdf`.

## Before publishing

1. Replace the placeholder portrait by saving your actual photo as `assets/img/profile-photo.jpg`.
2. Add your real `GitHub` and `LinkedIn` URLs in `assets/js/site-data.js`.
3. Replace the YouTube Music placeholders in `assets/js/site-data.js` with your actual playlist URLs.
4. If needed, update publication entries in `assets/js/site-data.js`.

## GitHub Pages setup

1. Create a new GitHub repository named `<your-username>.github.io`.
2. Upload the contents of this folder to the repository root.
3. Commit and push to the `main` branch.
4. In GitHub, open `Settings -> Pages`.
5. Under `Build and deployment`, choose `Deploy from a branch`.
6. Select branch `main` and folder `/ (root)`.
7. Save and wait for deployment.
8. Your site will be published at `https://<your-username>.github.io/`.

## Notes

- This site uses only static HTML, CSS, and JavaScript, so it works directly on GitHub Pages without a build step.
- A separate `publications/` page is already wired and uses the same shared data file as the homepage.
- The current ORCID link was inferred from public metadata and should be confirmed.
