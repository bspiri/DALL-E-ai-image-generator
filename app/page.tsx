import Input from "./input";
import Header from "./header";

export default function Home() {
  return (
    <main className="flex flex-col gap-8">
      <Header />
      <Input />
    </main>
  );
}
