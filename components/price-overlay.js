class PriceOverlay {
    constructor() {
        this._insertMarkup();
        this.backdrop = document.querySelector('.pricing-overlay .overlay-backdrop');
        this.modal = document.querySelector('.pricing-overlay .pricing-modal');
        this._bindEvents();
        this.closeCallbacks = [];
    }

    _insertMarkup() {
        if (document.querySelector('.pricing-overlay')) return;

        const container = document.createElement('div');
        container.className = 'pricing-overlay';
        container.innerHTML = `
            <div class="overlay-backdrop" hidden></div>
            <div class="pricing-modal" role="dialog" aria-modal="true" hidden>
                <div class="pricing-modal-inner">
                    <button class="pricing-close" aria-label="Tutup">×</button>
                    <h2 class="text-2xl font-bold mb-6">Daftar Harga</h2>
                    <div class="grid md:grid-cols-3 gap-6">
                        <div class="p-6 border rounded-lg bg-gradient-to-b from-white/5 to-transparent">
                            <h3 class="font-bold mb-2">Paket Dasar</h3>
                            <p class="text-xl font-bold mb-4">$500<span class="text-sm opacity-70">/project</span></p>
                            <ul class="space-y-2 text-sm opacity-90 mb-4">
                                <li>Simple animation (15-30 sec)</li>
                                <li>2 revisions</li>
                                <li>Standard assets</li>
                            </ul>
                            <button class="btn-order">Pesan Sekarang</button>
                        </div>
                        <div class="p-6 border rounded-lg bg-gradient-to-b from-white/5 to-transparent">
                            <h3 class="font-bold mb-2">Paket Pro</h3>
                            <p class="text-xl font-bold mb-4">$1,200<span class="text-sm opacity-70">/project</span></p>
                            <ul class="space-y-2 text-sm opacity-90 mb-4">
                                <li>Complex animation (30-60 sec)</li>
                                <li>Unlimited revisions</li>
                                <li>Custom assets</li>
                            </ul>
                            <button class="btn-order">Pesan Sekarang</button>
                        </div>
                        <div class="p-6 border rounded-lg bg-gradient-to-b from-white/5 to-transparent">
                            <h3 class="font-bold mb-2">Paket Premium</h3>
                            <p class="text-xl font-bold mb-4">$2,500<span class="text-sm opacity-70">/project</span></p>
                            <ul class="space-y-2 text-sm opacity-90 mb-4">
                                <li>Full production (1-2 min)</li>
                                <li>Unlimited revisions</li>
                                <li>Sound design</li>
                            </ul>
                            <button class="btn-order">Pesan Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(container);
    }

    _bindEvents() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href*="#pricing"]');
            if (!link) return;
            // If we are on index page, allow default navigation to anchor
            const path = window.location.pathname.split('/').pop() || 'index.html';
            if (path === 'index.html' || path === '') return;
            e.preventDefault();
            this.open();
        });

        document.addEventListener('click', (e) => {
            if (e.target.matches('.pricing-close') || e.target.matches('.overlay-backdrop')) {
                this.close();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.close();
        });
    }

    open() {
        const overlay = document.querySelector('.pricing-overlay');
        const backdrop = overlay.querySelector('.overlay-backdrop');
        const modal = overlay.querySelector('.pricing-modal');
        backdrop.hidden = false;
        modal.hidden = false;
        // small delay to allow CSS transitions
        requestAnimationFrame(() => {
            backdrop.classList.add('active');
            modal.classList.add('active');
            document.documentElement.style.overflow = 'hidden';
        });
    }

    close() {
        const overlay = document.querySelector('.pricing-overlay');
        if (!overlay) return;
        const backdrop = overlay.querySelector('.overlay-backdrop');
        const modal = overlay.querySelector('.pricing-modal');
        backdrop.classList.remove('active');
        modal.classList.remove('active');
        document.documentElement.style.overflow = '';
        // wait for transition then hide
        setTimeout(() => {
            backdrop.hidden = true;
            modal.hidden = true;
        }, 350);
    }
}

// Initialize when DOM ready
document.addEventListener('DOMContentLoaded', () => {
    new PriceOverlay();
});
