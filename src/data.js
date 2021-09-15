import faker from "faker";

faker.seed(123);

export const data = [...Array(50)].map((item) => ({
  id: faker.datatype.uuid(),
  videoName: faker.lorem.sentence(),
  videoThumbnail: faker.image.image(1280, 720, true),
  channelName: faker.lorem.word(),
  channelThumbnail: faker.internet.avatar(),
  year: faker.random.arrayElement([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
  views: faker.datatype.number({ min: 10, max: 900 }),
  viewsValue: faker.random.arrayElement(["K", "M", "B"]),
}));
