import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import ContactUsPageGraphic from "@/assets/ContactUsPageGraphic.png"
import HeadingText from "@/shared/HeadingText"

interface Props {
  setSelectedPage: (value: SelectedPage) => void
}


function ContactUs({ setSelectedPage }: Props) {
  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
        {/* HEADER */}
        <motion.div
          className="md:w-3/5"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
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
      </motion.div>
    </section>
  )
}

export default ContactUs
