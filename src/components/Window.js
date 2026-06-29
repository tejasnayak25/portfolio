"use client";

import { useState, useRef, useEffect } from "react";

export default function Window({
  title,
  id,
  isOpen,
  isMinimized,
  onClose,
  onMinimize,
  activeWindow,
  setActiveWindow,
  defaultPos = { x: 100, y: 100 },
  defaultSize = { width: 600, height: 450 },
  children
}) {
  const [pos, setPos] = useState(defaultPos);
  const [size, setSize] = useState(defaultSize);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);

  const dragStart = useRef({ x: 0, y: 0 });
  const resizeStart = useRef({ x: 0, y: 0, width: 0, height: 0 });
  const windowRef = useRef(null);

  // Set focus on initial click/mount
  useEffect(() => {
    if (isOpen && !isMinimized) {
      setActiveWindow(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, isMinimized]);

  // Center window on screen if defaultPos is not custom
  useEffect(() => {
    if (typeof window !== "undefined") {
      const x = Math.max(20, (window.innerWidth - size.width) / 2 + (id === "terminal" ? 20 : id === "about" ? -20 : 0));
      const y = Math.max(80, (window.innerHeight - size.height) / 2.5 + (id === "terminal" ? 15 : id === "about" ? -15 : 0));
      const timer = setTimeout(() => {
        setPos({ x, y });
      }, 0);
      return () => clearTimeout(timer);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // DRAG HANDLERS
  const startDrag = (e) => {
    if (isMaximized) return;
    setActiveWindow(id);
    setIsDragging(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    dragStart.current = { x: clientX - pos.x, y: clientY - pos.y };
  };

  const onDrag = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    // Bounds checking inside screen dimensions
    let newX = clientX - dragStart.current.x;
    let newY = clientY - dragStart.current.y;

    if (newY < 0) newY = 0;
    
    setPos({ x: newX, y: newY });
  };

  const stopDrag = () => {
    setIsDragging(false);
  };

  // RESIZE HANDLERS
  const startResize = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setActiveWindow(id);
    setIsResizing(true);
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    resizeStart.current = {
      x: clientX,
      y: clientY,
      width: size.width,
      height: size.height
    };
  };

  const onResize = (e) => {
    if (!isResizing) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    const clientY = e.clientY || (e.touches && e.touches[0].clientY);
    
    const deltaX = clientX - resizeStart.current.x;
    const deltaY = clientY - resizeStart.current.y;
    
    const newWidth = Math.max(320, resizeStart.current.width + deltaX);
    const newHeight = Math.max(280, resizeStart.current.height + deltaY);
    
    setSize({ width: newWidth, height: newHeight });
  };

  const stopResize = () => {
    setIsResizing(false);
  };

  // Listen globally to capture drag/resizes outside the window boundaries
  useEffect(() => {
    if (isDragging) {
      document.addEventListener("mousemove", onDrag);
      document.addEventListener("mouseup", stopDrag);
      document.addEventListener("touchmove", onDrag);
      document.addEventListener("touchend", stopDrag);
    }
    if (isResizing) {
      document.addEventListener("mousemove", onResize);
      document.addEventListener("mouseup", stopResize);
      document.addEventListener("touchmove", onResize);
      document.addEventListener("touchend", stopResize);
    }
    return () => {
      document.removeEventListener("mousemove", onDrag);
      document.removeEventListener("mouseup", stopDrag);
      document.removeEventListener("touchmove", onDrag);
      document.removeEventListener("touchend", stopDrag);
      document.removeEventListener("mousemove", onResize);
      document.removeEventListener("mouseup", stopResize);
      document.removeEventListener("touchmove", onResize);
      document.removeEventListener("touchend", stopResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging, isResizing]);

  const toggleMaximize = () => {
    setIsMaximized(!isMaximized);
  };

  const focusZIndex = activeWindow === id 
    ? "z-30 shadow-[8px_8px_0px_#000] scale-[1.005] border-black" 
    : "z-20 shadow-[4px_4px_0px_#000] border-black opacity-[0.98]";

  const windowStyle = isMaximized
    ? {
        position: "fixed",
        top: "80px",
        left: "16px",
        right: "16px",
        bottom: "100px",
        width: "calc(100% - 32px)",
        height: "calc(100vh - 180px)",
        transition: "all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)"
      }
    : {
        position: "absolute",
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        width: `${size.width}px`,
        height: `${size.height}px`
      };

  if (!isOpen || isMinimized) return null;

  return (
    <div
      ref={windowRef}
      onMouseDown={() => setActiveWindow(id)}
      onTouchStart={() => setActiveWindow(id)}
      style={windowStyle}
      className={`bg-white border-3 border-black overflow-hidden flex flex-col scale-animation ${focusZIndex}`}
    >
      {/* Window Header Titlebar */}
      <div
        onMouseDown={startDrag}
        onTouchStart={startDrag}
        onDoubleClick={toggleMaximize}
        className="px-4 py-2.5 bg-white border-b-2 border-black flex items-center justify-between cursor-grab active:cursor-grabbing select-none"
      >
        {/* Left Window Control dots */}
        <div className="flex gap-2 items-center">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="w-3.5 h-3.5 rounded-full bg-red-400 border border-black hover:bg-red-500 flex justify-center items-center text-[8px] font-black text-red-950 transition-colors cursor-pointer group"
          >
            <span className="hidden group-hover:block">×</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className="w-3.5 h-3.5 rounded-full bg-yellow-400 border border-black hover:bg-yellow-500 flex justify-center items-center text-[8px] font-black text-yellow-950 transition-colors cursor-pointer group"
          >
            <span className="hidden group-hover:block">−</span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              toggleMaximize();
            }}
            className="w-3.5 h-3.5 rounded-full bg-green-400 border border-black hover:bg-green-500 flex justify-center items-center text-[8px] font-black text-green-950 transition-colors cursor-pointer group"
          >
            <span className="hidden group-hover:block">⤢</span>
          </button>
        </div>

        {/* Center Title */}
        <span className="text-xs font-black text-black uppercase tracking-widest pl-6 select-none">
          {title}
        </span>

        {/* Dummy spacer */}
        <div className="w-12 h-3" />
      </div>

      {/* Window Content Body */}
      <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-[var(--background)] text-black">
        {children}
      </div>

      {/* Resize handle (bottom right corner) */}
      {!isMaximized && (
        <div
          onMouseDown={startResize}
          onTouchStart={startResize}
          className="absolute bottom-1 right-1 w-4 h-4 cursor-se-resize flex items-end justify-end pointer-events-auto"
        >
          <svg className="w-2.5 h-2.5 text-slate-400 stroke-current" fill="none" strokeWidth="2.5">
            <line x1="10" y1="0" x2="0" y2="10" />
            <line x1="10" y1="4" x2="4" y2="10" />
          </svg>
        </div>
      )}
    </div>
  );
}
