export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm text-muted-foreground">
          Designed & Built by <span className="text-primary">Richa</span>
        </p>
        <p className="text-xs text-muted-foreground mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  )
}
