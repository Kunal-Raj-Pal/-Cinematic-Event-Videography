import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1ee6ac3b-5631-48d7-b308-6d8d25e90028");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="font-serif font-black text-4xl md:text-5xl text-gray-800 mb-6">
              Let's <span className="bg-purple-600">Create</span> Together
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to tell your story? Get in touch and let's discuss how we
              can capture your special moments.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <form onSubmit={onSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    name="name"
                    placeholder="Your Name"
                    required
                    className="border border-gray-300 ps-2 p-1 border-rounded-xl  rounded-lg focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    className="border border-gray-300 ps-2 p-1 border-rounded-xl rounded-lg focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Date
                  </label>
                  <input
                    name="eventDate"
                    type="date"
                    className="border border-gray-300 ps-2 p-1 border-rounded-xl rounded-lg focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Event Type
                  </label>
                  <input
                    name="eventType"
                    placeholder="Wedding, Corporate, etc."
                    className="border border-gray-300 ps-2 p-1 rounded-lg rounded-lg focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tell us about your vision
                </label>
                <textarea
                  id=""
                  name="message"
                  placeholder="Share details about your event, style preferences, and any special moments you'd like us to capture..."
                  rows={5}
                  className=" w-72 border border-gray-300 ps-2 p-1 border-rounded-xl rounded-lg focus:border-purple-500 focus:ring-purple-500 p-2"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg flex items-center justify-center gap-2 rounded-xl"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
            <span>{result}</span>
            {/* Contact Information */}
            <div className="space-y-8 animate-fade-in-up">
              <div>
                <h3 className="font-serif font-bold text-2xl text-gray-800 mb-6">
                  Get in Touch
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-8">
                  We'd love to hear about your upcoming event. Whether it's an
                  intimate gathering or a grand celebration, we're here to help
                  bring your vision to life.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Email</div>
                    <div className="text-gray-600">
                      anuragvideomixingzonejnp@gm ail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Phone</div>
                    <div className="text-gray-600">+91 7275571920</div>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-purple-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-800">Location</div>
                    <div className="text-gray-600">Jaunpur, UttarPradesh</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <h4 className="font-serif font-bold text-lg text-gray-800 mb-3">
                  Response Time
                </h4>
                <p className="text-gray-600">
                  We typically respond to inquiries within 24 hours. For urgent
                  requests, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
