const arrayWithInversions = [
  1, 4, 2, 6, 5, 8, 10, 13, 11, 9, 12, 14, 15, 3, 7, 16,
];

const countInversions = (array) => {
  if (array.length <= 1) {
    return { inversions: 0, array };
  }

  const middle = Math.floor(array.length / 2);

  const { inversions: invLeft, array: arrayLeft } = countInversions(
    array.slice(0, middle)
  );

  const { inversions: invRight, array: arrayRight } = countInversions(
    array.slice(middle)
  );

  let inversions = invRight + invLeft;
  let leftCounter = 0;

  for (let i = 0; i < arrayRight.length; i++) {
    while (leftCounter < arrayLeft.length) {
      if (arrayRight[i] < arrayLeft[leftCounter]) {
        inversions += arrayLeft.length - leftCounter;
        break;
      }
      leftCounter++;
    }
  }

  return { inversions, array: array.sort((a, b) => a - b) };
};

console.log(countInversions(arrayWithInversions));
