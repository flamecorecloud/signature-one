import {
  HomeModernIcon,
  InformationCircleIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

export const PathRoute = [
  {
    label: "General",
    items: [
      {
        name: "About",
        path: "general/home",
        icon: <InformationCircleIcon className="size-6" />,
        description: "Learn more about the app and the development team.",
      },
      {
        name: "Donation",
        path: "general/donate",
        icon: <HeartIcon className="size-6" />,
        description: "Support the app’s development through donations.",
      },
    ],
  },
];
