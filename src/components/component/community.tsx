import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { JSX, SVGProps } from "react"

export function Community() {
  return (<div>
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
  <div className="container mx-auto h-12"> </div>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 px-4 md:px-6 py-12 md:py-16 lg:py-24">
      <div className="col-span-2 lg:col-span-1 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Augmented Reality Try-On</CardTitle>
            <CardDescription>Share your latest AR fashion looks with the community.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="AR Fashion Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/kendal1.jpeg"
                  width="200"
                />
                <img
                  alt="AR Fashion Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/kendal2.jpeg"
                  width="200"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <img
                  alt="AR Fashion Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/kendal3.webp"
                  width="200"
                />
                <img
                  alt="AR Fashion Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/kendal4.jpeg"
                  width="200"
                />
              </div>
              <Button className="w-full" variant="outline">
                Share your look
              </Button>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Featured Products</CardTitle>
            <CardDescription>Check out the latest fashion and beauty products.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <img
                    alt="Product Image"
                    className="aspect-square object-cover rounded-lg"
                    height="150"
                    src="/floral.jpg"
                    width="150"
                  />
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Floral Dress</h4>
                    <span className="font-semibold">$49.99</span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <img
                    alt="Product Image"
                    className="aspect-square object-cover rounded-lg"
                    height="150"
                    src="/sunglasses.jpeg"
                    width="150"
                  />
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Sunglasses</h4>
                    <span className="font-semibold">$29.99</span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <img
                    alt="Product Image"
                    className="aspect-square object-cover rounded-lg"
                    height="150"
                    src="/hat.jpeg"
                    width="150"
                  />
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">hat</h4>
                    <span className="font-semibold">$39.99</span>
                  </div>
                </div>
                <div className="grid gap-2">
                  <img
                    alt="Product Image"
                    className="aspect-square object-cover rounded-lg"
                    height="150"
                    src="/backpack.jpeg"
                    width="150"
                  />
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold">Leather Backpack</h4>
                    <span className="font-semibold">$79.99</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="col-span-2 lg:col-span-2 grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Community Highlights</CardTitle>
            <CardDescription>Check out the latest fashion and beauty looks shared by our community.</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/woman.jpg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/woman.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Jenna Smith</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@jennasmith</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/man.jpeg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/man.jpeg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Alex Johnson</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@alexjohnson</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/woman4.jpg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/woman4.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Emily Davis</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@emilydavis</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/woman3.jpg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/woman3.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Michael Brown</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@michaelbrown</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/woman.jpg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/woman.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Jenna Smith</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@jennasmith</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/man.jpeg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/man.jpeg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Alex Johnson</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@alexjohnson</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/woman4.jpg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/woman4.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Emily Davis</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@emilydavis</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/woman3.jpg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/woman3.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Michael Brown</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@michaelbrown</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/woman.jpg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/woman.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Jenna Smith</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@jennasmith</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/man.jpeg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/man.jpeg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Alex Johnson</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@alexjohnson</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/woman4.jpg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/woman4.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Emily Davis</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@emilydavis</p>
                  </div>
                </div>
              </div>
              <div className="grid gap-2">
                <img
                  alt="Community Look"
                  className="aspect-square object-cover rounded-lg"
                  height="200"
                  src="/woman3.jpg"
                  width="200"
                />
                <div className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage alt="@shadcn" src="/woman3.jpg" />
                    <AvatarFallback>CN</AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-semibold">Michael Brown</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">@michaelbrown</p>
                  </div>
                </div>
              </div>
              </div>
          </CardContent>
        </Card>
      </div>
    </div>
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
