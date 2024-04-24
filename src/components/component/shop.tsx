import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetClose, SheetContent, Sheet } from "@/components/ui/sheet"
import { SVGProps } from "react"

export function Shop() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white shadow-sm dark:bg-gray-950 dark:border-b dark:border-gray-800 sticky top-0 z-20">
        <div className="container mx-auto px-4 md:px-6 flex items-center h-16">
          <Link className="flex items-center gap-2" href="/">
            <ShoppingBagIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
            <span className="font-semibold text-lg">SocialShoppers</span>
          </Link>
          <nav className="ml-auto flex items-center gap-4">
            <Link
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="/"
            >
              <HomeIcon className="h-5 w-5" />
              Home
            </Link>
            <Link
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              <ShoppingBagIcon className="h-5 w-5" />
              Shop
            </Link>
            <Link
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="/community"
            >
              <UsersIcon className="h-5 w-5" />
              Community
            </Link>
            <Link
              className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              href="#"
            >
              <SlidersIcon className="h-5 w-5" />
              Settings
            </Link>
            <Sheet>
              <SheetTrigger asChild>
                <Button className="md:hidden" size="icon" variant="outline">
                  <MenuIcon className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent className="w-full max-w-md" side="left">
                <div className="flex items-center justify-between px-4 py-3 border-b dark:border-gray-800">
                  <Link className="flex items-center gap-2" href="#">
                    <ShoppingBagIcon className="h-6 w-6 text-gray-900 dark:text-gray-50" />
                    <span className="font-semibold text-lg">SocialShoppers</span>
                  </Link>
                  <SheetClose asChild>
                    <Button size="icon" variant="ghost">
                      <XIcon className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <div className="p-4 space-y-4">
                  <Link
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    href="/"
                  >
                    <HomeIcon className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <ShoppingBagIcon className="h-5 w-5" />
                    Shop
                  </Link>
                  <Link
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <UsersIcon className="h-5 w-5" />
                    Community
                  </Link>
                  <Link
                    className="flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                    href="#"
                  >
                    <SlidersIcon className="h-5 w-5" />
                    Settings
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </header>
      <main className="flex-1">
        <section className="container mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950 dark:border dark:border-gray-800 overflow-hidden">
              <Link className="block" href="#">
                <img
                  alt="Product Image"
                  className="w-full h-56 object-cover"
                  height={400}
                  src="/airforce.jpg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </Link>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link className="text-sm font-medium text-gray-900 dark:text-gray-50 hover:underline" href="#">
                    Nike Air Force 1
                  </Link>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Nike</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">$99.99</span>
                  <Link href="/AR" passHref>
                  <Button className="flex items-center gap-2" size="sm" variant="link">
                    <ArchiveIcon className="h-5 w-5" />
                    Try on
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950 dark:border dark:border-gray-800 overflow-hidden">
              <Link className="block" href="#">
                <img
                  alt="Product Image"
                  className="w-full h-56 object-cover"
                  height={400}
                  src="/adidasair.png"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </Link>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link className="text-sm font-medium text-gray-900 dark:text-gray-50 hover:underline" href="#">
                    Adidas Ultraboost
                  </Link>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Adidas</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">$149.99</span>
                  <Link href="/AR" passHref>
                  <Button className="flex items-center gap-2" size="sm" variant="link">
                    <ArchiveIcon className="h-5 w-5" />
                    Try on
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950 dark:border dark:border-gray-800 overflow-hidden">
              <Link className="block" href="#">
                <img
                  alt="Product Image"
                  className="w-full h-56 object-cover"
                  height={400}
                  src="/converse.jpeg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </Link>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link className="text-sm font-medium text-gray-900 dark:text-gray-50 hover:underline" href="#">
                    Converse Chuck Taylor
                  </Link>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Converse</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">$59.99</span>
                  <Link href="/AR" passHref>
                  <Button className="flex items-center gap-2" size="sm" variant="link">
                    <ArchiveIcon className="h-5 w-5" />
                    Try on
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950 dark:border dark:border-gray-800 overflow-hidden">
              <Link className="block" href="#">
                <img
                  alt="Product Image"
                  className="w-full h-56 object-cover"
                  height={400}
                  src="/puma.jpeg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </Link>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link className="text-sm font-medium text-gray-900 dark:text-gray-50 hover:underline" href="#">
                    Vans Old Skool
                  </Link>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Vans</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">$79.99</span>
                  <Link href="/AR" passHref>
                  <Button className="flex items-center gap-2" size="sm" variant="link">
                    <ArchiveIcon className="h-5 w-5" />
                    Try on
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950 dark:border dark:border-gray-800 overflow-hidden">
              <Link className="block" href="#">
                <img
                  alt="Product Image"
                  className="w-full h-56 object-cover"
                  height={400}
                  src="/pants.jpg"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </Link>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link className="text-sm font-medium text-gray-900 dark:text-gray-50 hover:underline" href="#">
                    Reebok Club C 85
                  </Link>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Reebok</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">$89.99</span>
                  <Link href="/AR" passHref>
                  <Button className="flex items-center gap-2" size="sm" variant="link">
                    <ArchiveIcon className="h-5 w-5" />
                    Try on
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm dark:bg-gray-950 dark:border dark:border-gray-800 overflow-hidden">
              <Link className="block" href="#">
                <img
                  alt="Product Image"
                  className="w-full h-56 object-cover"
                  height={400}
                  src="/shorts.png"
                  style={{
                    aspectRatio: "400/400",
                    objectFit: "cover",
                  }}
                  width={400}
                />
              </Link>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <Link className="text-sm font-medium text-gray-900 dark:text-gray-50 hover:underline" href="#">
                    Puma Suede Classic
                  </Link>
                  <div className="flex items-center gap-1 text-yellow-500">
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5" />
                    <StarIcon className="h-5 w-5 text-gray-300 dark:text-gray-600" />
                  </div>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Puma</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-gray-50">$69.99</span>
                  <Link href="/AR" passHref>
                  <Button className="flex items-center gap-2" size="sm" variant="link">
                    <ArchiveIcon className="h-5 w-5" />
                    Try on
                  </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <nav className="bg-white shadow-t dark:bg-gray-950 dark:border-t dark:border-gray-800 fixed bottom-0 left-0 right-0 z-10" />
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


function SlidersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <line x1="4" x2="4" y1="21" y2="14" />
      <line x1="4" x2="4" y1="10" y2="3" />
      <line x1="12" x2="12" y1="21" y2="12" />
      <line x1="12" x2="12" y1="8" y2="3" />
      <line x1="20" x2="20" y1="21" y2="16" />
      <line x1="20" x2="20" y1="12" y2="3" />
      <line x1="2" x2="6" y1="14" y2="14" />
      <line x1="10" x2="14" y1="8" y2="8" />
      <line x1="18" x2="22" y1="16" y2="16" />
    </svg>
  )
}


function StarIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}


function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
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
