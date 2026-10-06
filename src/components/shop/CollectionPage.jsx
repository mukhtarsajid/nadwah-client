"use client";

import { useMemo, useState } from "react";

import {
  products,
  categories,
} from "../../app/data/productsData";

import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar";

import {
  ChevronDown,
  SearchIcon,
  SlidersIcon,
  XIcon,
} from "./Icon";

const sortOptions = [
  ["featured", "Featured"],
  ["price-low", "Price: Low to High"],
  ["price-high", "Price: High to Low"],
  ["rating", "Top Rated"],
  ["newest", "Newest"],
];

export default function CollectionPage() {
  const [activeCategory, setActiveCategory] =
    useState("All");

  const [sort, setSort] =
    useState("featured");

  const [search, setSearch] =
    useState("");

  const [mobileFilter, setMobileFilter] =
    useState(false);

  const [filters, setFilters] = useState({
    gender: [],
    scent: [],
    type: [],
    size: [],
    minPrice: 0,
    maxPrice: 10000,
  });

  /*
   * FILTER + SEARCH + SORT
   */

  const visibleProducts = useMemo(() => {
    let result = [...products];

    // Category
    if (activeCategory !== "All") {
      result = result.filter(
        (product) =>
          product.category === activeCategory
      );
    }

    // Search
    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter((product) =>
        [
          product.name,
          product.brand,
          product.category,
          product.type,
          ...product.scent,
        ]
          .join(" ")
          .toLowerCase()
          .includes(query)
      );
    }

    // Gender
    if (filters.gender.length) {
      result = result.filter((product) =>
        filters.gender.includes(
          product.category
        )
      );
    }

    // Scent
    if (filters.scent.length) {
      result = result.filter((product) =>
        filters.scent.some((scent) =>
          product.scent.includes(scent)
        )
      );
    }

    // Type
    if (filters.type.length) {
      result = result.filter((product) =>
        filters.type.includes(product.type)
      );
    }

    // Size
    if (filters.size.length) {
      result = result.filter((product) =>
        filters.size.some((size) =>
          product.size.includes(size)
        )
      );
    }

    // Price
    result = result.filter(
      (product) =>
        product.price >= filters.minPrice &&
        product.price <= filters.maxPrice
    );

    // Sorting
    if (sort === "price-low") {
      result.sort(
        (a, b) => a.price - b.price
      );
    }

    if (sort === "price-high") {
      result.sort(
        (a, b) => b.price - a.price
      );
    }

    if (sort === "rating") {
      result.sort(
        (a, b) => b.rating - a.rating
      );
    }

    if (sort === "newest") {
      result.sort(
        (a, b) =>
          Number(b.id.split("-")[1]) -
          Number(a.id.split("-")[1])
      );
    }

    return result;
  }, [
    activeCategory,
    filters,
    search,
    sort,
  ]);

  const activeFilterCount =
    filters.gender.length +
    filters.scent.length +
    filters.type.length +
    filters.size.length +
    (filters.maxPrice < 10000 ? 1 : 0);

  return (
    <main className="min-h-screen bg-white text-[#111]">

      {/* =====================================
          COLLECTION INTRO
      ===================================== */}

      <section className="border-b border-black/10 px-5 pb-9 pt-10 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-[1440px]">

          <p className="text-[9px] font-semibold uppercase tracking-[0.32em] text-[#9a7a35]">
            LOVIRR / Collection
          </p>

          <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <h1 className="font-serif text-4xl tracking-[-0.03em] sm:text-5xl lg:text-6xl">
                All Fragrances
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-6 text-[#666]">
                Discover signature scents designed
                to become part of your everyday
                self-care ritual.
              </p>

            </div>

            <p className="text-[11px] uppercase tracking-[0.16em] text-[#888]">
              {visibleProducts.length} products
            </p>

          </div>
        </div>
      </section>


      {/* =====================================
          CATEGORY NAVIGATION
      ===================================== */}

      <section className="border-b border-black/10 px-5 sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1440px] gap-2 overflow-x-auto py-4 [scrollbar-width:none]">

          {categories.map((category) => (

            <button
              key={category.value}
              type="button"
              onClick={() =>
                setActiveCategory(
                  category.value
                )
              }
              className={`shrink-0 border px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.15em] transition ${
                activeCategory === category.value
                  ? "border-[#111] bg-[#111] text-white"
                  : "border-black/10 bg-white text-[#555] hover:border-[#111] hover:text-[#111]"
              }`}
            >

              {category.label}

              <span className="ml-1 opacity-50">
                {category.count}
              </span>

            </button>

          ))}

        </div>
      </section>


      {/* =====================================
          TOOLBAR
      ===================================== */}

      <section className="sticky top-0 z-20 border-b border-black/10 bg-white/95 px-5 backdrop-blur sm:px-8 lg:px-12">

        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 py-3">

          {/* Left */}

          <div className="flex min-w-0 items-center gap-2">

            {/* Mobile Filter */}

            <button
              type="button"
              onClick={() =>
                setMobileFilter(true)
              }
              className="flex items-center gap-2 border border-black/10 px-3 py-2.5 text-[10px] font-semibold uppercase tracking-[0.14em] lg:hidden"
            >

              <SlidersIcon size={15} />

              Filter

              {activeFilterCount > 0 &&
                ` (${activeFilterCount})`}

            </button>


            {/* Desktop Search */}

            <div className="hidden items-center gap-2 border border-black/10 px-3 py-2.5 sm:flex">

              <SearchIcon size={15} />

              <input
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                placeholder="Search fragrances"
                className="w-40 bg-transparent text-xs outline-none placeholder:text-[#aaa]"
              />

              {search && (
                <button
                  type="button"
                  onClick={() =>
                    setSearch("")
                  }
                >
                  <XIcon size={14} />
                </button>
              )}

            </div>

          </div>


          {/* Sort */}

          <label className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.14em]">

            Sort

            <span className="relative">

              <select
                value={sort}
                onChange={(e) =>
                  setSort(e.target.value)
                }
                className="appearance-none border border-black/10 bg-white py-2.5 pl-3 pr-8 text-[10px] outline-none"
              >

                {sortOptions.map(
                  ([value, label]) => (
                    <option
                      key={value}
                      value={value}
                    >
                      {label}
                    </option>
                  )
                )}

              </select>

              <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2">

                <ChevronDown size={13} />

              </span>

            </span>

          </label>

        </div>
      </section>


      {/* =====================================
          MOBILE SEARCH
      ===================================== */}

      <div className="border-b border-black/10 px-5 py-3 sm:hidden">

        <div className="flex items-center gap-2 border border-black/10 px-3 py-2.5">

          <SearchIcon size={15} />

          <input
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
            placeholder="Search fragrances"
            className="w-full bg-transparent text-xs outline-none placeholder:text-[#aaa]"
          />

        </div>
      </div>


      {/* =====================================
          PRODUCTS
      ===================================== */}

      <section className="px-5 py-8 sm:px-8 lg:px-12 lg:py-10">

        <div className="mx-auto flex max-w-[1440px] gap-8">

          {/* Desktop Sidebar */}

          <FilterSidebar
            filters={filters}
            setFilters={setFilters}
          />


          {/* Product Grid */}

          <div className="min-w-0 flex-1">

            {visibleProducts.length ? (

              <div className="grid grid-cols-2 gap-x-4 gap-y-10 sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-4 lg:gap-x-6 lg:gap-y-12">

                {visibleProducts.map(
                  (product) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                    />
                  )
                )}

              </div>

            ) : (

              <div className="flex min-h-[360px] items-center justify-center border border-dashed border-black/15">

                <div className="text-center">

                  <p className="font-serif text-2xl">
                    No fragrances found
                  </p>

                  <p className="mt-2 text-xs text-[#777]">
                    Try removing a filter or
                    searching another scent.
                  </p>

                </div>

              </div>

            )}

          </div>

        </div>
      </section>


      {/* =====================================
          MOBILE FILTER DRAWER
      ===================================== */}

      {mobileFilter && (

        <FilterSidebar
          mobile
          filters={filters}
          setFilters={setFilters}
          onClose={() =>
            setMobileFilter(false)
          }
        />

      )}

    </main>
  );
}