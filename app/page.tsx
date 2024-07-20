import Link from "next/link";

export default async function HomePage() {
  const todo = await fetchDummyApi();
  return (
    <main>
      <h1>Home Page</h1>
      <pre>{JSON.stringify(todo, null, 2)}</pre>
      <Link href="/app-dir">Go to app dir Page</Link>
      <br />
      <Link href="/pages-dir">Go to app pages Page</Link>
    </main>
  );
}

type TodoResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function fetchDummyApi() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
    cache: "no-store",
  });
  const data = (await response.json()) as TodoResponse;
  return data;
}
