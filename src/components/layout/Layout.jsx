import React from 'react'

const Layout = ({children}) => {
    return (
        <div class="min-h-screen bg-white">

            <div class="py-10">
                <header>
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 class="text-3xl font-bold leading-tight text-gray-900">
                        My trips
                    </h1>
                    </div>
                </header>
                <main>
                    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div class="px-4 py-8 sm:px-0">
                            {children}
                    </div>
                    </div>
                </main>
             </div>

        </div>
    )
}

export default Layout