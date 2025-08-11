interface FeatureProps {
    description: string;
}

const Feature = ({ description }: FeatureProps) => {
    return (
        <div className="flex items-center gap-3">
            <div className="h-5 w-5 rounded-full bg-red-custom text-xs flex-center text-white">
                &#10003;
            </div>
            <p className="text-[14px] text-blue-text">{description}</p>
        </div>
    )
}

export default Feature;