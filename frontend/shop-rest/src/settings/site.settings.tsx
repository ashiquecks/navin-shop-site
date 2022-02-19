import { FacebookIcon } from "@components/icons/facebook";
import { InstagramIcon } from "@components/icons/instagram";
import { TwitterIcon } from "@components/icons/twitter";
import { YouTubeIcon } from "@components/icons/youtube";
import { ROUTES } from "@utils/routes";
export const siteSettings = {
  name: "Christening Costumes from Navin Creations",
  description: "",
  logo: {
    url: "/logo.png",
    alt: "Navin Creations",
    href: "/",
    width: 200,
    height: 50,
  },
  defaultLanguage: "en",
  currencyCode: "INR",
  product: {
    placeholderImage: "/product-placeholder.svg",
    placeorderImage: "/babygirl.jpg",
    cardMaps: {
      grocery: "Krypton",
      furniture: "Radon",
      bag: "Oganesson",
      makeup: "Neon",
      book: "Xenon",
      medicine: "Helium",
      default: "Argon",
    },
  },
  author: {
    name: "",
    mailid: "info@navincreations.com",
    address: "Navin Creations , 18/2052 , Kochupully Road,Thoppumpady , Kochi-682005,Kerala",
    phone: "+91-735-631-6538",
    social: [
      
      {
        link: "https://www.facebook.com/NavinCreations/",
        icon: <FacebookIcon width="16px" height="16px" />,
        hoverClass: "text-social-facebook",
      },
      {
        link: "https://www.instagram.com/baptismdressindia/",
        icon: <InstagramIcon width="16px" height="16px" />,
        hoverClass: "text-social-instagram",
      },
      {
        link: "https://twitter.com/navincreations",
        icon: <TwitterIcon width="16px" height="16px" />,
        hoverClass: "text-social-twitter",
      },
      {
        link: "https://in.pinterest.com/pin/357121445449982926/",
        icon: <YouTubeIcon width="16px" height="16px" />,
        hoverClass: "text-social-youtube",
      },
    ],
  },
  
  headerLinks: [
    // { href: ROUTES.SHOPS, icon: null, label: "nav-menu-shops" },
    { href: ROUTES.HOME, icon: null, label: "Home" },
    { href: ROUTES.ABOUT, icon: null, label: "About" },
    { href: ROUTES.CUSTOMOUTFIT, icon: null, label: "Boys Kingdom" },
    { href: ROUTES.CUSTOMOUTFIT, icon: null, label: "Girls Kingdom" },
    { href: ROUTES.HELP, label: "FAQ" },
    { href: ROUTES.CONTACT, label: "Contact" },
  ],
  authorizedLinks: [
    { href: ROUTES.PROFILE, label: "auth-menu-profile" },
    { href: ROUTES.CHECKOUT, label: "auth-menu-checkout" },
    { href: ROUTES.ORDERS, label: "auth-menu-my-orders" },
    { href: ROUTES.LOGOUT, label: "auth-menu-logout" },
    { href: ROUTES.ABOUT, label: "auth-menu-about" },
  ],
  dashboardSidebarMenu: [
    {
      href: ROUTES.PROFILE,
      menulabel: "profile-sidebar-profile",
    },
    {
      href: ROUTES.CHANGE_PASSWORD,
      menulabel: "profile-sidebar-password",
    },
    {
      href: ROUTES.ORDERS,
      menulabel: "profile-sidebar-orders",
    },
    {
      href: ROUTES.HELP,
      menulabel: "profile-sidebar-help",
    },
    {
      href: ROUTES.LOGOUT,
      menulabel: "profile-sidebar-logout",
    },
  ],
  deliverySchedule: [
    {
      id: "1",
      title: "express-delivery",
      description: "90 min express delivery",
    },
    {
      id: "2",
      title: "8am-11am",
      description: "8.00 AM - 11.00 AM",
    },
    {
      id: "3",
      title: "11am-2pm",
      description: "11.00 AM - 2.00 PM",
    },
    {
      id: "4",
      title: "2pm-5pm",
      description: "2.00 PM - 5.00 PM",
    },
    {
      id: "5",
      title: "5pm-8pm",
      description: "5.00 PM - 8.00 PM",
    },
    {
      id: "6",
      title: "next day",
      description: "Next Day",
    },
  ],
  
};
