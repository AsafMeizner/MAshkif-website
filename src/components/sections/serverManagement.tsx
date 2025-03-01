import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faServer, faUsers } from '@fortawesome/free-solid-svg-icons';

export default function ServerManagement() {
    return (
        <div className="h-screen bg-[#0e1015] text-white flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-12">
            <h2 className="text-5xl font-bold" style={{ fontFamily: "Gilroy-ExtraBold" }}>
                Secure Server Management
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Run your own server and manage data independently. Collaborate with other teams while maintaining full control of your data.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                <div className="p-10 bg-[#1a1e24] rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center">
                <FontAwesomeIcon icon={faServer} className="w-12 h-12 text-[#e74c3c]" />
                <h3 className="mt-6 text-2xl font-semibold">Self-Hosted Servers</h3>
                <p className="text-gray-400 mt-4 text-center">
                    Host your server to keep data secure and maintain complete control over your team's operations.
                </p>
                </div>
                <div className="p-10 bg-[#1a1e24] rounded-lg shadow-md hover:shadow-xl transition-shadow flex flex-col items-center">
                <FontAwesomeIcon icon={faUsers} className="w-12 h-12 text-[#e74c3c]" />
                <h3 className="mt-6 text-2xl font-semibold">Seamless Collaboration</h3>
                <p className="text-gray-400 mt-4 text-center">
                    Connect with other teams easily while ensuring data privacy and secure communications.
                </p>
                </div>
            </div>
            <button
                className="mt-8 bg-[#e74c3c] text-white px-10 py-4 rounded-md font-medium hover:bg-[#c0392b] transition-colors"
                onClick={() => window.location.href = '/download'}
            >
                Learn More
            </button>
            </div>
        </div>
    )
}