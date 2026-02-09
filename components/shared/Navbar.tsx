import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import LogoPeduliMasjid from '@/public/logo-pedulimasjid-putih.svg';

export default function Navbar() {
    return(
        <header id="navbar" className="flex justify-between items-center ">
          <div>
            <Image src={LogoPeduliMasjid} alt="Logo Peduli Masjid" className="w-15 lg:w-30 md:w-20 sm:w-20 xs:w-15 "/>
          </div>
          <div>
            <Link href={'/login'}>
              <Button variant="primary" className="px-3 py-1">Login</Button>
            </Link>
          </div>
        </header>
    )
}