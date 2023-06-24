"use client";

import { Button } from "@/ui/Button";

// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// interface Data {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

export default function Home() {
  // const wait = (ms: number) =>
  //   new Promise((resolve) => setTimeout(resolve, ms));
  // const { data, isLoading } = useQuery({
  //   queryFn: async () => {
  //     await wait(2000);
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.typicode.com/posts/"
  //     );
  //     return data as Data;
  //   },
  // });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button size="default" variant="default">
        Show data
      </Button>
      {/* <div>{isLoading ? "loading" : JSON.stringify(data)}</div> */}
    </main>
  );
}
