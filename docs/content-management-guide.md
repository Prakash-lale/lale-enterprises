# Content Management Guide

This guide explains how to update the website's projects, services, and other data by editing simple configuration files.

## 1. Updating Projects
The list of all projects shown on the website is managed in:
`src/data/projects.ts`

### To Add a New Project:
1. Copy an existing project object.
2. Update the `id`, `title`, and `serviceId` (must match one of the service IDs).
3. Add a short description, the challenge, the solution, and the result.
4. Place the project image in `public/images/projects/` and update the `image` path.
5. Add relevant tags for the filter.

## 2. Managing Services
The primary services offered by Lale Enterprises are defined in:
`src/data/services.ts`

### To Edit a Service:
- Modify the `title`, `description`, or `fullDescription`.
- Update the `details` list to add or remove bullet points.
- Change the `icon` name (must be a valid [Lucide Icon](https://lucide.dev/icons)).

## 3. Managing Client Logos
The logos displayed on the homepage and clients page are in:
`src/data/clients.ts`

- Add a new client by providing their `name`, `logo` path, and `industry`.
- Store logos in `public/images/clients/`.

## 4. Job Openings (Careers)
Current job listings are managed in:
`src/data/jobs.ts`

- Update the `title`, `department`, `location`, or `description`.
- Set `active: false` to hide a listing instead of deleting it.

## Image Standards
To keep the site looking premium:
- **Project Images**: Use high-quality 16:9 aspect ratio (e.g., 1920x1080).
- **Client Logos**: Use transparent PN6 or SVG format with a centered logo.
- **Formats**: Prefer `.webp` for photos and `.svg` for icons/logos.
