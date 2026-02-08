# Siddharth - Developer Documentation

## Changing the Website Name (Browser Tab Title)

To change the website name that appears in the browser tab:

1. **Edit the HTML title tag:**
   - Open `frontend/index.html`
   - Locate the `<title>` element inside the `<head>` section (currently line 5)
   - Replace the text between `<title>` and `</title>` with your desired website name
   - Example: `<title>Your New Website Name</title>`

2. **Rebuild the application:**
   - After saving your changes, rebuild the application for the new title to take effect
   - The browser tab will display your updated website name

### Important Notes

- The current codebase does **not** set `document.title` at runtime via JavaScript/React
- If you add runtime title-setting in the future (e.g., using `useEffect` to dynamically update `document.title`), document that location here alongside the HTML title so developers know which source of truth to update
- Keep the title concise and descriptive for the best user experience

### Current Title
The current website name is: **Siddharth**
