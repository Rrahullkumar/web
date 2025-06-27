// "use client";
// import React, { useEffect, useRef } from "react";

// const ParticlesBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     class Particle {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 2 + 1;
//         this.speedX = Math.random() * 2 - 1;
//         this.speedY = Math.random() * 2 - 1;
//         this.opacity = Math.random() * 0.5 + 0.2;
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = 
//         // `rgba(255, 186, 52, ${this.opacity})`;
        
//          `rgba(0, 255, 0, ${this.opacity})`;  
//         ctx.fill();
//       }
//     }

//     const particles = Array.from({ length: 150 }, () => new Particle());

//     let mouseX = 0;
//     let mouseY = 0;

//     const handleMouseMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     function animate() {
//       // ✅ Fill background with white every frame
//       ctx.fillStyle = "white";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle) => {
//         particle.update();
//         particle.draw();
//       });

//       particles.forEach((p1, i) => {
//         particles.slice(i + 1).forEach((p2) => {
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();
//             ctx.strokeStyle = `rgba(0, 255, 0, ${0.6 * (1 - distance / 100)})`; 
//             // ctx.strokeStyle = `rgba(255, 186, 52, ${0.6 * (1 - distance / 100)})`;

//             ctx.lineWidth = 0.5;
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         });

//         const dx = p1.x - mouseX;
//         const dy = p1.y - mouseY;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < 150) {
//           const angle = Math.atan2(dy, dx);
//           const force = (150 - distance) / 150;

//           p1.x += Math.cos(angle) * force * 2;
//           p1.y += Math.sin(angle) * force * 2;
//         }
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       id="particles"
//       className="fixed top-0 left-0 w-full h-full z-[-1]"
//     ></canvas>
//   );
// };

// export default ParticlesBackground;




// "use client";
// import React, { useEffect, useRef } from "react";

// const ParticlesBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const isSmallDevice = window.innerWidth < 768;  // Example mobile breakpoint

//     // ✅ Particle count based on device size
//     const particleCount = isSmallDevice ? 60 : 150;

//     class Particle {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 2 + 1;
//         this.speedX = Math.random() * 2 - 1;
//         this.speedY = Math.random() * 2 - 1;

//         // ✅ Lighter opacity on small screens
//         this.opacity = isSmallDevice
//           ? Math.random() * 0.2 + 0.7   // Light particles for small devices
//           : Math.random() * 0.5 + 0.2;  // Normal for large screens
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

//         const color = isSmallDevice
//           ? `rgba(0, 255, 0, ${this.opacity * 0.9})`  // Lighter green for mobile
//           : `rgba(0, 255, 0, ${this.opacity})`;

//         ctx.fillStyle = color;
//         ctx.fill();
//       }
//     }

//     const particles = Array.from({ length: particleCount }, () => new Particle());

//     let mouseX = 0;
//     let mouseY = 0;

//     const handleMouseMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     function animate() {
//       ctx.fillStyle = "white";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle) => {
//         particle.update();
//         particle.draw();
//       });

//       particles.forEach((p1, i) => {
//         particles.slice(i + 1).forEach((p2) => {
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();

//             const lineOpacity = isSmallDevice
//               ? 0.3 * (1 - distance / 100)
//               : 0.6 * (1 - distance / 100);

//             ctx.strokeStyle = `rgba(0, 255, 0, ${lineOpacity})`;
//             ctx.lineWidth = 0.5;
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         });

//         const dx = p1.x - mouseX;
//         const dy = p1.y - mouseY;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < 150) {
//           const angle = Math.atan2(dy, dx);
//           const force = (150 - distance) / 150;
//           p1.x += Math.cos(angle) * force * 2;
//           p1.y += Math.sin(angle) * force * 2;
//         }
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       id="particles"
//       className="fixed top-0 left-0 w-full h-full z-[-1]"
//     ></canvas>
//   );
// };

// export default ParticlesBackground;






// "use client";
// import React, { useEffect, useRef } from "react";

