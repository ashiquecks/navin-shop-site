import { useState } from "react";
import { useRouter } from "next/router";
import { useLayer } from "react-laag";
import cn from "classnames";
import { motion, AnimatePresence } from "framer-motion";
import { CaretDown } from "@components/icons/caret-down";
import ErrorMessage from "@components/ui/error-message";
import DropdownLoader from "@components/ui/loaders/dropdown-loader";
import { zoomInBottom } from "@utils/motion/zoom-in-bottom";
import * as typeIcon from "@components/icons/type";
import { getIcon } from "@utils/get-icon";
import Scrollbar from "@components/ui/scrollbar";
import { useTypesQuery } from "@data/type/use-types.query";
import { useWindowSize } from "@utils/use-window-size";

type Props = {
  className?: string;
  btnClassName?: string;
};

const ProductTypeMenu: React.FC<Props> = ({
  className,
  btnClassName = "border border-border-200 text-accent rounded min-w-150 px-4",
}) => {
  const { isLoading: loading, data, error } = useTypesQuery();

  const [isOpen, setOpen] = useState(false);
  const { width } = useWindowSize();
  const router = useRouter();
  const placement =
    width < 1280
      ? router.locale === "ar" || router.locale === "he"
        ? "bottom-start"
        : "bottom-end"
      : "bottom-end";

  const { renderLayer, triggerProps, layerProps } = useLayer({
    isOpen,
    onOutsideClick: close, // close the menu when the user clicks outside
    onDisappear: close, // close the menu when the menu gets scrolled out of sight
    overflowContainer: false, // keep the menu positioned inside the container
    placement: placement, // we prefer to place the menu "bottom-end"
    triggerOffset: 10, // keep some distance to the trigger
    containerOffset: 16, // give the menu some room to breath relative to the container
  });

  if (error) return <ErrorMessage message={error.message} />;
  // helper function to close the menu
  function close() {
    setOpen(false);
  }

  const selectedMenu = data?.types?.find((type) =>
    router.asPath.includes(type.slug)
  );
  function handleClick(path: string) {
    close();
    router.push(path);
  }

  return (
    <></>
  );
};

export default ProductTypeMenu;
