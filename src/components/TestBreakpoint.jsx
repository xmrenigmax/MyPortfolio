export default function TestBreakpoint() {
  return (
    <div className="p-4">
      {/* Mobile-only (red) */}
      <div className="block bg-red-500 p-4 text-white md:hidden">
        MOBILE VIEW (should ONLY appear on small screens)
      </div>
      
      {/* Desktop-only (green) */}
      <div className="hidden bg-green-500 p-4 text-white md:block">
        DESKTOP VIEW (should ONLY appear on large screens)
      </div>
      
      {/* Debug info */}
      <div className="mt-4 font-mono text-sm">
        <p>Current screen width: {window.innerWidth}px</p>
        <p>Active breakpoint: 
          <span className="sm:hidden">XS</span>
          <span className="hidden sm:inline md:hidden">SM</span>
          <span className="hidden md:inline lg:hidden">MD</span>
          <span className="hidden lg:inline">LG+</span>
        </p>
      </div>
    </div>
  )
}