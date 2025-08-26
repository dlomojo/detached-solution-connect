

const SocialProof = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <p className="text-slate-600">Monitoring & Support</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">4hr</div>
            <p className="text-slate-600">Response Time</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
            <p className="text-slate-600">Satisfaction</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;