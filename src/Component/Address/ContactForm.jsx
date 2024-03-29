import { useRef } from "react";
import { BsSend } from "react-icons/bs";
import emailjs from '@emailjs/browser';
import toast from "react-hot-toast";


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_2hf00aa', 'template_s0pz8hf', form.current, {
          publicKey: 'GBo7g0wdk10B6FC70',
        })
        .then(
          () => {
            console.log('SUCCESS!');
            toast("message send successfull")
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

    return (
        <div className="bg-slate-300 p-10 lg:p-24">
            <form action="" ref={form} onSubmit={sendEmail} className="grid md:grid-cols-2  justify-center gap-8">
                <div className="flex flex-col space-y-4">
                    <label htmlFor="">Name</label>
                    <input type="text" name="user_name" placeholder="write your name" className="border-[1px] p-2 h-12 rounded-md " />
                </div>
                <div className="flex flex-col space-y-4">
                    <label htmlFor="">Email</label>
                    <input type="text" name="user_email" placeholder="write your email" className="border-[1px] p-2 h-12 rounded-md " />
                </div>
                <div className="flex flex-col col-span-2 space-y-4">
                    <label htmlFor="">Phone</label>
                    <input type="text" name="user_phone" placeholder="write your phone" className="border-[1px] p-2 h-12 rounded-md " />
                </div>
                <div className="flex flex-col col-span-2 space-y-4">
                    <label htmlFor="">Message</label>
                    <textarea type="text" name="message" placeholder="write your message" className="border-[1px] pt-2 px-2 h-32 rounded-md " />
                </div>
                <div className="flex justify-center col-span-2">
                    <button className="btn btn-primary uppercase bg-gradient-to-r from-[#835D23] via-[#BE7E1B] to-[#EA9412] ">Send Message <span className="ml-2"><BsSend /></span></button>
                </div>
            </form>

        </div>
    );
};

export default ContactForm;