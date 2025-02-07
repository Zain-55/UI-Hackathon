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
];

export default function BlogPosts() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid gap-8 md:grid-cols-3">
        <div className="space-y-6 md:col-span-2">
          {[Laptop, Exp, Hand].map((image, index) => (
            <div key={index} className="mt-10 w-full mx-auto max-w-3xl">
              <Image src={image} alt="Blog Image" className="w-full h-auto rounded-lg" />
              <div className="mt-4">
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
                <h2 className="text-2xl font-bold tracking-tight mb-4">Blog Post Title</h2>
                <p className="text-muted-foreground mb-4 line-clamp-3">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <Link href="#" className="inline-flex text-sm font-medium text-primary hover:text-primary/90">
                  Read more
                </Link>
              </div>
            </div>
          ))}

          <div className="flex justify-center gap-2 pt-4">
            <button className="rounded-md bg-primary px-3 py-1 text-sm text-primary-foreground">1</button>
            <button className="rounded-md px-3 py-1 text-sm hover:bg-muted">2</button>
            <button className="rounded-md px-3 py-1 text-sm hover:bg-muted">3</button>
            <button className="rounded-md px-3 py-1 text-sm hover:bg-muted">Next</button>
          </div>
        </div>

        <div className="mt-10 space-y-6 w-full max-w-sm mx-auto md:mx-0">
          <Input type="search" placeholder="Search..." className="w-full" />
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.name} className="flex justify-between">
                    <span className="text-sm">{category.name}</span>
                    <span className="text-sm text-muted-foreground">{category.count}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
