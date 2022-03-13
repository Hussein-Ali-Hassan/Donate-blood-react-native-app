const unSortedLocations = [
  {
    value: 1,
    label: "Arabsalim",
  },
  {
    value: 2,
    label: "Habboush",
  },
  {
    value: 3,
    label: "Nabatieh",
  },
  {
    value: 4,
    label: "Houmeen",
  },
  {
    value: 5,
    label: "Jarjou",
  },
  {
    value: 6,
    label: "Jebaa",
  },
  {
    value: 7,
    label: "Kfarouman",
  },
  {
    value: 8,
    label: "Saida",
  },
  {
    value: 9,
    label: "Beirut",
  },
];

export const locations = unSortedLocations.sort((a, b) => a.label > b.label);

export const bloodTypes = [
  {
    value: 1,
    label: "A+",
  },
  {
    value: 2,
    label: "B+",
  },
  {
    value: 3,
    label: "O+",
  },
  {
    value: 4,
    label: "AB+",
  },
  {
    value: 5,
    label: "A-",
  },
  {
    value: 6,
    label: "B-",
  },
  {
    value: 7,
    label: "O-",
  },
  {
    value: 8,
    label: "AB-",
  },
];
