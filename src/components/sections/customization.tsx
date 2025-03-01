{/* <div className="h-screen bg-gradient-to-b from-[#111217] to-[#1a1e24] text-white flex items-center justify-center">
    <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
        <h2 className="text-5xl font-bold" style={{ fontFamily: "Gilroy-ExtraBold" }}>
            Customization Simplified
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Empower your team with customizable tools that fit seamlessly into your workflow. Adapt forms, dashboards, and workflows with just a few clicks—no coding required.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="p-8 rounded-lg bg-[#1f242b] shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-semibold">Intuitive Forms</h3>
                <p className="text-gray-400 mt-4">
                    Design forms tailored to your data collection needs with a simple drag-and-drop interface.
                </p>
            </div>
            <div className="p-8 rounded-lg bg-[#1f242b] shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-semibold">Modular Dashboards</h3>
                <p className="text-gray-400 mt-4">
                    Customize dashboards to highlight your most important metrics and insights.
                </p>
            </div>
            <div className="p-8 rounded-lg bg-[#1f242b] shadow-lg hover:shadow-2xl transition-shadow">
                <h3 className="text-2xl font-semibold">Real-Time Updates</h3>
                <p className="text-gray-400 mt-4">
                    Adjust and view your customized setup in real-time without ever needing to code.
                </p>
            </div>
        </div>
        <button
            className="mt-8 bg-[#e74c3c] text-white px-10 py-4 rounded-md font-medium hover:bg-[#c0392b] transition-colors"
            onClick={() => window.location.href = '/download'}
        >
            Start Customizing
        </button>
    </div>
</div> */}

export default function Customization() {
    return (
        <div className="h-screen bg-gradient-to-b from-[#111217] to-[#1a1e24] bg-[#1a1e24] text-white flex items-center justify-center">
            <div className="max-w-7xl mx-auto px-6 text-center space-y-10">
                <h2 className="text-5xl font-bold" style={{ fontFamily: "Gilroy-ExtraBold" }}>
                    Customization Simplified
                </h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                    Empower your team with customizable tools that fit seamlessly into your workflow. Adapt forms, dashboards, and workflows with just a few clicks—no coding required.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    <div className="p-8 rounded-lg bg-[#1f242b] shadow-lg hover:shadow-2xl transition-shadow">
                        <h3 className="text-2xl font-semibold">Intuitive Forms</h3>
                        <p className="text-gray-400 mt-4">
                            Design forms tailored to your data collection needs with a simple drag-and-drop interface.
                        </p>
                    </div>
                    <div className="p-8 rounded-lg bg-[#1f242b] shadow-lg hover:shadow-2xl transition-shadow">
                        <h3 className="text-2xl font-semibold">Modular Dashboards</h3>
                        <p className="text-gray-400 mt-4">
                            Customize dashboards to highlight your most important metrics and insights.
                        </p>
                    </div>
                    <div className="p-8 rounded-lg bg-[#1f242b] shadow-lg hover:shadow-2xl transition-shadow">
                        <h3 className="text-2xl font-semibold">Real-Time Updates</h3>
                        <p className="text-gray-400 mt-4">
                            Adjust and view your customized setup in real-time without ever needing to code.
                        </p>
                    </div>
                </div>
                <button
                    className="mt-8 bg-[#e74c3c] text-white px-10 py-4 rounded-md font-medium hover:bg-[#c0392b] transition-colors"
                    onClick={() => window.location.href = '/download'}
                >
                    Start Customizing
                </button>
            </div>
        </div>
    )
}
