import React from "react";
import ReactPlayer from "react-player/youtube"
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { IoChevronDownOutline } from "react-icons/io5"

const data = [
  {
    id: 0,
    title: "Sensevoice",
    subtitle: "Transcription Platform supported by Custom Built Speech Recognition & Text To Speech Engine",
    discription:
    "SenseSpeech can help companies achieve high levels of accuracy in transcribing speech to text in the form of phone calls, voicemail, natural conversations, and more.",
    description: "Online shopping has now become a part of our daily lives, whether you wish to buy your daily groceries or your favorite apparel. Nowadays, you can purchase anything from e-commerce platforms or online businesses from the comfort of your own home at any time. This simpler method of shopping might be challenging at times, especially if you are pressed for time. Perhaps you can't look at the keyboard while doing essential work, or you don't have the time to type. Or, more likely, because some of us still like the old-fashioned approach of acquiring items by conversing with the merchant. That's where IntelSense AI's speech commerce technology, 'Sense Voice,' comes in. Sense Voice accepts voice instructions from consumers and responds accordingly, whether it's order confirmation or product discovery. Navigate to your preferred online retailer and click the microphone symbol. Simply state what you require or inquire about what you seek. Voice commerce will give you appropriate replies. Intelsense ai's voice commerce technology was built with the aid of a contemporary ASR model with smooth accuracy that can comprehend Bengali, English, and mixed languages. As a consequence, you will have no trouble talking with SenseVoice. And locating the necessary goods will be a lot simpler and more convenient.",
    link: "#",
    logo: "/images/New_Images/SenseVoice.png",
    imgWidth: "12rem",
    promo: "https://www.youtube.com/watch?v=1cCOfF3d03E"
  },
  {
    id: 1,
    title: "Sensebots",
    subtitle: "Deep Learning Based Conversational AI Chatbot Platform.",
    discription:
      "Our Automatic Speech Recognition engine leverages the most advanced forms of Deep Learning.",
    description:
      "Our Automatic Speech Recognition engine leverages the most advanced forms of Deep Learning.",
    link: "#",
    logo: "/images/New_Images/SenseBot.png",
    promo: "https://www.youtube.com/watch?v=QViQyCoXX2I"
  },
  {
    id: 2,
    title: "HIA",
    subtitle:
      "Voice Based AI-powered virtual assistant of Intelsense AI, that combines ASR, TTS, NLP, & NLU.",
    discription:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    description: "Voice assistants have already proven to be a valuable tool in every business, from small to major local and global enterprises. Meet HIA - Intelsense.AI's Deep Learning Based Virtual Financial Assistant that is set to revolutionize the market. HIA can serve as a stepping stone in reducing financial costs and boosting customer satisfaction. Most significantly, generation z is benefiting immensely all over the world, which leads to the establishment of new accounts. Aside from client service, HIA may provide all-in-one financial solutions such as automated KYC and bank account opening. This may also be used to enhance true machine learning brains, allowing them to continually learn and improve their performance. According to current data, Bangladesh has 61 registered banks. The voice assistant will also revolutionize retail banking, account creation, general information, loan-related information, auto loan, house loan, credit card services, credit card summary, and international gateway status. Furthermore, HIA aids in credit scoring, data security, credit tracking and optimization, a reminder suite, helpful notifications, and online banking. To conclude, the potential for conversational Ai in financial services in Bangladesh are limitless.",
    link: "#",
    logo: "/images/New_Images/hia_img10.png",
    productLink: "",
    promo: "https://www.youtube.com/watch?v=mnANeEgMyZE"
  },
  {
    id: 3,
    title: "Airvoice",
    subtitle: "AI Driven Voice Commerce service for e-commerce platforms",
    discription:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    description:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    link: "#",
    logo: "/images/New_Images/Airvoice.png",
    productLink: "",
    promo: "https://www.youtube.com/watch?v=QViQyCoXX2I"
    
  },
  {
    id: 4,
    title: "InsideSense",
    subtitle: "AI Driven Social Sentiment Analysis & Listening Platform.",
    discription:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    description:
      "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
    link: "#",
    logo: "/images/New_Images/InsideSense.png",
    productLink: "",
    promo: "https://www.youtube.com/watch?v=QViQyCoXX2I"
  },
  // },
  // {
  //   id: 1,
  //   title: "Sensebots",
  //   subtitle: "Conversational AI Chatbot",
  //   discription:
  //     "Our Automatic Speech Recognition engine leverages the most advanced forms of Deep Learning.",
  //   link: "#",
  //   logo: "/images/productlogo/2. SenseBots.png",
  //   imgWidth: "16rem"
  // },
  // {
  //   id: 0,
  //   title: "HIA",
  //   subtitle: "Voice Based AI Virtual Financial Assistant",
  //   discription:
  //     "Intelsense's HIA is the first technology that can understand and assess information in Bengali. By using a smartphone, a user can carry out transactions, communicate, seek medical aid, etc. ",
  //   link: "#",
  //   logo: "/images/productlogo/3. HIA.png",
  //   imgWidth: "10rem",
  //   promo: "https://www.youtube.com/watch?v=mnANeEgMyZE"
  // },
  // {
  //   id: 3,
  //   title: "SenseInsight",
  //   subtitle:
  //     "AI Powered Social Media Analytics Platform",
  //   discription:
  //     "SenseInsight users to create and manage content, improve customer service and experience, gather insights through social listening, analyse competitors, advertise on social media, and analyse customer sentiment. ",
  //   link: "#",
  //   logo: "/images/productlogo/4. SenseInsight.png",
  //   imgWidth: "21rem"
  // },
  // {
  //   id: 4,
  //   title: "ViSense",
  //   subtitle: "Visual Recognition and Authentication Solutions",
  //   discription:
  //     "This AI-powered visual recognition solution uses computer vision and deep learning algorithms to recognise faces and objects in real time and a lot others",
  //   link: "#",
  //   logo: "/images/productlogo/5. ViSense.png",
  //   imgWidth: "17rem",
  //   promo: "https://www.youtube.com/watch?v=OEgjG5fADgI"
  // },
  // {
  //   id: 6,
  //   title: "SenseScore",
  //   subtitle: "Voice Based Credit Scoring Solution (Part of R&D)",
  //   discription:
  //     "Build brand-unique natural language applications for customer care with highly engaging user experiences and human-like conversational interactions.",
  //   link: "#",
  //   logo: "/images/productlogo/6. SenseScore.png",
  //   imgWidth: "25rem"
  // },
  // {
  //   id: 5,
  //   title: "SenseDrive",
  //   discription: "AI Powered Driver Monitoring System",
  //   link: "#",
  //   logo: "/images/sense drive.png",
  // },
  // {
  //   id: 5,
  //   title: "SenseVoice",
  //   subtitle: "AI Powered Voice Commerce Solution",
  //   discription: "AI Powered Voice Commerce Solution",
  //   link: "#",
  //   logo: "/images/productlogo/7. SenseVoice.png",
  //   imgWidth: "25rem",
  //   promo: "https://www.youtube.com/watch?v=QViQyCoXX2I"
  // },

  // {
  //   id: 7,
  //   title: "SenseTrade",
  //   discription:
  //     "Build brand-unique natural language applications for customer care with highly engaging user experiences and human-like conversational interactions.",
  //   link: "#",
  //   logo: "images/sense trade.png",
  // },
];

