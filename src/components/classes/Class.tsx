
type Props = {
    name: string;
    description?: string;
    image: string;
}

function Class({ name, description, image }: Props) {
  return (
    <li className="relative mx-5 in-line-block h-[380px w-[450px]">
        <div className="p-5 absolute z-30 flex h-[380px] flex-col items-center justify-center whitespace-normal bg-opacity-30 bg-black text-center text-white opacity-0 transition duration-500 hover:opacity-90">
            <p>
                {name}
            </p>
            <p>
                {description}
            </p>
        </div>
        <img src={image} alt={name} />
    </li>
  )
}

export default Class