# LillyCMS

LillyCMS is a lightweight, open-source blog Content Management System designed specifically for freelance developers who build websites using Next.js and deploy on Vercel. It provides a simple solution for adding blog functionality to websites without the need for complex setups or additional hosting services.

## 🌟 Features

- **Simple Authentication**: Utilizes Firebase Authentication for easy and secure user management.
- **Rich Text Editing**: Write blog posts using the user-friendly TipTap rich text editor.
- **Markdown Conversion**: Automatically converts rich text to Markdown for storage.
- **Firebase Storage**: Stores blog posts and other data securely in Firebase.
- **Next.js Compatible**: Seamlessly integrates with your existing Next.js projects.
- **Vercel-ready**: Deploy your entire website, including the CMS, on Vercel's free tier.
- **Customizable**: Easy to extend and customize to fit your specific needs.
- **Open Source**: Free to use and modify under the MIT license.

## 🛠️ Technology Stack

- **Frontend**: Next.js (React)
- **Authentication**: Firebase Authentication
- **Content Storage**: Firebase Firestore
- **Styling**: Tailwind CSS
- **Rich Text Editor**: TipTap
- **Markdown Conversion**: Turndown.js
- **Deployment**: Vercel

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or later)
- A Firebase account
- A Vercel account (for deployment)

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/theogenejr/lillycms.git
   cd lillycms
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables: Create a `.env.local` file in the root directory and add the following:
   ```
   NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
   NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_firebase_project_id
   NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
   NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
   NEXT_PUBLIC_FIREBASE_APP_ID=your_firebase_app_id
   ```

4. Run the development server:
   ```
   npm run dev
   ```

5. Open `http://localhost:3000` in your browser to see the CMS in action.

## 📘 Usage

1. **Authentication**: Log in using Firebase Authentication.
2. **Creating a Post**: Navigate to the "New Post" page and write your content using the TipTap rich text editor.
3. **Publishing**: Click "Publish" to convert the content to Markdown and store your post in Firebase Firestore.
4. **Editing**: Access existing posts from the dashboard and make changes as needed.
5. **Integration**: In your main Next.js project, fetch and render the Markdown content from Firebase Firestore.

## 🤝 Contributing

We welcome contributions to LillyCMS! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Submit a pull request

Please read our [Contributing Guide](CONTRIBUTING.md) for more details.

## 🗺️ Roadmap

- [ ] Image upload and management
- [ ] Draft saving and preview
- [ ] Multi-user support with role-based access control
- [ ] Custom themes and layouts
- [ ] SEO optimization tools
- [ ] Analytics integration

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [Firebase](https://firebase.google.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/)
- [TipTap](https://tiptap.dev/)
- [Turndown.js](https://github.com/mixmark-io/turndown)

## 📞 Support

If you have any questions or need help with LillyCMS, please open an issue in the GitHub repository or contact the maintainer directly.

---

Happy blogging with LillyCMS! 🎉
