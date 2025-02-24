import HookCounterTwo from "@/components/HookCounterTwo";

import { Suspense } from "react";


export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
     <HookCounterTwo/>
  </Suspense>
  );
}
