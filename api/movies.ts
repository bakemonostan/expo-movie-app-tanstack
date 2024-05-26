export async function getTodos() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    return data.slice(0, 10);
  } catch (error) {
    console.log(error);
  }
}
