"use client";

import { motion } from "framer-motion";

import { useEffect, useRef } from "react";

const WelcomeSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const setCanvasDimensions = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    setCanvasDimensions();
    window.addEventListener("resize", setCanvasDimensions);

    const particles: Particle[] = [];
    const particleCount = 100;
    const connectionDistance = 150;
    const mouseRadius = 150;

    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;

    class Particle {
      x: number = 0;
      y: number = 0;
      size: number = 0;
      speedX: number = 0;
      speedY: number = 0;
      color: string = "#ffffff";

      constructor() {
        if (!canvas) return;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
      }

      update() {
        if (!canvas) return;
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX = -this.speedX;
        }

        if (this.y < 0 || this.y > canvas.height) {
          this.speedY = -this.speedY;
        }

        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseRadius) {
          const forceDirectionX = -dx / distance;
          const forceDirectionY = -dy / distance;
          const force = (mouseRadius - distance) / mouseRadius;

          this.speedX += forceDirectionX * force * 0.1;
          this.speedY += forceDirectionY * force * 0.1;
        }

        const maxSpeed = 2;
        const currentSpeed = Math.sqrt(this.speedX * this.speedX + this.speedY * this.speedY);

        if (currentSpeed > maxSpeed) {
          this.speedX = (this.speedX / currentSpeed) * maxSpeed;
          this.speedY = (this.speedY / currentSpeed) * maxSpeed;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      const particle = new Particle();
      if (particle) {
        particles.push(particle);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    canvas.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();

        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / connectionDistance})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", setCanvasDimensions);
      canvas.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-black to-primary/30">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        <motion.div
          className="mb-8 relative"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 15,
            delay: 0.5,
          }}
        >
          <div className="w-32 h-32 md:w-40 md:h-40 relative">
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-primary/30"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.8, 0.4, 0.8],
                scale: [0.8, 1, 0.95, 1],
              }}
              transition={{
                duration: 8,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
            />

            <motion.div
              className="absolute inset-2 rounded-full border-2 border-primary/50"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 0.6, 0.3, 0.6],
                scale: [0.7, 0.9, 0.85, 0.9],
                rotate: 360,
              }}
              transition={{
                duration: 12,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
              }}
            />

            <motion.div
              className="absolute inset-4 bg-gradient-to-br from-primary to-primary/50 rounded-full flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-bold text-primary-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                TN
              </motion.div>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.h1
            className="text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary/90 to-white"
            initial={{ y: 50, opacity: 0 }}
            animate={{
              y: 0,
              opacity: 1,
              textShadow: [
                "0 0 5px rgba(255,255,255,0.1)",
                "0 0 15px rgba(255,255,255,0.3)",
                "0 0 5px rgba(255,255,255,0.1)",
              ],
            }}
            transition={{
              delay: 2.2,
              duration: 1.5,
              textShadow: {
                repeat: Number.POSITIVE_INFINITY,
                duration: 3,
                repeatType: "reverse",
              },
            }}
          >
            TeRoNet
          </motion.h1>

          <motion.p
            className="mt-4 text-xl md:text-2xl text-primary-foreground/80 max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 1 }}
          >
            Инновационные решения
          </motion.p>
        </motion.div>

        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/10 backdrop-blur-sm"
            style={{
              width: 100 + i * 50,
              height: 100 + i * 50,
            }}
            initial={{
              x: (i % 2 === 0 ? -200 : 200) + i * 30,
              y: -100 + i * 50,
              opacity: 0,
            }}
            animate={{
              x: [(i % 2 === 0 ? -200 : 200) + i * 30, (i % 2 === 0 ? -180 : 180) + i * 30],
              y: [-100 + i * 50, -80 + i * 50],
              opacity: [0, 0.2, 0.1, 0.2],
              scale: [0.8, 1, 0.9, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default WelcomeSection;
