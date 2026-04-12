export default function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background relative z-10">
      <div className="container px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-primary rounded-sm flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm leading-none">G</span>
          </div>
          <span className="font-bold text-lg tracking-tight text-foreground">GRID WORK</span>
        </div>
        
        <p className="text-muted-foreground text-sm">
          Modern Websites. Minimal Cost.
        </p>
        
        <p className="text-muted-foreground/60 text-sm">
          &copy; {new Date().getFullYear()} GRID WORK. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
