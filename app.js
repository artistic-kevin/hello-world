const users = [
  { id: 1, name: "Kevin" },
  { id: 2, name: "John" },
  { id: 3, name: "Sarah" },
];

const result = Object.fromEntries(users.map((user) => [user.id, user]));
console.log(result);
