# Careers Management Guide

This guide explains how to manage job listings on the Lale Enterprises Careers page.

## Data Location
All job data is stored in a clean, structured TypeScript file:
`src/data/jobs.ts`

---

## How to Add a New Job

1. Open `src/data/jobs.ts`.
2. Find the `jobs` array.
3. Add a new object following this structure:

```typescript
{
    id: 'unique-job-id', // Use lowercase-kebab-case
    title: 'Job Title',
    department: 'Engineering / Operations / HR',
    location: 'Office Location or Site-based',
    type: 'Full-time / Part-time / Contract / Internship',
    description: 'Provide a brief overview of the role.',
    requirements: [
        'Requirement 1',
        'Requirement 2',
        'Requirement 3'
    ]
}
```

---

## How to Edit an Existing Job

1. Open `src/data/jobs.ts`.
2. Locate the job you want to change by its `id`.
3. Modify the properties (title, description, requirements, etc.).
4. Save the file. The website will update automatically in development mode.

---

## How to Delete a Job

1. Open `src/data/jobs.ts`.
2. Select the entire block `{ ... }` for the job you wish to remove (including the trailing comma).
3. Delete the selection.
4. Save the file.

---

## How it Works (For Candidates)

When a candidate clicks "Apply Now":
1. Their default **email client** (Outlook, Gmail, etc.) will open.
2. The recipient is automatically set to **enterpriseslale@gmail.com**.
3. The subject line is pre-filled with the **Job Title**.
4. They simply attach their CV and hit send.

---

## Technical Tips

- **Email Address**: To change where applications are sent, open `src/pages/careers.astro` and search for `enterpriseslale@gmail.com`. Replace it with the new address in both the job loop and the general application CTA.
- **Icons**: The icons on the Careers page are controlled by the `benefits` array within `src/pages/careers.astro`.
- **Job Data**: To add or remove jobs, edit `src/data/jobs.ts`.
