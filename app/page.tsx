import { useSession } from "next-auth/react";
import Login from "./components/login";

export default function Home() {
  return (
    <main>
      <Login />
    </main>
  );
}
