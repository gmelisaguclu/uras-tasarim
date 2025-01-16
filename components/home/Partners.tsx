import Image from "next/image";

export const Partners = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="text-center space-y-3 sm:space-y-4 px-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
          Bizi <span className="text-primary-light">Tercih Edenler</span>
        </h2>
        <p className="text-primary-dark">
          Çalıştığımız ve hala çalışmakta olduğumuz...
          <br />
          firmalardan bazıları...
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 items-center justify-items-center bg-white p-4 sm:p-8 rounded-xl shadow-lg">
        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/image/cemer.png"
            alt="Cemer"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/image/havelsan.png"
            alt="Havelsan"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/image/meteksan.png"
            alt="Meteksan"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/image/sdt.png"
            alt="SDT"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/image/nurol.png"
            alt="Nurol"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/image/lamgur.png"
            alt="Lamgur"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/image/vestel.png"
            alt="Vestel"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative grayscale hover:grayscale-0 transition-all duration-300">
          <Image
            src="/image/tp.png"
            alt="Technology Partner"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
