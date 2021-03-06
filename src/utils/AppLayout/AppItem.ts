import { BsLinkedin, BsYoutube } from "react-icons/bs"
import {ImFacebook2} from 'react-icons/im'
import {IoLogoWhatsapp} from 'react-icons/io'

export const items = [
    {
        title: 'Home',
        active: false,
        href: '/dashboard'
    },
    {
        title: 'IS Code (Imp. doc.)',
        active: false,
        href: '/iscode'
    },
    {
        title: 'Civil Engeneering',
        active: false,
        href: '/civilengeneering'
    },
    {
        title: 'Tender Obligations',
        active: false,
        href: '/tenderobligation'
    },
    // {
    //     title: 'practical civil',
    //     active: false,
    //     href: '/practicalcivil'
    // },
    {
        title: 'House Designs',
        active: false,
        href: '/homestudiodrafting'
    },
    {
        title: 'Various Exams',
        active: false,
        href: '/variousexams'
    },
    {
        title: 'About',
        active: false,
        href: '/aboutus'
    },
    {
        title: 'Contact Us',
        active: false,
        href: '/contactus'
    },
]

export const footer_info = {
    img: 'https://static.wixstatic.com/media/16b26d_28941cde460640f492f4b67d5daf4e0c~mv2.png/v1/fill/w_331,h_112,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/civilera%20logo%2012.png',
    text: 'You share hand with us, We share knowledge with you.'
}

export const footer_address = {
    phone: '+91 6567675654',
    email: 'civilplus07@gmail.com',
    address: {
        pincode: '560092',
        street_no: '342',
        colony: 'CrossSahakar Nagar',
        city: 'Bangalore'
    }
}

export const footer_social = [
    {
        img: BsLinkedin,
        link: '',
        color:'blue'
    },
    {
        img: ImFacebook2,
        link: '',
        color:'blue'
    },
    {
        img: BsYoutube,
        link: '',
        color:'red'
    },
    {
        img: IoLogoWhatsapp,
        link: 'whatsapp',
        color:'green'
    },
]