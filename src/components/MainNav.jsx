import Link from "next/link";

export default function MainNav() {
  return (
    <section className="pb-[50px]">
      <nav className="fixed h-[40px] bg-black text-white w-full">
        <div
          className={`px-2 md:min-w-[600px] max-w-[600px] mx-auto flex justify-between items-center h-[40px]`}
        >
          <Link href="/" className="text-sm">
            Eduardo Garza
          </Link>
          <div className="flex">
            <Link href="/hardware" className="hover:underline text-sm mx-2">
              Hardware
            </Link>
            <Link href="/software" className="hover:underline text-sm mx-2">
              Software
            </Link>
            <Link href="/about" className="hover:underline text-sm mx-2">
              About
            </Link>
          </div>
        </div>
      </nav>
    </section>
  );
}
