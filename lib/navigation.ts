export interface NavItem {
  labelKey: string;
  route: string;
  children?: NavItem[];
  underConstruction?: boolean;
}

/**
 * Main navigation structure
 * labelKey references translation keys in nav.*
 */
export const mainNavigation: NavItem[] = [
  {
    labelKey: "home",
    route: "home",
  },
  {
    labelKey: "ourCreations",
    route: "creations",
    children: [
      {
        labelKey: "bicycles",
        route: "bicycles",
        children: [
          {
            labelKey: "ebikes",
            route: "ebikes",
            children: [
              { labelKey: "ebikesMtb", route: "ebikeMtb" },
              { labelKey: "ebikesUrban", route: "ebikeUrban" },
              {
                labelKey: "ebikesGravel",
                route: "ebikes",
                underConstruction: true,
              },
            ],
          },
          {
            labelKey: "classic",
            route: "classic",
            children: [
              { labelKey: "classicPushBike", route: "pushBike" },
              {
                labelKey: "classicUrban",
                route: "classic",
                underConstruction: true,
              },
              {
                labelKey: "classicGravel",
                route: "classic",
                underConstruction: true,
              },
            ],
          },
          {
            labelKey: "prototypes",
            route: "prototypes",
            children: [
              { labelKey: "prototypesBmx", route: "bmx" },
              { labelKey: "prototypesTricycle", route: "tricycle" },
              { labelKey: "prototypesCargoBike", route: "cargoBike" },
            ],
          },
        ],
      },
      { labelKey: "frames", route: "frames", underConstruction: true },
      {
        labelKey: "selfBuildKits",
        route: "selfBuildKits",
        underConstruction: true,
      },
      {
        labelKey: "accessories",
        route: "accessories",
        underConstruction: true,
      },
    ],
  },
  {
    labelKey: "workshop",
    route: "workshop",
    children: [
      { labelKey: "workshopSelfBuild", route: "selfBuildWorkshop" },
      { labelKey: "workshopCustom", route: "customBikes" },
      { labelKey: "workshopCarbon", route: "carbonRepair" },
    ],
  },
  {
    labelKey: "about",
    route: "about",
    children: [
      { labelKey: "aboutStory", route: "ourStory" },
      { labelKey: "aboutPhilosophy", route: "philosophy" },
      { labelKey: "aboutBamboo", route: "bambooMaterials" },
      { labelKey: "aboutFaq", route: "faq" },
    ],
  },
  {
    labelKey: "collaborations",
    route: "collaborations",
    underConstruction: true,
  },
  {
    labelKey: "blog",
    route: "blog",
    underConstruction: true,
  },
  {
    labelKey: "contact",
    route: "contact",
  },
];
