import { calculateParkingFee } from './problem1';

beforeEach(() => {
  jest.useFakeTimers("modern");
  jest.setSystemTime(new Date("2021-06-28T11:00:00Z"));
});

afterEach(() => {
  jest.useRealTimers();
});

test("fee for more than 1 day and less than 2 days is $10", () => {
	expect(calculateParkingFee("2021-06-26T12:12:12.000Z")).toBe(10);
});


test("fee for less than 1 day is $5", () => {
	expect(calculateParkingFee("2021-06-27T12:12:12.000Z")).toBe(5);
});
