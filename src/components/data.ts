export const data = {
  nodes: [
    { id: "0",
    name: "자동차",

   }, // Root node
    {
      id: "1",

      name: "Transport",

    },
    {
      id: "2",

      name: "Bus"
    },
    {
      id: "3",

      name: "Bus"
    },
  ],
  links: [
    { source: "0", target: "1"},
    { source: "1", target: "2" },
    { source: "2", target: "3" },
  ]
};
