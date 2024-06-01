import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        ESTÜ MEZUN
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          MEZUN & ÖĞRENCİ PLATFORMU
        </span>
      </h1>
      <p className="desc text-center">
        Mezun Platformu, her zaman bir arada kalmak, bilgi ve deneyimleri
        paylaşmak ve bağlantılar kurmak için bir araç olarak hizmet veriyor.
        Burası, geçmişteki akademik yaşamınızı hatırlamak, yeni iş fırsatları
        keşfetmek, kariyer tavsiyeleri almak ve eski arkadaşlarınızla bağlantı
        kurmak için bir merkezdir. Üniversitemizin geniş ağına katılan mezunlar,
        burada yaşamlarının her aşamasında destek bulabilir ve katkı
        sağlayabilirler. Biz, mezunlarımızın her birinin benzersiz
        deneyimlerini, başarılarını ve hedeflerini bir araya getirerek, birlikte
        daha güçlü bir topluluk oluşturuyoruz.
      </p>
      <div className="flex gap-16 mt-16">
        <Link href="https://x.com/esteknikuniv">
          <Image
            src="assets/images/twitter.svg"
            width={100}
            height={100}
            className="rounded-xl border border-gray-200 bg-gray-300/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5 cursor-pointer"
          />
        </Link>
        <Link href="https://www.eskisehir.edu.tr">
          <Image
            src="assets/images/logo.svg"
            width={100}
            height={100}
            className="rounded-xl border border-gray-200 bg-gray-300/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5 cursor-pointer"
          />
        </Link>
        <Link href="https://www.facebook.com/eskisehirteknikuniv/">
          <Image
            src="assets/images/facebook.svg"
            width={100}
            height={100}
            className="rounded-xl border border-gray-200 bg-gray-300/10 shadow-[inset_10px_-50px_94px_0_rgb(199,199,199,0.2)] backdrop-blur p-5 cursor-pointer"
          />
        </Link>
      </div>
    </section>
  );
};

export default Home;
