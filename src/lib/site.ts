// One place for every business detail used on the site.
// Change a phone number, time or link here and it updates on both pages.

export const SITE = {
  name: "LS Street MMA",
  url: "https://ls-street-mma.com",
  phoneDisplay: "07900 770404",
  phoneHref: "tel:+447900770404",
  email: "LS-STREET-MMA@hotmail.com",

  // Hours, from Lee 11-05: group classes are Wed & Thu 7-8 pm,
  // 1:1 coaching is Tue, Wed & Thu 3-8 pm. The "Short" versions fit the small info boxes at the top.
  classDays: "Wednesday & Thursday",
  classTime: "7:00 pm – 8:00 pm",
  classShort: "Wed & Thu · 7pm – 8pm",
  oneToOneDays: "Tuesday, Wednesday & Thursday",
  oneToOneTime: "3:00 pm – 8:00 pm",
  oneToOneShort: "Tue, Wed & Thu · 3pm – 8pm",
  area: "Bromley",

  // Private sessions (Lee's own wording from the old site, put back 11-01 at David's request)
  oneToOne: "1:1 Pressure-Tested Coaching • £35/hr",
  homeTraining: "Home Training Available",

  // Opens the Google Business listing itself (shows the gym name on the pin),
  // not raw GPS coordinates like the old "Open Google Maps" button did.
  mapsListing: "https://maps.google.com/?cid=6912947257794372202",
  mapsDirections:
    "https://www.google.com/maps/dir/?api=1&destination=LS%20Street%20MMA%2C%2020%20Widmore%20Rd%2C%20Bromley%20BR1%201RY",

  // Web3Forms public access key - booking messages go to LS-STREET-MMA@hotmail.com
  web3formsKey: "432d0bb8-452a-47ca-b90f-94ea45ce31fa",
} as const;
