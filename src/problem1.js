export const calculateParkingFee = (timeIn) => {
  const feeForOneDay = 5;
  const totalDays = Math.ceil((new Date().getTime() - new Date(timeIn).getTime())/24/3600/1000);
  if (totalDays < 0) return 0;
  return feeForOneDay * totalDays;
}