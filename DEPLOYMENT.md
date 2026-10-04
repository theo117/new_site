# Deploy the redesign to GitHub Pages

Prepared for https://www.teodordev.co.za. This package does not publish anything by itself.

1. On GitHub, open the existing website repository and check Settings > Pages.
   Note the publishing branch and folder. If it uses a custom Actions workflow,
   keep that workflow and put the files in its existing source directory.
2. Back up the current website files outside the repository. In your local clone,
   use the publishing branch and update it with `git pull --ff-only` before copying.
   Handle any existing uncommitted changes first.
3. Extract this ZIP. Copy its CONTENTS into the folder that currently contains
   the live site's index.html, replacing matching files. The ZIP contains the
   contents of the publishing folder, so do not add an extra dist/ folder.
   Keep your .git directory, .github workflows and any other verification files.
4. Review `git status` and `git diff --stat` to check that only intended changes
   are included. Commit the files when satisfied.
5. Pushing the commit to the publishing branch publishes the changes publicly.
   Run `git push` when you are ready for the public replacement.
6. Monitor the Pages deployment in GitHub Actions. Check the live site on a phone
   and desktop, including the menu, project previews, package guidance, concept
   maker, enquiry review and the old about/pricing/projects page links.
7. Make one deliberate enquiry with your own details and confirm the email arrives.
   Check the monthly-plan follow-up if that is the selected arrangement.

## Already configured in this package

- CNAME keeps www.teodordev.co.za.
- Homepage indexing is enabled, with canonical metadata and a sitemap.
- The form's no-JavaScript confirmation link uses the business domain.
- The existing Web3Forms access key, Calendly and WhatsApp links are preserved.
- Old page URLs lead to the relevant redesigned sections.
- The original Google verification file is included.
- Static HTML/CSS/JavaScript; no install or build command is required.

## Validation limits

Local file/fragment references, script syntax, package guidance, concept creation,
project details and form success/failure handling were checked. Submissions were
simulated; no real enquiry was sent during validation. Browser visual checks were
unavailable, so verify the public layout and email delivery after deployment.

## Roll back

Git history retains the previous design. Revert the redesign commit and push that
revert to the same publishing branch if you need to restore the previous version.
