import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import Laptop from "../../../public/Laptop.png";
import { CalendarDays, Tag, User } from "lucide-react";
import Link from "next/link";
import Exp from "../../../public/Exploring.png";
import Hand from "../../../public/Handmade.png";
const categories = [
  { name: "Crafts", count: 2 },
  { name: "Design", count: 8 },
  { name: "Handmade", count: 7 },
  { name: "Interior", count: 1 },
  { name: "Wood", count: 8 },
];

const posts = [
  {
    title: "Going all-in with millennial design",
    date: "14 Oct 2022",
    category: "Wood",
  },
  {
    title: "Exploring new ways of decorating",
    date: "13 Oct 2022",
    category: "Handmade",
  },
  {
    title: "Modern home in Milan",
    date: "03 Aug 2023",
    category: "Interior",
  },
{
  title: "Going all-in with millennial design",
  date: "03 Aug 2022",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20184-WdW8rFkTP4qh6C5OgG7T2l3ZIoQCi0.png",
  slug: "millennial-design",
},
{
  title: "Exploring new ways of decorating",
  date: "03 Aug 2022",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20184-WdW8rFkTP4qh6C5OgG7T2l3ZIoQCi0.png",
  slug: "new-decorating",
},
{
  title: "Handmade pieces that took time to make",
  date: "03 Aug 2022",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20184-WdW8rFkTP4qh6C5OgG7T2l3ZIoQCi0.png",
  slug: "handmade-pieces",
},
{
  title: "Modern home in Milan",
  date: "03 Aug 2022",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20184-WdW8rFkTP4qh6C5OgG7T2l3ZIoQCi0.png",
  slug: "modern-milan",
},
{
  title: "Colorful office redesign",
  date: "03 Aug 2022",
  image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Group%20184-WdW8rFkTP4qh6C5OgG7T2l3ZIoQCi0.png",
  slug: "office-redesign",
},
]
export default function BlogPosts() {
  return (
    <div>
      <div className="container mx-auto" >
        <div className="grid gap-8 md:grid-cols-3">
          {/* Main Content */}
          <div className="space-y-6 md:col-span-2">
            {/* card 1  */}
            <div className="ml-[97px] w-[820px] mt-[106px] sm:ml-4 md:ml-8 lg:ml-[100px]">
              <Image
                src={Laptop}
                alt="Laptop"
                className="w-[817px] h-[500px] sm:w-full md:w-4/5 lg:w-[817px]"
              />
              <div className="mt-[17px]">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex gap-1">
                    <User className="w-4 h-4" />
                    <span>Admin</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <time dateTime="2022-10-14">14 Oct 2022</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>Handmade</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold tracking-tight mb-4 sm:text-xl md:text-2xl lg:text-2xl">
                Going all-in with millennial design
                </h2>

                <p className="w-[817px] h-[115px] text-muted-foreground mb-4 line-clamp-3 sm:w-full md:w-4/5 lg:w-[817px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Muis mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>

                <Link
                  href="#"
                  className="inline-flex text-sm font-medium text-primary hover:text-primary/90"
                >
                  Read more
                  <span className="sr-only">
                    {" "}
                    Exploring new ways of decorating
                  </span>
                </Link>
              </div>
            </div>
            {/* card 2 */}
            <div className="ml-[100px] mt-[106px] sm:ml-4 md:ml-8 lg:ml-[100px]">
              <Image
                src={Exp}
                alt="Laptop"
                className="w-[817px] h-[500px] sm:w-full md:w-4/5 lg:w-[817px]"
              />
              <div className="mt-[17px]">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex gap-1">
                    <User className="w-4 h-4" />
                    <span>Admin</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <time dateTime="2022-10-14">14 Oct 2022</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>Handmade</span>
                  </div>
                </div>

                <h2 className="text-2xl font-bold tracking-tight mb-4 sm:text-xl md:text-2xl lg:text-2xl">
                  Exploring new ways of decorating
                </h2>

                <p className="w-[817px] h-[115px] text-muted-foreground mb-4 line-clamp-3 sm:w-full md:w-4/5 lg:w-[817px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Muis mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>

                <Link
                  href="#"
                  className="inline-flex text-sm font-medium text-primary hover:text-primary/90"
                >
                  Read more
                  <span className="sr-only">
                    {" "}
                    about Going all-in with millennial design
                  </span>
                </Link>
              </div>
            </div>
            {/* card 3 */}

            <div className="ml-[100px] mt-[106px] sm:ml-4 md:ml-8 lg:ml-[100px]">
              <Image
                src={Hand}
                alt="Laptop"
                className="w-[817px] h-[500px] sm:w-full md:w-4/5 lg:w-[817px]"
              />
              <div className="mt-[17px]">
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex gap-1">
                    <User className="w-4 h-4" />
                    <span>Admin</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CalendarDays className="w-4 h-4" />
                    <time dateTime="2022-10-14">14 Oct 2022</time>
                  </div>
                  <div className="flex items-center gap-1">
                    <Tag className="w-4 h-4" />
                    <span>Handmade</span>
                  </div>
                </div>
                <h2 className="text-2xl font-bold tracking-tight mb-4 sm:text-xl md:text-2xl lg:text-2xl">
                Handmade pieces that took time to make
                </h2>

                <p className="w-[817px] h-[115px] text-muted-foreground mb-4 line-clamp-3 sm:w-full md:w-4/5 lg:w-[817px]">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Muis mauris vitae ultricies leo integer malesuada nunc. In
                  nulla posuere sollicitudin aliquam ultrices. Morbi blandit
                  cursus risus at ultrices mi tempus imperdiet. Libero enim sed
                  faucibus turpis in. Cursus mattis molestie a iaculis at erat.
                  Nibh cras pulvinar mattis nunc sed blandit libero.
                  Pellentesque elit ullamcorper dignissim cras tincidunt.
                  Pharetra et ultrices neque ornare aenean euismod elementum.
                </p>

                <Link
                  href="#"
                  className="inline-flex text-sm font-medium text-primary hover:text-primary/90"
                >
                  Read more
                  <span className="sr-only">
                    {" "}
                    about Going all-in with millennial design
                  </span>
                </Link>
              </div>
            </div>

            <div className="flex justify-center gap-2 pt-4">
              <button className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground">
                1
              </button>
              <button className="rounded-md px-3 py-1 text-sm hover:bg-muted">
                2
              </button>
              <button className="rounded-md px-3 py-1 text-sm hover:bg-muted">
                3
              </button>
              <button className="rounded-md px-3 py-1 text-sm hover:bg-muted">
                Next
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="mt-[84px] mr-[100px] space-y-[30px]">
            <div>
              <Input type="search" placeholder="Search..." className="w-full" />
            </div>
            {/* section 1 */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name} className="flex justify-between">
                      <span className="text-sm">{category.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            {/* section 2 */}
            <div className="space-y-6">
            <div>
              <p className="">Recent Posts</p>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category.name} className="flex justify-between">
                      <span className="text-sm">{category.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {category.count}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          
          </div>
          
        </div>
      </div>
    </div>
  );
}
