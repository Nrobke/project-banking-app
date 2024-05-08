import HeaderBox from '@/components/HeaderBox'
import TotalBalanceBox from '@/components/TotalBalanceBox'
import React from 'react'

function Home() {
    const loggedIn = {firstName: "Roman"}
  return (
    <section className="home">
        <div className="home-content">
            <header className="home-header">
                <HeaderBox 
                    type="greeting"
                    title="Welcome"
                    user={loggedIn?.firstName || "Guest"}
                    subtext="Access and Manage your accounts and transactions effeciently."
                />
                <TotalBalanceBox
                    accounts={[]}
                    totalBanks={1}
                    totalCurrentBalance={1500}
                />
            </header>
        </div>
    </section>
  )
}

export default Home