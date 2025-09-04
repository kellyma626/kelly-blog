import Link from "next/link";

type ButtonProps = {
  href: string;
  label: string;
};

export default function Button({ href, label }: ButtonProps) {
  return (
    <Link href={href} target="_blank">
      <div
        className="font-vt323 m-2 text-purple-pink bg-white text-2xl text-left border border-purple-pink border-solid p-4 w-50 rounded-4xl flex underline underline-offset-2 px-10 py-2"
      >
        {`>>`} {label}
      </div>
    </Link>
  );
}