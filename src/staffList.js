import { faker } from '@faker-js/faker'
const staffList =[{
    key: 0,
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    position: faker.name.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.name.lastName(),
  },
  {
    key: 1,
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    position: faker.name.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.name.lastName(),
  },
  {
    key: 2,
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    position: faker.name.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.name.lastName(),
  },
  {
    key: 3,
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    position: faker.name.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.name.lastName(),
  },
  {
    key: 4,
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    position: faker.name.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.name.lastName(),
  },
  {
    key: 5,
    avatar: faker.image.avatar(),
    name: faker.name.firstName(),
    position: faker.name.jobTitle(),
    author: "⭐" + (Math.random() * 5).toFixed(1) + " " + faker.name.lastName(),
  },
]
export default staffList