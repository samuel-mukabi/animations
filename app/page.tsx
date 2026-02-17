import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText} from "gsap/SplitText";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Cocktails from "@/components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText)


const Page = () => {
    return (
        <main>
            <NavBar />
            <Hero />
            <Cocktails />
        </main>
    )
}
export default Page
