import Navbar from "@components/layout/navbar/navbar";
import Footer from "@components/common/footer";
import MobileNavigation from "../components/layout/mobile-navigation";


const About = () => {
  
  return (
    <>
     <Navbar />
    {/* sidebar */}

    <div className="w-full bg-gray-100 bg-light">
      <div className="flex flex-col md:flex-row max-w-7xl w-full mx-auto py-10 px-5 xl:py-14 xl:px-8 2xl:px-14">
        
        {/* Contact form */}
        <div className="w-full order-1 md:order-2 mb-8 md:mb-0 md:ms-7 lg:ms-9 md:p-8 bg-light">
       <h1 className="mb-7 text-xl md:text-2xl font-body font-bold text-accent">
           
          </h1> 

          {/* <header className="text-center">
            <h1 className=" text-xl md:text-2xl xl:text-3xl text-accent">
              About
            </h1>
        
          </header> */}

            <img
              src="/logo1.png"
              className="w-full h-auto "
            />
            
            
            <section className="lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20 text-center ">
                    <p className="text-xl"><p className="font-bold">Navin Creations </p> is a leading manufacturer of heirloom dressing. Navin Creations started operations in 2008 in keeping with the family tradition of making upscale religious events clothing for children. With sole emphasis on quality, each of our creation is crafted with the finest fabrics to the most perfect fit. We specialize in making heirloom clothing that are usually treasured for generations to come.</p>



                    <p className="py-4">Our christening gowns and christening outfits for the babies are made with utmost care to make the child’s day a special and memorable event. Our brand Little Kingdom and Heavenly Stars, therefore, is no surprise, is the most sought after brand of children’s outfits by stockists not just in Kerala, but also most parts of India. The Little Kingdom and Heavenly Starts are a wholesome set of christening day dressing with the cap, shoes and candle also included.</p>

                    <p className="py-4">Navin Creation also makes some of the finest Baptism dresses for little boys and girls. The brand Little Kingdom comes inclusive of a finely stitched dress as well as the accessories using the high quality fabric and trims to be the cynosure of any decorative event.</p>

                    <p className="py-4">What’s more, Navin Creations also makes exquisite Gift Sets for you to present to those little angels on their special occasion of Christening or Baptism.</p>

                    <p className="py-4">Quality products in quickest time is our priority. Our manufacturing unit in Kochi, is adept at processing orders in a very short time. What ever the occasion, we are bound to have the perfect fit outfit and accessories to serve you to make your child’s event a memorable one.</p>

            </section> 
        </div>
      </div>
    </div>
    <MobileNavigation />
    <Footer />    
    </>
  );
};

export default About;
