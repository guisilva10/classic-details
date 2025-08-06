import Image from "next/image";

const Header = () => {
  return (
    <header className="border-border bg-background sticky top-0 z-50 border-b shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center py-4 sm:py-6">
          <div className="flex flex-col items-center space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
            {/* Logo */}
            <div className="relative">
              <Image
                src="/logo.jpeg" // Substitua pelo caminho da sua logo
                alt="Classic Details Logo"
                width={60}
                height={60}
                className="rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg"
                priority
              />
            </div>

            {/* Texto */}
            <div className="text-center sm:text-left">
              <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                Classic Details
              </h1>
              <p className="text-muted-foreground text-sm font-medium tracking-wide sm:text-base">
                Estética Automotiva
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
