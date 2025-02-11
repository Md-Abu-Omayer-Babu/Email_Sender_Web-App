# Email Sender Web App

This is a simple web application that allows users to send a welcome email to customers using a free email API (EmailJS). The user enters an email address and a message, then clicks the send button to deliver the email.

## Features
- Enter recipient's email address
- Enter a customized welcome message
- Send emails using EmailJS
- Display success or failure messages

## Prerequisites
To use this project, you need:
- A free [EmailJS](https://www.emailjs.com/) account
- An EmailJS **Service ID**, **Template ID**, and **Public Key**
- A verified sender email address in EmailJS

## Installation & Setup
1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/email-sender-app.git
   cd email-sender-app
   ```
2. Open `index.html` and replace the following placeholders with your EmailJS credentials:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", templateParams)
   ```
3. Make sure your EmailJS template has the following placeholders:
   ```html
   <h2>Welcome, {{name}}!</h2>
   <p>Your email: {{to_email}}</p>
   <p>Message: {{message}}</p>
   ```

## Usage
1. Open `index.html` in a web browser.
2. Enter the recipient's email and a custom welcome message.
3. Click the "Send Email" button.
4. A success message will be displayed if the email is sent.

## Troubleshooting
If the email is not received:
- Check the EmailJS **Dashboard > Emails Sent**.
- Ensure the recipient's email is correct.
- Ask the recipient to check their **Spam** or **Promotions** folder.
- Open the browser **Console (F12 > Console)** to see any errors.

## License
This project is licensed under the MIT License.

---

🚀 **Happy Coding!**

