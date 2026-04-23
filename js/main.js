// Common Legal Data
const privacyContent = `
    <h2>Privacy Policy</h2>
    <p><strong>App Name:</strong> Water Sort — Color Puzzle</p>
    <p><strong>Developer:</strong> AquaLogic Studio (Google Play Developer)</p>
    <p>Effective Date: 19/04/2026 | Last Updated: 19/04/2026</p>

    <p>This Privacy Policy applies specifically to the Android application <strong>"Water Sort — Color Puzzle"</strong> published on the Google Play Store by <strong>AquaLogic Studio</strong>.</p>

    <p>This policy explains how information is collected, used, and protected when you use this app.</p>

    <h3>1. Information We Collect</h3>
    <p>This app does not require account registration. We only collect limited data automatically.</p>
    
    <h4>Automatically Collected Information</h4>
    <ul>
        <li>Device type and model</li>
        <li>Operating system version</li>
        <li>App usage data</li>
        <li>IP address</li>
        <li>Advertising ID (Google Advertising ID)</li>
        <li>Crash logs and diagnostics</li>
    </ul>

    <h3>2. Advertising (Google AdMob)</h3>
    <p>This app uses Google AdMob, a third-party advertising service provided by Google.</p>
    <p>AdMob may collect:</p>
    <ul>
        <li>Device identifiers</li>
        <li>Advertising ID</li>
        <li>Approximate location (via IP address)</li>
        <li>App interaction data</li>
        <li>Ad performance data</li>
    </ul>
    <p>This data is used to display ads and measure their effectiveness.</p>
    <p>Learn more: <a href="https://policies.google.com/privacy" target="_blank">https://policies.google.com/privacy</a></p>

    <h3>3. How We Use Information</h3>
    <ul>
        <li>To operate and maintain the app</li>
        <li>To improve app performance and stability</li>
        <li>To display advertisements</li>
        <li>To analyze usage trends</li>
    </ul>
    <p>We do <strong>not sell personal data</strong>.</p>

    <h3>4. User Choices</h3>
    <p>You can control advertising preferences by resetting your Advertising ID or adjusting your Google ad settings.</p>

    <h3>5. Children's Privacy</h3>
    <p>This app is not directed to children under 13. We do not knowingly collect personal data from children.</p>

    <h3>6. Contact</h3>
    <p>Email: <strong>aquacoderwwdc@gmail.com</strong></p>

    <p class="mt-4 small text-secondary">© 2026 AquaLogic Studio</p>
`;

const termsContent = `
    <p>Effective Date: 19/04/2026 Last Updated: 19/04/2026</p>
    <p>Welcome to <strong>AquaLogic Studio Apps</strong>. By downloading, installing, or using our mobile applications, you agree to these Terms and Conditions. If you do not agree, please discontinue use of the App.</p>
    
    <h3>1. Description of Service</h3>
    <p>AquaLogic Studio provides free-to-play puzzle and logic applications. Our services are supported through advertisements. We reserve the right to modify or discontinue features at any time without notice.</p>
    
    <h3>2. General Use</h3>
    <p>Our Apps are general-audience applications available to users worldwide. By using our Apps, you confirm that you are legally permitted to use mobile applications under the laws of your country.</p>
    
    <h3>3. Advertisements (Google AdMob)</h3>
    <p>The App displays advertisements provided by third-party advertising partners, including Google AdMob. By using the App, you acknowledge that advertising partners may collect device information and usage data.</p>
    
    <h3>4. Intellectual Property Rights</h3>
    <p>All content within our Apps, including gameplay logic, graphics, logos, branding, and app design, is owned by or licensed to <strong>AquaLogic Studio</strong> and protected by applicable intellectual property laws.</p>
    <p>Our Apps are provided for personal, non-commercial use only. You may not reproduce, redistribute, sell, or commercially exploit any content from the App.</p>
    
    <h3>5. Acceptable Use</h3>
    <p>You agree not to use the App for unlawful purposes, attempt to hack or reverse engineer the App, or interfere with the security or proper functioning of the App.</p>
    
    <h3>6. Privacy</h3>
    <p>Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect user data.</p>
    
    <h3>7. Disclaimer of Warranties</h3>
    <p>The App is provided on an "AS IS" and "AS AVAILABLE" basis without warranties of any kind. We do not guarantee continuous availability or error-free performance.</p>
    
    <h3>8. Limitation of Liability</h3>
    <p>To the maximum extent permitted by law, AquaLogic Studio shall not be liable for indirect or consequential damages resulting from the use of the App.</p>
    
    <h3>9. Contact Information</h3>
    <p>If you have questions regarding these Terms, contact: <strong>aquacoderwwdc@gmail.com</strong></p>
    
    <p class="mt-4 small text-secondary">© 2026 AquaLogic Studio. All Rights Reserved.</p>
`;

// Initialize legal page logic
function initLegalPages() {
    const legalView = document.getElementById('legal-content-view');
    if (!legalView) return;

    const isTermsPage = window.location.pathname.includes('terms');
    legalView.innerHTML = isTermsPage ? termsContent : privacyContent;
}

// Contact Form Handling
function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (!contactForm) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = contactForm.querySelector('input[type="text"]').value;
        const email = contactForm.querySelector('input[type="email"]').value;
        const product = contactForm.querySelector('select').value || 'General Inquiry';
        const message = contactForm.querySelector('textarea').value;

        const subject = encodeURIComponent(`Support Request: ${product} from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\nProduct: ${product}\n\nMessage:\n${message}`);

        // Construct mailto link
        const mailtoLink = `mailto:aquacoderwwdc@gmail.com?subject=${subject}&body=${body}`;

        // Open user's email client
        window.location.href = mailtoLink;

        alert('Your email client will now open with your message. Please click "Send" in your email app to finish.');
        contactForm.reset();
    });
}

// Global Initialization
document.addEventListener('DOMContentLoaded', () => {
    initLegalPages();
    initContactForm();

    // Fade in animation for cards
    const cards = document.querySelectorAll('.glass-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
    });
});
