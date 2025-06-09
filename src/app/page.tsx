import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata = {
  title: "KetikWeb - Solusi Digital Terdepan",
}

export default function Home() {
  return (
    <div>
      <Header />
      <div className="home-5_hero-section bg-offwhite-3" id="hero">
        <div className="container">
          <div className="row row--custom">
            <div className="col-lg-5 col-md-7 col-sm-8 col-10 aos-init aos-animate" data-aos-duration="1000" data-aos="fade-left" data-aos-delay="300">
              <div className="home-5_hero-image-block">
                <div className="home-5_hero-image">
                  <img src="./image/home-5/hero-image.png" alt="hero image" />
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-10 aos-init aos-animate" data-aos-duration="1000" data-aos="fade-right" data-aos-delay="300">
              <div className="home-5_hero-content">
                <div className="home-5_hero-content-text">
                  <h1 className="home-5_hero-content__title heading-xl heading-xl--general-sans text-l5-secondary">Bring additional qualified traffic to your website</h1>
                  <p>
                    SEO is a digital marketing strategy that helps your website appear in relevant search results in search engines. It involves various techniques
                    from using to keywords on your pages to earning links to your site.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-1_service-section padding-bottom-120" id="feature">
        <div className="home-1_service-section-shape">
          <img src="./image/home-1/service-section-shape.svg" alt="image alt" />
        </div>
        <div className="container">
          <div className="home-1_service-section-wrapper">
            <div className="row justify-content-center">
              <div className="col-xxl-6 col-xl-7 col-lg-8 col-md-9">
                <div className="section-heading text-center">
                  <h2 className="section-heading__title heading-md text-black">All the digital services that are convenient
                    for you</h2>
                </div>
              </div>
            </div>
            <div className="row gutter-y-default justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-10">
                <a href="service-details.html" className="service-card hvr-fill aos-init aos-animate" data-aos-duration="1000" data-aos="fade-right">
                  <div className="service-card__icon">
                    <img src="./image/icons/icon-service-1.svg" alt="image alt" className="inline-svg" />
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">Branding &amp; Digital Strategies</h3>
                    <p>Brand strategy is all about developing a unique identity that distinguishes your business from</p>
                    <span className="service-card__link btn-link btn-arrow">Find out more</span>
                  </div>
                </a>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-10">
                <a href="service-details.html" className="service-card hvr-fill aos-init aos-animate" data-aos-duration="1000" data-aos="fade-left">
                  <div className="service-card__icon">
                    <img src="./image/icons/icon-service-2.svg" alt="image alt" className="inline-svg" />
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">Web Design &amp; App Development</h3>
                    <p>Dapatkan solusi web dan aplikasi yang kuat, intuitif, dan menarik dari tim ahli kami</p>
                    <span className="service-card__link btn-link btn-arrow">Find out more</span>
                  </div>
                </a>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-10">
                <a href="service-details.html" className="service-card hvr-fill aos-init aos-animate" data-aos-duration="1000" data-aos="fade-right">
                  <div className="service-card__icon">
                    <img src="./image/icons/icon-service-3.svg" alt="image alt" className="inline-svg" />
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">Results-Driven Digital Marketing</h3>
                    <p>Digital marketing potential customers using the internet &amp; other forms of digital communication
                    </p>
                    <span className="service-card__link btn-link btn-arrow">Find out more</span>
                  </div>
                </a>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-10">
                <a href="service-details.html" className="service-card hvr-fill aos-init aos-animate" data-aos-duration="1000" data-aos="fade-left">
                  <div className="service-card__icon">
                    <img src="./image/icons/icon-service-4.svg" alt="image alt" className="inline-svg" />
                  </div>
                  <div className="service-card__body">
                    <h3 className="service-card__title">Custom Software Development</h3>
                    <p>Custom Software Development is the process of conceptualizing, designing, building &amp; deploying
                    </p>
                    <span className="service-card__link btn-link btn-arrow">Find out more</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="home-5_content-section-1 section-padding-120 bg-offwhite-3" id="about">
        <div className="container">
          <div className="row row--custom ">
            <div className="col-xl-6 col-lg-5 col-md-6 col-7" data-aos-duration="1000" data-aos="fade-right">
              <div className="home-5_content-image-1 ">
                <img src="./image/home-5/content-image-1.png" alt="alternative text" />
                <div className="home-5_content-image-1-shape">
                  <img src="./image/home-5/content-image-1-shape.svg" alt="alternative text" />
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-7 col-md-10 col-auto" data-aos-duration="1000" data-aos="fade-left">
              <div className="content">
                <div className="content-text-block">
                  <h2 className="content-title heading-md heading-md--general-sans text-l5-secondary">Tentang Kami</h2>
                  <p>
                    KETIKWEB adalah solusi terdepan dalam dunia digital, khususnya
                    dalam pembuatan website dan desain grafis. Dengan dedikasi,
                    inovasi, dan keahlian tim profesional kami, kami bertekad untuk
                    membawa visi dan ide bisnis Anda menjadi nyata. Selamat datang di
                    KetikWeb, di mana kreativitas bertemu dengan teknologi untuk
                    menciptakan pengalaman digital yang tak terlupakan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about_feature-section section-padding-120 bg-light-2">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xxl-5 col-xl-6 col-lg-7 col-md-8 col-sm-10 col-xs-10">
              <div className="section-heading">
                <h2 className="section-heading__title heading-md text-black">Mengapa Kami?</h2>
              </div>
            </div>
          </div>
          <div className="row feature-widget-7-row  ">
            <div className="col-lg-4 col-md-6 col-xs-8 col-9">
              <div className="feature-widget-7">
                <div className="feature-widget-7__icon-wrapper">
                  <img src="./image/about/feature-icon-1.svg" alt="feature icon" />
                </div>
                <div className="feature-widget-7__body">
                  <h4 className="feature-widget-7__title">Pengalaman 4+ tahun</h4>
                  <p>Kami memiliki pengalaman selama 4 tahun lebih di bidang digital marketing</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-8 col-9">
              <div className="feature-widget-7">
                <div className="feature-widget-7__icon-wrapper">
                  <img src="./image/about/feature-icon-4.svg" alt="feature icon" />
                </div>
                <div className="feature-widget-7__body">
                  <h4 className="feature-widget-7__title">Kualitas Tinggi</h4>
                  <p>Kami selalu menargetkan hasil terbaik dengan kualitas desain dan fungsionalitas yang tak tertandingi</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-8 col-9">
              <div className="feature-widget-7">
                <div className="feature-widget-7__icon-wrapper">
                  <img src="./image/about/feature-icon-2.svg" alt="feature icon" />
                </div>
                <div className="feature-widget-7__body">
                  <h4 className="feature-widget-7__title">Tim Profesional</h4>
                  <p>Tim kami terdiri dari desainer, pengembang, dan ahli strategi digital yang berpengalaman</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-8 col-9">
              <div className="feature-widget-7">
                <div className="feature-widget-7__icon-wrapper">
                  <img src="./image/about/feature-icon-5.svg" alt="feature icon" />
                </div>
                <div className="feature-widget-7__body">
                  <h4 className="feature-widget-7__title">Pelayanan Pelanggan</h4>
                  <p>Komitmen kami adalah memastikan kepuasan klien dengan pelayanan yang ramah, responsif, dan tepat waktu.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-8 col-9">
              <div className="feature-widget-7">
                <div className="feature-widget-7__icon-wrapper">
                  <img src="./image/about/feature-icon-3.svg" alt="feature icon" />
                </div>
                <div className="feature-widget-7__body">
                  <h4 className="feature-widget-7__title">Inovasi</h4>
                  <p>Menggunakan ide-ide yang sama sekali baru, atau mencari metode baru untuk memanfaatkan yang sudah ada</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-xs-8 col-9">
              <div className="feature-widget-7">
                <div className="feature-widget-7__icon-wrapper">
                  <img src="./image/about/feature-icon-6.svg" alt="feature icon" />
                </div>
                <div className="feature-widget-7__body">
                  <h4 className="feature-widget-7__title">Simplicity interface</h4>
                  <p>Simplicity is used loosely to refer to the need to minimize a process</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="brand-section">
        <div className="container">
          <div className="brands-wrapper-inner">
            <div className="brand-heading">
              <h3 className="brand-heading__title">Dari UMKM sampai perusahaan multinasional, kami bermitra dengan instansi berbagai skala</h3>
            </div>
            <div className="brands-wrapper">
              {Array.from({ length: 61 }, (_, index) => (
                <div
                  key={index}
                  className="single-brand aos-init aos-animate"
                  data-aos-duration="1000"
                  data-aos="fade-left"
                  data-aos-delay={800 - (index + 1) * 100}
                >
                  <img
                    src={`/image/brand/${index + 1}.png`}
                    alt={`brand-logo-${index + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
