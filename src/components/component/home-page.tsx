import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { SheetTrigger, SheetClose, SheetContent, Sheet } from "@/components/ui/sheet"
import { JSX, SVGProps } from "react"

export function HomePage() {
  
  const redirectToShopping = () => {
    window.location.href = "/shopping";
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm dark:bg-gray-900">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link className="flex items-center gap-2 font-bold text-lg text-gray-900 dark:text-gray-50" href="/">
            <ShoppingBagIcon className="h-6 w-6" />
            SocialShoppers
          </Link>
          <Button className="lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation</span>
          </Button>
          <nav className="hidden lg:flex items-center gap-6">
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/shop">
              Explore
            </Link>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="shop">
              Categories
            </Link>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/shop">
              Brands
            </Link>
            <Link className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50" href="/AR">
              AR Try-On
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button size="icon" variant="outline">
              <SearchIcon className="h-6 w-6" />
              <span className="sr-only">Search</span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="outline">
                  <Avatar className="h-8 w-8">
                    <AvatarImage alt="@socialshoppers" src="/placeholder-avatar.jpg" />
                    <AvatarFallback>SS</AvatarFallback>
                  </Avatar>
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Profile</DropdownMenuItem>
                <DropdownMenuItem>Orders</DropdownMenuItem>
                <DropdownMenuItem>Wishlist</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>
      <Sheet>
        <SheetTrigger asChild>
          <Button className="fixed bottom-4 right-4 z-50 lg:hidden" size="icon" variant="outline">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle side drawer</span>
          </Button>
        </SheetTrigger>
        <SheetContent className="w-full max-w-md" side="right">
          <div className="flex flex-col h-full">
            <div className="flex items-center justify-between border-b px-6 py-4 dark:border-gray-800">
              <h2 className="text-lg font-semibold">SocialShoppers</h2>
              <SheetClose asChild>
                <Button size="icon" variant="ghost">
                  <XIcon className="h-6 w-6" />
                  <span className="sr-only">Close side drawer</span>
                </Button>
              </SheetClose>
            </div>
            <div className="flex-1 overflow-y-auto p-6">
              <div className="grid gap-6">
                <div className="grid gap-2">
                  <h3 className="text-sm font-semibold">Featured Products</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <Link className="absolute inset-0 z-10" href="#">
                        <span className="sr-only">View product</span>
                      </Link>
                      <img
                        alt="Product 1"
                        className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                        height={200}
                        src="/placeholder.svg"
                        width={200}
                      />
                      <div className="flex-1 py-2">
                        <h4 className="font-semibold text-sm truncate">Acme Sunglasses</h4>
                        <small className="text-xs leading-none text-gray-500 dark:text-gray-400">Acme Brand</small>
                        <Button className="mt-2" size="sm" variant="outline">
                          <ArchiveIcon className="h-4 w-4 mr-2" />
                          Try on AR
                        </Button>
                      </div>
                    </div>
                    <div className="relative group">
                      <Link className="absolute inset-0 z-10" href="#">
                        <span className="sr-only">View product</span>
                      </Link>
                      <img
                        alt="Product 2"
                        className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                        height={200}
                        src="/placeholder.svg"
                        width={200}
                      />
                      <div className="flex-1 py-2">
                        <h4 className="font-semibold text-sm truncate">Acme Backpack</h4>
                        <small className="text-xs leading-none text-gray-500 dark:text-gray-400">Acme Brand</small>
                        <Button className="mt-2" size="sm" variant="outline">
                          <ArchiveIcon className="h-4 w-4 mr-2" />
                          Try on AR
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-2">
                  <h3 className="text-sm font-semibold">Trending Products</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative group">
                      <Link className="absolute inset-0 z-10" href="#">
                        <span className="sr-only">View product</span>
                      </Link>
                      <img
                        alt="Product 3"
                        className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                        height={200}
                        src="/placeholder.svg"
                        width={200}
                      />
                      <div className="flex-1 py-2">
                        <h4 className="font-semibold text-sm truncate">Acme T-Shirt</h4>
                        <small className="text-xs leading-none text-gray-500 dark:text-gray-400">Acme Brand</small>
                        <Button className="mt-2" size="sm" variant="outline">
                          <ArchiveIcon className="h-4 w-4 mr-2" />
                          Try on AR
                        </Button>
                      </div>
                    </div>
                    <div className="relative group">
                      <Link className="absolute inset-0 z-10" href="#">
                        <span className="sr-only">View product</span>
                      </Link>
                      <img
                        alt="Product 4"
                        className="rounded-lg object-cover w-full aspect-square group-hover:opacity-50 transition-opacity"
                        height={200}
                        src="/placeholder.svg"
                        width={200}
                      />
                      <div className="flex-1 py-2">
                        <h4 className="font-semibold text-sm truncate">Acme Sneakers</h4>
                        <small className="text-xs leading-none text-gray-500 dark:text-gray-400">Acme Brand</small>
                        <Button className="mt-2" size="sm" variant="outline">
                          <ArchiveIcon className="h-4 w-4 mr-2" />
                          Try on AR
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
      <main className="flex-1">
        <section className="py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex flex-col justify-center">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                  Discover the Latest Trends with SocialShoppers
                </h1>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Explore a world of fashion, beauty, and lifestyle products curated by our community.
                </p>
                <div className="flex gap-4">
                <Link href="/shop" passHref>
                    <Button variant="link">Shop Now</Button>
                  </Link>
                  <Button variant="outline">Learn More</Button>
                </div>
              </div>
              <div className="relative">
                <img
                  alt="Hero Image"
                  className="rounded-lg object-cover w-full aspect-square"
                  height={600}
                  src="/countr-shopping-app.png"
                  width={600}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-16 bg-gray-100 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Explore Our Categories</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Browse through our wide selection of categories to find the perfect products for you.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <Link
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href = '/shop'
              >
                <ShirtIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <span className="text-sm font-medium">Clothing</span>
              </Link>
              <Link
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href = '/shop'
              >
                <ShirtIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <span className="text-sm font-medium">Shoes</span>
              </Link>
              <Link
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href = '/shop'
              >
                <ShoppingBagIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <span className="text-sm font-medium">Bags</span>
              </Link>
              <Link
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href = '/shop'
              >
                <PaintbrushIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <span className="text-sm font-medium">Beauty</span>
              </Link>
              <Link
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href = '/shop'
              >
                <WatchIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <span className="text-sm font-medium">Accessories</span>
              </Link>
              <Link
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href = '/shop'
              >
                <HomeIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <span className="text-sm font-medium">Home</span>
              </Link>
              <Link
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href = '/shop'
              >
                <CircuitBoardIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <span className="text-sm font-medium">Electronics</span>
              </Link>
              <Link
                className="flex flex-col items-center gap-3 p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href = '/shop'
              >
                <ClubIcon className="h-8 w-8 text-gray-900 dark:text-gray-50" />
                <span className="text-sm font-medium">Sports</span>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-8 md:py-12 lg:py-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-8">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Top Brands</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-md">
                Discover the latest collections from our top brand partners.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <Link
                className="flex items-center justify-center p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href="/shop"
              >
                <img
                  alt="Brand Logo"
                  className="w-full h-auto object-contain"
                  height={60}
                  src="/zara.png"
                  style={{
                    aspectRatio: "120/60",
                    objectFit: "cover",
                  }}
                  width={120}
                />
              </Link>
              <Link
                className="flex items-center justify-center p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href="/shop"
              >
                <img
                  alt="Brand Logo"
                  className="w-full h-auto object-contain"
                  height={60}
                  src="/mavi.png"
                  style={{
                    aspectRatio: "120/60",
                    objectFit: "cover",
                  }}
                  width={120}
                />
              </Link>
              <Link
                className="flex items-center justify-center p-4 rounded-lg bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                href="/shop"
                
              />
              
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

function ArchiveIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="5" x="2" y="3" rx="1" />
      <path d="M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8" />
      <path d="M10 12h4" />
    </svg>
  )
}


function CircuitBoardIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" />
      <path d="M11 9h4a2 2 0 0 0 2-2V3" />
      <circle cx="9" cy="9" r="2" />
      <path d="M7 21v-4a2 2 0 0 1 2-2h4" />
      <circle cx="15" cy="15" r="2" />
    </svg>
  )
}


function ClubIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
      <path d="M12 17.66L12 22" />
    </svg>
  )
}


function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function PaintbrushIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z" />
      <path d="M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7" />
      <path d="M14.5 17.5 4.5 15" />
    </svg>
  )
}


function SearchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function ShirtIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    </svg>
  )
}


function ShoppingBagIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
      <path d="M3 6h18" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  )
}


function WatchIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="6" />
      <polyline points="12 10 12 12 13 13" />
      <path d="m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05" />
      <path d="m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05" />
    </svg>
  )
}


function XIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
