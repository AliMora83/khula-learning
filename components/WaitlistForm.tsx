export default function WaitlistForm() {
  return (
    <section id="waitlist" className="waitlist">
      <h2>Join Our Waitlist</h2>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Join Waitlist</button>
      </form>
      <p>Be the first to know when we launch!</p>
    </section>
  );
}