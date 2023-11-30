// Import necessary modules from Next.js and Tailwind CSS
// import AnalyticsCard from "@/ui/components/card/analytics";
import ProductDetails from "./productDetails";
import ProductDescription from "./productDescription";
import InsightSection from "./insightSection";

const insights = [
    {
      title: "Great Design",
      description:
        "Illuminations incorporates a Lay-flat hardcover indexed with dot grid and an inner pocket marrying aesthetics and function for an exceptional writing experience.",
      icon: (
        <svg
          className="w-16 h-16 fill-gray-400 dark:group-hover:fill-gray-100 group-hover:fill-black theme-transition"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 21 21"
        >
          <path d="M20.817 9.085a10 10 0 0 0-19.77 2.9A10.108 10.108 0 0 0 6.762 20a9.689 9.689 0 0 0 4.2 1h.012a3.011 3.011 0 0 0 2.144-.884A2.968 2.968 0 0 0 14 18v-.86A1.041 1.041 0 0 1 15 16h2.7a2.976 2.976 0 0 0 2.838-2.024 9.93 9.93 0 0 0 .279-4.891ZM5.5 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm2.707-3.793a1 1 0 1 1-1.414-1.414 1 1 0 0 1 1.414 1.414Zm2.872-1.624a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm4.128 1.624a1 1 0 1 1-1.414-1.413 1 1 0 0 1 1.414 1.413Z" />
        </svg>
      ),
    },
    {
      title: "Maximum Productivity",
      description:
        "With perforated habit trackers and daily quotes for inspiration, Illuminations maximizes productivity and creativity effortlessly.",
      icon: (
        <svg
          className="w-16 h-16 fill-gray-400 dark:group-hover:fill-gray-100 group-hover:fill-black theme-transition"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
        </svg>
      ),
    },
    // Add more insights as needed
  ];

// Your component code
export default function ProductPage() {
  return (
    <div className="container mx-auto my-8 mt-4 grid grid-cols-1 md:grid-cols-2 gap-8 dark:bg-black bg-white theme-transition">
      {/* Left Column - Product Image, Price, Title, and Purchase Button */}
      <section className="flex flex-col items-center p-4">
        <ProductDetails
          imageUrl="/book-mockup.png"
          altText="Illuminations Book Cover"
          productName="Illuminations"
          price="$9.99"
        />
      </section>

      {/* Right Column - Product Description */}
      <div className="p-2">
       <section className="p-4">
       <ProductDescription
          title="Illuminations: An Idea Journal by Ethereal Insights"
          mainText="Unleash your creativity with Ethereal Illuminations—an idea journal designed to capture the essence of your deepest musings. Elevate your thoughts, spark inspiration, and embark on a journey of self-discovery."
          secondaryText="Illuminations is not just a journal; it is a companion on your quest for creativity and self-discovery. Immerse yourself in the ethereal realm of thoughts as you fill its pages with ideas, reflections, and the profound musings that define your unique journey. This carefully crafted idea journal by Ethereal Insights is more than a blank canvas; it is a space where your innermost thoughts come to life, sparking inspiration and fostering a deeper connection with your creative self."
        />
       </section>

        <section>
          <InsightSection insights={insights} />
        </section>
      </div>
    </div>
  );
}
