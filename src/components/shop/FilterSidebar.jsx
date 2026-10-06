"use client";

import {
  scentProfiles,
  fragranceTypes,
  sizes,
} from "../../../src/app/data/productsData";

import FilterSection from "./FilterSection";
import { XIcon } from "./Icon";

function CheckList({
  items,
  selected,
  onToggle,
}) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <label
          key={item}
          className="flex cursor-pointer items-center gap-3 text-[12px] text-[#444]"
        >
          <input
            type="checkbox"
            checked={selected.includes(item)}
            onChange={() => onToggle(item)}
            className="h-3.5 w-3.5 accent-[#9a7a35]"
          />

          <span>{item}</span>
        </label>
      ))}
    </div>
  );
}

export default function FilterSidebar({
  filters,
  setFilters,
  mobile = false,
  onClose,
}) {
  const toggle = (key, value) => {
    setFilters((prev) => ({
      ...prev,

      [key]: prev[key].includes(value)
        ? prev[key].filter((x) => x !== value)
        : [...prev[key], value],
    }));
  };

  const clear = () => {
    setFilters({
      gender: [],
      scent: [],
      type: [],
      size: [],
      minPrice: 0,
      maxPrice: 10000,
    });
  };

  return (
    <aside
      className={
        mobile
          ? "fixed inset-0 z-50 flex flex-col bg-white"
          : "hidden lg:block lg:w-[235px] lg:shrink-0"
      }
    >
      {/* Filter Header */}
      <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 lg:px-0 lg:py-0 lg:pb-4">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em]">
            Filter
          </p>

          <p className="mt-1 text-[10px] text-[#999]">
            Refine your selection
          </p>
        </div>

        {mobile && (
          <button
            type="button"
            onClick={onClose}
            className="grid h-9 w-9 place-items-center border border-black/10"
          >
            <XIcon size={17} />
          </button>
        )}
      </div>

      {/* Filter Content */}
      <div
        className={
          mobile
            ? "flex-1 overflow-y-auto px-5"
            : ""
        }
      >
        {/* Gender */}
        <FilterSection title="Gender">
          <CheckList
            items={[
              "Men",
              "Women",
              "Unisex",
            ]}
            selected={filters.gender}
            onToggle={(value) =>
              toggle("gender", value)
            }
          />
        </FilterSection>

        {/* Scent */}
        <FilterSection title="Scent Profile">
          <CheckList
            items={scentProfiles}
            selected={filters.scent}
            onToggle={(value) =>
              toggle("scent", value)
            }
          />
        </FilterSection>

        {/* Type */}
        <FilterSection title="Fragrance Type">
          <CheckList
            items={fragranceTypes}
            selected={filters.type}
            onToggle={(value) =>
              toggle("type", value)
            }
          />
        </FilterSection>

        {/* Size */}
        <FilterSection title="Size">
          <CheckList
            items={sizes}
            selected={filters.size}
            onToggle={(value) =>
              toggle("size", value)
            }
          />
        </FilterSection>

        {/* Price */}
        <FilterSection title="Price">
          <div className="flex items-center gap-2">
            <div className="flex-1 border border-black/10 px-3 py-2 text-xs">
              ৳{filters.minPrice}
            </div>

            <span className="text-[#aaa]">
              —
            </span>

            <div className="flex-1 border border-black/10 px-3 py-2 text-xs">
              ৳{filters.maxPrice}
            </div>
          </div>

          <input
            type="range"
            min="0"
            max="10000"
            step="100"
            value={filters.maxPrice}
            onChange={(e) =>
              setFilters((prev) => ({
                ...prev,
                maxPrice: Number(e.target.value),
              }))
            }
            className="mt-4 w-full accent-[#9a7a35]"
          />
        </FilterSection>
      </div>

      {/* Clear */}
      <div className="border-t border-black/10 p-5 lg:px-0">
        <button
          type="button"
          onClick={clear}
          className="w-full border border-[#111] py-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#111] transition hover:bg-[#111] hover:text-white"
        >
          Clear All Filters
        </button>
      </div>
    </aside>
  );
}