"use client";

import { useState } from "react";

export default function DigitalFactory({ onCardClick }) {
  const [hoveredNode, setHoveredNode] = useState(null);

  // Cards placement coordinates matched with isometric nodes
  const nodes = [
    {
      id: "ai",
      title: "AI / ML",
      description: "Building intelligent solutions with machine learning",
      pos: "top-[6%] left-[12%] sm:left-[16%]",
      drawerId: "skills"
    },
    {
      id: "web",
      title: "WEB APPS",
      description: "Scalable, fast and performance-driven applications",
      pos: "top-[8%] right-[4%] sm:right-[9%]",
      drawerId: "projects"
    },
    {
      id: "systems",
      title: "SYSTEMS",
      description: "Designing robust backend systems & architecture",
      pos: "bottom-[21%] left-[10%] sm:left-[14%]",
      drawerId: "skills"
    },
    {
      id: "mobile",
      title: "MOBILE",
      description: "Cross-platform apps for seamless experiences",
      pos: "bottom-[19%] right-[6%] sm:right-[11%]",
      drawerId: "projects"
    }
  ];

  return (
    <div className="relative w-full h-auto md:h-[580px] select-none bg-transparent">
      
      {/* SVG Factory Illustration */}
      <div className="relative h-[250px] md:h-full">
        <svg
        className="absolute inset-0 w-full h-full text-black stroke-current fill-none stroke-[1.6]"
        viewBox="0 0 900 650"
        preserveAspectRatio="xMidYMid meet"
      >
        
        {/* Shading & Materials definitions for 3D realism */}
        <defs>
          <linearGradient id="laserBeamGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="1" />
            <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="metalSilver" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FAF5E8" />
          </linearGradient>

          <linearGradient id="copperPipe" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFB300" />
            <stop offset="50%" stopColor="#FF7E5F" />
            <stop offset="100%" stopColor="#FF5722" />
          </linearGradient>

          {/* Diagonal warning stripes pattern */}
          <pattern id="warningStripes" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
            <rect width="6" height="12" fill="#000000" />
            <rect x="6" width="6" height="12" fill="#FFE05D" />
          </pattern>
        </defs>

        {/* 1. BLUEPRINT CALIBRATION MARKS & SCALE RULERS */}
        <g strokeOpacity="0.35" strokeWidth="1" stroke="currentColor">
          {/* Millimeter calibration ruler on left edge */}
          <line x1="30" y1="50" x2="30" y2="580" />
          {Array.from({ length: 27 }).map((_, i) => (
            <line
              key={`tick-l-${i}`}
              x1="30"
              y1={50 + i * 20}
              x2={i % 5 === 0 ? "40" : "35"}
              y2={50 + i * 20}
            />
          ))}
          {/* Millimeter calibration ruler on bottom edge */}
          <line x1="50" y1="580" x2="850" y2="580" />
          {Array.from({ length: 41 }).map((_, i) => (
            <line
              key={`tick-b-${i}`}
              x1={50 + i * 20}
              y1="580"
              x2={50 + i * 20}
              y2={i % 5 === 0 ? "570" : "575"}
            />
          ))}

          {/* CAD crosshair coordinate indicators */}
          <path d="M 50 50 L 70 50 M 60 40 L 60 60" />
          <path d="M 830 50 L 850 50 M 840 40 L 840 60" />
          <text x="75" y="55" fontFamily="monospace" fontSize="8" fill="#121212" fontWeight="800" stroke="none">GRID.CAL_01</text>
        </g>

        {/* 2. THREE-LEVEL LAYERED ISOMETRIC PLATFORM */}
        <g transform="translate(0, 30)">
          {/* Level -1: Heavy concrete foundation block */}
          <polygon points="450,540 810,360 810,385 450,565" fill="#FAF5E8" stroke="#000000" strokeWidth="2.5" />
          <polygon points="450,540 90,360 90,385 450,565" fill="#EAE5DA" stroke="#000000" strokeWidth="2.5" />

          {/* Level 0: Main Workstation table-top plate (Anodized Aluminum look) */}
          <polygon points="450,540 810,360 450,180 90,360" fill="url(#metalSilver)" stroke="#000000" strokeWidth="3" />
          
          {/* Engraved motherboard circuit lanes on table surface */}
          <g strokeOpacity="0.4" strokeWidth="1.2" stroke="currentColor">
            <line x1="450" y1="180" x2="450" y2="540" />
            <line x1="90" y1="360" x2="810" y2="360" />
            
            <ellipse cx="450" cy="360" rx="260" ry="130" />
            <ellipse cx="450" cy="360" rx="180" ry="90" />
            
            {/* Concentric coordinate rays */}
            <line x1="270" y1="270" x2="630" y2="450" />
            <line x1="270" y1="450" x2="630" y2="270" />
          </g>

          {/* Warning stripe trim card border on platform edges */}
          <polygon points="450,538 480,523 450,508 420,523" fill="url(#warningStripes)" fillOpacity="0.8" stroke="#000000" strokeWidth="2" />
        </g>

        {/* 3. EXTREMELY DETAILED 3D MODULE HOUSINGS */}
        
        {/* Module A: AI Server Tower (Tray eject systems, Heatsinks) */}
        <g transform="translate(200, 150)">
          {/* Heavy 3D Chassis */}
          <polygon points="-20,25 -20,-35 40,-5 40,55" fill="#FAF5E8" stroke="#000000" strokeWidth="2" />
          <polygon points="40,55 40,-5 100,-35 100,25" fill="#EAE5DA" stroke="#000000" strokeWidth="2" />
          <polygon points="40,-5 100,-35 40,-65 -20,-35" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          
          {/* Individual Server Trays detailing eject levers and slot lines */}
          {Array.from({ length: 4 }).map((_, i) => {
            const dy = i * 15;
            return (
              <g key={`tray-${i}`} transform={`translate(0, ${dy})`}>
                {/* Horizontal slide slot */}
                <line x1="50" y1="-10" x2="90" y2="-30" stroke="#000000" strokeWidth="2.5" />
                {/* Metallic slider button handle */}
                <rect x="52" y="-12" width="5" height="4" fill="#FFFFFF" stroke="#000000" strokeWidth="1.2" />
                {/* LED state indicator */}
                <circle cx="95" cy="-30" r="2.5" fill={i % 2 === 0 ? "var(--color-accent)" : "#39FF14"} stroke="#000000" strokeWidth="1" />
              </g>
            );
          })}
          
          {/* Exhaust fan details on top face */}
          <ellipse cx="40" cy="-35" rx="15" ry="7" fill="#000000" />
          <line x1="25" y1="-35" x2="55" y2="-35" stroke="#FFFFFF" strokeWidth="1.5" />
          
          <text x="-15" y="-50" fontFamily="monospace" fontSize="8" fill="#121212" fontWeight="800" stroke="none">UNIT: AI-CORE.90</text>
        </g>

        {/* Module B: WEB APPS Piston Press (Heavy industrial cylinders, Pulleys) */}
        <g transform="translate(620, 160)">
          {/* Heavy bottom base block */}
          <polygon points="0,20 60,50 120,20 60,-10" fill="#FAF5E8" stroke="#000000" strokeWidth="2" />
          
          {/* Chrome guide pillars */}
          <line x1="25" y1="10" x2="25" y2="-40" stroke="#000000" strokeWidth="5.5" />
          <line x1="25" y1="10" x2="25" y2="-40" stroke="#FFFFFF" strokeWidth="2" />
          
          <line x1="95" y1="10" x2="95" y2="-40" stroke="#000000" strokeWidth="5.5" />
          <line x1="95" y1="10" x2="95" y2="-40" stroke="#FFFFFF" strokeWidth="2" />
          
          {/* Vertical Press Piston moving up & down */}
          <g style={{ animation: "piston-bob 2.2s infinite ease-in-out" }}>
            {/* Press head */}
            <polygon points="20,-10 60,10 100,-10 60,-30" fill="#000000" stroke="#FFFFFF" strokeWidth="1.8" />
            <polygon points="20,-10 20,-3 60,17 60,10" fill="#000000" stroke="#000000" strokeWidth="1.2" />
            <polygon points="60,10 60,17 100,-3 100,-10" fill="#000000" stroke="#000000" strokeWidth="1.2" />
          </g>

          {/* Pressure meter dial */}
          <circle cx="60" cy="30" r="10" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <line x1="60" y1="30" x2="64" y2="24" stroke="var(--color-accent)" strokeWidth="2" />
          
          <text x="35" y="-45" fontFamily="monospace" fontSize="8" fill="#121212" fontWeight="800" stroke="none">UNIT: WEB.HYDR</text>
        </g>

        {/* Module C: SYSTEMS Cooling Block (Fluid gauges, Heat pipes) */}
        <g transform="translate(180, 420)">
          {/* 3D Box structure */}
          <polygon points="-20,20 40,50 100,20 40,-10" fill="#FAF5E8" stroke="#000000" strokeWidth="2" />
          <polygon points="-20,20 -20,40 40,70 40,50" fill="#EAE5DA" stroke="#000000" strokeWidth="2" />
          <polygon points="40,50 40,70 100,40 100,20" fill="#FAF5E8" stroke="#000000" strokeWidth="2" />

          {/* Copper Heat piping wrapping around box */}
          <g stroke="url(#copperPipe)" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M 0,10 L 40,-10 L 80,10" />
            <path d="M 10,25 L 40,10 L 70,25" />
          </g>

          {/* Fluid flow sight-glass gauge indicator */}
          <circle cx="40" cy="35" r="9" fill="#000000" stroke="#FFFFFF" strokeWidth="1.8" />
          <path d="M 33,35 L 47,35" stroke="var(--color-accent)" strokeWidth="3" />
          
          <text x="-15" y="-20" fontFamily="monospace" fontSize="8" fill="#121212" fontWeight="800" stroke="none">UNIT: SYS.COOL</text>
        </g>

        {/* Module D: MOBILE Transmitting Station (Dishes, Warnings) */}
        <g transform="translate(600, 390)">
          {/* Main platform base block */}
          <polygon points="0,20 50,45 100,20 50,-5" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          
          {/* Yellow/Black hazard warning striped bottom panel */}
          <polygon points="0,20 0,35 50,60 50,45" fill="url(#warningStripes)" stroke="#000000" strokeWidth="1.8" />
          <polygon points="50,45 50,60 100,35 100,20" fill="url(#warningStripes)" stroke="#000000" strokeWidth="1.8" />

          {/* Tall Lattice antenna rod */}
          <line x1="50" y1="20" x2="50" y2="-45" stroke="#000000" strokeWidth="4.5" />
          {/* Diagonal support wires */}
          <line x1="50" y1="-10" x2="10" y2="15" stroke="#000000" strokeWidth="1.2" />
          <line x1="50" y1="-10" x2="90" y2="15" stroke="#000000" strokeWidth="1.2" />

          {/* Curved parabolic dish antennas attached to rod */}
          <path d="M 40,-15 Q 30,-25 38,-35" stroke="#000000" strokeWidth="2.5" fill="none" />
          <line x1="38" y1="-25" x2="48" y2="-25" stroke="#000000" strokeWidth="2" />

          <circle cx="50" cy="-45" r="5" fill="var(--color-accent)" stroke="#000000" strokeWidth="1" className="animate-ping" />
          <text x="25" y="-55" fontFamily="monospace" fontSize="8" fill="#121212" fontWeight="800" stroke="none">UNIT: MOB.TRNS</text>
        </g>

        {/* 4. HIGH-DENSITY MAIN TN MOTHERBOARD PROCESSOR (CENTRAL ENGINE) */}
        <g transform="translate(450, 310)">
          {/* Double drop shadow */}
          <polygon points="0,110 100,60 0,10 -100,60" fill="#000000" fillOpacity="0.15" />

          {/* Level 1: Ceramic Motherboard Slab */}
          <polygon points="0,90 100,40 0,-10 -100,40" fill="#FFFFFF" stroke="#000000" strokeWidth="3.8" />
          
          {/* Circuit board tracers engraved on motherboard surface */}
          <g stroke="#000000" strokeOpacity="0.6" strokeWidth="1.5">
            {/* Grid array lines */}
            <path d="M -80,40 L -40,20 L 0,40 M -40,20 L 0,0 L 40,20 M 0,40 L 40,20 L 80,40" />
            <path d="M -60,50 L 0,20 L 60,50" />
          </g>

          {/* Golden alignment pins along sides */}
          <g stroke="url(#copperPipe)" strokeWidth="2.5">
            <line x1="-90" y1="45" x2="-80" y2="50" />
            <line x1="-80" y1="50" x2="-70" y2="55" />
            <line x1="90" y1="45" x2="80" y2="50" />
            <line x1="80" y1="50" x2="70" y2="55" />
          </g>

          {/* Level 2: Anodized CPU Socket bracket */}
          <polygon points="0,65 60,35 0,5 -60,35" fill="#FAF5E8" stroke="#000000" strokeWidth="2" />

          {/* Heat-sink aluminum cooling fins block */}
          {Array.from({ length: 5 }).map((_, i) => {
            const dy = i * 4;
            return (
              <polygon
                key={`fin-${i}`}
                points={`0,${50 - dy} 45,${27.5 - dy} 0,${5 - dy} -45,${27.5 - dy}`}
                fill="#FFFFFF"
                stroke="#000000"
                strokeWidth="1.5"
              />
            );
          })}

          {/* Silicon Core Die with glowing Violet Status ring */}
          <polygon points="0,30 35,12.5 0,-5 -35,12.5" fill="#000000" stroke="var(--color-accent)" strokeWidth="3" />
          
          {/* Bold technical logo text */}
          <text
            x="0"
            y="17"
            fontFamily="sans-serif"
            fontWeight="900"
            fontSize="11"
            fill="#FFFFFF"
            textAnchor="middle"
            className="tracking-tighter select-none"
          >
            TN
          </text>
        </g>

        {/* 5. HEAVY INDUSTRIAL HYDRAULIC ROBOTIC ARMS */}
        
        {/* Robotic Arm 1 (Assembling AI modules - Left) */}
        <g transform="translate(330, 160)">
          {/* Swivel Gear turret base */}
          <polygon points="0,15 20,25 40,15 20,5" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          <path d="M 5,12.5 L 5,17.5 M 10,15 L 10,20 M 30,15 L 30,20 M 35,12.5 L 35,17.5" stroke="#000000" strokeWidth="2" />
          <circle cx="20" cy="15" r="5" fill="#000000" />
          
          {/* Mechanical segmented link structure */}
          <g className="transition-transform duration-700 ease-in-out" style={{
            transform: hoveredNode === "ai" ? "rotate(14deg) scale(1.06)" : "rotate(0deg)",
            transformOrigin: "20px 15px"
          }}>
            {/* Hydraulic cylinder shaft 1 */}
            <line x1="20" y1="15" x2="45" y2="-25" stroke="#000000" strokeWidth="6.5" strokeLinecap="round" />
            <line x1="24" y1="9" x2="41" y2="-19" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />
            
            {/* Actuator hinge joint */}
            <circle cx="45" cy="-25" r="7.5" fill="var(--color-accent)" stroke="#000000" strokeWidth="1.5" />
            
            {/* Segment 2 link */}
            <line x1="45" y1="-25" x2="90" y2="-20" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />
            
            {/* Mechanical 2-finger claw gripper */}
            <circle cx="90" cy="-20" r="5.5" fill="#000000" />
            {/* Gripper jaws */}
            <path d="M 87,-13 L 90,-20 L 93,-13" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            {/* Glowing Laser Scanner Cone */}
            <g style={{ animation: "laser-sweep 2.6s infinite ease-in-out" }}>
              <polygon points="90,-20 60,60 120,60" fill="url(#laserBeamGrad)" opacity="0.45" stroke="none" />
              <line x1="90" y1="-20" x2="90" y2="60" stroke="var(--color-accent)" strokeWidth="2" strokeOpacity="0.9" />
              <circle cx="90" cy="60" r="3.5" fill="var(--color-accent)" stroke="#000000" strokeWidth="1" className="animate-ping" />
            </g>
          </g>
        </g>

        {/* Robotic Arm 2 (Scanning Mobiles/Contact - Right) */}
        <g transform="translate(560, 440)">
          {/* Swivel base turret */}
          <polygon points="0,15 20,25 40,15 20,5" fill="#FFFFFF" stroke="#000000" strokeWidth="3" />
          <circle cx="20" cy="15" r="5" fill="#000000" />

          {/* Mechanical segmented link structure */}
          <g className="transition-transform duration-700 ease-in-out" style={{
            transform: hoveredNode === "mobile" ? "rotate(-20deg) scale(1.04)" : "rotate(0deg)",
            transformOrigin: "20px 15px"
          }}>
            {/* Hydraulic cylinder segment 1 */}
            <line x1="20" y1="15" x2="-10" y2="-30" stroke="#000000" strokeWidth="6.5" strokeLinecap="round" />
            <line x1="16" y1="9" x2="-6" y2="-22" stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" />

            {/* Actuator hinge joint */}
            <circle cx="-10" cy="-30" r="7.5" fill="var(--color-accent)" stroke="#000000" strokeWidth="1.5" />

            {/* Segment 2 link */}
            <line x1="-10" y1="-30" x2="-55" y2="-25" stroke="#000000" strokeWidth="4.5" strokeLinecap="round" />

            {/* Gripper claw */}
            <circle cx="-55" cy="-25" r="5.5" fill="#000000" />
            <path d="M -58,-18 L -55,-25 L -52,-18" stroke="#000000" strokeWidth="3.5" strokeLinecap="round" fill="none" />

            {/* Scanning Laser Cone */}
            <g style={{ animation: "laser-sweep 3s infinite ease-in-out", animationDelay: "0.4s" }}>
              <polygon points="-55,-25 -85,45 -25,45" fill="url(#laserBeamGrad)" opacity="0.45" stroke="none" />
              <line x1="-55" y1="-25" x2="-55" y2="45" stroke="var(--color-accent)" strokeWidth="2" strokeOpacity="0.9" />
              <circle cx="-55" cy="45" r="3.5" fill="var(--color-accent)" stroke="#000000" strokeWidth="1" className="animate-ping" />
            </g>
          </g>
        </g>

        {/* 6. CONVEYOR BELT ASSEMBLY TRACKS */}
        
        {/* Conveyor 1: Left to Center */}
        <g transform="translate(260, 270)">
          {/* Roller wheels / Pulleys details */}
          <circle cx="10" cy="5" r="8" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <circle cx="10" cy="5" r="3" fill="#000000" />
          <circle cx="150" cy="75" r="8" fill="#FFFFFF" stroke="#000000" strokeWidth="2" />
          <circle cx="150" cy="75" r="3" fill="#000000" />
          
          {/* Conveyor Belt tracks */}
          <path d="M 10,-2 L 150,68 M 10,12 L 150,82" stroke="#000000" strokeWidth="2.5" />
          
          {/* Moving packages (capsules containing microchips/capacitors) */}
          <g style={{ animation: "conveyor-runs 5.5s infinite linear" }}>
            {/* Microchip 1 */}
            <g transform="translate(20, 10)">
              <polygon points="0,6 12,12 24,6 12,0" fill="#FFFFFF" stroke="var(--color-accent)" strokeWidth="1.8" />
              {/* Microchip legs pins */}
              <line x1="3" y1="4.5" x2="3" y2="7.5" stroke="#000000" strokeWidth="1.5" />
              <line x1="21" y1="4.5" x2="21" y2="7.5" stroke="#000000" strokeWidth="1.5" />
              <rect x="9" y="3" width="6" height="6" fill="var(--color-accent)" stroke="#000000" strokeWidth="1" />
            </g>
            {/* Microchip 2 */}
            <g transform="translate(85, 42.5)">
              <polygon points="0,6 12,12 24,6 12,0" fill="#FFFFFF" stroke="#000000" strokeWidth="1.8" />
              <line x1="3" y1="4.5" x2="3" y2="7.5" stroke="#000000" strokeWidth="1.5" />
              <line x1="21" y1="4.5" x2="21" y2="7.5" stroke="#000000" strokeWidth="1.5" />
              <rect x="9" y="3" width="6" height="6" fill="#000000" />
            </g>
          </g>
        </g>

        {/* 7. LOOPING CABLE STRAPS & RIBBONS */}
        <g strokeOpacity="0.6">
          {/* Curved rib-textured orange rubber pipe */}
          <path
            d="M 280,480 Q 320,530 400,500"
            stroke="url(#copperPipe)"
            strokeWidth="6"
            strokeDasharray="2 3"
            strokeLinecap="round"
          />
          {/* Looping black ribbon power cables */}
          <path
            d="M 520,200 Q 450,150 380,200"
            stroke="#000000"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
          <path
            d="M 520,206 Q 450,156 380,206"
            stroke="#FFFFFF"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>

        {/* 8. DENSE CAD blue-print text labels */}
        <g fontFamily="monospace" fontSize="8" fill="#121212" fontWeight="800" letterSpacing="0.1em" stroke="none">
          <text x="375" y="70">[ MODEL: TN-CORE.v12 ]</text>
          <text x="400" y="555">STATUS: CORE_SYSTEM.NOMINAL</text>
          <text x="120" y="525">VOLTS: 12.0V_OK</text>
          <text x="680" y="505">FREQ: 60.00HZ_REF</text>
          <text x="680" y="110">TEMP: 26.4C_PASS</text>

          {/* Plus coordinates anchors */}
          <text x="450" y="150" textAnchor="middle">+</text>
          <text x="210" y="320" textAnchor="middle">+</text>
          <text x="690" y="320" textAnchor="middle">+</text>
        </g>

      </svg>
      </div>

      {/* Cards - Mobile: grid below SVG */}
      <div className="grid grid-cols-2 gap-3 px-4 pt-3 pb-5 md:hidden">
        {nodes.map((node) => (
          <div
            key={node.id}
            onClick={() => onCardClick(node.drawerId)}
            className="p-3.5 bg-white border-3 border-black shadow-[4px_4px_0px_#000] cursor-pointer active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
          >
            <div className="flex items-center justify-between mb-1.5">
              <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                {node.title}
              </span>
              <span className="w-5 h-5 border-2 border-black bg-white flex items-center justify-center text-[11px] font-black text-black">+</span>
            </div>
            <p className="text-[10px] text-black font-bold leading-snug">{node.description}</p>
          </div>
        ))}
      </div>

      {/* Cards - Desktop: absolutely positioned over SVG */}
      <div className="hidden md:block">
      {nodes.map((node) => {
        const isHovered = hoveredNode === node.id;
        return (
          <div
            key={node.id}
            className={`absolute ${node.pos} w-[200px] pointer-events-auto select-none`}
            onMouseEnter={() => setHoveredNode(node.id)}
            onMouseLeave={() => setHoveredNode(null)}
          >
            <div
              onClick={() => onCardClick(node.drawerId)}
              className={`hardware-tile p-4 text-left cursor-pointer transition-all duration-150 border-3 border-black shadow-[5px_5px_0px_#000] ${
                isHovered ? "bg-[#FFE05D] -translate-y-1.5 shadow-[7px_7px_0px_#000]" : "bg-white translate-y-0"
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[11px] font-black uppercase tracking-wider text-black">
                  {node.title}
                </span>
                
                <span className={`w-5 h-5 border-2 border-black flex items-center justify-center text-[11px] font-black transition-all ${
                  isHovered ? "bg-black text-[#FFE05D]" : "bg-white text-black"
                }`}>
                  +
                </span>
              </div>
              <p className="text-[10px] sm:text-[11px] text-black font-bold leading-normal font-sans">
                {node.description}
              </p>
            </div>
          </div>
        );
      })}
      </div>

      {/* Embedded central Motherboard processor block tag */}
      <div className="absolute top-[43%] left-[50%] -translate-x-1/2 -translate-y-1/2 flex flex-col items-center pointer-events-none">
        <div className="px-3.5 py-1 bg-black text-white font-mono text-[8px] font-black uppercase tracking-widest border border-black shadow-[2px_2px_0px_#000] rotate-[-1.5deg]">
          TN CORE
        </div>
      </div>

      {/* Conveyor and laser animations */}
      <style>{`
        @keyframes conveyor-runs {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(-65px, -32.5px);
          }
        }
        @keyframes laser-sweep {
          0%, 100% {
            transform: rotate(-4deg);
          }
          50% {
            transform: rotate(4deg);
          }
        }
        @keyframes piston-bob {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(12px);
          }
        }
      `}</style>

    </div>
  );
}
