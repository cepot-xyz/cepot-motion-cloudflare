class CustomNavbar extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    z-index: 1000;
                    background: rgba(30, 30, 30, 0.6);
                    backdrop-filter: blur(15px);
                    padding: 1rem 2rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    transition: all 0.3s ease;
                }
                
                .container {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    max-width: 1200px;
                    margin: 0 auto;
                }
                
                .logo {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: white;
                    text-decoration: none;
                }
                
                .logo span {
                    color: #ff3333;
                }
                
                .nav-links {
                    display: flex;
                    gap: 2rem;
                }
                
                .nav-links a {
                    color: white;
                    text-decoration: none;
                    font-weight: 500;
                    position: relative;
                    transition: color 0.3s ease;
                }
                
                .nav-links a:hover {
                    color: #ff3333;
                }
                
                .nav-links a::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 2px;
                    background-color: #ff3333;
                    transition: width 0.3s ease;
                }
                
                .nav-links a:hover::after {
                    width: 100%;
                }
                
                .mobile-menu-btn {
                    display: none;
                    background: none;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                }
                
                .mobile-menu {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    position: fixed;
                    top: 80px;
                    left: 0;
                    right: 0;
                    background: #1e1e1e;
                    padding: 0 2rem; /* Adjust padding for transition */
                    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
                    transition: max-height 0.5s ease-out, opacity 0.5s ease-out, padding 0.5s ease-out;
                }
                
                .mobile-menu.active {
                    max-height: 500px; /* Sufficiently large height */
                    opacity: 1;
                    padding: 2rem; /* Restore padding when active */
                }
                
                .mobile-menu a {
                    display: block;
                    color: white;
                    text-decoration: none;
                    padding: 1rem 0;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    transition: color 0.3s ease;
                }
                
                .mobile-menu a:hover {
                    color: #ff3333;
                }
                
                @media (max-width: 768px) {
                    .nav-links {
                        display: none;
                    }
                    
                    .mobile-menu-btn {
                        display: block;
                    }
                }
            </style>
            <div class="container">
                <a href="/" class="logo">Cepot<span>Motion</span></a>
                <div class="nav-links">
                    <a href="index.html">Beranda</a>
                    <a href="karya.html">Karya</a>
                    <a href="testimoni.html">Testimoni</a>
                    <a href="faq.html">Pertanyaan</a>
                    <a href="#contact">Kontak</a>
                </div>
                <button class="mobile-menu-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu">
                        <line x1="3" y1="12" x2="21" y2="12"></line>
                        <line x1="3" y1="6" x2="21" y2="6"></line>
                        <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                </button>
            </div>
            <div class="mobile-menu">
                <a href="index.html">Beranda</a>
                <a href="karya.html">Karya</a>
                <a href="testimoni.html">Testimoni</a>
                <a href="faq.html">Pertanyaan</a>
                <a href="index.html#contact">Kontak</a>
            </div>
        `;

        // Mobile menu toggle
        this.shadowRoot.querySelector('.mobile-menu-btn').addEventListener('click', () => {
            this.shadowRoot.querySelector('.mobile-menu').classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        this.shadowRoot.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                this.shadowRoot.querySelector('.mobile-menu').classList.remove('active');
            });
        });
    }
}

customElements.define('custom-navbar', CustomNavbar);
