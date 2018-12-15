export function limitStringSize(text, size = 40) {
  return text.slice(0, size) + (text.length > size ? "..." : "");
}

export function viewsFormatter(views) {
  return views > 999 ? (views / 1000).toFixed(1) + "k" : views;
}
