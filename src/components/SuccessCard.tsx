import { useSearchParams } from "react-router-dom";

interface SuccessCardProps {
    email: string;
}

const SuccessCard = ({ email }: SuccessCardProps) => {

    const [searchParams, setSearchParams] = useSearchParams();

    const dismissMessage = () => {
        searchParams.delete("status");
        searchParams.delete("email");
        setSearchParams(searchParams);
    }

    if (!email || email === '') {
        window.location.replace("/");
    }

    return (
        <div className="success-card">
            <div className="w-14 h-14 bg-red-custom rounded-full text-white flex-center text-3xl max-sm:mt-14">
                &#10003;
            </div>
            <div className="flex flex-col gap-5">
                <h1 className="text-5xl font-bold text-blue-800">Thanks for subscribing!</h1>
                <p>A confirmation email has been sent to <span className="font-bold text-blue-800">{email}</span>. Please open it and click the button inside to confirm your subscription.</p>
            </div>
            <button type="button" className="dismiss-button button-focus" onClick={dismissMessage}>
                Dismiss message
            </button>
        </div>
    )
}

export default SuccessCard;