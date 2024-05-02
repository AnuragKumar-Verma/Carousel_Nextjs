import Dropdown from "@/components/Dropdown";
import New from "@/components/New";
import Slider from "@/components/Slider";
import Sliding from "@/components/Sliding";
import Image from "next/image";

export default function Home() {
  return (
    <main className=" ">
       <Slider/>
       <Sliding/>
       <div className="h-52 mt-80">

       </div>
       <New/>
    </main>
  );
}
