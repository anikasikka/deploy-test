import Image from "next/image";

const requiredVar = process.env.NEXT_PUBLIC_REQUIRED_VAR;
if (!requiredVar) {
  throw new Error("NEXT_PUBLIC_REQUIRED_VAR is not set");
}

export default function Home() {
  return (
    <div style={{ backgroundColor: '#0047AB' }}>
      <h2 
        id="title" 
        style={{ textAlign: 'center', padding: 30, color: 'white'}}
      ><b>Some cool photos! hello world</b></h2>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '50px 0', gap:20 }}>
        <Image
          className="dark:invert"
          src="/impression-sunrise.jpg"
          alt="Next.js logo"
          width={360}   
          height={120}
          priority
        />
        <Image
          className="dark:invert"
          src="/FEATURED_QuirkyTechBillboards-19 copy.png"
          alt="Next.js logo"
          width={360}   
          height={120}
          priority
        />
        <Image
          className="dark:invert"
          src="/210617-austin-stock.jpg"
          alt="Next.js logo"
          width={360}   
          height={120}
          priority
        />
      </div>
    </div>
    
  );
}
