class CustomFooter extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&display=swap');
                :host {
                    display: block;
                    background: #222222;
                    padding: 2rem;
                    font-family: 'Sora', sans-serif;
                }
                
                .container {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                
                .copyright {
                    font-size: 0.9rem;
                    color: #a0a0a0;
                }
                
                .nav-links {
                    display: flex;
                    gap: 1.5rem;
                    align-items: center;
                }
                
                .nav-links a {
                    color: #ffffff;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                
                .nav-links a:hover {
                    color: #ff3333;
                }
                
                @media (max-width: 768px) {
                    .container {
                        flex-direction: column;
                        gap: 1rem;
                        padding: 1rem 0;
                    }
                    
                    .nav-links {
                        flex-direction: row;
                        gap: 1rem;
                    }
                }
            </style>
            <div class="container">
                <p class="copyright">CepotMotion &copy;2025 | All Rights Reserved</p>
                <div class="nav-links">
                    <a href="https://wa.me/6283842718181">WhatsApp</a>
                    <a href="https://instagram.com/cepot.xyz_/">Instagram</a>
                    <a href="https://mailto:cepotmain@gmail.com">E-Mail</a>
                </div>
            </div>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);
