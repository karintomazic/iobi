const address = "Drvanja 29, 2234 Benedikt";

export const contact = {
  phone: "+386 41 814 262",
  phoneLink: "tel:+38641814262",
  email: "tomazics@gmail.com",
  emailLink: "mailto:tomazics@gmail.com",
  street: "Drvanja 29",
  city: "2234 Benedikt",
  country: "Slovenija",
  address,
  mapLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`,
  directionsLink: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`,
  facebook: "https://www.facebook.com/tomazicstojan/?locale=sl_SI",
};
