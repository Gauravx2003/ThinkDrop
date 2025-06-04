import StartForm from "@/components/StartForm";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

const Page = async () => {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <>
      

      <StartForm />
    </>
  );
};

export default Page;