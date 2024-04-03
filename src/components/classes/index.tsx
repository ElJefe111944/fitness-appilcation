import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import HeadingText from "@/shared/HeadingText";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";


interface Props {
    setSelectedPage: (value: SelectedPage) => void;
}

function Classes({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          className="mx-auto w-5/6"
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
          }}
        >
          <div className="md:w-3/5">
            <HeadingText>OUR CLASSES</HeadingText>
            <p className="py-5">Consequatur officiis molestiae quae, suscipit optio quia accusantium officia ab rerum obcaecati et. Molestias tempora eligendi explicabo dolorem. Quos quaerat repudiandae amet!</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">

          </ul>
        </div>
      </motion.div>
    </section>
  )
}

export default Classes