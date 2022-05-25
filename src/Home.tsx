import Books from "./books/Books";
import { getAuth, signOut } from "firebase/auth";

export default function Home() {
  const auth = getAuth();

  return (
    <div className="w-full h-full">
      <button onClick={() => signOut(auth)}>Sign out</button>
      <Books />
    </div>
  );
}
