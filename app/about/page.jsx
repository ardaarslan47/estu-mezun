const AboutPage = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Biz Kimiz?
        <hr />
      </h1>
      <p className="desc text-center">
        Mezun Platformu, estü mezunlarını bir araya getiren dinamik bir
        topluluktur. Biz, mezunlarımızın eğitimlerinin ötesinde birbirleriyle
        bağlantı kurmalarını, deneyimlerini paylaşmalarını ve birlikte
        büyümelerini sağlayan bir platformuz. Burada, farklı sektörlerde
        çalışan, çeşitli başarı hikayelerine sahip ve dünyanın dört bir yanına
        dağılmış mezunlarımızı bulacaksınız.
      </p>
      <h3 className="text-2xl mt-5 font-bold text-center">Misyonumuz</h3>
      <p className="desc text-center">
        Misyonumuz, mezunlarımıza sürekli destek olmak, bağlantılarını
        güçlendirmek ve kariyer gelişimlerini desteklemektir. Üniversitemizin
        değerlerini ve öğretilerini yaşam boyu sürdürülebilir bir şekilde
        benimsemek ve topluluk olarak birbirimize destek olmak için buradayız.
      </p>
    </section>
  );
};

export default AboutPage;
