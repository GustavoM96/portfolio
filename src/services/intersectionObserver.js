export const useObserver = (setisShown) => {
  return new IntersectionObserver(
    (entry) => {
      console.log(entry[0].intersectionRatio);
      if (entry[0].intersectionRatio > 0.3) {
        setisShown(true);
      }
      if (entry[0].intersectionRatio < 0.1) {
        setisShown(false);
      }
    },
    {
      threshold: [0.1, 0.4],
    }
  );
};
