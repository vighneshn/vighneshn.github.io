# Setting Up EmailJS for the Contact Form

This document explains how to set up EmailJS to make the contact form functional on your website.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS website](https://www.emailjs.com/) and sign up for a free account
2. Verify your email address

## Step 2: Create an Email Service

1. Log in to your EmailJS account
2. Go to "Email Services" in the dashboard
3. Click "Add New Service"
4. Choose your email provider (Gmail, Outlook, etc.)
5. Connect your email account by following the prompts
6. Give your service a name (e.g., "contact_service")
7. Note the Service ID (you'll need it later)

## Step 3: Create an Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Design your email template. Here's a basic example:

**Subject:**
```
New message from {{name}} via your website
```

**Body:**
```
You received a new message from your website contact form:

Name: {{name}}
Email: {{email}}

Message:
{{message}}
```

4. Save the template and note the Template ID

## Step 4: Update Your Code

Open `src/components/ContactPage.tsx` and replace the placeholder values with your actual EmailJS credentials:

```typescript
// Replace these with your actual EmailJS service ID, template ID, and public key
const serviceId = 'YOUR_SERVICE_ID';
const templateId = 'YOUR_TEMPLATE_ID'; 
const publicKey = 'YOUR_PUBLIC_KEY';
```

- The `serviceId` is the ID of the email service you created in step 2
- The `templateId` is the ID of the email template you created in step 3
- The `publicKey` can be found in your EmailJS dashboard under "Account" > "API Keys"

## Step 5: Test Your Form

1. Run your website locally and navigate to the Contact page
2. Fill out the form and submit it
3. Check that you receive the email at the address you configured

## Security Considerations

- The free tier of EmailJS allows for 200 emails per month
- Your public key is exposed in the client-side code, but this is acceptable as per EmailJS documentation
- For additional security, you can set up domain restrictions in your EmailJS account settings

For more information, visit [EmailJS Documentation](https://www.emailjs.com/docs/) 