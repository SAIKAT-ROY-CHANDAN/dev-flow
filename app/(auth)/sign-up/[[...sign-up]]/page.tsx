import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="flex justify-center items-center my-auto h-screen">
      <SignUp />;
    </div>
  )
}