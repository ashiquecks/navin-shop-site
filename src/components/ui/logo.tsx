import Image from "next/image";
import Link from "@components/ui/link";
import cn from "classnames";
import { siteSettings } from "@settings/site.settings";
import { useSettings } from "@contexts/settings.context";

const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  ...props
}) => {
  const { logo, siteTitle } = useSettings();
  return (
    <Link
      href="/clothing"
      className={cn("inline-flex", className)}
      {...props}
    >
      <span
        className="overflow-hidden relative logo"
        // style={{
        //   width: siteSettings.logo.width,
        //   height: siteSettings.logo.height,
        // }}
      >
        <Image
          src="/logo1.png"
          alt="Navin Creations"
          //alt={siteTitle ?? siteSettings.logo.alt}
          layout="fill"
          objectFit="contain"
          loading="eager"
        />
      </span>
    </Link>
  );
};

export default Logo;
