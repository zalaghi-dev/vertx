export default function numberSuffix(number: number) {
  if (number == null) return "";
  let formattedNum = number.toFixed(2);
  const removeTrailingZeros = (num: string) =>
    num.endsWith(".00") ? num.slice(0, -3) : num;
  formattedNum = removeTrailingZeros(formattedNum);

  if (number < 1000) {
    return formattedNum;
  } else if (number < 1000000) {
    const kValue = (number / 1000).toFixed(1);
    return `${removeTrailingZeros(kValue)}K`;
  } else if (number >= 1000000) {
    const mValue = (number / 1000000).toFixed(1);
    return `${removeTrailingZeros(mValue)}M`;
  } else {
    return "";
  }
}
