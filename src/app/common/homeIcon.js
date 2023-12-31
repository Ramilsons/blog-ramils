import Link from "next/link"

export default function HomeIcon() {
    return (
        <Link href={'/'} title="Ir para a Página Inicial" className="homeIcon block w-[40px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path xmlns="http://www.w3.org/2000/svg" d="M2.85715 20L20 2.85712L37.1429 20M6.66667 21.9047V29.5238C6.66667 30.5341 7.06803 31.5031 7.78245 32.2175C8.49688 32.9319 9.46585 33.3333 10.4762 33.3333H29.5238C30.5342 33.3333 31.5031 32.9319 32.2176 32.2175C32.932 31.5031 33.3333 30.5341 33.3333 29.5238V21.9047" stroke="#646464" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </Link>
    )
}