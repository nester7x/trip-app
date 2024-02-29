function parseSnakeToCamel(snakeString) {
  return snakeString?.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase());
}

export default parseSnakeToCamel;
