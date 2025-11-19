// Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: false });
    const clockEl = document.getElementById('clock');
    if (clockEl) {
        clockEl.textContent = timeString;
    }
}

setInterval(updateClock, 1000);
updateClock();

// Navigation & CLI Logic
document.addEventListener('DOMContentLoaded', () => {
    const bootSequence = document.querySelector('.boot-sequence');
    const heroContent = document.querySelector('.hero-content');
    const sections = document.querySelectorAll('.section');
    const navBtns = document.querySelectorAll('.nav-btn');
    const cliInput = document.getElementById('cli-input');
    const helpModal = document.getElementById('help-modal');
    const closeHelpBtn = document.getElementById('close-help');
    const helpBtn = document.getElementById('help-btn');

    // Boot Sequence
    setTimeout(() => {
        if (bootSequence) bootSequence.style.display = 'none';
        if (heroContent) heroContent.classList.remove('hidden');
        // Show help section by default for non-technical users
        const helpSection = document.getElementById('help-section');
        if (helpSection) helpSection.classList.remove('hidden');
    }, 2500);

    // Navigation Function
    function showSection(targetId) {
        // Hide all sections
        sections.forEach(sec => {
            sec.classList.add('hidden');
            // Special case for boot section which contains hero
            if (sec.id === 'boot') {
                const hero = sec.querySelector('.hero-content');
                if (hero) hero.classList.add('hidden');
            }
        });

        // Show target
        const targetSec = document.getElementById(targetId);
        if (targetSec) {
            targetSec.classList.remove('hidden');
            if (targetId === 'boot') {
                const hero = targetSec.querySelector('.hero-content');
                if (hero) hero.classList.remove('hidden');
            }
        }

        // Update Nav
        navBtns.forEach(btn => {
            btn.classList.remove('active');
            if (btn.dataset.target === targetId) {
                btn.classList.add('active');
            }
        });
    }

    // Nav Button Click
    navBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            if (target) showSection(target);
        });
    });

    // CLI Logic
    if (cliInput) {
        cliInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = cliInput.value.trim().toLowerCase();
                processCommand(command);
                cliInput.value = '';
            }
        });
    }

    function processCommand(cmd) {
        switch (cmd) {
            case 'home':
            case 'boot':
                showSection('boot');
                break;
            case 'about':
            case 'specs':
                showSection('about');
                break;
            case 'exp':
            case 'experience':
            case 'logs':
                showSection('experience');
                break;
            case 'projects':
            case 'modules':
                showSection('projects');
                break;
            case 'contact':
            case 'ports':
                showSection('contact');
                break;
            case 'help':
            case 'man':
                toggleHelp();
                break;
            case 'clear':
            case 'cls':
                // Optional: Clear terminal history if implemented
                break;
            default:
                // Optional: Show error feedback
                alert(`COMMAND_NOT_RECOGNIZED: ${cmd}`);
                break;
        }
    }

    // Help Modal Logic
    function toggleHelp() {
        if (helpModal) {
            helpModal.classList.toggle('hidden');
        }
    }

    if (helpBtn) helpBtn.addEventListener('click', toggleHelp);
    if (closeHelpBtn) closeHelpBtn.addEventListener('click', toggleHelp);

    // Close modal on outside click
    window.addEventListener('click', (e) => {
        if (e.target === helpModal) {
            toggleHelp();
        }
    });
});
