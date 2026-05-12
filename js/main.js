// Common Legal Data
const privacyContent = `
    <p><strong>Entity:</strong> AquaLogic Studio</p>
    <p><strong>Contact Email:</strong> studygoallakshya@gmail.com</p>
    <p>Effective Date: 11/05/2026 | Last Updated: 11/05/2026</p>

    <p>This Privacy Policy applies to the services and applications provided by <strong>AquaLogic Studio</strong>.</p>

    <p>We are committed to protecting your privacy and ensuring you have a positive experience on our website and in using our games.</p>

    <h3>1. Information We Collect</h3>
    <p>We may collect limited data to improve our services, including device information and app usage statistics. We do not collect personally identifiable information unless you provide it to us directly (e.g., via contact forms).</p>
    
    <h3>2. Third-Party Services</h3>
    <p>Our games may use third-party services like Google AdMob and Firebase. These services may collect information as per their own privacy policies.</p>

    <h3>3. Data Usage</h3>
    <p>Data collected is used to optimize performance, analyze trends, and provide relevant advertisements.</p>

    <h3>4. Contact Us</h3>
    <p>If you have any questions about this Privacy Policy, please contact us at <strong>studygoallakshya@gmail.com</strong>.</p>

    <p class="mt-4 small text-secondary">© 2026 AquaLogic Studio</p>
`;

const termsContent = `
    <p><strong>Entity:</strong> AquaLogic Studio</p>
    <p><strong>Contact Email:</strong> studygoallakshya@gmail.com</p>
    <p>Effective Date: 11/05/2026 | Last Updated: 11/05/2026</p>

    <p>By accessing or using any game or service provided by <strong>AquaLogic Studio</strong>, you agree to be bound by these Terms of Service.</p>
    
    <h3>1. Use of Services</h3>
    <p>Our games are intended for personal, non-commercial use. You agree not to modify, reverse engineer, or distribute our games without permission.</p>
    
    <h3>2. Intellectual Property</h3>
    <p>All content, including graphics, code, and titles, are the property of AquaLogic Studio.</p>
    
    <h3>3. Disclaimer of Warranties</h3>
    <p>Our services are provided "as is" without any warranties, express or implied.</p>
    
    <h3>4. Limitation of Liability</h3>
    <p>AquaLogic Studio shall not be liable for any damages arising out of your use of our games.</p>
    
    <h3>5. Changes to Terms</h3>
    <p>We reserve the right to update these terms at any time. Your continued use of our services constitutes acceptance of the new terms.</p>

    <p class="mt-4 small text-secondary">© 2026 AquaLogic Studio</p>
`;

// Logic to inject content into the pages
document.addEventListener('DOMContentLoaded', () => {
    const legalView = document.getElementById('legal-content-view');
    if (legalView) {
        // Simple check based on the title or filename
        const pageTitle = document.title.toLowerCase();

        if (pageTitle.includes('privacy')) {
            legalView.style.opacity = '0';
            legalView.innerHTML = privacyContent;
            setTimeout(() => {
                legalView.style.opacity = '1';
            }, 50);
        } else if (pageTitle.includes('terms')) {
            legalView.style.opacity = '0';
            legalView.innerHTML = termsContent;
            setTimeout(() => {
                legalView.style.opacity = '1';
            }, 50);
        }
    }
});