const detailedData = [
  {
    id: 0,
    title: "HIA -Voice based AI Driven Financial Virtual Assistant",
    subtitle: "Voice Based AI Virtual Financial Assistant",
    discription: `Voice assistants have already proven to be a valuable tool in every business, from small to major local and global enterprises. Meet HIA - Intelsense.AI's Deep Learning Based Virtual Financial Assistant that is set to revolutionize the market. HIA can serve as a stepping stone in reducing financial costs and boosting customer satisfaction. Most significantly, generation z is benefiting immensely all over the world, which leads to the establishment of new accounts. Aside from client service, HIA may provide all-in-one financial solutions such as automated KYC and bank account opening. This may also be used to enhance true machine learning brains, allowing them to continually learn and improve their performance. According to current data, Bangladesh has 61 registered banks. The voice assistant will also revolutionize retail banking, account creation, general information, loan-related information, auto loan, house loan, credit card services, credit card summary, and international gateway status. Furthermore, HIA aids in credit scoring, data security, credit tracking and optimization, a reminder suite, helpful notifications, and online banking. To conclude, the potential for conversational Ai in financial services in Bangladesh are limitless.`,
    link: "#",
    logo: "/images/productlogo/3. HIA.png",
    imgWidth: "10rem",
    promo: "https://www.youtube.com/watch?v=mnANeEgMyZE"
  },
  {
    id: 5,
    title: "SenseVoice - AI Powered Voice Commerce solution for E- commerces",
    subtitle: "AI Powered Voice Commerce Solution",
    discription: `Online shopping has now become a part of our daily lives, whether you wish to buy your daily groceries or your favorite apparel. Nowadays, you can purchase anything from e-commerce platforms or online businesses from the comfort of your own home at any time. This simpler method of shopping might be challenging at times, especially if you are pressed for time. Perhaps you can't look at the keyboard while doing essential work, or you don't have the time to type. Or, more likely, because some of us still like the old-fashioned approach of acquiring items by conversing with the merchant.

    That's where IntelSense AI's speech commerce technology, 'Sense Voice,' comes in. Sense Voice accepts voice instructions from consumers and responds accordingly, whether it's order confirmation or product discovery. Navigate to your preferred online retailer and click the microphone symbol. Simply state what you require or inquire about what you seek. Voice commerce will give you appropriate replies.
    
    Intelsense ai's voice commerce technology was built with the aid of a contemporary ASR model with smooth accuracy that can comprehend Bengali, English, and mixed languages. As a consequence, you will have no trouble talking with SenseVoice. And locating the necessary goods will be a lot simpler and more convenient.
    `,
    link: "#",
    logo: "/images/productlogo/7. SenseVoice.png",
    imgWidth: "25rem",
    promo: "https://www.youtube.com/watch?v=1cCOfF3d03E"
  },
  {
    id: 4,
    title: "Visense’s Virtual Try On - AI actuated Visual Authentication Solution",
    subtitle: "Visual Recognition and Authentication Solutions",
    discription:
      `We had to go to stores to try on clothing at times. Things have surely changed in this technological age. Virtual try-on has added a whole new level to the buying experience, making it more customer-friendly. Virtual try on is the technique through which we may imagine ourselves by trying on garments of our choice. This method just requires unpaired single pictures. You must first pick a photograph of yourself, after which it will produce certain important points and characteristics using posture estimation and image segmentation. Then you must choose a cloth-image to try on. This will also go through some pre-processing and feature generation. Finally, using these attributes, you will obtain the final synthetic image of oneself in the chosen cloth. We're utilizing Generative Adversarial models for this, which is one of the most interesting and inventive areas of artificial intelligence. We may collect photos from the internet and other social media sites such as Facebook and Instagram. We can put on any type of clothes we want. It can be leather, solid, stripes, polo, embroidery, bohemian etc. We can customize the size, color and shape of the dress. Upon using virtual try on, customers won’t have the hassle to manually try on clothes. They can easily choose, customize their favorable dress and visualize themselves. Thus, virtual try on will increase customer satisfaction by making their decision making easier and fashion industries will have a bigger chance to leverage themselves. `,
    link: "#",
    logo: "/images/productlogo/5. ViSense.png",
    imgWidth: "17rem",
    promo: "https://www.youtube.com/watch?v=OEgjG5fADgI"
  },
  {
    id: 67,
    title: "ViSense’s Image Search Engine - AI powered Image Recognition Solution",
    subtitle: "Visual Recognition and Authentication Solutions",
    discription:
      `Assume you're looking through Instagram and an outfit catches your attention. You like it so much that you want to buy it right now, but the price is a little out of your financial range. Assume the same thing happened at a party, but you're not sure if you should question the other individual. You might give up right there, or you could look for comparable clothes in your price range. Doesn't it sound tiresome? It isn't necessary because all you need is the picture.

      Just upload a photo of the item you're looking for. Press the search button, and several websites that sell identical clothes will show up. Along with the pictures, it will display the website, pricing, and other information. You may now compare pricing and designs more easily. Choose one of these or continue your search. It's that easy!
      
      Our search engine uses cutting-edge artificial intelligence algorithms to recognize the characteristics of the object and provide precise or near-perfect results. Intelsense AI built this AI-powered search engine so that images, rather than simply words or vocal instructions, may be utilized to surf and explore the internet. This gives consumers a more comprehensive experience by allowing them to utilize search engines in a variety of ways. There is no need to perform a manual search each time and estimate which brand could sell it. Simply search using the image and you'll find what you're searching for!
      `,
    link: "#",
    logo: "/images/productlogo/5. ViSense.png",
    imgWidth: "17rem",
    promo: "https://www.youtube.com/watch?v=MrJkZZyOLw8"
  },
]

