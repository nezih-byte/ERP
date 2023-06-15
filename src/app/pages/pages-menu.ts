import { NbMenuItem } from "@nebular/theme";

export const MENU_ITEMS_ADMIN_MANAGER: NbMenuItem[] = [
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
      {
        title: "Ticket consulté",
        link: "/pages/ticket/ticket-list-traiter",
      },
    ],
  },
];

export const MENU_ITEMS_ADMIN_TECH: NbMenuItem[] = [
  {
    title: "Accueil",
    icon: "shopping-cart-outline",
    link: "/pages/dashboardGlobal/dashboardGlobal",
    home: true,
  },

  {
    title: "Features",
    group: true,
  },
  {
    title: "STAFF",
    icon: "person-outline",
    children: [
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
        title: "List tickets",
        link: "/pages/ticket/ticket-list",
      },
      {
        title: "Ticket consulté",
        link: "/pages/ticket/ticket-list-traiter",
      },
    ],
  },
];

export const MENU_ITEMS_MANAGER: NbMenuItem[] = [
  {
    title: "Accueil",
    icon: "shopping-cart-outline",
    link: "/pages/dashboardGlobal/dashboardGlobal",
    home: true,
  },

  {
    title: "Features",
    group: true,
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
      {
        title: "Ticket consulté",
        link: "/pages/ticket/ticket-list-traiter",
      },
    ],
  },
];

export const MENU_ITEMS_MAGASIN: NbMenuItem[] = [
  {
    title: "Accueil",
    icon: "shopping-cart-outline",
    link: "/pages/dashboardGlobal/dashboardGlobal",
    home: true,
  },

  {
    title: "Features",
    group: true,
  },

  {
    title: "Client",
    icon: "person-outline",
    children: [
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
        title: "List tickets",
        link: "/pages/ticket/ticket-list",
      },
      {
        title: "Ticket consulté",
        link: "/pages/ticket/ticket-list-traiter",
      },
    ],
  },
];

export const MENU_ITEMS_TECH: NbMenuItem[] = [
  {
    title: "Accueil",
    icon: "shopping-cart-outline",
    link: "/pages/dashboardGlobal/dashboardGlobal",
    home: true,
  },

  {
    title: "Features",
    group: true,
  },

  {
    title: "Client",
    icon: "person-outline",
    children: [
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
        title: "List tickets",
        link: "/pages/ticket/ticket-list",
      },
      {
        title: "Ticket consulté",
        link: "/pages/ticket/ticket-list-traiter",
      },
    ],
  },
];
