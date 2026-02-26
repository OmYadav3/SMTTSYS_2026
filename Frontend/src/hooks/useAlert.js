import { useState, useEffect } from "react";

const useAlert = (duration = 3000) => {
    const[open, setOpen] = useState(false)

    useEffect(() => {
        if(!open) return;
        const timer = setTimeout(() => {
            setOpen(false);
        }, duration)

        return () => clearTimeout(timer);
    },[open,duration])

    return {open, setOpen}
}

export default useAlert;