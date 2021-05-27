export const useObserver = (setisShown, margin = -125) => {
  return new IntersectionObserver(
    (entry) => {
      console.log(entry[0]);
      if (entry[0].isIntersecting) {
        setisShown(true);
      } else {
        setisShown(false);
      }
    },
    {
      threshold: [0],
      rootMargin: `${margin}px`,
    }
  );
};
