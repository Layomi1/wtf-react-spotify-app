import { IoCheckmark } from "react-icons/io5";

const CardContent = [
  {
    id: 1,
    link: "One-time plans available",
    title: "Mini",
    rate: "From ₹7/day",
    plan: "1 account on mobile only",
    planDetails: [
      { icon: IoCheckmark, text: "Ad-free music listening on mobile" },
      { icon: IoCheckmark, text: "Group Session" },
      { icon: IoCheckmark, text: "Download 30 songs on 1 mobile device" },
    ],
    terms: [{ link: "Terms and conditions apply." }],
  },
  {
    id: 2,
    freeLink: "1 month free",
    link: "One-time plans available",
    title: "Individual",
    rate: "₹119/month after offer period",
    plan: "1 account",
    planDetails: [
      { icon: IoCheckmark, text: "Ad-free music listening on mobile" },
      { icon: IoCheckmark, text: "Group Session" },
      { icon: IoCheckmark, text: "Download 10k songs/device on 5 devices" },
    ],
    terms: [
      { link: "Terms and conditions apply" },
      {
        policy:
          ". 1 month free not available for users who have already tried Premium. and conditions apply.",
      },
    ],
  },
  {
    id: 3,
    freeLink: "1 month free",
    link: "One-time plans available",
    title: "Duo",
    rate: "₹149/month after offer period",
    plan: "2 accounts",
    planDetails: [
      { icon: IoCheckmark, text: "For couples who live together" },
      { icon: IoCheckmark, text: "Ad-free music listening" },
      { icon: IoCheckmark, text: "Group Session" },
      {
        icon: IoCheckmark,
        text: "Download 10k songs/device, on 5 devices per account",
      },
    ],
    terms: [
      { link: "Terms and conditions apply." },
      {
        policy:
          " 1 month free not available for users who have already tried Premium.",
      },
    ],
  },
  {
    id: 4,
    freeLink: "1 month free",
    link: "One-time plans available",
    title: "Family",
    rate: "₹179/month after offer period",
    plan: "Up to 6 accounts",
    planDetails: [
      { icon: IoCheckmark, text: "For family who live together" },
      { icon: IoCheckmark, text: "Block explicit music" },
      { icon: IoCheckmark, text: "Group Session" },
      { icon: IoCheckmark, text: "Download 10k songs/device on 5 devices" },
    ],

    terms: [
      { link: "Terms and conditions apply." },
      {
        policy:
          " 1 month free not available for users who have already tried Premium.",
      },
    ],
  },
];

export default CardContent;
