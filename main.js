async function index() {
  const css = await import("./style.css");
  console.log(style);
  style.forEach((item) => console.log(item));
}
index();
