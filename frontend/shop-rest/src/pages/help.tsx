import Layout from "@components/layout/layout";
import Accordion from "@components/ui/accordion";
import { faq } from "@settings/faq.settings";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";
import Footer from "@components/common/footer";

export default function HelpPage() {
  const { t } = useTranslation();
  return (
    <>
    <section className="py-8 px-4 lg:py-10 lg:px-8 xl:py-14 xl:px-16 2xl:px-20">
      <header className="text-center mb-8">
        <h1 className="font-bold text-xl md:text-2xl xl:text-3xl">
          {t("common:nav-menu-faq")}
        </h1>
        
      </header>
      <div className="max-w-screen-lg w-full mx-auto">

        <p className="mb-8 px-8 text-center"> You may have a lot of questions in your mind about our products and services we offer online. We will try to find answers for the same here. Please check our faq section below and get your doubts cleared regarding our products and services. </p>

        <Accordion items={faq} translatorNS="faq" />
      </div>
    </section>

    <Footer />
    </>
  );
}

HelpPage.Layout = Layout;

export const getStaticProps = async ({ locale }: any) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common", "faq"])),
    },
  };
};
