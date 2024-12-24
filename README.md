# PivotPoint: The Ultimate Startup Accelerator Platform

PivotPoint is a platform inspired by Y Combinator, designed to connect startup founders with potential investors, collaborators, and mentors. It serves as a one-stop solution where startups can pitch their ideas, attract funding, and accelerate their growth.

## Features

- **Startup Pitches**: Founders can create detailed startup pitches, including descriptions, categories, and multimedia content.
- **Investor Connections**: Provides an interface for investors to browse startups and connect directly with founders.
- **Real-Time Analytics**: Tracks views and engagement metrics for each startup pitch.
- **Dynamic Categorization**: Organizes startups by industry for easy discovery.
- **Community Engagement**: Facilitates networking among founders, investors, and mentors.
- **User Authentication**: Secure user authentication for both founders and investors.

## Tech Stack

- **Frontend**: React.js, Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (with Mongoose for schema definition)
- **Authentication**: Auth.js (for secure user login and registration), Zod (for schema validation)
- **Hosting**: Vercel 
- **CMS**: Sanity.io (for managing content like pitches and categories)

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/pivotpoint.git
   cd pivotpoint
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env` file in the root directory and configure the following:
   ```env
   AUTH_SECRET=<your-authentication-secret>
   NEXT_PUBLIC_SANITY_PROJECT_ID=<sanity-project-id>
   NEXT_PUBLIC_SANITY_DATASET=<sanity-dataset>
   SANITY_WRITE_TOKEN=<sanity-token>
   NEXT_PUBLIC_SANITY_API_VERSION=<sanity-api>
   AUTH_GITHUB_ID=<auth-github-id>
   AUTH_GITHUB_SECRET=<auth-github-secret-key>
   SENTRY_AUTH_TOKEN=<sentry-token>
   ```

4. **Run the App Locally:**
   ```bash
   npm run dev
   ```
   Visit `http://localhost:3000` to see the app in action.

## Usage

1. **For Founders:**
   - Sign up and create a detailed pitch for your startup.
   - Add descriptions, categories, images, and a markdown-based pitch document.
   - Track pitch performance with views and engagement analytics.

2. **For Investors:**
   - Browse through a variety of startups by category.
   - View detailed pitches and connect with founders.

3. **For Admins:**
   - Manage content (startups, categories, and users) via the integrated Sanity CMS.

## API Endpoints

### Public Endpoints

- **GET /api/startups**: Fetch all listed startups.
- **GET /api/startup/:slug**: Fetch detailed information about a specific startup.

### Protected Endpoints

- **POST /api/startup**: Add a new startup pitch (requires authentication).
- **PUT /api/startup/:id**: Update an existing startup pitch.
- **DELETE /api/startup/:id**: Delete a startup pitch.

## Folder Structure

```plaintext
pivotpoint/
├── components/        # Reusable React components
├── pages/             # Next.js pages
├── public/            # Static assets (images, icons, etc.)
├── styles/            # Tailwind CSS configurations
├── utils/             # Utility functions and API handlers
├── sanity/            # Configuration for Sanity CMS
└── .env               # Environment variables
```

## Contribution Guidelines

We welcome contributions to enhance PivotPoint! To contribute:

1. Fork the repository.
2. Create a new branch for your feature/fix.
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes and push the branch.
   ```bash
   git add .
   git commit -m "Add new feature"
   git push origin feature-name
   ```
4. Open a pull request and provide a detailed description of your changes.

## License

PivotPoint is open-source and licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- **Y Combinator**: For inspiring the idea behind PivotPoint.
- **Sanity.io**: For providing a flexible and powerful CMS.
- **Open-Source Contributors**: For their invaluable support and feedback.

---

Happy Pitching 🚀
