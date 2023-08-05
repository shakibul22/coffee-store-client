import {  FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaYoutube,} from 'react-icons/fa';
import { MdEmail, MdLocationPin} from 'react-icons/md';

const Footer = () => {
    return (
        <div className="font-serif">
            <footer className="flex flex-col md:flex-row w-full p-10 gap-9 bg-[url('https://res.cloudinary.com/drhtv8dr4/image/upload/v1691187972/13_jrcs9a.jpg')]">
                <div>
                    <img className="h-14" src="https://res.cloudinary.com/drhtv8dr4/image/upload/v1691179990/logo1_vdpb7y.png" alt="" />
                    <p className="text-yellow-950  text-xl pb-3 font-serif">Expresso Emporium</p>
                <p>Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                   <div className='flex gap-2 py-2  text-yellow-950  text-2xl md:text-3xl'>
                    <FaFacebook/>
                    <FaInstagram/>
                    <FaYoutube/>
                    <FaLinkedin/>
                   </div>
                   <h2 className='text-yellow-950  text-xl font-serif'>Get In Touch</h2>

                   <div className='flex gap-2'>
                    <FaPhone/> <p>+01823437643</p>
                   </div>
                   <div className='flex gap-2'>
                    <MdEmail/> <p>info@gmail.com</p>
                   </div>
                   <div className='flex gap-2'>
                    <MdLocationPin/> <p>Bashundhara, Dhaka </p>
                   </div>
                </div>
                <div>
                    <span className="footer-title text-yellow-950">Connect With Us</span>

                    <textarea placeholder="Name" className="textarea textarea-bordered text-yellow-950 bg-slate-100 textarea-xs w-full max-w-xs" ></textarea>
                    <textarea placeholder="Email" className="textarea textarea-bordered text-yellow-950 bg-slate-100 textarea-sm w-full max-w-xs" ></textarea>
                    <textarea placeholder="Message" className="textarea textarea-bordered text-yellow-950 bg-slate-100 textarea-lg w-full max-w-xs" ></textarea>
                    <button className="btn btn-outline bg-amber-500 text-yellow-950">Send Message</button>
                </div>
                <div>

                </div>

            </footer>
            <footer className="footer footer-center p-4 bg-[url('https://res.cloudinary.com/drhtv8dr4/image/upload/v1691237983/24_dskrhe.jpg')] ">
                <div>
                    <p>Copyright © 2023 - All right reserved by Expresso Emporium Industries Ltd</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;