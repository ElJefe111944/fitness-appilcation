import { SelectedPage } from "@/shared/types";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";


interface Props {
    setSelectedPage: (value: SelectedPage) => void
}

function Benefits({ setSelectedPage }: Props) {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >

        </motion.div>
    </section>
  )
}

export default Benefits;