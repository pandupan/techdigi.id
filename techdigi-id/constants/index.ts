import { BiLogoInstagramAlt } from "react-icons/bi";
import { HiPhone } from "react-icons/hi";
import { MdEmail, MdLocationPin } from "react-icons/md";


export const contacts = [
  {
    id: 'email',
    Icon: MdEmail,
    value: 'techdigiadmin@gmail.com'
  },
  {
    id: 'phone',
    Icon: HiPhone,
    value: '0822-1987-9696'
  },
  {
    id: 'address',
    Icon: MdLocationPin,
    value: 'NextSpace Jl.Trunojoyo No.11, Bandung'
  },
  {
    id: 'instagram',
    Icon: BiLogoInstagramAlt,
    value: '@techdigi.id',
    link: 'https://www.instagram.com/techdigi.id/'
  },
];

export const navigation = [
  {
    id: 'home',
    href: '#home',
    title: 'Home'
  },
  {
    id: 'about',
    href: '#about',
    title: 'About Us'
  },
  {
    id: 'services',
    href: '#services',
    title: 'Services'
  },
  {
    id: 'projects',
    href: '#projects',
    title: 'Projects'
  },
  {
    id: 'contact',
    href: '#contact',
    title: 'Contact Me'
  },
]