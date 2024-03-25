import HeadingText from "@/shared/HeadingText";
import Benefit from "./Benefit";
import { SelectedPage, BenefitTypes } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";


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

  return (
    <section
      id="benefits"
      className="mx-auto min-h-full w-5/6 py-20"
    >
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <div className="md:my-5 md:w-3/5">
          <HeadingText>MORE THAN JUST A GYM.</HeadingText>
          <p className="my-5 text-sm">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sunt vitae id tenetur aperiam qui voluptas explicabo ullam soluta natus voluptatibus corporis quia aspernatur fuga excepturi dolorum inventore, necessitatibus ab et!</p>
        </div>
        {/* BENEFITS */}
        <div className="md:flex items-center justify-between gap-8 mt-5">
          {benefits.map((benefit: BenefitTypes) => (
            <Benefit 
              key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits;