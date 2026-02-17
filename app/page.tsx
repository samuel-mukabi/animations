import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { SplitText} from "gsap/SplitText";
import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText)


const Page = () => {
    return (
        <main>
            <NavBar />
            <Hero />
        </main>
    )
}
export default Page
