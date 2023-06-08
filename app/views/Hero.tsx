import Badge1 from "@/components/shared/Badge1"
import Button1 from "@/components/shared/Button1"
import hero from '../../public/pics/hero.png'
import Image from "next/image"

import fr1 from '../../public/pics/Featured1.webp'
import fr2 from '../../public/pics/Featured2.webp'
import fr3 from '../../public/pics/Featured3.webp'
import fr4 from '../../public/pics/Featured4.webp'
const Hero = () => {
  return (
    <div className="flex justify-center items-centre ">
        {/* {left side} */}

        <div className="flex-1">
            <Badge1/>

            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl my-4">
            An Industrial Take on Streetwear
            </h1>

            <p className="leading-7 [&:not(:first-child)]:mt-6 my-3">Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
            <Button1/>
            <div className="flex justify-evenly mt-16" >
              <Image className="" src={fr1} alt="fr1"/>
              <Image src={fr2} alt="fr1"/>
              <Image src={fr3} alt="fr1"/>
              <Image src={fr4} alt="fr1"/>
            </div>
       </div>

        {/* {Right Side} */}
        <div className="flex-1">
<Image className="bg-[#FFECE3] rounded-full" src={hero} alt="hero"/>
        </div>


    </div>
  )
}

export default Hero