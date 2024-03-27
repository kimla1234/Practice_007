import { Suspense } from "react";
import LoadingComponent from "./loading";

export default function Home() {

  return (
    <>
      <div className="mt-10 flex text-center flex-col justify-center flex-wrap gap-5">
        <h1 className="font-bold text-large">
          វគ្គសិក្សាកម្រិតដំបូង សម្រាប់និស្សិតដែលកំពុងសិក្សាជំនាញអាយធី
        </h1>
        <h1 className="font-kantumruy">Fundamental Programming Concepts</h1>
        <h1 className="font-kantumruy">Syntax and Language Proficiency</h1>
        <Suspense fallback={<LoadingComponent />}>
        </Suspense>
      </div>
    </>
  );
}
