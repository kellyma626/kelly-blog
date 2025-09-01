import Image from "next/image";

export default function Gingham() {
    return (
        <Image
            src="/gingham.png"
            alt="gingham pattern"
            width={1200}
            height={80}
            className="rounded-md"
        />
    );
}