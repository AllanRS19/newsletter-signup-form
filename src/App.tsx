import { useSearchParams } from "react-router-dom"
import NewsletterCard from "./components/NewsletterCard"
import SuccessCard from "./components/SuccessCard";

const App = () => {

    const [searchParams] = useSearchParams();

    return (
        <main className="w-full h-screen flex-center">
            {searchParams.get("status") && searchParams.get("status") === 'success' ? (
                <SuccessCard
                    email={searchParams.get('email')!}
                />
            ) : (
                <NewsletterCard />
            )}
        </main>
    )
}

export default App