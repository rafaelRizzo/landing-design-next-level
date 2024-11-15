import Link from "next/link";

export default function ContainerContent() {
    return (
        <main className="flex items-start flex-col gap-6 lg:gap-10 text-zinc-100">
            <h1 className="text-4xl lg:text-6xl font font-bold leading-[rem] ">Leve seus designs para o próximo nível</h1>
            <p className="font-light text-sm">
                Transformo suas ideias em sites modernos e funcionais.
                Com foco em performance e usabilidade, entrego soluções que destacam o seu negócio no digital.
                De projetos simples a sistemas mais complexos, estou aqui para levar sua presença online para o próximo nível.
                Vamos criar algo incrível juntos?
            </p>
            <Link href={"https://www.linkedin.com/in/rafael-rizzo-breschi-b02547216/"} target="_blank" className="flex justify-center lg:justify-start w-full lg:w-auto lg:text-start bg-[#E5B94B] hover:bg-[#E5B910] text-zinc-900 px-10 py-4 rounded-[36px] font-medium text-md lg:text-lg">Explorar</Link>
        </main>
    );
}