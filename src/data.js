// import images
import Logo from '../src/img/header/logo.svg';
import GalleryImg1 from '../src/img/gallery/1.jpg';
import GalleryImg2 from '../src/img/gallery/2.jpg';
import GalleryImg3 from '../src/img/gallery/3.jpg';
import GalleryImg4 from '../src/img/gallery/4.jpg';
import GalleryImg5 from '../src/img/gallery/5.jpg';
import GalleryImg6 from '../src/img/gallery/6.jpg';
import GalleryImg7 from '../src/img/gallery/7.jpg';
import GalleryImg8 from '../src/img/gallery/8.jpg';
import GalleryImg9 from '../src/img/gallery/9.jpg';
import GalleryImg10 from '../src/img/gallery/10.jpg';
import GalleryImg11 from '../src/img/gallery/11.jpg';
import GalleryImg12 from '../src/img/gallery/12.jpg';
import GalleryImg13 from '../src/img/gallery/13.jpg';
import GalleryImg14 from '../src/img/gallery/14.jpg';
import GalleryImg15 from '../src/img/gallery/15.jpg';
import GalleryImg16 from '../src/img/gallery/16.jpg';
import GalleryImg17 from '../src/img/gallery/17.jpg';
import GalleryImg18 from '../src/img/gallery/18.jpg';
import GalleryImg19 from '../src/img/gallery/19.jpg';
import GalleryImg20 from '../src/img/gallery/20.jpg';
import QuoteImg from '../src/img/testimonial/quote.svg';
// import icons
import { GrFacebookOption } from 'react-icons/gr';
import { IoMdArrowForward } from 'react-icons/io';
import { FiSend } from 'react-icons/fi';
import { FaPlay, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import {
  IoLogoInstagram,
  IoLogoPinterest,
  IoLogoTwitter,
  IoLogoYoutube,
} from 'react-icons/io';

export const headerData = {
  logo: Logo,
};

export const navData = {
  items: [
    { href: '/', name: 'Home' },
    { href: '/about', name: 'About' },
    { href: '/gallery', name: 'Gallery' },
    { href: '/services', name: 'Services' },
    // { href: '/', name: 'Articles' },
    { href: '/contact', name: 'Contact' },
  ],
};

export const socialData = [
  { href: '/', icon: <GrFacebookOption /> },
  { href: '/', icon: <IoLogoInstagram /> },
  { href: '/', icon: <IoLogoPinterest /> },
  { href: '/', icon: <IoLogoTwitter /> },
  { href: '/', icon: <IoLogoYoutube /> },
];

export const heroData = {
  title: 'I’m Natty.',
  subtitle:
    'Tattoos have their own unique power and magic. They not only beautify the body but also the psyche.',
  btnText: 'read more',
  btnIcon: <IoMdArrowForward />,
};

export const aboutData = {
  title: 'My Story:',
  subtitle1:
    `
  I am a creative tattoo artist who loves to work with new and innovative ideas. I have a strong foundation in traditional tattooing, but I am always willing to try something new to see what works best for my clients. I am a hard worker who takes pride in my work, and I am always willing to go the extra mile to make sure my clients are happy.`,
  subtitle2:
    ` I love to create beautiful art that expresses the emotions and stories of her clients. I believe in creating art that is both personal and meaningful, and I strive to provide a unique experience for each and every one of my clients.`,
  btnText: 'Know more',
  btnIcon: <IoMdArrowForward />,
};

export const galleryData = {
  title: 'Check my gallery:',
  btnText: 'View all',
  btnIcon: <IoMdArrowForward />,
  images: [
    {
      src: GalleryImg1,
      original: GalleryImg1,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg2,
      original: GalleryImg2,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg3,
      original: GalleryImg3,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg4,
      original: GalleryImg4,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg5,
      original: GalleryImg5,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg6,
      original: GalleryImg6,
      width: 464,
      height: 412,
    },
    {
      src: GalleryImg7,
      original: GalleryImg7,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg8,
      original: GalleryImg8,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg9,
      original: GalleryImg9,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg10,
      original: GalleryImg10,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg11,
      original: GalleryImg11,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg12,
      original: GalleryImg12,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg13,
      original: GalleryImg13,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg14,
      original: GalleryImg14,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg15,
      original: GalleryImg15,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg15,
      original: GalleryImg15,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg16,
      original: GalleryImg16,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg17,
      original: GalleryImg17,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg18,
      original: GalleryImg18,
      width: 465,
      height: 540,
    },
    {
      src: GalleryImg19,
      original: GalleryImg19,
      width: 465,
      height: 412,
    },
    {
      src: GalleryImg20,
      original: GalleryImg20,
      width: 465,
      height: 412,
    },
  ],
};

export const interviewData = {
  title:
    '“Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”',
  btnText: 'Watch it now',
  btnIcon: <FaPlay />,
};

export const testimonialData = [
  {
    quoteImg: QuoteImg,
    message:
      "I just wanted to say thank you so much for the tattoo service! The staff was so friendly and the process was so smooth. I am really happy with my tattoo and I will definitely be back!",
    name: 'Abel Gizachew',
    occupation: 'Student',
  },
  {
    quoteImg: QuoteImg,
    message:
      `I just wanted to take a second to say thank you for the amazing tattoo service I received from you all. From the initial consultation to the finished product, everything was perfect. I really appreciate how professional and personal the experience was and I'm already looking forward to my next tattoo appointment!`,
    name: 'Yeabsira Getachew ',
    occupation: 'Model/ Fashion Designer',
  },
  {
    quoteImg: QuoteImg,
    message:
      `I just wanted to drop you a quick note and say thank you for the amazing tattoo service I received from you all. From the initial consultation to the finished product, everything was perfect. I really appreciate how professional and personal the experience was and I'm already looking forward to my next tattoo appointment!`,
    name: 'Henok Bedilu',
    occupation: 'Doctor',
  },
];

export const contactData = {
  title: 'Get in touch with me:',
  info: [
    {
      title: 'Bole office',
      subtitle:
        'This is our tattoo shop located around bole and you can come and contact us on our working Hours',
      address: {
        icon: <FaMapMarkerAlt />,
        name: '784 bole Street, Addis Ababa',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+251 9123456789',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@nattytattoo.com',
      },
      link: 'Get location',
    },
    {
      title: 'Coming Soon',
      subtitle:
        'Coming Soon .....',
      address: {
        icon: <FaMapMarkerAlt />,
        name: 'Coming Soon',
      },
      phone: {
        icon: <FaPhoneAlt />,
        number: '+251 9123456789',
      },
      email: {
        icon: <FaEnvelope />,
        address: 'contact@nattytattoo.com',
      },
      link: 'Get location',
    },
  ],
  form: {
    name: 'Write your name here',
    email: 'Write your email address',
    message: 'Write your messages here',
    btnText: 'Send it',
  },
};

export const footerData = {
  about: {
    title: 'About Natty Tattoo',
    subtitle: `
    I am a creative tattoo artist who loves to work with new and innovative ideas. `,
    address: {
      icon: <FaMapMarkerAlt />,
      name: 'Bole 123 Street, Addis Ababa City',
    },
    phone: {
      icon: <FaPhoneAlt />,
      number: '+251 9123456789',
    },
    email: {
      icon: <FaEnvelope />,
      address: 'contact@yourcompany.com',
    },
  },
  links: {
    title: 'Useful links',
    items: [
      { href: '/about', name: 'About me' },
      { href: '/gallery', name: 'My gallery' },
      { href: '/services', name: 'My services' },
      { href: '/contact', name: 'Contact me' },
    ],
  },
  program: {
    title: 'Working Time',
    items: [
      { name: 'Mon - Tue / Appointment' },
      { name: 'Wed - Fri / 10:00 - 9:00pm' },
      { name: 'Sat / 10:00 - 6:00pm' },
      { name: 'Sun / no work on this day' },
    ],
  },
  newsletter: {
    title: 'Newsletter',
    subtitle:
      `Welcome to our website! Here you will find information about our organization and the services we offer. Our newsletter is a great way to stay up-to-date on what's happening with us, and to hear about new opportunities and events that we are hosting. If you would like to receive our newsletter, please enter your email address below.`,
    form: {
      placeholder: 'Your email address',
      icon: <FiSend />,
    },
  },
};
