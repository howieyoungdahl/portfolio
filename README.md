Howard Youngdahl Portfolio Website
A modern, responsive portfolio website, showcasing my skills, projects, and experience.
Features
Clean, modern design with parallax scrolling background
Fully responsive layout
Interactive project showcase
Skills visualization
Contact form
Smooth scroll navigation
Fade-in animations on scroll

Tech Stack

React
CSS3 (with animations and transitions)
Responsive design

Getting Started
Prerequisites

Node.js (v14.0.0 or higher)
npm (v6.0.0 or higher)

Installation

Clone the repository

bashCopygit clone https://github.com/howieyoungdahl/portfolio.git
cd portfolio

Install dependencies

bashCopynpm install

Start the development server

bashCopynpm start

Open your browser and navigate to http://localhost:3000

Project Structure
Copysrc/
├── components/
│   ├── Navbar.jsx
│   ├── Navbar.css
│   ├── Home.jsx
│   ├── Home.css
│   ├── About.jsx
│   ├── About.css
│   ├── Projects.jsx
│   ├── Projects.css
│   ├── Skills.jsx
│   ├── Skills.css
│   ├── Contact.jsx
│   ├── Contact.css
│   ├── Footer.jsx
│   └── Footer.css
├── App.js
├── App.css
└── index.js
Customization
Changing Colors
The color scheme can be easily modified by changing the CSS variables in App.css:
cssCopy:root {
  --primary: #2a6496;
  --secondary: #6c63ff;
  --dark: #2a3136;
  --light: #f5f9fc;
  --accent: #61dafb;
  --transition: all 0.3s ease;
}
Adding Projects
To add new projects, modify the projects array in the Projects.jsx component.
Updating Skills
To update skills, modify the skills array in the Skills.jsx component.
Deployment
To build the production version of the website:
bashCopynpm run build
This will create a build directory with all optimized assets ready for deployment.
Credits

Background patterns: Subtle Patterns
Icons: FontAwesome
Fonts: Google Fonts (Poppins, Roboto Mono)

License
This project is licensed under the MIT License.