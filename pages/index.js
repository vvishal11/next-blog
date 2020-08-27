import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>infinityuponzero</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

{/*Navigation bar starts*/}
<div>
  <nav class="flex items-center justify-between flex-wrap bg-gray-900 p-6">
  <div class=" flex items-center flex-shrink-0 text-white mr-6 ">
    <svg class="hidden fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
    <span class="font-semibold text-xl tracking-tight text-center ">Infinity/Zero</span>
  </div>
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow hidden">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div class="hidden">
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav>
{/*Navigation bar ends*/}
</div>

{/*body starts*/}
<div class = "flex bg-gray-200 p-10 md:px-12 lg:px-16 pt-16">

{/*cards start*/}
<div>

{/*card01 starts*/}
<div class = "pb-16 max-w-4xl" >
  <div class="bg-white  rounded overflow-hidden shadow-lg">
    <img class="w-full" src="/card01.jpg" alt="Sunset in the mountains"></img>
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
    <div class="p-1 px-2 ml-6 mt-6 mb-10 bg-gray-400 inline-block shadow-lg italic"> Category: </div>
    <div class="p-1 ml-6 mt-6 mb-10 bg-gray-200 inline-block shadow-lg italic"> Uncategorised </div>
    </div>

  </div>


</div>
{/*card01 ends*/}


{/*card02 starts*/}
<div class = "pb-16 max-w-4xl" >
  <div class="bg-white  rounded overflow-hidden shadow-lg">
    <img class="w-full" src="/card02.jpg" alt="Sunset in the mountains"></img>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Joyful Sunrise</div>
      <p class="text-gray-700 text-base">
      You must accept it. Your thoughts, your feelings, what you focus on are all energy. Do you understand that you have created the person you have become and created the quality of life you have. Take a good look at what you have created. You, and only you, are responsible for your present level of […]
      </p>
    </div>
    <div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>

    <div class=" border-t border-gray-300  mt-4 ml-10 mr-10 "></div>
    <div class="flex">
    <div class="p-1 px-2 ml-6 mt-6 mb-10 bg-gray-400 inline-block shadow-lg italic"> Category: </div>
    <div class="p-1 ml-6 mt-6 mb-10 bg-gray-200 inline-block shadow-lg italic"> Uncategorised </div>
    </div>
  </div>
</div>
{/*card02 ends*/}


{/*card03 starts*/}
<div class = "pb-16 max-w-4xl" >
  <div class="bg-white  rounded overflow-hidden shadow-lg">
    <img class="w-full" src="/card03.jpg" alt="Sunset in the mountains"></img>
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">The Hottest Midnight</div>
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
    <div class="p-1 px-2 ml-6 mt-6 mb-10 bg-gray-400 inline-block shadow-lg italic"> Category: </div>
    <div class="p-1 ml-6 mt-6 mb-10 bg-gray-200 inline-block shadow-lg italic"> Uncategorised </div>
    </div>
  </div>
</div>
{/*card03 ends*/}

</div>
{/*card ends*/}


{/*sidebar*/}

<div class="h-full ml-8 rounded bg-white pb-16 hidden lg:block max-w-xs shadow-lg">
<div class="text-transparent select-none">infinity-upon-zero-is-a-brain-child-of-vk-it's-a-blog-made-with-love</div>


<div class="flex">
<div class=" border-t border-gray-700 z-10 w-full mt-4 ml-2"></div>
<div class=" text-center w-full object-center text-xl pr-3 pl-3">CATEGORIES</div>
<div class=" border-t border-gray-700 z-10 w-full mt-4 mr-2"></div>
</div>

<div class="ml-8 mt-4">Journey of Time</div>
<div class="ml-8 mt-2">Uncategorized</div>


<div class="flex mt-6">
<div class=" border-t w-full border-gray-700  mt-4 ml-2"></div>
<div class=" text-center text-xl pl-3">RECENT </div>
<div class=" text-center text-xl pr-3 pl-2">POSTS</div>
<div class=" border-t w-full border-gray-700  mt-4 mr-2"></div>
</div>

<div class="grid grid-cols-1 gap-6 ml-8 mt-6">
  <div class="flex ">
  <img class="w-20 objet-cover" src="/card01.jpg" alt="Sunset in the mountains"></img>
  <div class="ml-2"> 
  <p class="text-ml">The Coldest Sunset</p>
  <p class="italic text-sm">January 25, 2020</p>
  </div>
    
    </div>



    <div class="flex ">
  <img class="w-20 objet-cover" src="/card02.jpg" alt="Sunset in the mountains"></img>

  <div class="ml-2"> 
  <p class="text-ml">The Joyful Sunrise</p>
  <p class="italic text-sm">January 25, 2020</p>
  </div>
    </div>

    <div class="flex ">
  <img class="w-20 objet-cover" src="/card03.jpg" alt="Sunset in the mountains"></img>
  <div class="ml-2"> 
  <p class="text-ml">The Hottest Midnight</p>
  <p class="italic text-sm">January 25, 2020</p>
  </div>
     </div>

    <div class="flex">
  <img class="w-20 objet-cover" src="/card04.jpg" alt="Sunset in the mountains"></img>
  <div class="ml-2"> 
  <p class="text-ml">The Pace Of Time</p>
  <p class="italic text-sm">January 25, 2020</p>
  </div>
    </div>  
  
</div>


<div class="flex mt-6">
<div class=" border-t border-gray-700 z-10 w-full mt-4 ml-2"></div>
<div class=" text-center w-full object-center text-xl pr-3 pl-3">TAGS</div>
<div class=" border-t border-gray-700 z-10 w-full mt-4 mr-2"></div>
</div>

<div class="px-6 py-4">
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#photography</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
      <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#winter</span>
    </div>

</div>



</div>
{/*body ends*/}




      
    <div class="static bg-gray-900 absolute bottom p-10 w-full">
    
      </div>

    </div>
  )
}
