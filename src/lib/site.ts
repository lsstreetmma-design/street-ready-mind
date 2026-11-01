// One place for every business detail used on the site.
// Change a phone number, time or link here and it updates on both pages.

export const SITE = {
  name: "LS Street MMA",
  url: "https://ls-street-mma.com",
  phoneDisplay: "07900 770404",
  phoneHref: "tel:+447900770404",
  email: "LS-STREET-MMA@hotmail.com",

  // Training times (from Lee's LS STREET MMA.docx, Nov 2026)
  trainingDays: "Wednesday & Thursday",
  trainingTime: "7:00 pm – 8:00 pm",
  area: "Bromley",

  // Opens the Google Business listing itself (shows the gym name on the pin),
  // not raw GPS coordinates like the old "Open Google Maps" button did.
  mapsListing: "https://maps.google.com/?cid=6912947257794372202",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=LS%20Street%20MMA%2C%2020%20Widmore%20Rd%2C%20Bromley%20BR1%201RY",

  // Web3Forms public access key - booking messages go to LS-STREET-MMA@hotmail.com
  web3formsKey: "432d0bb8-452a-47ca-b90f-94ea45ce31fa",
} as const;
