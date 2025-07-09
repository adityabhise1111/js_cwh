import { submitForm } from "@/actions/form/form";
import Image from "next/image";


export default function Home() {

  

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <form action={submitForm}>
        <div className="name">
          <span>name</span>
          <input type="text" name="name" id="name" />
        </div>
        <div className="role">
          <span>role</span>
          <input type="text" name="role" id="role" />
        </div>
        <div className="submit">
          <input type="submit" value="submit" />
        </div>
      </form>
    </div>
  );
}
