import { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { MdOutlineEmail } from "react-icons/md";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            import.meta.env.VITE_YOUR_SERVICE_ID,
            import.meta.env.VITE_YOUR_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_YOUR_PUBLIC_KEY

        )
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    title: "Message sent successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                e.target.reset();
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div>
            {/* <div className="text-center font-bold mt-10 mb-10 text-2xl">
                <h3>Contact me</h3>
            </div> */}
            <div className="flex flex-col justify-center items-center h-screen">
                <div className="text-center font-bold mt-10 mb-10 text-2xl">
                    <h3>Contact me</h3>
                    <div className="text-base mt-5 flex justify-center items-center gap-2">
                        <MdOutlineEmail />
                        <span>anikdev100@gmail.com </span>
                    </div>
                </div>
                <form ref={form} onSubmit={sendEmail} className="bg-orange-400 p-10 rounded-xl">
                    <label className="font-bold">Name:</label>
                    <input type="text" name="user_name" className="border border-black ml-5 my-5 rounded-lg" />
                    <br />
                    <label className="font-bold">Email:</label>
                    <input type="email" name="user_email" className="border border-black ml-5 my-5 rounded-lg" />
                    <br />
                    <label className="font-bold">Message</label>
                    <br />
                    <textarea name="message" className="w-full" />
                    <br />
                    <input type="submit" value="Send" className="btn btn-neutral text-white font-bold w-full my-5" />
                </form>
            </div>
        </div>
    );
};

export default Contact;