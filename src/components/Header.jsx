'use client';
import { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Heart, User, Search, Menu, X } from 'lucide-react';

export default function Header({ cartCount = 0, wishlistCount = 0 }) {
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const categories = [
    { name: "Men", sub: ["Panjabi", "Shirts", "Pants", "Polo", "Suits"] },
    { name: "Women", sub: ["Kurtis", "Abaya", "Tops", "Sarees", "Jewelry"] },
    { name: "Fragrance", sub: ["Atar/Attar", "Perfume Spray", "Oud Collection"] },
    { name: "Footwear", sub: ["Loafers", "Sandals", "Formal Shoes"] },
    { name: "Accessories", sub: ["Belts", "Wallets", "Caps", "Sunglasses"] }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      {/* Top Announcement Bar */}
      <div className="bg-black text-white text-xs text-center py-2 px-4 font-light tracking-wide">
        Complimentary Express Shipping across Bangladesh on orders over BDT 5,000
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-black"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <Link href={'/product'} className="hover:text-amber-700 transition-colors">
            product
          </Link>
          <Link href={'/adminOrder'} className="hover:text-amber-700 transition-colors">
           Admin
          </Link>

          {/* Brand Logo */}
          <Link href="/" className="text-2xl font-serif font-bold tracking-wider text-black">
            LUXE ARCHIVE
          </Link>

          {/* Desktop Navigation Navigation */}
          <nav className="hidden lg:flex space-x-8 text-sm font-medium uppercase tracking-wider">
            {categories.map((cat) => (
              <div
                key={cat.name}
                className="group relative py-6 cursor-pointer"
                onMouseEnter={() => setIsMegaMenuOpen(true)}
                onMouseLeave={() => setIsMegaMenuOpen(false)}
              >
                <Link href={`/category/${cat.name.toLowerCase()}`} className="hover:text-amber-700 transition-colors">
                  {cat.name}
                </Link>

                {/* Dropdown Mega Menu */}
                <div className="absolute top-full left-0 w-60 bg-white shadow-xl border border-gray-100 hidden group-hover:block p-4 transition-all">
                  <div className="flex flex-col space-y-2">
                    {cat.sub.map((subItem) => (
                      <Link
                        key={subItem}
                        href={`/category/${cat.name.toLowerCase()}?sub=${subItem.toLowerCase()}`}
                        className="text-gray-600 hover:text-black text-xs normal-case py-1 transition-colors"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>

          {/* Right Utilities */}
          <div className="flex items-center space-x-5">
            <Link href="/search" className="p-2 text-gray-700 hover:text-black">
              <Search size={20} />
            </Link>
            <Link href="/account" className="hidden sm:block p-2 text-gray-700 hover:text-black">
              <User size={20} />
            </Link>
            <Link href="/account/wishlist" className="relative p-2 text-gray-700 hover:text-black">
              <Heart size={20} />
              {wishlistCount > 0 && (
                <span className="absolute top-0 right-0 bg-black text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative p-2 text-gray-700 hover:text-black">
              <ShoppingBag size={20} />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-amber-700 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}