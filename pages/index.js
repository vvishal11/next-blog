import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
    return (
        <div class="bg-gray-200 w-full h-screen">
            <Head>
                <title>infinityuponzero</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div class="flex justify-between bg-gray-900 w-full p-6 hidden">
                <div class="font-semibold text-xl text-white text-center">
                    <Link href="test"><a>

                        Infinity/Zero </a>

                    </Link>
                </div>
            </div>

            <div class="w-full py-56 select-none text-center font-sans text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl text-gray-800 ">Under Construction</div>

            <div class="hidden static bg-gray-900 absolute bottom-0 p-10 w-full"></div>

        </div>
    )
}
