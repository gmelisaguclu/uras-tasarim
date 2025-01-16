export const WhyChooseUs = () => {
  return (
    <div className="flex flex-col gap-6 sm:gap-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-2 sm:mb-4 px-2">
        Neden <span className="text-primary-light">Uras Tasarım</span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start gap-4">
            <div className="text-primary text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Zırhlı araç Atış Mazgalı
              </h3>
              <p className="text-primary-dark">İsteklerinize uygun üretim</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start gap-4">
            <div className="text-primary text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Sırt tipi Jammer Taşıyıcı
              </h3>
              <p className="text-primary-dark">
                Çağa uygun gelişmiş makine parkuru
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start gap-4">
            <div className="text-primary text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                3 Eksen Anten Test Aparatı
              </h3>
              <p className="text-primary-dark">Prototip Üretimi Teknolojisi</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
          <div className="flex items-start gap-4">
            <div className="text-primary text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
            </div>
            <div>
              <h3 className="text-xl font-bold text-primary mb-2">
                Çeşitli Simülatör Kabinleri
              </h3>
              <p className="text-primary-dark">100% Yerli İmkanlarla</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
