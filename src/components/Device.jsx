const minSizes = {
  mobile: "320px",
  ipad: "766px",
  laptop: "1024px",
};
const maxSizes = {
  mobile: "765px",
  ipad: "1023px",
  laptop: "1550px",
};
export const device = {
  mobile: `(min-width:${minSizes.mobile} )and ( max-width:${maxSizes.mobile})`,

  ipad: `(min-width:${minSizes.ipad} )and ( max-width:${maxSizes.ipad})`,
  laptop: `(min-width:${minSizes.laptop} )and ( max-width:${maxSizes.laptop})`,
};
