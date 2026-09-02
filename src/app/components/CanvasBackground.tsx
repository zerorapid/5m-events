"use client";

import { useEffect, useRef } from "react";

export default function CanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const gl = canvas.getContext("webgl");
    if (!gl) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const vertexShaderSource = `
        attribute vec2 a_position;
        varying vec2 v_texCoord;
        void main() {
            gl_Position = vec4(a_position, 0.0, 1.0);
            v_texCoord = a_position * 0.5 + 0.5;
        }
    `;

    const fragmentShaderSource = `
        precision highp float;
        uniform float u_time;
        uniform vec2 u_resolution;
        uniform vec2 u_mouse;

        varying vec2 v_texCoord;

        void main() {
            vec2 uv = v_texCoord;
            
            // Smooth pearl-like motion
            float wave1 = sin(uv.x * 3.0 + u_time * 0.5) * 0.5 + 0.5;
            float wave2 = sin(uv.y * 2.0 - u_time * 0.3) * 0.5 + 0.5;
            
            // Luxury Navy to Deep Indigo palette
            vec3 color1 = vec3(0.039, 0.098, 0.184); // #0a192f
            vec3 color2 = vec3(0.078, 0.157, 0.275); // Deep Midnight
            vec3 highlight = vec3(0.702, 0.600, 0.427); // Gold #b3996d (softened)
            
            vec3 finalColor = mix(color1, color2, wave1 * wave2);
            
            // Add a shimmering highlight based on mouse position
            vec2 m = u_mouse / u_resolution;
            // Invert Y for WebGL coords
            m.y = 1.0 - m.y;
            float dist = length(uv - m);
            float glow = smoothstep(0.5, 0.0, dist) * 0.05;
            
            finalColor += highlight * glow;
            
            gl_FragColor = vec4(finalColor, 1.0);
        }
    `;

    function createShader(gl: WebGLRenderingContext, type: number, source: string) {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) return;

    const program = gl.createProgram();
    if (!program) return;
    
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1.0, -1.0,
      1.0, -1.0,
      -1.0, 1.0,
      -1.0, 1.0,
      1.0, -1.0,
      1.0, 1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const positionAttributeLocation = gl.getAttribLocation(program, "a_position");
    gl.enableVertexAttribArray(positionAttributeLocation);
    gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

    const timeLocation = gl.getUniformLocation(program, "u_time");
    const resolutionLocation = gl.getUniformLocation(program, "u_resolution");
    const mouseLocation = gl.getUniformLocation(program, "u_mouse");

    let mouseX = 0.5 * canvas.width;
    let mouseY = 0.5 * canvas.height;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    let animationFrameId: number;
    function render(time: number) {
      time *= 0.001;

      gl!.uniform1f(timeLocation, time);
      gl!.uniform2f(resolutionLocation, canvas.width, canvas.height);
      gl!.uniform2f(mouseLocation, mouseX, mouseY);

      gl!.drawArrays(gl!.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    }

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
