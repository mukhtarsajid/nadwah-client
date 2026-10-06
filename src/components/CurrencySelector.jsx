"use client";

import { useState } from "react";
import { ChevronDown, Globe2 } from "lucide-react";

const CurrencySelector = () => {
  const [currency, setCurrency] = useState("BDT");

  const currencies = [
    {
      code: "BDT",
      name: "Bangladesh",
      symbol: "৳",
    },
    {
      code: "USD",
      name: "United States",
      symbol: "$",
    },
    {
      code: "GBP",
      name: "United Kingdom",
      symbol: "£",
    },
    {
      code: "EUR",
      name: "Europe",
      symbol: "€",
    },
  ];

  const selectedCurrency = currencies.find(
    (item) => item.code === currency
  );

  return (
    <div className="relative">
      <label
        htmlFor="currency"
        className="
          mb-2
          block
          text-[10px]
          font-medium
          uppercase
          tracking-[0.16em]
          text-white/45
        "
      >
        Currency
      </label>

      <div className="relative">
        <Globe2
          size={15}
          strokeWidth={1.4}
          className="
            pointer-events-none
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-[#C9A45C]
          "
        />

        <select
          id="currency"
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
          className="
            h-11
            w-full
            appearance-none
            rounded-none
            border
            border-white/15
            bg-white/5
            pl-10
            pr-10
            text-[12px]
            text-white
            outline-none
            transition-all
            duration-300
            focus:border-[#C9A45C]
            hover:border-white/30
          "
        >
          {currencies.map((item) => (
            <option
              key={item.code}
              value={item.code}
              className="bg-[#171717] text-white"
            >
              {item.code} — {item.symbol}
            </option>
          ))}
        </select>

        <ChevronDown
          size={15}
          strokeWidth={1.4}
          className="
            pointer-events-none
            absolute
            right-3
            top-1/2
            -translate-y-1/2
            text-[#C9A45C]
          "
        />
      </div>

      {selectedCurrency && (
        <p className="mt-2 text-[10px] text-white/35">
          Prices shown in {selectedCurrency.name} currency.
        </p>
      )}
    </div>
  );
};

export default CurrencySelector;