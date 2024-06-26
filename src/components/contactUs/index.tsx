import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HeadingText from "@/shared/HeadingText"

interface Props {
  setSelectedPage: (value: SelectedPage) => void
}


function ContactUs({ setSelectedPage }: Props) {

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm()

  const onSubmitHandler = async (e: any) => {
    const isValid = await trigger();

    if(!isValid){
      e.preventDefault();


    }
  };

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <HeadingText>
            <span className="text-primary-500">JOIN NOW</span> TO GET IN SHAPE
          </HeadingText>
          <p className="my-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo officia, odio est cupiditate repudiandae asperiores. Ullam similique deserunt nesciunt repudiandae aut aliquid officia voluptas nulla nostrum rem vitae, minima dolor.
          </p>
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-20 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <form 
              target="_blank" 
              onSubmit={onSubmitHandler}
              method="POST"
              action="https://formsubmit.co/69889e7097e7dccee3e82638bf4194dd"
            >
              {/* NAME */}
               <input 
               {...register('name', {
                  required: true,
                  maxLength: 100
                })} 
                className="w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white" 
                type="text" 
                name="name" 
                placeholder="NAME"
               />
               {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 char."}
                </p>
               )}
              {/* EMAIL */}
              <input 
               {...register('email', {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })} 
                className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white" 
                type="email" 
                name="email" 
                placeholder="EMAIL"
               />
               {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
               )}
               {/* MESSAGE */}
               <textarea 
               {...register('message', {
                  required: true,
                  maxLength: 2000
                })} 
                className="mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder:text-white" 
                rows={4}
                cols={50}
                name="message" 
                placeholder="MESSAGE"
               />
               {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 char."}
                </p>
               )}
               <button 
                type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
               >
                SUBMIT
               </button>
            </form>
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img className="md:w-auto md:h-[450px] h-full w-full" src={ContactUsPageGraphic} alt="Contact-graphic" />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs
