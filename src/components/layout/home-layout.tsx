import NavbarWithSearch from "@components/layout/navbar/navbar-with-search";
import MobileNavigation from "./mobile-navigation";
import Footer from "@components/common/footer";

const HomeLayout: React.FC = ({ children }) => (
  <>
  <div className=" min-h-screen transition-colors duration-150">
    <NavbarWithSearch />
    {children}
    <MobileNavigation />
  </div>
  <div >
      <Footer />
    </div>
  </>
  

);

export default HomeLayout;