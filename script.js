document.addEventListener('DOMContentLoaded', function() {
            const canvas = document.getElementById('pulseCanvas');
            const ctx = canvas.getContext('2d');
            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;
            let pulseX = 0;
            let isPulseActive = false;

            // Draw the initial graph with a straight "dead pulse" line
            function drawInitialGraph() {
                // Clear the canvas
                ctx.clearRect(0, 0, canvasWidth, canvasHeight);

                // Grid background
                function drawGrid() {
                    ctx.strokeStyle = '#ddd';
                    for (let x = 0; x <= canvasWidth; x += 30) {
                        ctx.moveTo(x, 0);
                        ctx.lineTo(x, canvasHeight);
                    }
                    for (let y = 0; y <= canvasHeight; y += 30) {
                        ctx.moveTo(0, y);
                        ctx.lineTo(canvasWidth, y);
                    }
                    ctx.stroke();
                }

                drawGrid();

                // Draw the dead pulse line (straight horizontal line in the middle)
                ctx.beginPath();
                ctx.moveTo(0, canvasHeight / 2);
                ctx.lineTo(canvasWidth, canvasHeight / 2); // Horizontal line across the canvas
                ctx.strokeStyle = '#007BFF';
                ctx.lineWidth = 2;
                ctx.stroke();
            }

            // Call the function to draw the initial graph
            drawInitialGraph();

            // Function to animate the pulse movement after button click
            function drawPulse() {
                if (!isPulseActive) return; // Exit if the pulse is not active

                ctx.clearRect(0, 0, canvasWidth, canvasHeight); // Clear canvas for smooth animation

                // Grid background remains the same
                function drawGrid() {
                    ctx.strokeStyle = '#ddd';
                    for (let x = 0; x <= canvasWidth; x += 30) {
                        ctx.moveTo(x, 0);
                        ctx.lineTo(x, canvasHeight);
                    }
                    for (let y = 0; y <= canvasHeight; y += 30) {
                        ctx.moveTo(0, y);
                        ctx.lineTo(canvasWidth, y);
                    }
                    ctx.stroke();
                }

                drawGrid(); // Redraw grid

                ctx.beginPath();
                ctx.moveTo(0, canvasHeight / 2); // Start from the center

                // Generate pulse wave effect
                for (let i = 0; i <= pulseX; i += 20) {
                    ctx.lineTo(i, canvasHeight / 2 - Math.sin(i * 0.05) * 50);
                }

                ctx.strokeStyle = '#007BFF';
                ctx.lineWidth = 2;
                ctx.stroke();

                // Move pulse forward
                pulseX += 5;

                if (pulseX < canvasWidth) {
                    requestAnimationFrame(drawPulse); // Continue the animation
                }
            }

            // Event listener for the "Test Speed" button
            document.getElementById('testButton').addEventListener('click', function() {
                isPulseActive = true; // Activate pulse movement
                pulseX = 0; // Reset pulse starting point
                drawPulse(); // Start the pulse animation

                // Simulate values for ping, download speed, and upload speed
                const pingValue = Math.floor(Math.random() * 100); // Random ping between 0 and 100 ms
                const downloadValue = (Math.random() * 100).toFixed(2); // Random download speed in Mbps
                const uploadValue = (Math.random() * 50).toFixed(2); // Random upload speed in Mbps
                const serverLocation = "New York, USA"; // Static server location for demonstration

                // Update the table with the generated values
                document.getElementById('ping').textContent = `${pingValue} ms`;
                document.getElementById('download').textContent = `${downloadValue} Mbps`;
                document.getElementById('upload').textContent = `${uploadValue} Mbps`;
                document.getElementById('location').textContent = serverLocation;
            });
        });

        // FAQ Accordion Logic
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');

    question.addEventListener('click', () => {
        // Toggle the 'open' class
        item.classList.toggle('open');
    });
});
// JavaScript for responsive navbar toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Optional: Add a listener to close the navbar when a link is clicked
navLinks.addEventListener('click', () => {
    navLinks.classList.remove('active');
});
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}
function toggleMenu() {
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
    }

document.getElementById("testButton").addEventListener("click", function() {
    // Clear previous results
    document.getElementById("ping").textContent = "-- ms";
    document.getElementById("download").textContent = "-- Mbps";
    document.getElementById("upload").textContent = "-- Mbps";
    document.getElementById("location").textContent = "--";

});
