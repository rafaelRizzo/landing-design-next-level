import ContainerContent from "@/components/ContainerContent";
import ContainerImage from "@/components/ContainerImage";

export default function Home() {
    return (
        <section className="min-h-screen flex items-center justify-center p-10">

            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-lg lg:max-w-4xl mx-auto gap-5 lg:gap-20">

                <ContainerImage />

                <ContainerContent />
            </div>
        </section>
    );
}
