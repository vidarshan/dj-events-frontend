import styles from "@/styles/Search.module.css";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Search() {
  const [term, setTerm] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/events/search?term=${term}`);

    setTerm("");
  };

  const router = useRouter();
  return (
    <form onSubmit={handleSubmit} className={styles.input}>
      <input
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder="Search Events"
      />
    </form>
  );
}
