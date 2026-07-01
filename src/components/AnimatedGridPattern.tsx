"use client";

import { useEffect, useRef } from "react";

/**
 * AnimatedGridPattern — a canvas-based animated dot grid with
 * a slowly drifting radial spotlight, inspired by ReactBits backgrounds.
 * Pure Canvas, zero dependencies beyond React.
 */
export default function AnimatedGridPattern({
  dotColor = "rgba(11,94,215,0.18)",
  dotSize = 1.2,
  gap = 28,
  spotlightColor = "rgba(11,94,215,0.04)",
  className = "",
}: {
  dotColor?: string;
  dotSize?: number;
  gap?: number;
  spotlightColor?: string;
  className?: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animFrameId: number;
    let width = 0;
    let height = 0;

    // Spotlight position (mouse or drifting)
    let mx = 0;
    let my = 0;
    let targetX = 0;
    let targetY = 0;
    let drifting = true;
    let driftAngle = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      drifting = false;
    };

    const onMouseLeave = () => { drifting = true; };

    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const resize = () => {
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * devicePixelRatio;
      canvas.height = height * devicePixelRatio;
      ctx.scale(devicePixelRatio, devicePixelRatio);
      // Initialize spotlight to centre
      mx = width * 0.5;
      my = height * 0.4;
      targetX = mx;
      targetY = my;
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Drift spotlight slowly around the canvas
      if (drifting) {
        driftAngle += 0.0012;
        targetX = width * 0.5 + Math.cos(driftAngle) * width * 0.25;
        targetY = height * 0.4 + Math.sin(driftAngle * 0.7) * height * 0.2;
      }

      // Smooth follow
      mx += (targetX - mx) * 0.06;
      my += (targetY - my) * 0.06;

      // Radial spotlight gradient
      const r = Math.max(width, height) * 0.55;
      const grad = ctx.createRadialGradient(mx, my, 0, mx, my, r);
      grad.addColorStop(0, spotlightColor);
      grad.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      // Draw dot grid
      ctx.fillStyle = dotColor;
      for (let x = gap / 2; x < width; x += gap) {
        for (let y = gap / 2; y < height; y += gap) {
          // Proximity to spotlight brightens dot slightly
          const dist = Math.hypot(x - mx, y - my);
          const proximity = Math.max(0, 1 - dist / (r * 0.6));
          const alpha = 0.15 + proximity * 0.6;

          ctx.globalAlpha = alpha;
          ctx.beginPath();
          ctx.arc(x, y, dotSize + proximity * 0.8, 0, Math.PI * 2);
          ctx.fill();
        }
      }
      ctx.globalAlpha = 1;

      animFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameId);
      ro.disconnect();
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [dotColor, dotSize, gap, spotlightColor]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-auto ${className}`}
      aria-hidden="true"
    />
  );
}
