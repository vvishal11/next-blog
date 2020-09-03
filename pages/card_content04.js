import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>infinityuponzero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


<div class="flex justify-between bg-gray-900 w-full p-6">
<Link href ="/"><a> <div class="font-semibold text-xl text-white text-center">Infinity/Zero</div></a></Link>
</div>

{/*cards start*/}
<div class="px-8 py-16 bg-gray-200">
<div class =" mx-auto max-w-4xl">

<div class = "max-w-4xl">
  <div class="bg-white  rounded overflow-hidden shadow-lg">
    <img class="w-full h-60 sm:h-64 object-cover" src="/card04.jpg" alt="Sunset in the mountains"></img>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Coldest Sunrise</div>
      <p class="text-gray-700 text-base">
      Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis
      ornare vel eu leo. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.
      Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo. Sed posuere consectetur est at lobortis. […]
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>

    <div class=" border-t border-gray-300  mt-4 ml-10 mr-10 "></div>
    <div class="flex">
    <div class="p-1 px-2 ml-6 mt-6 mb-8 bg-gray-400 inline-block shadow-lg italic"> Category: </div>
    <div class="p-1 ml-6 mt-6 mb-8 bg-gray-200 inline-block shadow-lg italic"> Uncategorised </div>
    </div>

<div class="px-8 pb-8 flex flex-row-reverse space-x-4 space-x-reverse">
  <div class ="px-2 text-lg">Next</div>
  <div class="px-2 text-lg">Previous</div>
</div>

     </div>

    </div>
</div>
</div>
{/*card ends*/}


<div class="static bg-gray-900 absolute bottom p-10 w-full"></div>

</div>
  )
}
