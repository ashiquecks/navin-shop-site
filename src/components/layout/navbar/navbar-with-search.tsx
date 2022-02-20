import { useRef } from "react";
import Link from "@components/ui/link";
import cn from "classnames";
import { useUI } from "@contexts/ui.context";
import { siteSettings } from "@settings/site.settings";
import Logo from "@components/ui/logo";
import Search from "@components/common/search";
import JoinButton from "@components/layout/navbar/join-button";
import ProductTypeMenu from "@components/layout/navbar/product-type-menu";
import dynamic from "next/dynamic";
import { ROUTES } from "@utils/routes";
import { useTypesQuery } from "@data/type/use-types.query";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { ReadingTable } from "@components/icons/category";
import { Center } from "@chakra-ui/react";

const AuthorizedMenu = dynamic(
  () => import("@components/layout/navbar/authorized-menu"),
  { ssr: false }
);

type DivElementRef = React.MutableRefObject<HTMLDivElement>;

const NavbarWithSearch = () => {
  const { t } = useTranslation("common");
  const { asPath } = useRouter();
  const { data } = useTypesQuery();

  const slugs = data?.types?.map((item) => item.slug);
  const currentPath = asPath
    .substring(
      0,
      asPath.indexOf("?") === -1 ? asPath.length : asPath.indexOf("?")
    )
    .replace(/\//g, "");

  const hasType = slugs?.includes(currentPath);

  const navbarRef = useRef() as DivElementRef;
  const { isAuthorize, displayHeaderSearch, displayMobileSearch } = useUI();

  const router = useRouter();
  const navigate = (href:string,label:string) => {
    if(label=="Boys Kingdom"){
       window.sessionStorage.setItem("gender","boys");
       router.push({
        pathname: href,
        query: 'boys'
      });
      }
    else if(label=="Girls Kingdom"){
      window.sessionStorage.setItem("gender","girls");
      router.push({
        pathname: href,
        query: 'girls'
      });
    }
    else{
      router.push({
        pathname: href,
      });
    }
  };

  return (
    <header
      ref={navbarRef}
      className="site-header-with-search h-14 md:h-16 lg:h-auto"
    >
    
      <nav
      style={{backgroundColor:"#fff", minHeight:"120px", textAlign:"center",position:"fixed", display:"flex",flexDirection:"column",justifyContent:"center"}}
        className={cn(
          " w-full top-0 end-0 z-20 transition-transform duration-300",
          // " w-full h-14 md:h-16 lg:h-22 py-5 px-4 lg:px-8 flex justify-between items-center  top-0 end-0 z-20 transition-transform duration-300",
          {
            "fixed bg-light lg:bg-transparent lg:absolute":
              !displayHeaderSearch && hasType,
            "is-sticky fixed bg-light shadow-sm":
              displayHeaderSearch || !hasType,
          }
        )}
      >
        {displayMobileSearch ? (
          <div className="w-full">
            <Search label={t("text-search-label")} variant="minimal" />
          </div>
        ) : (
          <>
          <div className="headerstyles">
            <Logo />
          </div>
            {/* <p className="text-head">loading</p> */}
            {/* <ProductTypeMenu className="ms-10 me-auto hidden xl:block" /> */}
            <div className="headerstylings">
              <ul className="  hidden lg:flex items-center flex-shrink-10 space-s-9">
                {isAuthorize ? (
                  <li key="track-orders">
                    <Link
                      href={ROUTES.ORDERS}
                      className="fonspec font-extrabold color-border-50 justify-content-center flex items-center transition duration-200 no-underline hover:text-accent focus:text-accent"
                    >
                      {t("nav-menu-track-order")}
                    </Link>
                  </li>
                ) : null}
                {siteSettings.headerLinks.map(({ href, label, icon }) => (
                  <li key={`${href}${label}`}>
                   
                    <Link
                      href={href}
                      onClick={()=>navigate(href,label)}
                      className=" font-semibold justify-content-center flex items-center transition duration-200 no-underline"
                    >
                      {icon && <span className="me-2">{icon}</span>}
                      {t(label)}
                    </Link>
                   
                  </li>
                ))}
              </ul>
            </div>
            {/* <div className="hidden lg:block w-full items-end	">
              <div
                className={cn(
                  "mr-2 xl:w-5/12 2xl:w-5/12 mx-auto  overflow-hidden items-end	 ",
                  {
                    hidden: !displayHeaderSearch && hasType,
                    flex: displayHeaderSearch || !hasType,
                  }
                )}
              >
                <Search className="items-end	" label={t("text-search-label")} variant="minimal" />
              </div>
            </div> */}
           
          </>
        )}
      </nav>
    </header>
  );
};

export default NavbarWithSearch;
