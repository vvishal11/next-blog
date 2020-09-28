import React, { Component } from 'react';
import Link from "next/link";

export default function test({ posts }) {
       const tenposts = posts.slice(state.initial,state.visible) ;

    return (
        <div class="px-8 py-16 bg-gray-200">
            <div class="mx-auto max-w-4xl">
                <ul>

                    {tenposts.map((post) => {
                        return (
                            <li key={post.id}>
                                <Link href="/posts/[id]" as={"/posts/" + post.id}>
                                    <a>
                                        {/*card01 starts*/}
                                        <div class="pb-16 max-w-4xl" >
                                            <div class="bg-white  rounded overflow-hidden shadow-lg">
                                            <div class="absolute"><p> {post.id}</p></div>
                                                <img class="w-full" src={`../${"card0" + post.id}.jpg`} alt="Sunset in the mountains"></img>
                                                <div class="px-6 py-4">
                                                    <div class="font-bold text-xl mb-2">{post.title}</div>
                                                    <p class="text-gray-700 text-base">
                                                        {post.body}
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

                                    </a>
                                </Link>

                                <p class="mb-8"></p>
                            </li>
                        );
                    })}
                </ul>



                <button onClick={loadmore} type="button">Next</button>

            </div>
        </div>
    );
}

const state = {
    items: [],
    initial: 0,
    visible: 10,
  };


 function loadmore(){


}






export async function getStaticProps() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
  //  const posts = fullposts.slice(0,state.visible);
    return {
        props: {
            posts,
        },
    };

}



