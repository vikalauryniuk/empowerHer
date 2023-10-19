import BlockContent from '@sanity/block-content-to-react';
import { clientConfig } from '../../lib/client';
import Image from 'next/image'

const serializers = {
    types: {
      mainImage: (props) => (
        <div className="">
          <Image
            src={props.node.asset.url}
            alt={props.node.alt}
            className="w-full h-auto"
            width={1000}
            height={800}
          />
        </div>
      ),
      block: (props) =>{
        switch (props.node.style) {
        case 'h1':
          return <h1 className=" text-xl md:text-3xl font-bold font-title mb-5 text-center text-basic/90">{props.children}</h1>;
        case 'h2':
            return <h2 className=" text-xl md:text-2xl font-semibold font-title mb-5 text-center text-basic/80">{props.children}</h2>;
        case 'h3':
            return <h3 className="text-basic/70 text-lg md:text-xl font-semibold mb-4">{props.children}</h3>;
        case 'paragraph':
            return <p className="text-sm text-dark md:text-base font-light font-text mb-4">{props.children}</p>;
        case 'bullet':
            return <ul className="list-disc pl-6 font-light text-sm text-dark md:text-base font-text mb-4"><li className="mb-2">{props.children}</li></ul>;
        case 'number':
            return <o className="list-disc pl-6 font-light text-sm text-dark md:text-base font-text mb-4"><li className="mb-2">{props.children}</li></o>;
        default:
            return <p className="text-sm text-dark md:text-base font-light font-text mb-4">{props.children}</p>;
        }
      },
      listItem: (props) => <li className="mb-2">{props.children}</li>
    },
  };


export default function ContentAbout({ body, locale }) {
    return (
        <div className="">
            <BlockContent
                blocks={body[locale]}
                imageOptions={{ w: 1000, h: 800, fit: 'max',  }}
                projectId={clientConfig.projectId}
                dataset={clientConfig.dataset}
                serializers={serializers}
                className='about-content'
            />
        </div>
    )

}


/* import Contact from "@/components/Contact"
import Container from "@/components/Container"
import Breadcrumb from "@/components/Breadcrumb"

import Link from "next/link"
import { PiArrowLeftLight } from 'react-icons/pi'

export default function AboutPage({ aboutData, locale }) {
    const paths = ['About'];
    
    return (
        <>
            {aboutData.map((aboutItem) => {
                const localizedTitle = aboutItem.title?.find(item => item._key === locale)?.value;
                const localizedSubtitle = aboutItem.description?.find(item => item._key === locale)?.value;
                const localizedButton = aboutItem.button?.find(item => item._key === locale)?.value;

                return (
                    <div className="pt-24 md:pt-32" key={aboutItem._id}>
                        <Container>
                            <Breadcrumb paths={paths} />
                            <Link href='/'>
                                <button className="flex items-center gap-3 before-element">
                                    <PiArrowLeftLight className="transition-all duration-400 ease-in-out hover:transform hover:translate-x-1 cursor-pointer" />
                                    Back
                                </button>
                            </Link>
                            <div>{localizedTitle}</div>
                        </Container>
                    </div>
                );
            })}
        </>
    );
}

export async function getStaticProps({ locale }) {
    // Ensure you have imported the client at the top of your file
    try {
        const aboutQuery = `*[_type == "about"]{
            title,
            description,
            image,
            bg,
            button,
        }`
        const aboutData = await client.fetch(aboutQuery);
        
        return {
            props: {
                aboutData,
                locale,
            },
        }
    } catch (err) {
        console.log(err);
        return {
            props: {
                aboutData: [],
                locale,
            },
        }
    }
} */