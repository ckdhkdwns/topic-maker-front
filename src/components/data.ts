export const data = {
  nodes: [
    { id: "0",
    name: "자동차",
    val: 40
   }, // Root node
    {
      id: "1",
      isClusterNode: true,
      name: "Transport",
      val: 5,
    },
    {
      id: "2",
      val: 5,
      name: "Bus"
    },
    {
      id: "3",
      name: "Train"
    },
    {
      id: "10",
      name: "Plane"
    },
    {
      id: "4",
      isClusterNode: true,
      val: 50,
      name: "Animal"
    },
    {
      id: "5",
      name: "Tiger"
    },
    {
      id: "6",
      name: "Dog"
    },
    {
      id: "7",
      name: "Wolf"
    },
    {
      id: "8",
      name: "Elephant"
    },
    {
      id: "9",
      name: "Cat"
    },
    {
      id: "11",
      name: "Plant",
      isClusterNode: true,
      color: "yellow",
      val: 30
    },
    {
      id: "12",
      name: "Tree",
      color: "yellow"
    },
    {
      id: "13",
      name: "Flower",
      color: "yellow"
    }
  ],
  links: [
    { source: "0", target: "1"},
    { source: "1", target: "2" },
    { source: "1", target: "3" },
    { source: "1", target: "10" },
    { source: "4", target: "5" },
    { source: "4", target: "6" },
    { source: "4", target: "7" },
    { source: "4", target: "8" },
    { source: "0", target: "4" },
    { source: "4", target: "9" },
    { source: "11", target: "12" },
    { source: "11", target: "13" },
    { source: "0", target: "11" }
  ]
};
