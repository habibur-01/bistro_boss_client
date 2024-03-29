import Address from "../../Component/Address/Address";
import CoverHeader from "../../Component/Shared Component/CoverHeader/CoverHeader"
import SectionTitle from "../../Component/Shared Component/SectionTitle/SectionTitle";
import contactBg from "../../assets/contact/banner.jpg"
import { FiPhoneCall } from "react-icons/fi";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineAccessTime } from "react-icons/md";
import ContactForm from "../../Component/Address/ContactForm";

const ContactUs = () => {
    return (
        <div>
            <CoverHeader img={contactBg} title={'Contact us'} subTitle={'would you like to try a dish'}></CoverHeader>
            <div>
                <SectionTitle heading={'Our Location'} subHeading={'Visit Us'}></SectionTitle>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
                <Address icon={<FiPhoneCall size={25} />} title={'Phone'} titleContent={'+08(128)5482748'}></Address>
                <Address icon={<CiLocationOn size={25} />} title={'Address'} titleContent={'+08(128)5482748'}></Address>
                <Address icon={<MdOutlineAccessTime size={25} />} title={'Working Hours'} titleContent={`Mon - Fri: 08:00 - 22:00`} openTime={`Sat - Sun: 10:00 - 23:00`}></Address>
            </div>
            <div>
                <SectionTitle heading={'Contact Form'} subHeading={'Send Us a Message'}></SectionTitle>
            </div>
            <div>
                <ContactForm></ContactForm>
            </div>


        </div>
    );
};

export default ContactUs;