// Theme toggle functionality
document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Check for saved theme preference or use the system preference
    const currentTheme = localStorage.getItem('theme') || 
                         (prefersDarkScheme.matches ? 'dark' : 'light');
    
    // Apply the current theme
    if (currentTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    
    // Toggle theme when button is clicked
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        
        // Update the theme preference in localStorage
        const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
    
    // Custom cursor effect
    const cursor = document.querySelector('.cursor-dot');
    
    // Only enable custom cursor on non-touch devices
    if (cursor && !('ontouchstart' in window)) {
        cursor.style.display = 'block';
        
        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });
        
        // Add pulse effect when clicking
        document.addEventListener('mousedown', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
        });
        
        document.addEventListener('mouseup', () => {
            cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        });
    }
}); 