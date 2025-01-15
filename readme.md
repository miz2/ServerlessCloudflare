
# Cloudflare Workers Guide

This project uses **Cloudflare Workers** with Node.js (Version 18).

---

## Getting Started

### Local Development
To start the application locally, run the following command:

```bash
npm run dev
```

### Working with the Request Object
The `request` object provides access to:
- **Body**: The content of the request body.
- **Headers**: Metadata included in the request.
- **Query Parameters**: URL parameters sent with the request.

---

## Deployment

### Prerequisites
1. Log in to your **Cloudflare** account before deploying.
2. Ensure you have **Wrangler**, the Cloudflare CLI tool, installed.

### Steps to Deploy
1. **Login to Wrangler**  
   Run the following command to log in:
   ```bash
   npx wrangler login
   ```
   - Click on the URL provided in the terminal.
   - Authorize Wrangler by granting the necessary permissions.

2. **Deploy to Production**  
   To deploy your application, use:
   ```bash
   npm run deploy
   ```
   After a successful deployment, you will receive a free backend URL.

### Example Production URL
[https://my-app.mizaanurrehman2.workers.dev/](https://my-app.mizaanurrehman2.workers.dev/)

---

## Additional Notes
- Make sure your environment uses **Node.js Version 18** for compatibility.
- Refer to the Cloudflare Workers documentation for advanced configurations.
