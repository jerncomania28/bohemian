import { useSelector } from "react-redux";

export const useIsQuickViewOpen = () => {
  return useSelector((state) => state.core.isQuickViewOpen);
};
