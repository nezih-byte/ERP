import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: "Accueil",
    icon: "shopping-cart-outline",
    link: "/pages/dashboardGlobal/dashboardGlobal",
    home: true,
  },
  // {
  //   title: "IoT Dashboard",
  //   icon: "home-outline",
  //   link: "/pages/iot-dashboard",
  // },
  {
    title: "Features",
    group: true,
  },
  {
    title: "Client",
    icon: "person-outline",
    children: [
      {
        title: "Add",
        link: "/pages/tableClient/choices",
      },
      {
        title: "List clients",
        link: "/pages/tableClient/table-user",
      },
    ],
  },

  {
    title: "Ticket",
    icon: "file-text-outline",
    children: [
      {
        title: "Add ticket",
        link: "/pages/ticket/add-ticket",
      },
      {
        title: "List tickets",
        link: "/pages/ticket/ticket-list",
      },
    ],
  },
];
