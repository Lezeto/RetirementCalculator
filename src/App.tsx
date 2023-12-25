// app.tsx
import React from 'react';
import './App.css';
import RetirementCalculator from './RetirementCalculator';


const App: React.FC = () => {
  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>Retirement Tips Documentation</h1>
          <nav className="header-links">
            <a href="#link1">Link 1</a>
            <a href="#link2">Link 2</a>
            <a href="#link3">Link 3</a>
            <a href="#link4">Link 4</a>
          </nav>
        </div>
      </header>

      <div className="app-content">
        <nav className="app-sidebar">
          <ul>
            <li><a href="#tip1">Tip 1: Start Early</a></li>
            <li><a href="#tip2">Tip 2: Create a Budget</a></li>
            <li><a href="#tip3">Tip 3: Diversify Investments</a></li>
            <li><a href="#tip4">Tip 4: Health Insurance</a></li>
            <li><a href="#tip5">Tip 5: Stay Active</a></li>
            <li><a href="#tip6">Tip 6: Plan Social Activities</a></li>
            <li><a href="#tip7">Tip 7: Consider Part-Time Work</a></li>
            <li><a href="#tip8">Tip 8: Review Estate Plans</a></li>
            <li><a href="#tip9">Tip 9: Monitor Expenses</a></li>
            <li><a href="#tip10">Tip 10: Seek Professional Advice</a></li>
          </ul>
        </nav>

        <main className="app-main">
          <section id="calcu">
          <RetirementCalculator />
          </section>
          <section id="tip1">
            <h2>Tip 1: Start Early</h2>
            <p>Starting your financial planning early is crucial for long-term success. Early investments, compound interest, and strategic decision-making can significantly impact your financial stability in the future. This page will delve into the importance of early planning and the potential benefits it offers.</p>
          </section>

          <section id="tip2">
            <h2>Tip 2: Create a Budget</h2>
            <p>Effective financial management begins with a well-defined budget. Learn the art of creating a budget that aligns with your financial goals, tracks your spending, and helps you allocate resources wisely. This page will guide you through the process of budget creation and its importance in maintaining financial discipline.</p>
          </section>

          <section id="tip3">
            <h2>Tip 3: Diversify Investments</h2>
            <p>Explore the concept of investment diversification and its role in minimizing risk. This page will discuss the benefits of spreading investments across various asset classes, providing insights into building a diversified portfolio that can weather market fluctuations.</p>
          </section>

          <section id="tip4">
            <h2>Tip 4: Health Insurance</h2>
            <p>Understanding the significance of health insurance is crucial for safeguarding your well-being and financial stability. This page will elaborate on the importance of health insurance, different types of coverage, and how having adequate insurance can protect you from unexpected medical expenses.</p>
          </section>

          <section id="tip5">
            <h2>Tip 5: Stay Active</h2>
            <p>A healthy lifestyle not only contributes to physical well-being but also has financial implications. This page will discuss the connection between an active lifestyle, preventive health measures, and potential long-term cost savings on medical expenses.</p>
          </section>

          <section id="tip6">
            <h2>Tip 6: Plan Social Activities</h2>
            <p>Balancing work and personal life is essential for overall happiness. Explore the importance of social activities, how they contribute to mental well-being, and how investing time in relationships can lead to a more fulfilling life.</p>
          </section>

          <section id="tip7">
            <h2>Tip 7: Consider Part-Time Work</h2>
            <p>Supplementing your income through part-time work can have various advantages. This page will discuss the benefits of considering part-time employment, such as increased income, skill development, and potential networking opportunities.</p>
          </section>

          <section id="tip8">
            <h2>Tip 8: Review Estate Plans</h2>
            <p>Estate planning ensures that your assets are distributed according to your wishes. This page will guide you through the importance of regularly reviewing and updating your estate plans, taking into account changes in your life, financial situation, and legal considerations.</p>
          </section>

          <section id="tip9">
            <h2>Tip 9: Monitor Expenses</h2>
            <p>Consistently monitoring your expenses is fundamental to financial success. This page will provide insights into the importance of tracking spending, identifying unnecessary costs, and making informed decisions to optimize your financial resources.</p>
          </section>

          <section id="tip10">
            <h2>Tip 10: Seek Professional Advice</h2>
            <p>Engaging with financial professionals can provide valuable insights and guidance. This page will discuss the benefits of seeking professional advice, including financial planning, investment strategies, and legal considerations, to make informed decisions aligned with your goals.</p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default App;



