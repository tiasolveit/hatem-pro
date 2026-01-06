export default function Footer() {
    return (
        <footer className="border-t border-neutral-800">
            <div className="container-custom py-8 text-center text-neutral-500">
                <p>© {new Date().getFullYear()} Precision Facades. All rights reserved.</p>
            </div>
        </footer>
    )
}