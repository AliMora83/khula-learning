export default function Pricing() {
  return (
    <section id="pricing" className="pricing">
      <h2>Pricing Plans</h2>
      <div className="pricing-cards">
        <div className="card">
          <h3>Basic</h3>
          <p>Free</p>
          <ul>
            <li>Basic features</li>
            <li>Limited access</li>
          </ul>
        </div>
        <div className="card">
          <h3>Pro</h3>
          <p>$29/month</p>
          <ul>
            <li>All features</li>
            <li>Priority support</li>
          </ul>
        </div>
      </div>
    </section>
  );
}