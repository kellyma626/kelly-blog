import Image from "next/image";

export default function Blinkies() {
  return (
    <div className="flex gap-1">
      <Image
        src="/blinkiesCafe1.gif"
        alt="blinkie 1"
        width={300}
        height={40}
      />
      <Image
        src="/blinkiesCafe2.gif"
        alt="blinkie 2"
        width={300}
        height={40}
      />
      <Image
        src="/blinkiesCafe3.gif"
        alt="blinkie 3"
        width={300}
        height={40}
      />
      <Image
        src="/blinkiesCafe4.gif"
        alt="blinkie 4"
        width={300}
        height={40}
      />
    </div>
  );
}