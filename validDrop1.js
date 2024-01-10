function isValidDrop(x, y, width, height, areaId) {
  if (x >= 0 && x <= 50 && y >= 0 && y <= 50 && width <= 300) {
    return true;
  } else if (x >= 100 && x <= 150 && y >= 0 && y <= 50 && width <= 200) {
    return true;
  } else if (
    x >= 200 &&
    x <= 250 &&
    y >= 0 &&
    y <= 50 &&
    width === 100 &&
    height === 100
  ) {
    return true;
  } else if (
    x >= 0 &&
    x <= 50 &&
    y >= 100 &&
    y <= 150 &&
    width <= 200 &&
    height <= 300
  ) {
    return true;
  } else if (
    x >= 100 &&
    x <= 150 &&
    y >= 100 &&
    y <= 150 &&
    width === 100 &&
    height <= 300
  ) {
    return true;
  } else if (
    x >= 300 &&
    x <= 350 &&
    y >= 100 &&
    y <= 150 &&
    width === 100 &&
    height <= 300
  ) {
    return true;
  } else if (
    x >= 0 &&
    x <= 50 &&
    y >= 200 &&
    y <= 250 &&
    width <= 200 &&
    height <= 200
  ) {
    return true;
  } else if (
    x >= 100 &&
    x <= 150 &&
    y >= 200 &&
    y <= 250 &&
    width === 100 &&
    height <= 200
  ) {
    return true;
  } else if (
    x >= 300 &&
    x <= 350 &&
    y >= 200 &&
    y <= 250 &&
    width === 100 &&
    height <= 200
  ) {
    return true;
  } else if (x >= 0 && x <= 50 && y >= 300 && y <= 350 && height === 100) {
    return true;
  } else if (
    x >= 100 &&
    x <= 150 &&
    y >= 300 &&
    y <= 350 &&
    height === 100 &&
    width <= 300
  ) {
    return true;
  } else if (
    x >= 200 &&
    x <= 250 &&
    y >= 300 &&
    y <= 350 &&
    height === 100 &&
    width <= 200
  ) {
    return true;
  } else if (
    x >= 300 &&
    x <= 350 &&
    y >= 300 &&
    y <= 350 &&
    height === 100 &&
    width === 100
  ) {
    return true;
  } else if (
    x >= 300 &&
    x <= 350 &&
    y >= 0 &&
    y <= 50 &&
    height === 100 &&
    width === 100
  ) {
    return true;
  }

  Message();
  return false;
}
