
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { JSX, SVGProps } from "react"

export function Feed() {
  return (
    <div className="w-full">
      <ScrollArea className="h-[600px]">
        <div className="grid gap-4">
          <Card className="rounded-none shadow-none border-0 mx-auto w-full max-w-7xl">
            <CardHeader className="p-4 flex flex-row items-center">
              <Link className="flex items-center gap-2 text-sm font-semibold" href="#">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                Acme Inc
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto w-8 h-8 rounded-full" size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <BookmarkIcon className="w-4 h-4 mr-2" />
                    Save
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <StarIcon className="w-4 h-4 mr-2" />
                    Add to favorites
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <FileWarningIcon className="w-4 h-4 mr-2" />
                    Report
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="p-0">
              <img
                alt="Image"
                className="aspect-square object-cover max-w mx-auto"                
                height={400}
                width={400}
                src="/insta1.jpg"
              />
            </CardContent>
            <CardFooter className="p-2 pb-4 grid gap-2">
              <div className="flex items-center w-full">
                <Button size="icon" variant="ghost">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <SendIcon className="w-4 h-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button className="ml-auto" size="icon" variant="ghost">
                  <BookmarkIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
              </div>
              <div className="px-2 text-sm w-full grid gap-1.5">
                <div>
                  <Link className="font-medium" href="#">
                    john
                  </Link>
                  Wow, this photo is absolutely stunning! 😍✨
                </div>
                <div>
                  <Link className="font-medium" href="#">
                    amelia
                  </Link>
                  This post just made my day! 😃👍
                </div>
              </div>
            </CardFooter>
          </Card>
          <Card className="rounded-none shadow-none border-0 mx-auto w-full max-w-7xl">
            <CardHeader className="p-4 flex flex-row items-center">
              <Link className="flex items-center gap-2 text-sm font-semibold" href="#">
                <Avatar className="w-8 h-8 border">
                  <AvatarImage alt="@shadcn" src="/placeholder-user.jpg" />
                  <AvatarFallback>AC</AvatarFallback>
                </Avatar>
                Acme Inc
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="ml-auto w-8 h-8 rounded-full" size="icon" variant="ghost">
                    <MoreHorizontalIcon className="w-4 h-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <BookmarkIcon className="w-4 h-4 mr-2" />
                    Save
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <StarIcon className="w-4 h-4 mr-2" />
                    Add to favorites
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <FileWarningIcon className="w-4 h-4 mr-2" />
                    Report
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </CardHeader>
            <CardContent className="p-0">
              <img
                alt="Image"
                className="aspect-square object-cover max-w mx-auto"
                height={400}
                width={400}
                src="/insta2.jpg"
              />
            </CardContent>
            <CardFooter className="p-2 pb-4 grid gap-2">
              <div className="flex items-center w-full">
                <Button size="icon" variant="ghost">
                  <HeartIcon className="w-4 h-4" />
                  <span className="sr-only">Like</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <MessageCircleIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
                <Button size="icon" variant="ghost">
                  <SendIcon className="w-4 h-4" />
                  <span className="sr-only">Share</span>
                </Button>
                <Button className="ml-auto" size="icon" variant="ghost">
                  <BookmarkIcon className="w-4 h-4" />
                  <span className="sr-only">Comment</span>
                </Button>
              </div>
              <div className="px-2 text-sm w-full grid gap-1.5">
                <div>
                  <Link className="font-medium" href="#">
                    john
                  </Link>
                  Wow, this photo is absolutely stunning! 😍✨
                </div>
                <div>
                  <Link className="font-medium" href="#">
                    amelia
                  </Link>
                  This post just made my day! 😃👍
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </ScrollArea>
    </div>
  )
}

function BookmarkIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z" />
    </svg>
  )
}


function FileWarningIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  )
}


function HeartIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  )
}


function MessageCircleIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  )
}


function MoreHorizontalIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
  )
}


function SendIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
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
