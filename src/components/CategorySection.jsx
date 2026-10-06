import Image from "next/image";
import Link from "next/link";

const categories = [
  {
    title: "Men’s Fragrances",
    count: 191,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkWV2TGaUsCxgu6vd8s3s3N2ObKUfRFAvjq_vhT2Fvtg&s=10",
  },
  {
    title: "Women’s Fragrances",
    count: 50,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKLGGJibX6XnOsqrmqhWVKQLevSzFKM3Uw66Xeoe257w&s",
  },
  {
    title: "Unisex Fragrances",
    count: 162,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREsJPRWze6kHhZfjFRr1X0wZgqnuJ8_oEuPx0g-AxPg&s=10",
  },
  {
    title: "Lattafa Collection",
    count: 225,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREsJPRWze6kHhZfjFRr1X0wZgqnuJ8_oEuPx0g-AxPg&s=10",
  },
  {
    title: "Lattafa Pride Collection",
    count: 63,
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQREsJPRWze6kHhZfjFRr1X0wZgqnuJ8_oEuPx0g-AxPg&s=10",
  },
];

export default function CategorySection() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-16">
      <div className="mx-auto w-full max-w-[1500px] px-5 sm:px-6 lg:px-8">
        <div
          className="
            grid
            grid-cols-2
            gap-x-4
            gap-y-8
            sm:grid-cols-3
            sm:gap-x-5
            sm:gap-y-10
              
            lg:grid-cols-5
            lg:gap-x-6
          "
        >
          {categories.map((category) => {
            // Title থেকে automatically URL তৈরি করবে
            const slug = category.title
              .toLowerCase()
              .replace(/[’']/g, "")
              .replace(/\s+/g, "-");

            return (
              <Link
                key={category.title}
                href={`/shop?category=${slug}`}
                className="group block text-center"
              >
                {/* Image */}
                <div
                  className="
                    relative
                    aspect-square
                    w-full
                    overflow-hidden
                    rounded-[20px]
                    bg-[#F7F7F5]
                  "
                >
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    sizes="
                      (max-width: 639px) 50vw,
                      (max-width: 1023px) 33vw,
                      20vw
                    "
                    className="
                      object-cover
                      transition-transform
                      duration-700
                      ease-out
                      group-hover:scale-[1.035]
                    "
                  />
                </div>

                {/* Category Name */}
                <h3
                  className="
                    mt-5
                    font-serif
                    text-[17px]
                    font-normal
                    leading-tight
                    text-black
                    transition-colors
                    duration-300
                    group-hover:text-[#C6A15B]
                    sm:text-[18px]
                    lg:text-[19px]
                  "
                >
                  {category.title}
                </h3>

                {/* Item Count */}
                <p
                  className="
                    mt-2
                    text-[14px]
                    font-normal
                    tracking-[0.01em]
                    text-[#444444]
                  "
                >
                  {category.count} items
                </p>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}