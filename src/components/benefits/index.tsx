import HeadingText from "@/shared/HeadingText";
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png"
import Benefit from "./Benefit";
import { SelectedPage, BenefitTypes } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import ActionButton from "@/shared/ActionButton";


interface Props {
  setSelectedPage: (value: SelectedPage) => void
}

function Benefits({ setSelectedPage }: Props) {

  const benefits: Array<BenefitTypes> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description: "Sunt vitae id tenetur aperiam qui voluptas explicabo ullam soluta natus voluptatibus corporis quia aspernatur fuga excepturi dolorum inventore, necessitatibus ab et!"
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverce Classes ",
      description: "Sunt vitae id tenetur aperiam qui voluptas explicabo ullam soluta natus voluptatibus corporis quia aspernatur fuga excepturi dolorum inventore, necessitatibus ab et!"
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description: "Sunt vitae id tenetur aperiam qui voluptas explicabo ullam soluta natus voluptatibus corporis quia aspernatur fuga excepturi dolorum inventore, necessitatibus ab et!"
    }
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div 
          initial='hidden'
          whileInView='visible'
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
          }}
        className="md:my-5 md:w-3/5">
          <HeadingText>MORE THAN JUST A GYM.</HeadingText>
          <p className="my-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt vitae id tenetur aperiam qui voluptas explicabo ullam soluta natus voluptatibus corporis quia aspernatur fuga excepturi dolorum inventore, necessitatibus ab et!</p>
        </motion.div>
        {/* BENEFITS */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit: BenefitTypes) => (
            <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHICS & DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img className="mx-auto" src={BenefitsPageGraphic} alt="benefots-page-graphic" />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                 initial='hidden'
                 whileInView='visible'
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay: 0.4, duration: 0.5 }}
                 variants={{
                     hidden: { opacity: 0, x: -50 },
                     visible: { opacity: 1, x: 0 }
                 }}
                >
                  <HeadingText>MILLIONS OF HAPPY MEMBERS GETTING{" "} 
                    <span className="text-primary-500">FIT</span>
                  </HeadingText>
                </motion.div>
              </div>
            </div>
            {/* DESCRIPTION */}
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
              }}
            >
              <p className="my-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo nam eos omnis et! Blanditiis temporibus saepe quaerat neque, excepturi facilis earum suscipit perspiciatis, rerum nobis dolorem, dolorum recusandae aut fuga?</p>
              <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ipsa corporis deserunt veritatis earum ex reprehenderit illo sit totam obcaecati nam quibusdam cum ut dolore dignissimos, quia repellat eius veniam.</p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits;