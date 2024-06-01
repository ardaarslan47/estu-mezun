import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center gap-5 rounded-xl border border-gray-200 bg-white/20 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur pb-5">
      <Image src="/assets/images/arda.jpeg" width={300} height={300} />
      <h1 className="text-2xl font-bold text-black">Arda Arslan</h1>
      <p className="font-satoshi text-gray-600">
        ardaarslan@ogr.eskisehir.edu.tr
      </p>
      <Link href="https://github.com/ardaarslan47">
        <Image
          src="/assets/images/github.svg"
          width={40}
          height={40}
        />
      </Link>
    </div>
  );
};

export default ContactPage;
