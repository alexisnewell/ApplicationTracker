import Link from "next/link";
import { Button } from "@/components/ui/button";
export default function NavBar(){
    return <nav>
        <div>
        <Link href="/">
            <button className="px-4 py-2 text-lg h-auto text-black"> 🏠</button>
        </Link>
        <Link href="/sign-in">
            <Button className="px-4 py-2 text-lg h-auto bg-[#008542] hover:bg-[#006d36] text-white"> Log In </Button>
        </Link>
        
        </div>
    </nav>
}