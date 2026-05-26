# CV Download Setup

## Adding Your CV

To enable the CV download functionality, place your CV file in the `public` directory:

1. Export your CV as a PDF file
2. Name it: `azzam-adnan-cv.pdf`
3. Place it in the `public` folder
4. The download button on the Hero section will automatically work

## File Requirements

- **Format**: PDF (recommended for professional portfolios)
- **Filename**: `azzam-adnan-cv.pdf`
- **Max Size**: Keep under 5MB for fast downloads
- **Location**: `/public/azzam-adnan-cv.pdf`

## Alternative Formats

If you want to offer multiple formats:

1. Add files to public folder:
   - `azzam-adnan-cv.pdf`
   - `azzam-adnan-cv.docx`

2. Update the Hero component download link to offer choices

## Current Setup

The download button in the Hero section links to:
```
/azzam-adnan-cv.pdf
```

This will be served from the root of your deployed website.

## Testing

After adding your CV:
1. Run `npm run dev`
2. Click the "Download CV" button
3. Verify the file downloads correctly

## Security Note

- Only place files you want publicly accessible in the `public` folder
- CV files will be downloadable by anyone visiting your site
- Consider watermarking or adding contact info to prevent misuse

---

**Note**: This is a placeholder. Replace with your actual CV file.
