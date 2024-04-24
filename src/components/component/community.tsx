import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AvatarImage, AvatarFallback, Avatar } from "@/components/ui/avatar"

export function Community() {
  return (
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
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
