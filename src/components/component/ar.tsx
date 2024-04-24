import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { JSX, SVGProps } from "react"
import Link from "next/link"

export function AR() {
  return (
    <div className="grid items-start gap-4 min-h-screen px-4 pb-4 lg:grid-cols-2 lg:gap-8">
      <div className="flex flex-col items-start gap-2">
        <h1 className="text-2xl font-semibold">Virtual Try-On: Classic Frames</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Try on these classic frames virtually using your phone or webcam.
        </p>
        <div className="grid items-start gap-4">
          <div className="relative">
            <img
              alt="Frames"
              className="rounded-lg border"
              height={400}
              src="/AR.png"
              width={800}
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 dark:bg-white/30">
              <VideoIcon className="h-12 w-12 text-white" />
            </div>
          </div>
          <Link className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 dark:ring-offset-gray-950 dark:focus-visible:ring-gray-300 bg-gray-900 text-gray-50 hover:bg-gray-900/90 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 h-10 px-4 py-2" href="/community" passHref>
          Take a selfie
          </Link>
        </div>
      </div>
      <div className="grid items-start gap-4">
        <div className="grid items-start gap-2">
          <h2 className="text-2xl font-semibold">Classic Frames</h2>
          <p className="text-gray-500 dark:text-gray-400">SKU: 23890210</p>
        </div>
        <div className="grid items-start gap-2">
          <h3 className="text-xl font-semibold">$99.00</h3>
          <div className="flex items-center gap-2">
            <StarIcon className="h-4 w-4 fill-current" />
            <StarIcon className="h-4 w-4 fill-current" />
            <StarIcon className="h-4 w-4 fill-current" />
            <StarIcon className="h-4 w-4 fill-current" />
            <StarIcon className="h-4 w-4 fill-current" />
            <span className="text-sm text-gray-500 dark:text-gray-400">5.0 (24 reviews)</span>
          </div>
        </div>
        <form className="grid gap-4">
          <div className="grid gap-1">
            <Label className="text-base" htmlFor="color">
              Color
            </Label>
            <Select className="max-w-xs" id="color">
              <option>Black</option>
              <option>Red</option>
              <option>Blue</option>
            </Select>
          </div>
          <div className="grid gap-1">
            <Label className="text-base" htmlFor="size">
              Size
            </Label>
            <Select className="max-w-xs" id="size">
              <option>One size</option>
            </Select>
          </div>
          <div className="grid items-start gap-1">
            <Label className="text-base" htmlFor="quantity">
              Quantity
            </Label>
            <Input className="w-16" defaultValue={1} id="quantity" type="number" />
          </div>
          <Button className="w-full" type="submit">
            Add to cart
          </Button>
        </form>
      </div>
    </div>
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

function VideoIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
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
      <path d="m22 8-6 4 6 4V8Z" />
      <rect width="14" height="12" x="2" y="6" rx="2" ry="2" />
    </svg>
  )
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
}

export const Select: React.FC<SelectProps> = ({ className, ...props }) => {
  return (
    <select
      className={`border p-2 rounded-md shadow-sm focus:outline-none focus:border-blue-500 text-gray-900 ${className}`}
      {...props}
    >
      {props.children}
    </select>
  );
};