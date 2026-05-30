/**
 * iOS Install Prompt Module
 * Handles iOS Safari detection and install prompt UI
 */

export function isIOSSafari() {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.navigator.standalone === true ||
        window.matchMedia('(display-mode: standalone)').matches;
    return isIOS && !isStandalone;
}

export function initIOSInstall(installPrompt, installModal, installClose) {
    if (!installPrompt || !installModal || !installClose) {
        return;
    }

    installPrompt.addEventListener('click', () => {
        installModal.classList.remove('hidden');

        if (navigator.share) {
            navigator.share({
                title: 'Tarot Draw',
                text: 'Install Tarot Draw to your home screen',
                url: window.location.href
            }).catch(() => {});
        }
    });

    installClose.addEventListener('click', () => {
        installModal.classList.add('hidden');
    });

    installModal.addEventListener('click', (e) => {
        if (e.target === installModal) {
            installModal.classList.add('hidden');
        }
    });
}

export function showInstallPromptIfIOS(installPrompt) {
    if (installPrompt && isIOSSafari()) {
        setTimeout(() => {
            installPrompt.classList.remove('hidden');
        }, 800);
    }
}

export function hideInstallPrompt(installPrompt, installModal) {
    if (installPrompt) {
        installPrompt.classList.add('hidden');
    }
    if (installModal) {
        installModal.classList.add('hidden');
    }
}
