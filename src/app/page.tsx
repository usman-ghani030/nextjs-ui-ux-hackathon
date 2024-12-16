
import Best from "@/components/best";
import DontMiss from "@/components/dontMiss";
import Essential from "@/components/essential";
import Featured from "@/components/featured";
import Gear from "@/components/gear";
import HeroSection from "@/components/heroSection";



export default function Home() {
  return (
   <>
     <HeroSection/>
     <Best/>
     <Featured/>
     <Gear/>
     <DontMiss/>
     <Essential/>
   </>
  );
}
