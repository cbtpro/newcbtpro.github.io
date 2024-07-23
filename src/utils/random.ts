/**
 * 生成安全随机数
 * @param {number} min 最小值（包含）
 * @param {number} max 最大值（包含）
 * @param {boolean} isFloat 是否带小数
 * @returns {number} 范围内随机数
 * @example const ranNum = random(1, 5);
 * const rand = random(0, 5)
 */
const random = (min = 0, max = 100, isFloat = false) => {
  const array = new Uint32Array(1);
  const maxUint = 0xffffffff;
  const randomNumber = crypto.getRandomValues(array)[0] / maxUint;
  const randomRangeValue = (max - min + 1) * randomNumber + min;
  return isFloat ? randomRangeValue : Math.floor(randomRangeValue);
};
/**
 * 获取随机字符串
 * @param randomLen 是否随机长度
 * @param min 最大长度
 * @param max 最小长度
 * @example const randomString = randomString();
 * @returns 随机字符串
 */
const randomString = (randomLen = false, min = 7, max = 7) => {
  let str = "";
  let range = min;
  const arr = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  // 随机产生
  if (randomLen) {
    range = random(min, max);
  }
  for (let i = 0; i < range; i++) {
    const pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }
  return str;
};

function randomTakeArrayFromArray(array, length) {
  const list = [...array];
  var result = [];
  // 组成的新数组初始化
  for (let i = 0; i < length; i++) {
    const index = random(0, list.length - 1);
    let item = list[index];
    result.push(item);
    list.splice(index, 1);
  }
  return result;
}

/**
 * 加载图片
 */
const loadImage = (src = "") => {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      resolve(src);
    };
    image.src = src;
  });
};

/**
 * 加载图片数组
 */
const loadImages = (srcs = []) => {
  return Promise.allSettled(srcs.map(loadImage));
};
