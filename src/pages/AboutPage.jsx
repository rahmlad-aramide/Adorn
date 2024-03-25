import aboutImage from "../assets/images/about.png";
import arrowRight from "../assets/icons/arrow-right-red.svg";
import Breadcrumbs from "../components/Breadcrumbs";

const AboutPage = () => {
  return (
    <div className=" mb-[3.75rem] min-h-screen bg-white py-[4.3125rem] px-8 shadow md:px-[4.25rem] lg:px-[6.25rem]">
      <Breadcrumbs
        breadcrumbs={[{ label: "About", href: "/about", active: true }]}
      />
      <div className="mb-[1.625rem] font-lancelot text-xl">
        About Adorn Home Decor
      </div>
      <div className="mb-[1.625rem] max-w-[57ch] font-workSans text-lg">
        Recognized across diverse markets for our leadership in contract
        furniture quality, design, and engineering, Adorn Home Decor stands as a
        beacon of excellence in the interior design and production industry. Our
        full-service firm is characterized by a steadfast commitment to superior
        quality and innovative design strategies, setting new standards in the
        creation of functional and stylish environments.
      </div>
      <div className="my-3">
        <img src={aboutImage} alt="About us" />
      </div>
      <div className="mb-[1.625rem] max-w-[57ch] font-workSans text-lg">
        At Adorn Home Decor, we specialize in an expansive collection of
        furnishings including chairs, tables, sofas, and a diverse range of
        accessories, tailored for every space in your home or office. Our
        meticulously curated products are organized into distinct categories:
        Office, Living Room, Bedroom, and Kitchen, ensuring you can easily find
        the perfect pieces to match your style and functional needs. Each item
        in our collection is chosen for its aesthetic appeal, comfort, and the
        ability to transform a space into an environment that reflects personal
        style and comfort.
      </div>

      <div className="mb-[1.625rem] font-lancelot text-xl">Why Adorn?</div>
      <div className="mb-[1.625rem] max-w-[57ch] font-workSans text-lg">
        Embracing sustainability and innovation, Adorn Home Decor strives to
        bring environmental responsibility to the forefront of each project. Our
        dedication to eco-friendly practices and materials not only reflects our
        respect for the planet but also ensures that our clients receive
        products that are both durable and stylish. With a team of passionate
        designers and artisans, we continuously seek to push the boundaries of
        design while maintaining a deep respect for tradition and craftsmanship.
      </div>
      {/* <button className="group flex items-center border border-secondary py-2 px-5 text-lg font-light text-secondary">
        About Abdrahman
        <img
          src={arrowRight}
          alt="arrow right"
          className="ml-2 group-hover:ml-4"
        />
      </button> */}
    </div>
  );
};

export default AboutPage;
