import Title from "./Title"
import Container from "./Container"
import { urlFor } from '../../lib/client';
import Image from 'next/image';
import Link from "next/link";
import Button from "./Button";

export default function About({ aboutData, locale }) {
    console.log(aboutData)
    console.log("Received locale:", locale);

    return(
        <div className="w-full h-full">
            {
                Array.isArray(aboutData) && aboutData.map((aboutItem) => {
                    const localizedTitle = aboutItem.title?.find(item => item._key === locale)?.value;
                    const localizedSubtitle = aboutItem.description?.find(item => item._key === locale)?.value;
                    const localizedButton = aboutItem.button?.find(item => item._key === locale)?.value;
                    return(
                        <div 
                        key={aboutItem._id}  
                        style={{ backgroundColor: aboutItem.bg.hex }}
                        className=" w-full bg-center bg-no-repeat opacity-75 bg-zinc-300 bg-cover">
                            <Container className=" xl:w-[900px]">
                            <div className= "flex items-center flex-col gap-5 py-16 text-dark text-center">
                                <Title type='medium'>{localizedTitle}</Title>
                                <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10">
                                    <div className="flex flex-col items-center justify-between gap-10">
                                        <p>
                                            {localizedSubtitle}
                                        </p>
                                        <Link href='/about'>
                                            <Button style={{ color: "#090909" }}>
                                                {localizedButton}
                                            </Button>
                                            
                                        </Link>
                                    </div>
                                             
                                    <Image
                                    src={urlFor(aboutItem.image).crop('center').fit('crop').width(1000).height(1080).url()} 
                                    alt={aboutItem.title}
                                    width={400}
                                    height={400}
                                    priority={true}
                                    className='object-cover rounded shadow-custom -z-10'
                                    />
                                    
                                </div>
                            </div>
                            </Container>

                        </div>
                    )

                })
            }


        </div>
    )
}