// const ParticlesBackground = () => {
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     function resizeCanvas() {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//     }
//     resizeCanvas();
//     window.addEventListener("resize", resizeCanvas);

//     const isSmallDevice = window.innerWidth < 768;  // Mobile breakpoint

//     // ✅ Particle count based on screen size
//     const particleCount = isSmallDevice ? 60 : 150;

//     class Particle {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.size = Math.random() * 2 + 1;
//         this.speedX = Math.random() * 2 - 1;
//         this.speedY = Math.random() * 2 - 1;

//         // ✅ Lighter particles on small devices
//         this.opacity = isSmallDevice
//           ? Math.random() * 0.2 + 0.1   // Lighter for mobile
//           : Math.random() * 0.5 + 0.2;  // Normal for larger screens
//       }

//       update() {
//         this.x += this.speedX;
//         this.y += this.speedY;

//         if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
//         if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
//       }

//       draw() {
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

//         const color = isSmallDevice
//           ? `rgba(0, 255, 0, ${this.opacity * 0.6})`  // More transparent on mobile
//           : `rgba(0, 255, 0, ${this.opacity})`;       // Normal opacity desktop

//         ctx.fillStyle = color;
//         ctx.fill();
//       }
//     }

//     const particles = Array.from({ length: particleCount }, () => new Particle());

//     let mouseX = 0;
//     let mouseY = 0;

//     const handleMouseMove = (e) => {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//     };

//     document.addEventListener("mousemove", handleMouseMove);

//     function animate() {
//       ctx.fillStyle = "white";
//       ctx.fillRect(0, 0, canvas.width, canvas.height);

//       particles.forEach((particle) => {
//         particle.update();
//         particle.draw();
//       });

//       particles.forEach((p1, i) => {
//         particles.slice(i + 1).forEach((p2) => {
//           const dx = p1.x - p2.x;
//           const dy = p1.y - p2.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);

//           if (distance < 100) {
//             ctx.beginPath();

//             const lineOpacity = isSmallDevice
//               ? 0.9 * (1 - distance / 100)    // ✅ Darker lines on mobile
//               : 0.6 * (1 - distance / 100);   // Normal on desktop

//             ctx.strokeStyle = isSmallDevice
//               ? `rgba(0, 100, 0, ${lineOpacity})`   // ✅ Dark green on mobile
//               : `rgba(0, 255, 0, ${lineOpacity})`;  // Bright green on desktop

//             ctx.lineWidth = 0.5;
//             ctx.moveTo(p1.x, p1.y);
//             ctx.lineTo(p2.x, p2.y);
//             ctx.stroke();
//           }
//         });

//         const dx = p1.x - mouseX;
//         const dy = p1.y - mouseY;
//         const distance = Math.sqrt(dx * dx + dy * dy);

//         if (distance < 150) {
//           const angle = Math.atan2(dy, dx);
//           const force = (150 - distance) / 150;
//           p1.x += Math.cos(angle) * force * 2;
//           p1.y += Math.sin(angle) * force * 2;
//         }
//       });

//       requestAnimationFrame(animate);
//     }

//     animate();

//     return () => {
//       window.removeEventListener("resize", resizeCanvas);
//       document.removeEventListener("mousemove", handleMouseMove);
//     };
//   }, []);

//   return (
//     <canvas
//       ref={canvasRef}
//       id="particles"
//       className="fixed top-0 left-0 w-full h-full z-[-1]"
//     ></canvas>
//   );
// };

// export default ParticlesBackground;


"use client";
import React, { useEffect, useRef } from "react";

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const isSmallDevice = window.innerWidth < 768;  // Mobile breakpoint

    // ✅ Particle count based on screen size
    const particleCount = isSmallDevice ? 60 : 150;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;

        // ✅ Different speed for mobile and desktop
        const speedRange = isSmallDevice ? 0.4  : 0.4;

        this.speedX = Math.random() * speedRange * 2 - speedRange;
        this.speedY = Math.random() * speedRange * 2 - speedRange;

        // ✅ Lighter particles on small devices
        this.opacity = isSmallDevice
          ? Math.random() * 0.2 + 0.1   // Lighter for mobile
          : Math.random() * 0.5 + 0.2;  // Normal for larger screens
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        const color = isSmallDevice
          ? `rgba(0, 255, 0, ${this.opacity * 0.6})`  // More transparent on mobile
          : `rgba(0, 255, 0, ${this.opacity})`;       // Normal opacity desktop

        ctx.fillStyle = color;
        ctx.fill();
      }
    }

    const particles = Array.from({ length: particleCount }, () => new Particle());

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);

    function animate() {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      particles.forEach((p1, i) => {
        particles.slice(i + 1).forEach((p2) => {
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 100) {
            ctx.beginPath();

            const lineOpacity = isSmallDevice
              ? 0.7 * (1 - distance / 100)    // ✅ Darker lines on mobile
              : 0.5 * (1 - distance / 100);   // Normal on desktop

            ctx.strokeStyle = isSmallDevice
              ? `rgba(0, 100, 0, ${lineOpacity})`   // ✅ Dark green on mobile
              : `rgba(0, 255, 0, ${lineOpacity})`;  // Bright green on desktop

            ctx.lineWidth = 0.5;
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });

        const dx = p1.x - mouseX;
        const dy = p1.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 150) {
          const angle = Math.atan2(dy, dx);
          const force = (150 - distance) / 150;
          p1.x += Math.cos(angle) * force * 2;
          p1.y += Math.sin(angle) * force * 2;
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="particles"
      className="fixed top-0 left-0 w-full h-full z-[-1]"
    ></canvas>
  );
};

export default ParticlesBackground;
