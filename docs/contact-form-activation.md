# Contact Form Activation Guide (Active)

The contact form is now **Live and Active**.

## Current Configuration
- **Access Key**: `f35d22e5-7ae5-4284-a619-098a94f09c9e`
- **Recipient Email**: `enterpriseslale@gmail.com`
- **Dashboard**: [Web3Forms Console](https://web3forms.com/dashboard)

## How to Change the Recipient
If you ever need to change the email where submissions are sent:
1. Go to [Web3Forms.com](https://web3forms.com/) and create a new key with the new email.
2. In the code, search for `f35d22e5-7ae5-4284-a619-098a94f09c9e` and replace it with your new key.
3. This key is used in:
   - `src/components/ContactForm.tsx`

## Testing
Always perform a test submission after changing keys to ensure the connection is established.
