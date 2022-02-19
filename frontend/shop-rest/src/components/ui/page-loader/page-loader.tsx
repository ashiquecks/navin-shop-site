import cn from "classnames";
import styles from "./page-loader.module.css";
import { useTranslation } from "next-i18next";

const PageLoader = ({ text = "text-loading" }) => {
  const { t } = useTranslation("common");
  return (
    <div
      className={cn(
        "w-full h-screen flex flex-col items-center justify-center"
      )}
    >
         <div className="spinner">
      <img src="/spinner.gif" alt="spin" />
    </div>

      {/* <div className="flex relative">
        <div className={styles.page_loader}>
        <div className="tenor-gif-embed" data-postid="15182686" data-share-method="host" data-aspect-ratio="1.08475" data-width="100%">
          </div>
           <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
        </div>
        <h3 className="text-sm font-semibold text-body italic absolute top-1/2 -mt-2 w-full text-center">
          {t(text)}
        </h3>
      </div> */}
    </div>
  );
};

export default PageLoader;