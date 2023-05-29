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

  //profile

  {
    title: "STAFF",
    icon: "person-outline",
    children: [
      {
        title: "Ajouter personel",
        link: "/pages/profile/add-profile",
      },
      {
        title: "Liste des clients",
        link: "/pages/profile/list-profile",
      },
    ],
  },
  {
    title: "Client",
    icon: "person-outline",
    children: [
      {
        title: "Ajouter client / société",
        link: "/pages/tableClient/choices",
      },
      {
        title: "Liste des clients",
        link: "/pages/tableClient/table-user",
      },
      {
        title: "List des société",
        link: "/pages/tableClient/table-company",
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
