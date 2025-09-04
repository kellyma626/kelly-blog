import Image from "next/image";
import BlogList from "@/components/BlogList";

export default function Body() {
  return (
    <div className="border-3 border-pink-200 border-solid bg-white rounded-lg space-x-10 flex">
          <div className="flex-1 min-w-0 bg-light-lilac font-vt323 text-brown-pink">
            <div className="flex mt-10 mr-7 ml-7 -mb-1 border-b-2 border-gray-accent">
              <Image
                  src="/heart.png"
                  alt="heart"
                  width={40}
                  height={40}
                />
              <p className="ml-2 text-3xl">MY BLOG</p>
            </div>
            <BlogList />
          </div>
          <div className="flex-2 min-w-0 font-vt323 text-lg text-brown-pink pt-5">
              <p>⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢⌢<br/>
                 ﹉﹉﹉﹉﹉୨♡୧﹉﹉﹉﹉﹉﹉﹉﹉﹉﹉୨♡୧﹉﹉﹉﹉﹉</p> <br/>
              <div>hello!₊˚⊹ my name is <span className="text-pink-accent">kelly</span> (´｡• ᴗ •｡`)</div>
              <p><span className="text-pink-accent">cs @ ucr</span> ✧ <span className="text-pink-accent">ai/ml fellow @ fitch group + break through tech</span></p>
              <p>fullstack & ai/ml enthusiast ˚ʚ♡ɞ˚</p>
              <p>currently seeking a <span className="text-pink-accent">summer 2026 swe internship</span> (╥﹏╥)</p>
              <p>this blog is for allocating knowledge that would otherwise be definitely lost memory (ᵕ—ᴗ—)</p>

            <br />

              <p>more of my likes outside of tech 𓂃 ࣪˖ ִֶָ𐀔</p>
              <ul>
                <li>♡ <span className="text-pink-accent">anime</span>: nana, mob psycho 100, saiki k, special a, yumeiro patissiere, shugo chara, fruits basket, ohshc, gintama, the fragrant flower blooms with dignity 𖡼.𖤣𖥧𖡼.𖤣𖥧</li>
                <li>♡ <span className="text-pink-accent">manhwa</span>: reincarnation stories ⋆˚꩜｡⋆˚</li>
                <li>♡ <span className="text-pink-accent">movies</span>: i have a very long list of comfort movies .ᐟ.ᐟ</li>
                <li>♡ <span className="text-pink-accent">writing</span>: hence the blog ⊹₊✎⋆.</li>
                <li>♡ <span className="text-pink-accent">fashion</span>: miniskirts, crop tops, dresses (*ᴗ͈ ˬ ᴗ͈)ꕤ*.ﾟ</li>
                <li>♡ <span className="text-pink-accent">boba</span>: fav spot is 3cat ₍^. .^₎Ⳋ</li>
                <li>♡ <span className="text-pink-accent">simon</span>: see right ⸜(｡˃ ᵕ ˂ )⸝♡</li> <br/>
              </ul>
              <p>┈ ┈ ┈ ┈ ┈ ୨♡୧ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ┈ ୨♡୧ ┈ ┈ ┈ ┈ ┈<br/>
              ⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣⌣</p>
          </div>
          <div className="flex-1 min-w-0 flex justify-center items-center">
            <Image
              src="/photobooth.gif"
              alt="photobooth"
              width={200}
              height={40}
              className="shadow-lg"
            />
          </div>
        </div>
    );
}