# Nandi Real Estate Website

Welcome to the Nandi Real Estate website project! This README provides a quick guide on how to update and maintain your website content in the future.

## Project Structure

The website is built using **React**, **TypeScript**, and **Tailwind CSS**. The main content is split into reusable components located in the `src/components/` folder:

- `Navbar.tsx`: Top navigation bar and logo.
- `Hero.tsx`: The main background image and welcoming text at the top of the site.
- `About.tsx`: Information about Nandi Real Estate.
- `FeaturedProperties.tsx`: The grid of property cards.
- `Testimonials.tsx`: Customer reviews.
- `Contact.tsx`: Contact details, Google Map, and inquiry form.
- `WhatsAppButton.tsx`: The floating WhatsApp chat button.
- `Footer.tsx`: The bottom footer.

---

## 🖼️ How to Change Images

### Logo & Hero Background
The images used for the logo and the hero background are referenced from the `public` folder.
1. **Logo**: Replace or add your logo file in the `public/` folder as `logo.png`.
2. **Hero Image**: Replace the `hero.png` file in the `public/` folder with your preferred background image. Make sure it's named `hero.png` or update the filename in `src/components/Hero.tsx`.

*Note: If an image is not found, the site will automatically fall back to high-quality placeholder images.*

### Property Images
To change the images of the properties in the **Featured Properties** section:
1. Open `src/components/FeaturedProperties.tsx`.
2. Locate the `properties` array at the top of the component.
3. Change the `image` URL for any property to a new image link.

---

## 📝 How to Update Content

### Modifying Featured Properties
1. Open `src/components/FeaturedProperties.tsx`.
2. Find the `properties` array. It looks like this:
   ```javascript
   const properties = [
     {
       id: 1,
       title: "Luxury High-Rise Apartments",
       location: "Chand Terraces, Bandra West",
       type: "Residential",
       specs: "2 BHK & 3 BHK",
       image: "YOUR_IMAGE_LINK_HERE",
       description: "Premium high-rise living..."
     },
     // ... more properties
   ];
   ```
3. You can edit the text, change the image link, add new properties, or delete existing ones by modifying this list.

### Updating Contact Information & Phone Number
Your phone number (`090044 50055`) is currently located in several places. If you need to change it, update it in these files:
- **Navbar**: `src/components/Navbar.tsx` (Search for the `href="tel:..."` link and the display text).
- **Hero**: `src/components/Hero.tsx` (Search for the Call Now button).
- **Contact Page**: `src/components/Contact.tsx` (Updates the visible number and the WhatsApp form submit action).
- **WhatsApp Floating Button**: `src/components/WhatsAppButton.tsx` (Update the phone number in the `whatsappUrl` link. Make sure to include the country code `91`).

### Updating Testimonials
1. Open `src/components/Testimonials.tsx`.
2. Find the `testimonials` array and edit the names, review text, or star ratings (1 to 5).

---

## 🎨 Styling

The website uses **Tailwind CSS** for styling. If you want to change colors, spacing, or sizing, you can modify the `className` attributes inside the component files. For example, changing `bg-blue-600` to `bg-red-600` will change a blue background to red.

## 🚀 Running the Project

If you are developing locally:
1. Install dependencies: `npm install`
2. Start the development server: `npm run dev`
3. Build for production: `npm run build`
