import CollectionsBanners from "@/component/CollectionsBanners";
import HeroBanner from "@/component/HeroBanner";
import ProductList from "@/component/ProductList";
import ProductSectionsWithCarousel from "@/component/ProductSectionsSSR";
import ServiceFeatures from "@/component/ServiceFeatures";
import MasterLayout from "@/layout/MasterLayout";

export default function Home() {
  return (
    <div>
      <MasterLayout>
        <HeroBanner />
        <ProductList />
        <CollectionsBanners />
        <ServiceFeatures />
        <ProductSectionsWithCarousel />
      </MasterLayout>
    </div>
  );
}
