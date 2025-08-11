import type { ChangeEvent } from "react";
import { cn } from "../lib/utils";

interface FormFieldProps {
    value: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    error?: string;
    disabled: boolean;
}

const FormField = ({ value, onChange, placeholder, error, disabled }: FormFieldProps) => {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
                <label htmlFor="email" className="text-xs font-bold text-blue-800">Email address</label>
                {error && <p className="text-red-500 text-xs font-medium">{error}</p>}
            </div>
            <input type="email" value={value} id="email" className={cn(
                "form-field",
                error && "button-error",
                disabled && "opacity-60"
                )} 
                onChange={onChange} 
                placeholder={placeholder} 
                disabled={disabled}
            />
        </div>
    )
}

export default FormField;