import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";

export default function Navbar() {
    return(
        <div id="navbar" className="flex justify-between items-center px-20 h-20">
          <div>
            <Image src="/logo-peduli-masjid-putih.svg" width={200} height={40} alt="Logo Peduli Masjid"/>
          </div>
          <div>
            <Link href={'/login'}>
              <Button variant="primary" className="px-3 py-1">Login</Button>
            </Link>
          </div>
        </div>
    )
}