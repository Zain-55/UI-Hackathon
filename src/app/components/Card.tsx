import React from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ShoppingCart } from 'lucide-react'
function Shop() {
  return (
    <div>
      <div className="min-h-screen">
    
   

    {/* Shop Content */}
    <main className="container py-8">
      {/* Filters and Search */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <div className="flex-1 flex gap-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input className="pl-10" placeholder="Search furniture..." />
          </div>
          <Select defaultValue="all">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="chairs">Chairs</SelectItem>
              <SelectItem value="sofas">Sofas</SelectItem>
              <SelectItem value="tables">Tables</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <Select defaultValue="newest">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="newest">Newest</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ml-[60px] ">
        {/* Syltherine */}
        <div className="bg-[#F4F5F7] overflow-hidden shadow-sm group w-[285px] h-[446px] ">
          <div className="relative">
            <img
              src="/Cart4.png"
              alt="Syltherine"
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-3xl text-sm">
              -30%
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">Syltherine</h3>
            <p className="text-sm text-gray-600">Stylish cafe chair</p>
            <div className="mt-2 flex gap-2 items-center">
              <span className="font-semibold">Rp 2.500.000</span>
              <span className="text-sm text-gray-500 line-through">Rp 3.500.000</span>
            </div>
          </div>
        </div>

        {/* Leviosa */}
        <div className="bg-[#F4F5F7] overflow-hidden shadow-sm group w-[285px] h-[446px]">
          <div className="relative">
            <img
              src="/Cart5.png"
              alt="Leviosa"
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              -50%
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">Leviosa</h3>
            <p className="text-sm text-gray-600">Stylish cafe chair</p>
            <div className="mt-2 flex gap-2 items-center">
              <span className="font-semibold">Rp 2.500.000</span>
              <span className="text-sm text-gray-500 line-through">Rp 3.500.000</span>
            </div>
          </div>
        </div>

        {/* Lolito */}
        <div className="bg-[#F4F5F7]  overflow-hidden shadow-sm group w-[285px] h-[446px]">
          <div className="relative">
            <img
              src="/Cart7.png"
              alt="Lolito"
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm">
              -50%
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">Lolito</h3>
            <p className="text-sm text-gray-600">Luxury big sofa</p>
            <div className="mt-2 flex gap-2 items-center">
              <span className="font-semibold">Rp 7.000.000</span>
              <span className="text-sm text-gray-500 line-through">Rp 14.000.000</span>
            </div>
          </div>
        </div>

        {/* Respira */}
        <div className="bg-[#F4F5F7] overflow-hidden shadow-sm group w-[285px] h-[446px] ">
          <div className="relative">
            <img
              src="/Cart8.png"
              alt="Respira"
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
              New
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">Respira</h3>
            <p className="text-sm text-gray-600">Outdoor bar table and stool</p>
            <div className="mt-2">
              <span className="font-semibold">Rp 500.000</span>
            </div>
          </div>
        </div>
{/* Syltherine */}
<div className="bg-[#F4F5F7] overflow-hidden shadow-sm group w-[285px] h-[446px] ">
          <div className="relative">
            <img
              src="/Cart9.png"
              alt="Syltherine"
              className="w-full aspect-square object-cover group-hover:scale-105 transition-transform"
            />
            <span className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm">
              New
            </span>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">Respira</h3>
            <p className="text-sm text-gray-600">Outdoor bar table and stool</p>
            <div className="mt-2">
              <span className="font-semibold">Rp 500.000</span>
            </div>
          </div>
        </div>


        {/* Repeat the above 4 product items two more times */}
        {/* ... (Copy and paste the above 4 product divs two more times) */}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <Button variant="default" className="bg-amber-600 hover:bg-amber-700">
          1
        </Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>
    </main>

 
  </div>
    </div>
  )
}

export default Shop
