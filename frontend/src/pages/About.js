export default function About() {
  const el = document.createElement('div');
  el.innerHTML = `
    <div class="about-page flex flex-col gap-8 px-4 py-6 md:px-8 lg:px-16">
      <header class="py-6 flex flex-col items-center">
        <h1 class="text-5xl font-extrabold text-[#2c3e50ec] mb-3 tracking-tight">About UniSite</h1>
        <span class="inline-block bg-[#2c3e50ec] text-white font-semibold text-lg px-6 py-2 rounded-full shadow">
          Empowering Academic Communities
        </span>
      </header>

      <section class="mb-10">
        <div>
          <p class="text-xl leading-relaxed text-gray-800 mb-5">
            UniSite is dedicated to supporting students and educators with a modern, intuitive platform for academic collaboration. Our goal is to make learning and sharing knowledge accessible, engaging, and effective for everyone in the university community.
          </p>
          <p class="text-xl leading-relaxed text-gray-800 mb-5">
            Founded by educators and technologists, UniSite brings together course resources, peer connections, and campus updates in one seamless experience. We strive to foster a vibrant academic environment where ideas and opportunities are freely exchanged.
          </p>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div class="bg-blue-100 rounded-lg p-4 shadow mb-5">
              <h3 class="text-2xl font-semibold text-blue-700 mb-2">What Makes Us Unique?</h3>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li>Integrated messaging and group tools</li>
                <li>Personalized dashboards for students and faculty</li>
                <li>Real-time campus news and event updates</li>
                <li>Resource sharing and collaborative workspaces</li>
              </ul>
            </div>
            <div class="bg-blue-100 rounded-lg p-4 shadow mb-5">
              <h3 class="text-2xl font-semibold text-blue-700 mb-2">Our Values</h3>
              <ul class="list-disc pl-5 text-gray-700 space-y-1">
                <li>Accessibility for all backgrounds and abilities</li>
                <li>Collaboration and community spirit</li>
                <li>Continuous improvement through feedback</li>
                <li>Transparency and respect for privacy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="mb-10 flex flex-col lg:flex-row gap-8">
        <div class="flex-1 bg-gray-50 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-blue-700 mb-4 text-center">Meet the Team</h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="flex flex-col items-center">
              <img src="https://i.pinimg.com/1200x/9e/5b/6a/9e5b6ae840634960002ceddf960edec0.jpg" alt="Founder" class="w-16 h-16 rounded-full mb-2 shadow-lg object-cover">
              <span class="font-semibold text-gray-800">SUY Panhaseth</span>
              <span class="text-gray-500 text-sm">Co-Founder, Educator</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="https://i.pinimg.com/736x/2d/1f/14/2d1f140d122c74e6b80c96788909b6c8.jpg" alt="Tech Lead" class="w-16 h-16 rounded-full mb-2 shadow-lg object-cover">
              <span class="font-semibold text-gray-800">LAI Taiseng</span>
              <span class="text-gray-500 text-sm">Lead Developer</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="https://i.pinimg.com/736x/22/69/4b/22694b24eb5234ebc001fb9c8d03845a.jpg" alt="Tech Lead" class="w-16 h-16 rounded-full mb-2 shadow-lg object-cover">
              <span class="font-semibold text-gray-800">CHAMROEUN Vireakpanha</span>
              <span class="text-gray-500 text-sm">Co-lead Developer</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="https://i.pinimg.com/1200x/ba/6e/d0/ba6ed0f55d8572faa86b1a0786e5abc2.jpg" alt="Tech Lead" class="w-16 h-16 rounded-full mb-2 shadow-lg object-cover">
              <span class="font-semibold text-gray-800">LOEUNG Chhumsomary</span>
              <span class="text-gray-500 text-sm">Co-lead Developer</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="https://i.pinimg.com/736x/78/e6/95/78e69511db258c2dc03d5d0b5d65446a.jpg" alt="Tech Lead" class="w-16 h-16 rounded-full mb-2 shadow-lg object-cover">
              <span class="font-semibold text-gray-800">PRAK Kimhorng</span>
              <span class="text-gray-500 text-sm">UX-UI Designer</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="https://i.pinimg.com/736x/d3/8a/67/d38a670582700d8fce3da09963bc62a5.jpg" alt="Tech Lead" class="w-16 h-16 rounded-full mb-2 shadow-lg object-cover">
              <span class="font-semibold text-gray-800">PANG Narithtithya</span>
              <span class="text-gray-500 text-sm">Database & Authentication Specialist</span>
            </div>
            <div class="flex flex-col items-center">
              <img src="https://i.pinimg.com/736x/79/66/07/7966076c361289d09e6cf55d5540bd05.jpg" alt="Tech Lead" class="w-16 h-16 rounded-full mb-2 shadow-lg object-cover">
              <span class="font-semibold text-gray-800">PAN Chansonaza</span>
              <span class="text-gray-500 text-sm">Community Manager</span>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center bg-blue-100 rounded-xl p-6 shadow">
          <h2 class="text-2xl font-bold text-blue-700 mb-4">Our Mission</h2>
          <p class="text-gray-800 text-lg">
            To create a connected, inclusive, and innovative academic ecosystem where every member can thrive and contribute.
          </p>
        </div>
      </section>

      <section class="flex justify-center items-center bg-gray-100 rounded-xl p-8 shadow mb-8">
        <div class="w-full max-w-lg">
          <h2 class="text-2xl font-bold text-blue-700 mb-4 text-center">Contact Us</h2>
          <p class="text-gray-700 text-lg mb-4 text-center">
            Have a question, suggestion, or need support? Use the form below and our team will get back to you soon.
          </p>
          <form class="flex flex-col gap-4" id="contact-form">
            <div class="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                class="border rounded px-4 py-2 w-full sm:w-1/2"
                required
              >
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                class="border rounded px-4 py-2 w-full sm:w-1/2"
                required
              >
            </div>
            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              class="border rounded px-4 py-2"
              required
            ></textarea>
            <button
              type="submit"
              class="bg-blue-600 text-white font-semibold px-6 py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
            <span id="contact-success" class="text-green-600 font-semibold hidden">
              Thank you! We'll be in touch soon.
            </span>
          </form>
        </div>
      </section>

    </div>
  `;

  // Add simple form handler
  const form = el.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      form.reset();
      const success = el.querySelector('#contact-success');
      if (success) {
        success.classList.remove('hidden');
        setTimeout(() => success.classList.add('hidden'), 4000);
      }
    });
  }

  return el;
}