import { FAQs } from "@/Components/FAQs";
import { LogoTicker } from "@/Components/LogoTicker";
import { Pricing } from "@/Components/Pricing";
import { ProductShowcase } from "@/Components/ProductShowcase";
import { Testimonials } from "@/Components/Testimonials";

export default function Home() {
  return (
    <>
      <LogoTicker />
      <Pricing />
      <ProductShowcase />
      <FAQs />
      <Testimonials />
    </>
  );
}
