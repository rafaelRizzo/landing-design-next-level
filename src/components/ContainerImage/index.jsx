import Image from "next/image";

export default function ContainerImage() {
    return (
        <aside className="relative max-w-[250px] lg:max-w-full mx-auto">
            <Image src="/ellipse.svg" width={1920} height={1080} alt="Men" className="absolute -top-2 -z-20" priority />

            <Image src="/men.png" width={1920} height={1080} alt="Ellipse yellow" priority />

            <Image src="/pattern.svg" width={150} height={150} alt="Pattern" className="absolute -left-4 lg:-left-5 -top-3 lg:-top-5 -z-10 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]" />

            <Image src="/pattern.svg" width={150} height={150} alt="Pattern" className="absolute bottom-10 lg:bottom-20 -right-5 -z-10 w-[100px] h-[100px] lg:w-[150px] lg:h-[150px]" />
        </aside>
    );
}