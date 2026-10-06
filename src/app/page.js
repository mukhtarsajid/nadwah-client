
import NewArrivals from "../components/NewArrivals";
import ExploreCollection from "../components/ExploreCollection";
import Bundles from "../components/Bundles";
import PromotionalBanner from "../components/PromotionalBanner";
import CustomerReviews from "../components/CustomerReviews";
import TrustBenefits from "../components/TrustBenefits";

import {products,bundles} from "./data/products";
import { collections } from "./data/collections";
import { reviews } from "./data/reviews";
// import { newArrivals } from "./data/products";

export default function Home() {
  return (
    <main>
       {/* New Arrivals */}
      <NewArrivals products={ products} />
       {/* Collections */}
      <ExploreCollection collections={collections} />
       {/* Bundles */}
      <Bundles products={bundles} />
        {/* Promotional Banner */}
      <PromotionalBanner
        eyebrow="Discover Your Scent"
        title="A Fragrance For Every Story"
        description="Explore an unforgettable collection of refined fragrances created to become part of your everyday ritual."
        buttonText="Shop Fragrances"
        buttonHref="/collections/all"
        image="/banners/fragrance-promotion.jpg"
      />
       {/* Customer Reviews */}
      <CustomerReviews reviews={reviews} />
       {/* Trust / Benefits */}
      <TrustBenefits />
    </main>
  );
}

