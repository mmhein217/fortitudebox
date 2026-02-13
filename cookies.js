// ===================================
// COOKIE CONSENT (GDPR Compliant)
// ===================================

// Check if user has already made a choice
function initCookieConsent() {
    const cookieConsent = localStorage.getItem('cookieConsent');

    if (!cookieConsent) {
        // Show cookie banner after 1 second
        setTimeout(() => {
            document.getElementById('cookie-consent').style.display = 'block';
        }, 1000);
    }

    // Accept cookies
    document.getElementById('accept-cookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'accepted');
        hideCookieBanner();
        // Initialize analytics or other cookies here if needed
    });

    // Decline cookies
    document.getElementById('decline-cookies').addEventListener('click', () => {
        localStorage.setItem('cookieConsent', 'declined');
        hideCookieBanner();
    });
}

// Hide cookie banner
function hideCookieBanner() {
    const banner = document.getElementById('cookie-consent');
    banner.style.opacity = '0';
    setTimeout(() => {
        banner.style.display = 'none';
    }, 300);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCookieConsent);
} else {
    initCookieConsent();
}
