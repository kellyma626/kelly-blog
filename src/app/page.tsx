import Welcome from "@/components/Welcome";
import Blinkies from "@/components/Blinkies";
import Gingham from "@/components/Gingham";
import Body from "@/components/Body";

export default function HomePage() {
  return (
    <div className="bg-pink-100 min-h-screen flex justify-center py-10">
      <div className="bg-white w-full max-w-5xl p-8 rounded-lg shadow-md flex flex-col space-y-1">
        <Gingham />
        <div className="space-y-5">
          <Blinkies />
          <Welcome />
          <Body />
          <Blinkies />
        </div>
        <Gingham />
      </div>
    </div>
  );
}