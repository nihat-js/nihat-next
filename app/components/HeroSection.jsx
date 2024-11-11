import Image from "next/image";


export default function HeroSection() {
    return (
        <section>
            <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-7">
                    <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold"> Hi, I am developer</h1>
                    <p className="text-[#ADB7BE]  text-lg mb-6 lg:text-xl" >
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, deleniti?
                    </p>
                    <div>
                        <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black"> Hire me </button>
                        <button className="px-6 py-3 rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3"> Download CV </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-4 lg:mt-0">
                    <div className="rounded-full bg-[#181818] w-[500px] h-[400px] relative">
                        <Image className="absolute transform  -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" 
                        src="/images/hero-image.png" alt="hero" width={300} height={300} />
                    </div>
                </div>
            </div>
        </section>
    )
}