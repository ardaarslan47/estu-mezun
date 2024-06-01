const Footer = () => {
  return (
    <div className="w-full flex justify-center items-center bg-gray-500 text-white py-8 mt-12">
        <section className="flex flex-col gap-4 items-center text-center">
          <h3 className="text-xl font-semibold">Eskişehir Teknik Üniversitesi</h3>
          <p className="max-w-md">
            Gazipaşa Mahallesi, Eskişehir Teknik Üniversitesi İki Eylül Kampüsü
            26555, Tepebaşı/ESKİŞEHİR
          </p>
          <p className="text-sm">&copy; {new Date().getFullYear()} ESTÜ</p>
        </section>
      </div>
  );
};

export default Footer;
