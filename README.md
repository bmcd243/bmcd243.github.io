# Ben McDowell's Personal Website

This is the repository for my personal website, built with Jekyll and hosted on GitHub Pages.

## Adding New Blog Posts

To add a new blog post:

1. Create a new Markdown file in the `_posts` directory with the filename format: `YYYY-MM-DD-title-with-hyphens.md`
2. Add the front matter at the top of the file:

```markdown
---
layout: post
title: "Your Blog Post Title"
date: YYYY-MM-DD
---

Your content goes here in Markdown format.
```

3. Write your blog post content using Markdown syntax
4. Save the file and commit it to your repository

## Running the Site Locally

### First-time setup:

1. Install a Ruby version manager (recommended to avoid permission issues):

```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install rbenv
brew install rbenv

# Set up rbenv
echo 'eval "$(rbenv init -)"' >> ~/.zshrc
source ~/.zshrc

# Install Ruby
rbenv install 3.2.2
rbenv global 3.2.2
```

2. Install Jekyll and Bundler:

```bash
gem install jekyll bundler
```

3. Install dependencies:

```bash
bundle install
```

### Running the development server:

```bash
bundle exec jekyll serve
```

Then visit http://localhost:4000 in your browser.

To automatically reload when files change:

```bash
bundle exec jekyll serve --livereload
```

## File Structure

- `_posts/`: Contains all the blog post Markdown files
- `_layouts/`: Contains layout templates
- `_includes/`: Contains reusable components
- `assets/`: Contains static files like images, CSS, etc.
- `_config.yml`: Site configuration
- `index.html`: Homepage
- Other directories are for specific sections of the site (research, cv, blog)

## Project Structure

```
/
├── _includes/             # Reusable HTML components
│   ├── head.html          # Common <head> content
│   ├── header.html        # Navigation header
│   ├── footer.html        # Page footer
│   └── page_styles.html   # Common page styles
│
├── assets/                # Static assets
│   ├── css/               # Stylesheet files
│   │   └── styles.css     # Main stylesheet
│   ├── js/                # JavaScript files
│   │   └── script.js      # Main script file
│   └── images/            # Image files
│       └── favicon.png    # Site favicon
│
├── templates/             # HTML templates
│   ├── blog.template.html # Blog page template
│   ├── cv.template.html   # CV page template
│   └── ...                # Other templates
│
├── dist/                  # Compiled output (generated)
│   ├── index.html         # Home page
│   ├── blog.html          # Blog page
│   ├── cv.html            # CV page
│   └── ...                # Other pages
│
└── config.json            # Site configuration
```

## Setup

1. Create a `favicon.png` file and place it in the `assets/images/` directory
2. Run the build process to generate the HTML files from templates and includes

## Build Process

The website uses a templating system with includes to avoid code duplication. When making changes:

1. Edit the template files in the `templates/` directory
2. Update the common components in the `_includes/` directory
3. Run the build process to generate the final HTML files

## Technologies

- HTML5
- CSS3
- JavaScript (ES6+)
- Handlebars templating (or similar template engine)

## Features

- **Sleek Minimalist Design**: Clean, uncluttered layout with a focus on content
- **Monochrome Color Palette**: Subtle grayscale tones for a professional look
- **Sans-serif Typography**: Modern typography with bold headers
- **Dark/Light Mode Toggle**: User preference is saved in local storage
- **Interactive Custom Cursor**: Small outlined circle that reacts to interactive elements
- **Responsive Design**: Works on all devices and screen sizes
- **Smooth Animations**: Subtle animations for a polished user experience
- **Section-based Layout**: Organized into logical sections (Home, Research, Publications, Blog, Contact)
- **Underlined Active Navigation**: Clear indication of current section
- **Compact Social Icons**: Easy access to professional social profiles

## Sections

1. **Hero Section**: Introduction with a friendly wave emoji
2. **Research Areas**: Showcase of research interests and expertise
3. **Publications**: List of academic publications with links to papers and code
4. **Blog**: Articles and thoughts on research topics
5. **Contact**: Contact form and information

## Technologies Used

- HTML5
- CSS3 (with CSS variables for theming)
- JavaScript (Vanilla JS, no frameworks)
- Font Awesome icons
- Google Fonts (Inter)

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser
3. Customize the content to match your own information
4. Upload to your hosting provider

## Customization

### Colors

The color scheme can be easily modified by changing the CSS variables in the `:root` selector in `styles.css`:

```css
:root {
    /* Colors */
    --color-black: #121212;
    --color-dark-gray: #2b2b2b;
    --color-gray: #6a6a6a;
    --color-light-gray: #9e9e9e;
    --color-lighter-gray: #e0e0e0;
    --color-white: #ffffff;
    --color-accent: #3a86ff;
    
    /* Other variables... */
}
```

### Content

Replace the placeholder content in `index.html` with your own information:

- Name and title
- Bio and introduction
- Research areas
- Publications
- Blog posts
- Contact information

### Profile Photo

To add a profile photo, insert an image element in the hero section and style it accordingly.

## License

This template is available under the MIT License. Feel free to use it for your personal or professional website.

## Credits

- Icons: [Font Awesome](https://fontawesome.com/)
- Fonts: [Google Fonts](https://fonts.google.com/)

---

Created with ❤️ for machine learning researchers and academics. 