import Image from "next/image";
import MosqueBackground from '@/public/bg-masjid.png';

export default function Home() {
  return (
    <div>
      <div className="h-150 relative bg-gray-200 overflow-hidden rounded-lg mt-10">
      <Image src={MosqueBackground}  alt="Background Masjid" className="absolute bottom-0 right-0 w-200"/>
      <div className="relative z-10 p-10 top-50">
        <p className="text-2xl text-gray-700 max-w-3xl">
          Peduli Masjid adalah <span className="font-bold text-3xl">Platform Donasi</span> online yang <span className="font-bold text-3xl">memudahkan</span> Anda untuk berkontribusi dalam
          pembangunan dan pemeliharaan masjid di <span className="font-bold">seluruh Indonesia</span>.
        </p>  
      </div>
    </div>
    </div>
  );
}