export default function Products() {
  return (
    <div className="prod-container">
      <div className="prod-header">
        <h1>Our Products</h1>
      </div>
      <div className="container">
        <div className="row w-100 m-0 p-0 gx-5">
        {data.map((item) => (
          <div className="col-12 col-sm-6 my-5">
            {/* <div className="prod-logo-container"> */}
              <img className="w-100 h-75" style={{ width: item.imgWidth }} src={item.logo} alt={item.title} />
            {/* </div> */}
            <small className="text-dark">{item.subtitle}</small>
          </div>
        ))}
        </div>
      </div>
      {/* <div className="each-prod-container">
        {data.map((item) => (
          <div className="prod-each">
            <div className="prod-logo-container">
              <img style={{ width: item.imgWidth }} src={item.logo} alt={item.title} />
            </div>
            <div>{item.subtitle}</div>
          </div>
        ))}

        {data.slice(4, data.length).map((item) => (
          <div className="prod-each">
            <div className="prod-logo-container">
              <img style={{ width: item.imgWidth }} src={item.logo} alt={item.title} />
            </div>
            <div>{item.subtitle}</div>
          </div>
        ))}
      </div> */}

      <div className="detailed-container">
        <Accordion allowZeroExpanded>
          {data.map(item => <div key={item.title} className="detailed-product-container">

            <div className="youtube-player">
              <div className="player-wrapper">
                <ReactPlayer className="react-player" width="100%" height="100%" url={item.promo} />
              </div>
            </div>

            <AccordionItem>
              <AccordionItemHeading >
                <AccordionItemButton className="acc-header">
                  <h1>{item.subtitle}</h1>
                  <p style={{ width: "100%", fontFamily: "Roboto", fontWeight: 300, justifyContent: "space-between", display: "flex" }}>Click to know more
                    <IoChevronDownOutline />
                  </p>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <p className="desc">
                  {item.description}
                </p>
              </AccordionItemPanel>
            </AccordionItem>

          </div>)}
        </Accordion>
      </div>
    </div>
  );
}
