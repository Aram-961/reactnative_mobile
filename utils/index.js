export const checkImageUrl = (url) => {
    if (!url) return <h2>image not found</h2>;
    else {
      const pattern = new RegExp(
        "^https?://.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
        "i"
      );
      return pattern.test(url);
    }
  };
  