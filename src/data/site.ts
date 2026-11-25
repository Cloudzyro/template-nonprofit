// Everything on the site comes from this file. Change the text, programs, numbers,
// stories, event and links here; the pages update themselves.

export const org = {
  name: "Ashby Creek Alliance",
  short: "Ashby Creek",
  tagline: "Bringing a working creek back to life",
  description:
    "Ashby Creek Alliance is a volunteer-run nonprofit restoring the banks, water and wildlife of Ashby Creek in Linn County, Iowa. Plant trees, test water, join the Creek Run or donate.",
  // Where every Donate button goes: Givebutter, Donorbox, Every.org, a Stripe or PayPal link...
  // The chosen amount is added as ?amount=50 (rename the parameter below if your provider uses another).
  donateUrl: "https://donate.example.org/ashby-creek",
  donateAmountParam: "amount",
  contactEmail: "hello@ashbycreek.example.org",
  address: "214 Mill Street, Ashby, IA 52314",
  // Your registration, shown in the footer when filled in, e.g. "Registered 501(c)(3). EIN 00-0000000".
  legal: "",
  social: [
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Facebook", href: "https://facebook.com/" },
  ],
};

export const nav = [
  { label: "Our work", href: "/#programs" },
  { label: "Impact", href: "/#impact" },
  { label: "Stories", href: "/#stories" },
  { label: "Creek Run", href: "/#event" },
  { label: "Volunteer", href: "/#volunteer" },
];

export const hero = {
  title: "We're bringing Ashby Creek back, one mile of bank at a time",
  text: "Ashby Creek runs 23 miles through farmland and the town of Ashby before it meets the Cedar River. Since 2016 our volunteers have replanted its banks, tested its water every month and opened it back up to fish.",
};

export const mission = {
  title: "Why the creek",
  paragraphs: [
    "Fifty years ago you could swim in Ashby Creek. Then the trees along its banks were cleared, soil and fertilizer washed in with every storm, and two old mill dams cut it in pieces. By 2015 the state listed it as impaired.",
    "A creek heals when its banks are planted, its water is watched and its fish can move. That's our whole plan. We work with the farmers and families who own the land along it, and nothing happens on a property without them.",
  ],
};

export const programs = [
  {
    title: "Streamside planting",
    text: "Every spring and fall, volunteers plant native willow, dogwood and prairie grasses along eroding banks. Roots hold the soil, shade cools the water and the strip catches runoff before it reaches the creek.",
    detail: "Spring and fall Saturdays, tools and lunch provided",
  },
  {
    title: "Creek Watch",
    text: "Trained volunteers and three high school science classes test the water at twelve sites on the first Saturday of every month, and publish the results for anyone to read.",
    detail: "Monthly, training in March",
  },
  {
    title: "Open water",
    text: "We're working with the county to remove the old Lower Mill dam and build a rock ramp at the Upper Mill, so fish can travel the creek again for the first time since 1911.",
    detail: "Lower Mill removal planned for summer 2027",
  },
];

// Sample figures. Replace them with your own before you publish.
export const impact = {
  note: "Sample figures for this template. Replace them with your own.",
  stats: [
    { value: "11.4", unit: "miles", label: "of creek bank replanted" },
    { value: "38,000", unit: "", label: "native trees and shrubs in the ground" },
    { value: "1,920", unit: "", label: "water samples tested and published" },
    { value: "640", unit: "", label: "volunteers last year" },
  ],
};

export type Story = {
  slug: string;
  title: string;
  person: string;
  role: string;
  quote: string;
  body: string[];
};

// Fictional people. Replace with real stories, with permission.
export const stories: Story[] = [
  {
    slug: "the-hendricks-farm",
    title: "A buffer strip on a working farm",
    person: "Ruth Hendricks",
    role: "Farms 400 acres along the upper creek",
    quote: "I was sure it would cost me ground. It cost me a strip I couldn't plant in a wet year anyway, and the creek stopped eating my field.",
    body: [
      "The Hendricks family has farmed along the upper creek since 1938. By 2019 the bank below their east field was losing several feet a year, and every big rain took topsoil with it.",
      "Over two planting seasons, 90 volunteers put 4,200 willows and dogwoods along a half mile of bank, and Ruth enrolled the strip in the county's conservation program. The bank has held through four springs since.",
      "Ruth now hosts our fall planting day and brings the coffee.",
    ],
  },
  {
    slug: "creek-watch-class",
    title: "Thirty students and twelve test sites",
    person: "Mr. Daniel Osei",
    role: "Biology teacher, Ashby High School",
    quote: "My students know which riffle the stoneflies came back to. You can't teach that from a textbook.",
    body: [
      "Ashby High's biology classes joined Creek Watch in 2021. Every month, students test for nitrate, phosphate, oxygen and clarity at four of our twelve sites.",
      "In 2025 they found stonefly larvae at the Mill Street riffle for the first time in our records. Stoneflies only live in clean, well-oxygenated water.",
      "Three of the students who started Creek Watch have gone on to study environmental science.",
    ],
  },
  {
    slug: "first-planting-day",
    title: "My first Saturday on the creek",
    person: "Lena Morales",
    role: "Volunteer since 2024",
    quote: "I came for one morning because a friend asked. I've missed two planting days since.",
    body: [
      "Lena moved to Ashby for a nursing job and didn't know anyone. A coworker brought her to a spring planting day at the Mill Street park.",
      "By lunch she'd planted 60 willows and learned to tell a dogwood from a buckthorn. She now leads a crew of eight on planting days and runs our new volunteer welcome.",
    ],
  },
];

export const event = {
  title: "Creek Run 2027",
  kind: "5K run and 1-mile family walk",
  date: "Saturday, May 15, 2027",
  time: "Check-in 7:30 am, start 8:30 am",
  place: "Mill Street Park, Ashby, Iowa",
  text: "Our biggest fundraiser of the year runs along the creek trail and past the banks you helped plant. Every runner gets a shirt, and every entry plants ten trees this fall.",
  price: "$35 for the 5K, $15 for the walk, kids under 12 free",
  // Where the sign-up button goes: RunSignup, Eventbrite, a payment link...
  url: "https://register.example.org/creek-run-2027",
  goal: 30000,
  raised: 18450, // sample
};

export const donate = {
  title: "Give to the creek",
  text: "Gifts pay for trees, water test kits and the work to open the creek to fish. We have one part-time staff member, so most of every dollar ends up in the ground.",
  amounts: [
    { value: 25, buys: "plants 10 native shrubs" },
    { value: 50, buys: "buys a month of water test supplies" },
    { value: 100, buys: "plants 40 willows on an eroding bank" },
    { value: 250, buys: "covers a planting day's tools and lunch" },
  ],
  defaultAmount: 50,
};

export const volunteer = {
  title: "Volunteer with us",
  text: "No experience needed. Tell us what you'd like to do and we'll send the next dates. Most volunteers give one Saturday a season.",
  interests: ["Planting days", "Creek Watch water testing", "Creek Run on race day", "Office and outreach", "Anything that helps"],
};
