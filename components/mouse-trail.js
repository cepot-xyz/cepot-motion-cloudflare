class ParticleTrail {
    constructor() {
        this.particles = [];
        this.mousePos = { x: 0, y: 0 };
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        
        // Setup canvas
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        
        // Resize handler
        window.addEventListener('resize', () => this.updateSize());
        this.updateSize();
        
        // Mouse move handler
        document.addEventListener('mousemove', (e) => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
            this.addParticle();
        });
        
        document.body.appendChild(this.canvas);
        this.animate();
    }
    
    updateSize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    addParticle() {
        this.particles.push({
            x: this.mousePos.x,
            y: this.mousePos.y,
            life: 1
        });
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw trail segments with tapering width
        if (this.particles.length > 1) {
            this.ctx.lineCap = 'round';
            this.ctx.lineJoin = 'square';
            const maxWidth = 50; // Maximum width of the trail

            for (let i = 1; i < this.particles.length; i++) {
                const p1 = this.particles[i - 1];
                const p2 = this.particles[i];

                this.ctx.beginPath();
                this.ctx.moveTo(p1.x, p1.y);
                this.ctx.lineTo(p2.x, p2.y);

                // Calculate width based on life, tapering towards the end
                const currentWidth = p2.life * maxWidth;
                this.ctx.lineWidth = Math.max(0, currentWidth); // Ensure width is not negative

                // Calculate opacity based on life
                const opacity = p2.life > 0 ? p2.life * 1 : 0; // 0.7 is the base opacity
                this.ctx.strokeStyle = `rgba(255, 0, 0, ${opacity})`;
                this.ctx.stroke();
            }
        }

        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.life -= 0.02;
            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }
        requestAnimationFrame(() => this.animate());
    }
}

// Inisialisasi di semua halaman
window.addEventListener('DOMContentLoaded', () => {
    new ParticleTrail();
});
