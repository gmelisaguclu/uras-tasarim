import Image from "next/image";

export const Partners = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <div className="text-center space-y-3 sm:space-y-4 px-2">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary">
          Bizi <span className="text-primary-light">Tercih Edenler</span>
        </h2>
        <p className="text-secondary-light">
          Çalıştığımız ve hala çalışmakta olduğumuz...
          <br />
          firmalardan bazıları...
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 items-center justify-items-center bg-secondary/20 backdrop-blur-sm p-6 sm:p-10 rounded-lg border border-secondary/10">
        <div className="w-40 h-20 relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/image/partner-logo/cemer-logo-ing.png"
            alt="Cemer"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/image/partner-logo/Meteksan_Savunma.png"
            alt="Meteksan"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/image/partner-logo/havelsanlogo.jpg"
            alt="Havelsan"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/image/partner-logo/sdt.jpg"
            alt="SDT"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/image/partner-logo/nurol.jpg"
            alt="Nurol"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/image/partner-logo/lamgöv.jpg"
            alt="Lamgur"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/image/partner-logo/vestel_logo.jpg"
            alt="Vestel"
            fill
            className="object-contain"
          />
        </div>

        <div className="w-40 h-20 relative hover:scale-105 transition-transform duration-300">
          <Image
            src="/image/partner-logo/mhtlogo.png"
            alt="MHT"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
