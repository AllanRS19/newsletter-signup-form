import { useEffect, useState, type ChangeEvent, type FormEvent } from "react";
import { useSearchParams } from "react-router-dom";

import { features } from "../constants";

import { cn, isValidEmail } from "../lib/utils";

import Feature from "./Feature";
import FormField from "./FormField";

const NewsletterForm = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        searchParams.delete("status");
        setSearchParams(searchParams);
    }, [searchParams, setSearchParams]);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(false);

        if (!email || email === "") {
            setError("Please enter an email");
            return;
        }
        if (!isValidEmail(email)) {
            setError("Valid email required");
            return;
        }

        setIsSubmitting(true);
        setError("");

        setTimeout(() => {
            setSearchParams(`?status=success&email=${email}`);
            setEmail("");
            setIsSubmitting(false);
        }, 3000);

    }

    return (
        <div className="w-[440px] max-md:w-[360px] h-screen flex-center">
            <div className="max-w-[80%] flex flex-col gap-2">
                <h1 className="text-[2.9rem] font-bold text-blue-800">Stay updated!</h1>
                <p className="text-sm text-blue-800 font-normal my-2">Join 60,000+ product managers receiving monthly updates on:</p>
                <div className="my-3 flex flex-col gap-2">
                    {features.map(({ id, description }) => (
                        <Feature
                            key={id}
                            description={description}
                        />
                    ))}
                </div>
                <form onSubmit={handleSubmit} className="mt-3">
                    <FormField
                        onChange={handleChange}
                        placeholder="email@company.com"
                        error={error}
                        value={email}
                        disabled={isSubmitting}
                    />

                    <button 
                        type="submit" 
                        className={cn(
                        "form-submit-button button-focus",
                        isSubmitting && "animate-pulse cursor-not-allowed")}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? "Subscribing..." : "Subscribe to monthly newsletter"}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default NewsletterForm;